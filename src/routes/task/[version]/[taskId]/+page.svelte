<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import { Version } from '../versions';
	import { onMount } from 'svelte';
	import MultipleChoices from '$lib/components/multipleChoices/MultipleChoices.svelte';
	import { ChevronLeft, ChevronRight, Icon } from 'svelte-hero-icons';

	export let data: PageData;

	let taskDescription: string = '';
	let mcChoices: string[] = [];
	let mcAnswer: number = 0;
	let mounted = false;

	let prevTaskId: string | null = null;
	let nextTaskId: string | null = null;

	// description 데이터 불러오기
	async function loadDescription() {
		const refinedResponse = await fetch('/assets/choices/refined_larc.csv');
		const refinedText = await refinedResponse.text();
		const refinedRows = refinedText.split('\n').map((row) => {
			const matches = row.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
			return matches ? matches.map((x) => x.replace(/^"|"$/g, '')) : [];
		});
		const taskRow = refinedRows.find((row) => row[1] === data.taskId);
		if (taskRow) {
			taskDescription = taskRow[2];
		}
	}

	// 선택지 데이터 불러오기
	async function loadChoices() {
		if (!mounted) return;

		const csvFileName =
			{
				original: 'original_mc_larc.csv',
				constraint: 'constraints_mc_larc.csv',
				'self-feedback': 'self-feedback_mc_larc.csv'
			}[data.version] || 'original_mc_larc.csv';

		const originalResponse = await fetch(`/assets/choices/${csvFileName}`);
		const originalText = await originalResponse.text();
		const originalRows = originalText.split('\n').map((row) => {
			const matches = row.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
			return matches ? matches.map((x) => x.replace(/^"|"$/g, '')) : [];
		});
		const mcRow = originalRows.find((row) => row[1] === data.taskId);
		if (mcRow) {
			mcChoices = [mcRow[2], mcRow[3], mcRow[4], mcRow[5], mcRow[6]];
			mcAnswer = parseInt(mcRow[7]);
		}
	}

	// taskId 네비게이션 데이터 로드
	async function loadTaskNavigation() {
		if (!mounted) return;

		const response = await fetch('/assets/choices/output.json');
		const taskIds: string[] = await response.json();

		const sortedTaskIds = [...taskIds].sort();
		const currentIndex = sortedTaskIds.indexOf(data.taskId);

		if (currentIndex > 0) {
			prevTaskId = sortedTaskIds[currentIndex - 1];
		} else {
			prevTaskId = null;
		}

		if (currentIndex < sortedTaskIds.length - 1) {
			nextTaskId = sortedTaskIds[currentIndex + 1];
		} else {
			nextTaskId = null;
		}
	}

	onMount(async () => {
		mounted = true;

		await Promise.all([loadDescription(), loadChoices(), loadTaskNavigation()]);
	});

	// data.taskId가 변경될 때마다 네비게이션 데이터 다시 로드
	$: {
		if (data.taskId) {
			loadTaskNavigation();
		}
	}

	// data.version이 변경될 때마다 선택지 데이터 다시 불러오기
	$: {
		if (data.version) {
			loadChoices();
			multipleChoicesComponent?.reset();
		}
	}

	const versions = [Version.Original, Version.Constraint, Version.SelfFeedback];

	function handleVersionChange(version: keyof typeof Version) {
		goto(`/task/${version}/${data.taskId}`);
	}

	let multipleChoicesComponent: { reset: () => void };

	// 이전/다음 태스크로 이동하는 함수
	function navigateTask(taskId: string | null) {
		if (taskId) {
			goto(`/task/${data.version}/${taskId}`);
		}
	}
</script>

<Navbar title={data.taskId} link={`/task/${data.version}`} />
<section class="flex flex-col items-center justify-center px-4 py-4">
	<div class="mb-4 flex w-full justify-between">
		{#if prevTaskId}
			<button
				class="lexend flex items-center gap-2 rounded-lg bg-neutral-800 py-2 pl-2 pr-4 text-sm text-white"
				on:click={() => navigateTask(prevTaskId)}
			>
				<Icon src={ChevronLeft} class="h-5 w-5" micro />
				<div class="flex flex-col items-center">
					<p class="text-sm">Prev</p>
					<p class="text-xs text-neutral-400">{prevTaskId}</p>
				</div>
			</button>
		{:else}
			<div></div>
		{/if}

		{#if nextTaskId}
			<button
				class="lexend flex items-center gap-2 rounded-lg bg-neutral-800 py-2 pl-4 pr-2 text-sm text-white"
				on:click={() => navigateTask(nextTaskId)}
			>
				<div class="flex flex-col items-center">
					<p class="text-sm">Next</p>
					<p class="text-xs text-neutral-400">{nextTaskId}</p>
				</div>
				<Icon src={ChevronRight} class="h-5 w-5" micro />
			</button>
		{:else}
			<div></div>
		{/if}
	</div>

	<div class="flex w-full items-stretch overflow-hidden rounded-lg bg-neutral-800">
		{#each versions as version}
			<button
				class="lexend w-full px-4 py-2 text-sm {data.version === version.name
					? 'bg-white text-black'
					: 'bg-neutral-800 text-gray-500'}"
				on:click={() => handleVersionChange(version.name as keyof typeof Version)}
			>
				{version.name}
			</button>
		{/each}
	</div>

	<!-- 태스크 설명 표시 -->
	{#if taskDescription}
		<div class="mt-4 w-full rounded-lg bg-neutral-800 px-4 py-4">
			<h3 class="lexend text-base font-bold text-white">Task Description</h3>
			<p class="lexend mt-1 text-sm font-light text-white">{taskDescription}</p>
		</div>
	{/if}

	<img
		src={`/assets/tasks/${data.taskId}.png`}
		alt={data.taskId}
		class="mb-8 mt-4 w-full max-w-[400px] rounded-lg"
	/>

	<!-- 선택지들 표시 -->
	{#if mcChoices.length > 0}
		<MultipleChoices choices={mcChoices} answer={mcAnswer} bind:this={multipleChoicesComponent} />
	{/if}
</section>

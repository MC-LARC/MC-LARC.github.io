<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import { Version } from '../versions';
	import { onMount } from 'svelte';
	import MultipleChoices from '$lib/components/multipleChoices/MultipleChoices.svelte';

	export let data: PageData;

	let taskDescription: string = '';
	let mcChoices: string[] = [];
	let mcAnswer: number = 0;
	let mounted = false;

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

	onMount(async () => {
		mounted = true;

		await loadDescription();
		await loadChoices();
	});

	// data.version이 변경될 때마다 선택지 데이터 다시 불러오기
	$: {
		if (data.version) {
			loadChoices();
		}
	}

	const versions = [Version.Original, Version.Constraint, Version.SelfFeedback];

	function handleVersionChange(version: keyof typeof Version) {
		goto(`/task/${version}/${data.taskId}`);
	}
</script>

<Navbar title={data.taskId} link={`/task/${data.version}`} />
<section class="flex flex-col items-center justify-center px-4 py-4">
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
		class="mb-8 mt-4 w-full rounded-lg"
	/>

	<!-- 선택지들 표시 -->
	{#if mcChoices.length > 0}
		<MultipleChoices choices={mcChoices} answer={2} />
	{/if}
</section>

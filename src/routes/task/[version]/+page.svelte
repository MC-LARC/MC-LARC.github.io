<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import { Version } from './versions';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import { onMount } from 'svelte';

	export let data: PageData;

	let outputData: string[] = [];
	onMount(async () => {
		const response = await fetch('/assets/choices/output.json');
		outputData = await response.json();
		outputData.sort();
	});

	const versions = [Version.Original, Version.Constraint, Version.SelfFeedback];

	function handleVersionChange(version: keyof typeof Version) {
		goto(`/task/${version}`);
	}
</script>

<Navbar title="Visualizations" link="/" />
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

	<div class="mt-4 w-full rounded-lg bg-neutral-800 px-4 py-4">
		<h3 class="lexend text-base font-bold text-white">
			{versions.find((v) => v.name === data.version)?.label || ''}
		</h3>
		<p class="lexend mt-1 text-sm font-light text-neutral-400">
			{versions.find((v) => v.name === data.version)?.description || ''}
		</p>
	</div>

	<div class="mt-4 grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4">
		{#each outputData as imageName}
			<a
				href={`/task/${data.version}/${imageName}`}
				class="align-center flex flex-col justify-center rounded-lg bg-white px-3 py-3"
			>
				<img
					src={`/assets/thumbnails/${imageName}.png`}
					alt={imageName}
					class="w-full rounded-lg"
				/>
				<p class="lexend w-full text-center text-black">{imageName}</p>
			</a>
		{/each}
	</div>
</section>

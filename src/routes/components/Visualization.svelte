<script lang="ts">
	import { onMount } from 'svelte';
	import { ArrowLongRight, ArrowRight, Icon } from 'svelte-hero-icons';
	import { Version } from '../task/[version]/versions';
	let images: string[] = [];
	let imageNames: string[] = [];
	let scrollPosition = 0;

	function getRandomImage(): string {
		const randomName = imageNames[Math.floor(Math.random() * imageNames.length)];
		return randomName;
	}

	function updateScroll() {
		scrollPosition -= 1; // 스크롤 속도 조절

		// 이미지가 왼쪽으로 완전히 사라졌을 때
		if (scrollPosition <= -176) {
			// 이미지 너비(160px) + gap(16px)
			scrollPosition = 0;
			// 새로운 이미지 추가
			images = [...images.slice(1), getRandomImage()];
		}

		requestAnimationFrame(updateScroll);
	}

	onMount(async () => {
		const response = await fetch('/assets/choices/output.json');
		imageNames = await response.json();
		// 초기 이미지 생성
		images = Array.from({ length: 5 }, getRandomImage);

		// 애니메이션 시작
		requestAnimationFrame(updateScroll);
	});
</script>

<section class="flex w-full flex-col items-center justify-center px-4 py-20">
	<h3 class="lexend text-2xl font-bold text-white">Visualizations</h3>

	<p class="lexend mt-1 w-full text-center text-base font-light text-neutral-400">
		You can browse whole MC-LARC dataset here.
	</p>

	<div class="relative mt-8 w-full overflow-hidden">
		<div
			class="flex gap-4"
			role="region"
			style="transform: translateX({scrollPosition}px);"
			on:mouseenter={() => (scrollPosition = scrollPosition)}
			on:mouseleave={() => requestAnimationFrame(updateScroll)}
		>
			{#each images as image}
				<a href={`/task/${Version.Original.name}/${image}`} class="shrink-0">
					<img
						src={`/assets/thumbnails/${image}.png`}
						alt={image}
						class="w-40 rounded-lg"
						loading="lazy"
					/>
					<div class="lexend mt-2 text-center text-sm text-neutral-400">{image}</div>
				</a>
			{/each}
		</div>
	</div>

	<a
		href={`/task/${Version.Original.name}`}
		class="lexend mt-10 flex items-center gap-2 rounded-3xl bg-white px-5 py-2 text-lg"
	>
		See All Visualizations
		<Icon src={ArrowLongRight} class="h-6 w-6" mini />
	</a>
</section>

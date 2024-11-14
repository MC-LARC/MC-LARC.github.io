<script lang="ts">
	export let videoSrc: string;

	let videoSection: HTMLElement;
	let video: HTMLVideoElement;

	import { onMount } from 'svelte';

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						videoSection.style.position = 'sticky';
						videoSection.style.top = '0';
					}
				});
			},
			{ threshold: 0 }
		);

		if (videoSection) {
			observer.observe(videoSection);
		}

		if (video) {
			video.load();
			video.currentTime = 0;
		}

		const handleScroll = () => {
			const rect = videoSection.getBoundingClientRect();
			const parentRect = videoSection.parentElement!.getBoundingClientRect();
			const scrollProgress =
				1 -
				Math.max(
					0,
					Math.min(1, (parentRect.bottom - rect.bottom) / (parentRect.height - rect.height))
				);

			if (video) {
				requestAnimationFrame(() => {
					video.currentTime = video.duration * scrollProgress;
				});
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			observer.disconnect();
		};
	});
</script>

<div class="img-max relative h-[600vh]">
	<div bind:this={videoSection} class="h-[100vh] w-full">
		<video
			bind:this={video}
			class="h-full w-full object-contain"
			src={videoSrc}
			preload="auto"
			muted
			playsinline
		></video>
	</div>
</div>

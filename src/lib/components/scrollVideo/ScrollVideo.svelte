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

			video.addEventListener('loadedmetadata', () => {
				window.addEventListener('scroll', handleScroll);
			});
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

			if (video && video.duration && !isNaN(video.duration)) {
				requestAnimationFrame(() => {
					video.currentTime = video.duration * scrollProgress;
				});
			}
		};

		return () => {
			window.removeEventListener('scroll', handleScroll);
			observer.disconnect();
		};
	});
</script>

<div class="relative flex h-[600vh] w-full justify-center bg-black">
	<div bind:this={videoSection} class="img-max h-[100vh] w-full">
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

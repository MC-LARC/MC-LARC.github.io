<script lang="ts">
	export let videoSrc: string;
	export let keyframes: number[] = [];

	let video: HTMLVideoElement;
	let currentKeyframeIndex = 0;

	const goToNextKeyframe = () => {
		if (currentKeyframeIndex < keyframes.length - 1) {
			currentKeyframeIndex++;
			video.play();
		}
	};

	const goToPreviousKeyframe = () => {
		if (currentKeyframeIndex > 0) {
			currentKeyframeIndex--;
			video.currentTime = keyframes[currentKeyframeIndex];
		}
	};

	const handleTimeUpdate = () => {
		if (video.currentTime >= keyframes[currentKeyframeIndex]) {
			video.pause();
		}
	};
</script>

<div class="lexend mb-2 w-full text-center text-xl font-semibold text-white">
	Animation Sequence
</div>
<div
	class="relative flex h-screen w-full flex-col items-center justify-center gap-5 border-b-2 border-t-2"
>
	<video
		bind:this={video}
		class="video"
		src={videoSrc}
		preload="auto"
		muted
		playsinline
		on:timeupdate={handleTimeUpdate}
	></video>
	<div class="controls">
		<button
			on:click={goToPreviousKeyframe}
			disabled={currentKeyframeIndex === 0}
			class="bg-black text-white"
		>
			이전
		</button>
		<span class="bg-black text-white"
			>키프레임: {currentKeyframeIndex + 1} / {keyframes.length}</span
		>
		<button
			on:click={goToNextKeyframe}
			disabled={currentKeyframeIndex === keyframes.length - 1}
			class="bg-black text-white"
		>
			다음
		</button>
	</div>
</div>

<style>
	.video-container {
		position: relative;
	}
	.video {
		width: 100%;
		height: auto;
	}
	.controls {
		display: flex;
		gap: 10px;
	}
</style>

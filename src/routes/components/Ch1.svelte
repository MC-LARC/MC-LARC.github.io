<script lang="ts">
	import ScrollVideo from '$lib/components/scrollVideo/ScrollVideo.svelte';
	import SectionTitle from '$lib/components/sectionTitle/SectionTitle.svelte';
	import MultipleChoices from '$lib/components/multipleChoices/MultipleChoices.svelte';

	import Ch1_Conventional_Arc_1 from '$lib/assets/ch1/Ch1_Conventional_Arc_1.png';
	import Ch1_Conventional_Arc_2 from '$lib/assets/ch1/Ch1_Conventional_Arc_2.png';
	import Ch1_MC_LARC_Q_1_before from '$lib/assets/ch1/Ch1_MC_LARC_Q/1_before.png';
	import Ch1_MC_LARC_Q_1_after from '$lib/assets/ch1/Ch1_MC_LARC_Q/1_after.png';
	import Ch1_MC_LARC_Q_2_before from '$lib/assets/ch1/Ch1_MC_LARC_Q/2_before.png';
	import Ch1_MC_LARC_Q_2_after from '$lib/assets/ch1/Ch1_MC_LARC_Q/2_after.png';
	import Ch1_MC_LARC_Q_3_before from '$lib/assets/ch1/Ch1_MC_LARC_Q/3_before.png';
	import Ch1_MC_LARC_Q_3_after from '$lib/assets/ch1/Ch1_MC_LARC_Q/3_after.png';
	import Ch1_MC_LARC_EX from '$lib/assets/ch1/Ch1_MC_LARC_EX.mp4';
	import KeyframeVideo from '$lib/components/keyframeVideo/KeyframeVideo.svelte';
	import { ArrowDownCircle, Icon } from 'svelte-hero-icons';
	import Visualization from './Visualization.svelte';

	const choices = [
		'Fill the empty spaces within the yellow pattern with green pixels.',
		'Fill the empty spaces outside the green pattern with yellow pixels.',
		'Fill the empty spaces within each green pattern with yellow pixels.'
	];
</script>

<section class="flex flex-col items-center justify-center">
	<SectionTitle>1. ARC vs MC-LARC</SectionTitle>
	<h3 class="lexend text-xl font-bold text-white">MC-LARC</h3>
	<p class="lexend px-8 py-4 text-base font-light leading-7 text-white">
		First, let's find the rules for transforming left to right.
	</p>

	<div class="img-max grid w-full grid-cols-2 grid-rows-3">
		<img class="w-full px-3" src={Ch1_MC_LARC_Q_1_before} alt="Ch1_MC_LARC_Q_1_before" />
		<img class="w-full px-3" src={Ch1_MC_LARC_Q_1_after} alt="Ch1_MC_LARC_Q_1_after" />
		<img class="w-full px-3" src={Ch1_MC_LARC_Q_2_before} alt="Ch1_MC_LARC_Q_2_before" />
		<img class="w-full px-3" src={Ch1_MC_LARC_Q_2_after} alt="Ch1_MC_LARC_Q_2_after" />
		<img class="w-full px-3" src={Ch1_MC_LARC_Q_3_before} alt="Ch1_MC_LARC_Q_3_before" />
		<img class="w-full px-3" src={Ch1_MC_LARC_Q_3_after} alt="Ch1_MC_LARC_Q_3_after" />
	</div>

	<div class="mt-4 w-full px-8">
		<MultipleChoices {choices} answer={3} />
	</div>

	<p class="lexend w-full px-8 py-4 text-base font-light leading-7 text-white">
		See? This is <b class="font-semibold">exactly as same as how MC-LARC works</b>.
		<br />
		The wrong answers are generated with ChatGPT4.
	</p>

	<Visualization />

	<h3 class="lexend mb-2 mt-14 text-xl font-bold text-white">Original ARC</h3>

	<img class="img-max w-full px-3" src={Ch1_Conventional_Arc_1} alt="Ch1_Conventional_Arc_1" />
	<p class="lexend w-full px-8 py-4 text-base font-light leading-7 text-white">
		ARC (Abstraction and Reasoning Corpus) is a benchmark designed to test AI's abstract reasoning
		capabilities. Each task consists of input-output pairs where AI must identify patterns and apply
		them to new inputs.
	</p>
	<img class="img-max mt-4 w-full px-3" src={Ch1_Conventional_Arc_2} alt="Ch1_Conventional_Arc_2" />
	<p class="lexend w-full px-8 py-4 text-base font-light leading-7 text-white">
		However, ARC is highly sensitive to even minor mistakes. A single pixel error in pattern
		recognition can lead to complete task failure, making it challenging to achieve consistent
		performance.
	</p>

	<div
		class="lexend mt-8 flex w-full items-center justify-center gap-2 text-center text-xl italic text-gray-400"
	>
		<Icon src={ArrowDownCircle} class="h-6 w-6" solid micro />
		Scroll to play
	</div>
	<ScrollVideo videoSrc={Ch1_MC_LARC_EX} />
	<!-- <div class="h-20"></div> -->

	<!-- <div>
		<KeyframeVideo videoSrc={Ch1_MC_LARC_EX} keyframes={[0, 3, 6, 9, 12, 15]} />
	</div> -->
</section>

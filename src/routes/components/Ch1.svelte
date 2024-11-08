<script lang="ts">
	import ScrollVideo from '$lib/components/scrollVideo/ScrollVideo.svelte';
	import SectionTitle from '$lib/components/sectionTitle/SectionTitle.svelte';

	import Ch1_Conventional_Arc_1 from '$lib/assets/ch1/Ch1_Conventional_Arc_1.png';
	import Ch1_Conventional_Arc_2 from '$lib/assets/ch1/Ch1_Conventional_Arc_2.png';
	import Ch1_MC_LARC_Q_1_before from '$lib/assets/ch1/Ch1_MC_LARC_Q/1_before.png';
	import Ch1_MC_LARC_Q_1_after from '$lib/assets/ch1/Ch1_MC_LARC_Q/1_after.png';
	import Ch1_MC_LARC_Q_2_before from '$lib/assets/ch1/Ch1_MC_LARC_Q/2_before.png';
	import Ch1_MC_LARC_Q_2_after from '$lib/assets/ch1/Ch1_MC_LARC_Q/2_after.png';
	import Ch1_MC_LARC_Q_3_before from '$lib/assets/ch1/Ch1_MC_LARC_Q/3_before.png';
	import Ch1_MC_LARC_Q_3_after from '$lib/assets/ch1/Ch1_MC_LARC_Q/3_after.png';
	import Ch1_MC_LARC_EX from '$lib/assets/ch1/Ch1_MC_LARC_EX.mp4';

	interface Choice {
		id: number;
		text: string;
		isCorrect: boolean;
	}

	let selectedAnswer: number | null = null;

	const choices: Choice[] = [
		{
			id: 1,
			text: 'Fill the empty spaces within the yellow pattern with green pixels.',
			isCorrect: false
		},
		{
			id: 2,
			text: 'Fill the empty spaces outside the green pattern with yellow pixels.',
			isCorrect: false
		},
		{
			id: 3,
			text: 'Fill the empty spaces within each green pattern with yellow pixels.',
			isCorrect: true
		}
	];

	function handleAnswer(id: number): void {
		selectedAnswer = id;
	}

	function getBackgroundColor(choice: Choice): string {
		if (selectedAnswer !== choice.id) return 'bg-[#212121]';
		return choice.isCorrect ? 'bg-green-900/50' : 'bg-red-900/50';
	}
</script>

<section class="flex flex-col items-center justify-center">
	<SectionTitle>2. ARC vs MC-LARC</SectionTitle>

	<h3 class="lexend mb-2 text-xl font-bold text-white">Original ARC</h3>

	<img class="w-full px-3" src={Ch1_Conventional_Arc_1} alt="Ch1_Conventional_Arc_1" />
	<p class="lexend w-full px-8 py-4 text-base font-light leading-7 text-white">
		ARC (Abstraction and Reasoning Corpus) is a benchmark designed to test AI's abstract reasoning
		capabilities. Each task consists of input-output pairs where AI must identify patterns and apply
		them to new inputs.
	</p>
	<img class="mt-4 w-full px-3" src={Ch1_Conventional_Arc_2} alt="Ch1_Conventional_Arc_2" />
	<p class="lexend w-full px-8 py-4 text-base font-light leading-7 text-white">
		However, ARC is highly sensitive to even minor mistakes. A single pixel error in pattern
		recognition can lead to complete task failure, making it challenging to achieve consistent
		performance.
	</p>

	<h3 class="lexend mt-16 text-xl font-bold text-white">MC-LARC</h3>
	<p class="lexend px-8 py-4 text-base font-light leading-7 text-white">
		First, solve this multichoice question.
	</p>

	<div class="grid w-full grid-cols-2 grid-rows-3">
		<img class="w-full px-3" src={Ch1_MC_LARC_Q_1_before} alt="Ch1_MC_LARC_Q_1_before" />
		<img class="w-full px-3" src={Ch1_MC_LARC_Q_1_after} alt="Ch1_MC_LARC_Q_1_after" />
		<img class="w-full px-3" src={Ch1_MC_LARC_Q_2_before} alt="Ch1_MC_LARC_Q_2_before" />
		<img class="w-full px-3" src={Ch1_MC_LARC_Q_2_after} alt="Ch1_MC_LARC_Q_2_after" />
		<img class="w-full px-3" src={Ch1_MC_LARC_Q_3_before} alt="Ch1_MC_LARC_Q_3_before" />
		<img class="w-full px-3" src={Ch1_MC_LARC_Q_3_after} alt="Ch1_MC_LARC_Q_3_after" />
	</div>

	<div class="mt-8 flex w-full flex-col items-center gap-4 px-8">
		<div class="flex w-full flex-col gap-3">
			{#each choices as choice (choice.id)}
				<button
					class="flex w-full items-center gap-3 rounded-lg p-4 text-left text-white {getBackgroundColor(
						choice
					)}"
					on:click={() => handleAnswer(choice.id)}
				>
					<div
						class="flex h-5 w-5 min-w-5 items-center justify-center rounded border-2 border-white"
					>
						{#if selectedAnswer === choice.id}
							{choice.isCorrect ? '✓' : '✗'}
						{/if}
					</div>

					<p class="lexend text-sm font-light text-white">{choice.text}</p>
				</button>
			{/each}
		</div>
	</div>

	<p class="lexend w-full px-8 py-4 text-base font-light leading-7 text-white">
		See? This is <b class="font-semibold">exactly as same as how MC-LARC works</b>.
		<br />
		The wrong answers are generated with ChatGPT4.
	</p>

	<ScrollVideo videoSrc={Ch1_MC_LARC_EX} />
</section>

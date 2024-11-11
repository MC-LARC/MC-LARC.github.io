<script lang="ts">
	export let choices: string[] = [];
	export let answer: number;

	let selectedAnswer: number | null = null;

	function handleAnswer(index: number): void {
		selectedAnswer = index;
	}

	function getBackgroundColor(index: number): string {
		if (selectedAnswer !== index) return 'bg-[#212121]';
		return index === answer - 1 ? 'bg-green-900/50' : 'bg-red-900/50';
	}

	// 답변 초기화 함수
	export function reset(): void {
		selectedAnswer = null;
	}
</script>

<div class="flex w-full flex-col items-center gap-4">
	<div class="flex w-full flex-col gap-3">
		{#each choices as choice, index}
			<button
				class="flex w-full items-center gap-3 rounded-lg p-4 text-left text-white {getBackgroundColor(
					index
				)}"
				on:click={() => handleAnswer(index)}
			>
				<div class="flex h-5 w-5 min-w-5 items-center justify-center rounded border-2 border-white">
					{#if selectedAnswer === index}
						{index === answer - 1 ? '✓' : '✗'}
					{/if}
				</div>
				<p class="lexend text-sm font-light text-white">{choice}</p>
			</button>
		{/each}
	</div>
</div>

<script>
	import SectionTitle from '$lib/components/sectionTitle/SectionTitle.svelte';
</script>

<section
	class="flex flex-col items-center justify-center border-b-2 border-t-2 border-[#212121] bg-[#0E0E0E]"
>
	<SectionTitle>1. Abstract</SectionTitle>

	<p class="lexend px-8 pb-8 text-justify text-base font-light leading-7 text-white">
		As artificial intelligence reasoning abilities gain prominence, generating reliable benchmarks
		becomes crucial. The Abstract and Reasoning Corpus (ARC) offers challenging problems yet
		unsolved by AI. While ARC effectively assesses reasoning, its generation-based evaluation
		overlooks other assessment aspects. Bloom's Taxonomy suggests evaluating six cognitive stages:
		Remember, Understand, Apply, Analyze, Evaluate, and Create. To extend ARC's focus beyond the
		Create stage, we developed MC-LARC, a multiple-choice format suitable for assessing stages like
		Understand and Apply in Large Language Models (LLMs). Our evaluation of ChatGPT4V's analogical
		reasoning using MC-LARC confirmed that this format supports LLMs' reasoning capabilities and
		facilitates evidence analysis. However, we observed LLMs using shortcuts in MC-LARC tasks. To
		address this, we propose a self-feedback framework where LLMs identify issues and generate
		improved options.
	</p>
</section>

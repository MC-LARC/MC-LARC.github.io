<script>
	import SectionTitle from '$lib/components/sectionTitle/SectionTitle.svelte';
	import Ch3_Chat from '$lib/assets/ch3/Ch3_Chat.png';
</script>

<section class="flex flex-col items-center justify-center pb-4">
	<SectionTitle>3. Self-feedback Framework</SectionTitle>

	<p class="lexend mb-4 w-full px-8 text-base font-light leading-7 text-white">
		To prevent the model from deducing the answer from the choices, we introduced the
		<strong class="font-semibold">Self-Feedback Framework</strong>.
	</p>
	<p class="lexend w-full px-8 py-4 text-base font-light leading-7 text-white">
		First, we provide the model with choices <u>without images</u>.
	</p>

	<img class="img-max w-full px-3 py-4" src={Ch3_Chat} alt="Ch3_Chat" />

	<p class="lexend w-full px-8 py-4 text-base font-light leading-7 text-white">
		And then instruct the model to reconstruct the choices in a direction that prevents it from
		deducing the answer from the choices.
	</p>
</section>

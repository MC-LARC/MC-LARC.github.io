<script lang="ts">
	import HeroSection from './components/HeroSection.svelte';
	import Abstract from './components/Abstract.svelte';
	import Ch1 from './components/Ch1.svelte';
	import Ch2 from './components/Ch2.svelte';
	import Ch3 from './components/Ch3.svelte';
	import Footer from './components/Footer.svelte';
	import { ArrowUp, Icon } from 'svelte-hero-icons';

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
</script>

<div class="flex flex-col items-center justify-center">
	<div class="container max-w-screen-sm bg-black">
		<HeroSection />
		<Ch1 />
		<Ch2 />
		<Ch3 />
		<Abstract />
		<Footer />
	</div>

	<button
		class="fixed bottom-4 right-4 z-20 mt-4 rounded-full border-[1px] border-neutral-600 bg-neutral-600 bg-opacity-30 px-2 py-2 backdrop-blur-md"
		on:click={scrollToTop}
	>
		<Icon src={ArrowUp} class="h-6 w-6 text-white" micro />
	</button>
</div>

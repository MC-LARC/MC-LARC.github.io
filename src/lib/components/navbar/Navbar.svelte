<script lang="ts">
	import { ChevronLeft, Icon } from 'svelte-hero-icons';

	export let link: string;
	export let title: string;
</script>

<nav
	class="lexend sticky flex h-[50px] items-center justify-center bg-black bg-opacity-30 font-medium text-white backdrop-blur-md"
>
	<a href={link}>
		<Icon src={ChevronLeft} class="absolute left-0 top-0 h-full" size="24" />
	</a>
	{title}
</nav>

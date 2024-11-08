<script lang="ts">
	interface Author {
		name: String;
		link: string;
	}

	let authors: Author[] = [
		{
			name: 'Donghyeon Shin*',
			link: 'https://onemain1.github.io/'
		},
		{
			name: 'Seungpil Lee*',
			link: 'https://iamseungpil.github.io/'
		},
		{
			name: 'Klea Lena Kovačec',
			link: ''
		},
		{
			name: 'Sundong Kim†',
			link: 'https://sundong.kim/'
		}
	];
</script>

<section class="relative flex h-dvh flex-col items-center justify-center bg-black px-6">
	<h1 class="montserrat text-4xl font-extrabold text-white">MC-LARC</h1>
	<h2 class="lexend mt-1 text-lg font-medium text-white">From Generation to Selection</h2>

	<div class="mt-6 flex flex-col items-center gap-4">
		{#each authors as author}
			<a href={author.link} class="lexend text-base text-[#5A9485]">{author.name}</a>
		{/each}
	</div>

	<p class="lexend absolute bottom-8 mt-2 text-sm text-gray-600">
		Gwangju Institute of Science and Technology
	</p>
</section>

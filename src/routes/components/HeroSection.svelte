<script lang="ts">
	import { Icon, Document, CodeBracket, CircleStack } from 'svelte-hero-icons';

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

	const paperLink = 'https://aclanthology.org/2024.findings-emnlp.392.pdf';
	const codeLink = 'https://github.com/GIST-DSLab/MC-LARC';
	const datasetLink = '/download';
</script>

<section
	class="relative flex h-svh flex-col items-center justify-center border-b-2 border-t-2 border-[#212121] bg-[#0E0E0E] px-6"
>
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

	<div class="absolute bottom-16 flex gap-2">
		<a
			href={paperLink}
			target="_blank"
			rel="noopener noreferrer"
			class="lexend flex items-center gap-2 rounded-lg px-4 py-2 text-base font-medium text-white hover:bg-gray-800"
		>
			<Icon src={Document} class="h-4 w-4" />
			Paper
		</a>

		<a
			href={codeLink}
			target="_blank"
			rel="noopener noreferrer"
			class="lexend flex items-center gap-2 rounded-lg px-4 py-2 text-base font-medium text-white hover:bg-gray-800"
		>
			<Icon src={CodeBracket} class="h-4 w-4" />
			Code
		</a>

		<a
			href={datasetLink}
			target="_blank"
			rel="noopener noreferrer"
			class="lexend flex items-center gap-2 rounded-lg px-4 py-2 text-base font-medium text-white hover:bg-gray-800"
		>
			<Icon src={CircleStack} class="h-4 w-4" />
			Dataset
		</a>
	</div>
</section>

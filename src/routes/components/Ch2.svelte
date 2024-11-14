<script>
	import ScrollVideo from '$lib/components/scrollVideo/ScrollVideo.svelte';
	import SectionTitle from '$lib/components/sectionTitle/SectionTitle.svelte';

	import Ch2_MC_LARC_Without_Image from '$lib/assets/ch2/Ch2_MC_LARC_Without_Image.png';
	import Ch2_Precision from '$lib/assets/ch2/Ch2_Precision.png';
	import Ch2_Pattern from '$lib/assets/ch2/Ch2_Pattern.mp4';
</script>

<section
	class="flex flex-col items-center justify-center border-b-2 border-t-2 border-[#212121] bg-[#0E0E0E] pb-4"
>
	<SectionTitle>2. Shortcut Problem</SectionTitle>

	<img
		class="img-max w-full px-3"
		src={Ch2_MC_LARC_Without_Image}
		alt="Ch2_MC_LARC_Without_Image"
	/>

	<p class="lexend w-full px-8 py-4 text-base font-light leading-7 text-white">
		Imagine solving the previous question <u> without seeing the image. </u>
		You'll probably think it's nonsense, since the choices are about the images.
	</p>

	<img class="img-max w-full px-3" src={Ch2_Precision} alt="Ch2_Precision" />

	<p class="lexend w-full px-8 py-4 text-base font-light leading-7 text-white">
		However, the nonsense occured while testing MC-LARC with the image removed. The benchmark should
		approximate 20% precision, <strong class="font-semibold">
			but the practical result showed 65%.
		</strong>
	</p>

	<div
		class="pointer-events-none inset-0 h-40 w-full bg-gradient-to-b from-transparent to-[#000000]"
	></div>

	<ScrollVideo videoSrc={Ch2_Pattern} />

	<div
		class="pointer-events-none inset-0 h-40 w-full bg-gradient-to-t from-transparent to-[#000000]"
	></div>

	<p class="lexend w-full px-8 py-4 text-base font-light leading-7 text-white">
		Models could solve the problem without the image by <u> finding word patterns </u> or based on sentence
		length.
	</p>
</section>

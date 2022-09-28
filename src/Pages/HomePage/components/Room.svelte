<script>
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import 'swiper/css/scrollbar';
	import { ChevronRightIcon, ChevronLeftIcon } from 'svelte-feather-icons';
	import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
</script>

<section class="lg:max-h-[100vh] overflow-hidden relative">
	<button
		class="slider3-button-prev absolute top-[50%] left-5 text-xl text-white z-20 bg-[#0000007e] p-[4px] rounded-full"
	>
		<ChevronLeftIcon /></button
	>
	<button
		class="slider3-button-next absolute top-[50%] right-5 text-xl text-white z-20 bg-[#0000007e] p-[4px] rounded-full"
		><ChevronRightIcon /></button
	>
	<Swiper
		modules={[Navigation, Pagination, Scrollbar, A11y]}
		spaceBetween={0}
		slidesPerView={1}
		loop={true}
		navigation={{
			nextEl: '.slider3-button-next',
			prevEl: '.slider3-button-prev'
		}}
	>
		<SwiperSlide
			><img class="h-full" src="https://i.ibb.co/0FmGXcd/20200630-141812.jpg" alt="" /></SwiperSlide
		>
		<SwiperSlide
			><img class="h-full" src="https://i.ibb.co/D1nwT1f/A7R04786.jpg" alt="" /></SwiperSlide
		>
		<SwiperSlide
			><img class="h-full" src="https://i.ibb.co/txvDfJx/A7R04792.jpg" alt="" /></SwiperSlide
		>
		<SwiperSlide
			><img class="h-full" src="https://i.ibb.co/8c0n2kk/A7R04777.jpg" alt="" /></SwiperSlide
		>
	</Swiper>
</section>

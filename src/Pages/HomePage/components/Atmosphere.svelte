<script lang="ts">
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
		class="slider1-button-prev absolute top-[50%] left-5 text-xl text-white z-20 bg-[#0000007e] p-[4px] rounded-full"
	>
		<ChevronLeftIcon /></button
	>
	<button
		class="slider1-button-next absolute top-[50%] right-5 text-xl text-white z-20 bg-[#0000007e] p-[4px] rounded-full"
		><ChevronRightIcon /></button
	>
	<Swiper
		modules={[Navigation, Pagination, Scrollbar, A11y]}
		spaceBetween={0}
		slidesPerView={1}
		loop={true}
		navigation={{
			nextEl: '.slider1-button-next',
			prevEl: '.slider1-button-prev'
		}}
	>
		<SwiperSlide>
			<img class="h-full" src="https://i.ibb.co/HF1qWpx/A7300204.jpg" alt="" />
		</SwiperSlide>
		<SwiperSlide
			><img class="h-full" src="https://i.ibb.co/f1gZJCD/A7301803.jpg" alt="" /></SwiperSlide
		>
		<SwiperSlide
			><img class="h-full" src="https://i.ibb.co/MVD3zPt/A7302610.jpg" alt="" /></SwiperSlide
		>
		<SwiperSlide
			><img class="h-full" src="https://i.ibb.co/k5HPLHQ/A7302614.jpg" alt="" /></SwiperSlide
		>
		<SwiperSlide
			><img class="h-full" src="https://i.ibb.co/VDQhVf1/A7302660.jpg" alt="" /></SwiperSlide
		>
	</Swiper>
</section>

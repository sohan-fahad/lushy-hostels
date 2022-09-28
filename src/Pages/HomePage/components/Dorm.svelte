<script>
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import 'swiper/css/scrollbar';
	import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
	import { ChevronRightIcon, ChevronLeftIcon } from 'svelte-feather-icons';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
</script>

<section class="lg:max-h-[100vh] overflow-hidden relative">
	<button
		class="slider2-button-prev absolute top-[50%] left-5 text-xl text-white z-20 bg-[#0000007e] p-[4px] rounded-full"
	>
		<ChevronLeftIcon /></button
	>
	<button
		class="slider2-button-next absolute top-[50%] right-5 text-xl text-white z-20 bg-[#0000007e] p-[4px] rounded-full"
		><ChevronRightIcon /></button
	>
	<Swiper
		modules={[Navigation, Pagination, Scrollbar, A11y]}
		spaceBetween={0}
		slidesPerView={1}
		loop={true}
		navigation={{
			nextEl: '.slider2-button-next',
			prevEl: '.slider2-button-prev'
		}}
	>
		<SwiperSlide>
			<img class="h-full" src="https://i.ibb.co/jkT7xyy/A725272.jpg" alt="" />
		</SwiperSlide>
		<SwiperSlide
			><img class="h-full" src="https://i.ibb.co/gvZwFWS/IMG-2450.jpg" alt="" /></SwiperSlide
		>
		<SwiperSlide
			><img class="h-full" src="https://i.ibb.co/3Bg2fgw/IMG-2456.jpg" alt="" /></SwiperSlide
		>
		<SwiperSlide
			><img class="h-full" src="https://i.ibb.co/MBKGRNB/IMG-2465.jpg" alt="" /></SwiperSlide
		>
	</Swiper>
</section>

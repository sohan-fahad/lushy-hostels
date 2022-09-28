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
		class="slider4-button-prev absolute top-[50%] left-5 text-xl text-white z-20 bg-[#0000007e] p-[4px] rounded-full"
	>
		<ChevronLeftIcon /></button
	>
	<button
		class="slider4-button-next absolute top-[50%] right-5 text-xl text-white z-20 bg-[#0000007e] p-[4px] rounded-full"
		><ChevronRightIcon /></button
	>
	<Swiper
		modules={[Navigation, Pagination, Scrollbar, A11y]}
		spaceBetween={0}
		slidesPerView={1}
		loop={true}
		navigation={{
			nextEl: '.slider4-button-next',
			prevEl: '.slider4-button-prev'
		}}
	>
		<SwiperSlide>
			<img class="h-full" src="https://i.ibb.co/ZHbZcTq/A7R04613.jpg" alt="" />
		</SwiperSlide>
		<SwiperSlide
			><img class="h-full" src="https://i.ibb.co/z4fLmXr/A7R04653.jpg" alt="" /></SwiperSlide
		>
		<SwiperSlide
			><img class="h-full" src="https://i.ibb.co/WWSBycx/A7R04706.jpg" alt="" /></SwiperSlide
		>
		<SwiperSlide
			><img class="h-full" src="https://i.ibb.co/1nmSqcw/IMG-4097.jpg" alt="" /></SwiperSlide
		>
	</Swiper>
</section>

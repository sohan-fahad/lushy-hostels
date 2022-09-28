<script lang="ts">
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import 'swiper/css/scrollbar';
	import { ChevronRightIcon, ChevronLeftIcon } from 'svelte-feather-icons';
	import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import slider1 from '../../../assets/images/Atmosphere/A7300204.jpg';
	import slider2 from '../../../assets/images/Atmosphere/A7301803.jpg';
	import slider3 from '../../../assets/images/Atmosphere/A7302610.jpg';
	import slider4 from '../../../assets/images/Atmosphere/A7302614.jpg';
	import slider5 from '../../../assets/images/Atmosphere/A7302660.jpg';
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
			<img class="h-full" src={slider1} alt="" />
		</SwiperSlide>
		<SwiperSlide><img class="h-full" src={slider2} alt="" /></SwiperSlide>
		<SwiperSlide><img class="h-full" src={slider3} alt="" /></SwiperSlide>
		<SwiperSlide><img class="h-full" src={slider4} alt="" /></SwiperSlide>
		<SwiperSlide><img class="h-full" src={slider5} alt="" /></SwiperSlide>
	</Swiper>
</section>

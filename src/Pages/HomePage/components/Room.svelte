<script>
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import 'swiper/css/scrollbar';
	import { ChevronRightIcon, ChevronLeftIcon } from 'svelte-feather-icons';
	import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import slider1 from '../../../assets/images/Room/20200630_141812.jpg';
	import slider2 from '../../../assets/images/Room/A7R04777.jpg';
	import slider3 from '../../../assets/images/Room/A7R04786.jpg';
	import slider4 from '../../../assets/images/Room/A7R04791.jpg';
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
		<SwiperSlide><img class="h-full" src={slider1} alt="" /></SwiperSlide>
		<SwiperSlide><img class="h-full" src={slider2} alt="" /></SwiperSlide>
		<SwiperSlide><img class="h-full" src={slider3} alt="" /></SwiperSlide>
		<SwiperSlide><img class="h-full" src={slider4} alt="" /></SwiperSlide>
	</Swiper>
</section>

<script>
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import 'swiper/css/scrollbar';
	import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
	import { ChevronRightIcon, ChevronLeftIcon } from 'svelte-feather-icons';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import sliderImg1 from '../../../assets/images/dorm/IMG_2450.jpg';
	import sliderImg2 from '../../../assets/images/dorm/IMG_2456.jpg';
	import sliderImg3 from '../../../assets/images/dorm/IMG_2465.jpg';
	import sliderImg4 from '../../../assets/images/dorm/IMG_2471.jpg';
	import sliderImg5 from '../../../assets/images/dorm/IMG_2476.jpg';
	import sliderImg6 from '../../../assets/images/dorm/IMG_2482.jpg';
	import sliderImg7 from '../../../assets/images/dorm/IMG_2488.jpg';
	import sliderImg8 from '../../../assets/images/dorm/_A725272.jpg';
</script>

<section class="h-[230px] sm:h-[400px] lg:h-screen overflow-hidden relative">
	<button
		class="slider2-button-prev absolute top-[45%] left-5 text-xl text-white z-20 bg-[#0000007e] p-[4px] rounded-full"
	>
		<ChevronLeftIcon /></button
	>
	<button
		class="slider2-button-next absolute top-[45%] right-5 text-xl text-white z-20 bg-[#0000007e] p-[4px] rounded-full"
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
		<SwiperSlide
			><img class="w-full sm:w-screen h-[230px] sm:h-auto" src={sliderImg1} alt="" /></SwiperSlide
		>
		<SwiperSlide
			><img class="w-full sm:w-screen h-[230px] sm:h-auto" src={sliderImg2} alt="" /></SwiperSlide
		>
		<SwiperSlide
			><img class="w-full sm:w-screen h-[230px] sm:h-auto" src={sliderImg3} alt="" /></SwiperSlide
		>
		<SwiperSlide
			><img class="w-full sm:w-screen h-[230px] sm:h-auto" src={sliderImg4} alt="" /></SwiperSlide
		>
		<SwiperSlide
			><img class="w-full sm:w-screen h-[230px] sm:h-auto" src={sliderImg5} alt="" /></SwiperSlide
		>
		<SwiperSlide
			><img class="w-full sm:w-screen h-[230px] sm:h-auto" src={sliderImg6} alt="" /></SwiperSlide
		>
		<SwiperSlide
			><img class="w-full sm:w-screen h-[230px] sm:h-auto" src={sliderImg7} alt="" /></SwiperSlide
		>
		<SwiperSlide
			><img class="w-full sm:w-screen h-[230px] sm:h-auto" src={sliderImg8} alt="" /></SwiperSlide
		>
	</Swiper>
</section>

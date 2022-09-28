<script lang="ts">
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import 'swiper/css/scrollbar';
	import { ChevronRightIcon, ChevronLeftIcon } from 'svelte-feather-icons';
	import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import sliderImg1 from '../../../assets/images/atmosphere/A7300204.jpg';
	import sliderImg2 from '../../../assets/images/atmosphere/A7301803.jpg';
	import sliderImg3 from '../../../assets/images/atmosphere/A7302614.jpg';
	import sliderImg4 from '../../../assets/images/atmosphere/A7302660.jpg';
	import sliderImg5 from '../../../assets/images/atmosphere/A7307613.jpg';
	import sliderImg6 from '../../../assets/images/atmosphere/atmosphere11.png';
	import sliderImg7 from '../../../assets/images/atmosphere/BC1_7067.jpg';
	import sliderImg8 from '../../../assets/images/atmosphere/BC1_7141.jpg';
	import sliderImg9 from '../../../assets/images/atmosphere/BC1_7346.jpg';
	import sliderImg10 from '../../../assets/images/atmosphere/BC1_7477.jpg';
	import sliderImg11 from '../../../assets/images/atmosphere/grp_pic.jpg';
</script>

<section class="h-[250px] sm:h-[500px] lg:h-screen overflow-hidden relative">
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
		<SwiperSlide><img class="h-full" src={sliderImg1} alt="" /></SwiperSlide>
		<SwiperSlide><img class="h-full" src={sliderImg2} alt="" /></SwiperSlide>
		<SwiperSlide><img class="h-full" src={sliderImg3} alt="" /></SwiperSlide>
		<SwiperSlide><img class="h-full" src={sliderImg4} alt="" /></SwiperSlide>
		<SwiperSlide><img class="h-full" src={sliderImg5} alt="" /></SwiperSlide>
		<SwiperSlide><img class="h-full" src={sliderImg6} alt="" /></SwiperSlide>
		<SwiperSlide><img class="h-full" src={sliderImg7} alt="" /></SwiperSlide>
		<SwiperSlide><img class="h-full" src={sliderImg8} alt="" /></SwiperSlide>
		<SwiperSlide><img class="h-full" src={sliderImg9} alt="" /></SwiperSlide>
		<SwiperSlide><img class="h-full" src={sliderImg10} alt="" /></SwiperSlide>
		<SwiperSlide><img class="h-full" src={sliderImg11} alt="" /></SwiperSlide>
	</Swiper>
</section>

<script lang="ts">
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import 'swiper/css/scrollbar';
	import { ChevronRightIcon, ChevronLeftIcon } from 'svelte-feather-icons';
	import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import sliderImg1 from '../../../assets/images/food/A7R04613.jpg';
	import sliderImg2 from '../../../assets/images/food/A7R04653.jpg';
	import sliderImg3 from '../../../assets/images/food/A7R04706.jpg';
	import sliderImg4 from '../../../assets/images/food/IMG_4097.jpg';
</script>

<section class="overflow-hidden relative">
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
		<SwiperSlide><img class="w-screen h-auto" src={sliderImg1} alt="" /></SwiperSlide>
		<SwiperSlide><img class="w-screen h-auto" src={sliderImg2} alt="" /></SwiperSlide>
		<SwiperSlide><img class="w-screen h-auto" src={sliderImg3} alt="" /></SwiperSlide>
		<SwiperSlide><img class="w-screen h-auto" src={sliderImg4} alt="" /></SwiperSlide>
	</Swiper>
</section>

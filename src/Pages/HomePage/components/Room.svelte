<script>
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import 'swiper/css/scrollbar';
	import { ChevronRightIcon, ChevronLeftIcon } from 'svelte-feather-icons';
	import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import sliderImg2 from '../../../assets/images/room/20200630_141812.jpg';
	import sliderImg3 from '../../../assets/images/room/20200623_142300.jpg';
	import sliderImg4 from '../../../assets/images/room/20200623_142454.jpg';
	import sliderImg5 from '../../../assets/images/room/20200623_142739.jpg';
	import sliderImg6 from '../../../assets/images/room/20200630_141910.jpg';
	import sliderImg7 from '../../../assets/images/room/20200813_141505.jpg';
	import sliderImg8 from '../../../assets/images/room/20200813_141521.jpg';
	import sliderImg9 from '../../../assets/images/room/20210801_135646-01.jpg';
	import sliderImg10 from '../../../assets/images/room/146419684_118854880069491_4900715536467039206_n.jpg';
	import sliderImg12 from '../../../assets/images/room/146859922_1122924424809897_7279789132964693648_n.jpg';
	import sliderImg13 from '../../../assets/images/room/A7R04777.jpg';
	import sliderImg14 from '../../../assets/images/room/A7R04791.jpg';
	import sliderImg15 from '../../../assets/images/room/A7R04792.jpg';
	import sliderImg16 from '../../../assets/images/room/A7R04804.jpg';
</script>

<section class="h-[230px] sm:h-[400px] lg:h-screen overflow-hidden relative">
	<button
		class="slider3-button-prev absolute top-[45%] left-5 text-xl text-white z-20 bg-[#0000007e] p-[4px] rounded-full"
	>
		<ChevronLeftIcon /></button
	>
	<button
		class="slider3-button-next absolute top-[45%] right-5 text-xl text-white z-20 bg-[#0000007e] p-[4px] rounded-full"
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
		<SwiperSlide
			><img class="w-full sm:w-screen h-[230px] sm:h-auto" src={sliderImg9} alt="" /></SwiperSlide
		>
		<SwiperSlide
			><img class="w-full sm:w-screen h-[230px] sm:h-auto" src={sliderImg10} alt="" /></SwiperSlide
		>
		<SwiperSlide
			><img class="w-full sm:w-screen h-[230px] sm:h-auto" src={sliderImg12} alt="" /></SwiperSlide
		>
		<SwiperSlide
			><img class="w-full sm:w-screen h-[230px] sm:h-auto" src={sliderImg13} alt="" /></SwiperSlide
		>
		<SwiperSlide
			><img class="w-full sm:w-screen h-[230px] sm:h-auto" src={sliderImg14} alt="" /></SwiperSlide
		>
		<SwiperSlide
			><img class="w-full sm:w-screen h-[230px] sm:h-auto" src={sliderImg15} alt="" /></SwiperSlide
		>
		<SwiperSlide
			><img class="w-full sm:w-screen h-[230px] sm:h-auto" src={sliderImg16} alt="" /></SwiperSlide
		>
	</Swiper>
</section>

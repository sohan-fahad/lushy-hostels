<script>
	import logo from '../../../assets/images/logo-white.png';
</script>

<section class="hero-box">
	<img src={logo} alt="hero logo" />
	<h1>let’s flamingle.</h1>
</section>

<style lang="postcss">
	.hero-box {
		@apply bg-[url(../../../assets//images/heroImg.png)] h-auto lg:h-screen w-full bg-no-repeat bg-center  px-5 sm:px-[50px] lg:px-[150px] flex flex-col justify-center items-center mt-16 lg:mt-0 py-9 sm:py-16 lg:py-0;
		background-size: 100% auto;
	}

	img {
		@apply w-[100px] sm:w-[200px] lg:w-[270px];
	}

	h1 {
		@apply text-2xl sm:text-4xl lg:text-5xl text-white font-bold;
	}
</style>

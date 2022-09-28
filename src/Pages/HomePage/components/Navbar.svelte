<script>
	import logo from '../../../assets/images/logo-white.png';
</script>

<nav class="bg-primary w-full flex justify-between fixed left-0 top-0 z-50">
	<div class="pl-5 lg:pl-[150px] sm:pl-[50px] w-[60%] sm:w-[70%] flex items-center">
		<img
			class="w-[60px] sm:w-[70px] py-2 sm:py-4 pr-2 sm:pr-4"
			src={logo}
			alt="Lushy Hostels Logo"
		/>
		<h3 class="text-lg sm:text-xl font-bold text-white pl-3 sm:pl-4 border-l-2">Lushy Hostels</h3>
	</div>
	<div class="pr-5 lg:pr-[150px] sm:pr-[50px] bg-secondary w-[40%] sm:w-[30%]">
		<button class="h-full w-full text-right text-white font-medium flex items-center justify-end"
			>Book Now
			<svg class="w-4 fill-white" viewBox="0 0 16 16">
				<path
					fill-rule="evenodd"
					d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
				/>
			</svg>
		</button>
	</div>
</nav>

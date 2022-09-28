<script>
	import { flip } from 'svelte/animate';
	import { onDestroy, onMount } from 'svelte';

	export let images;
	export let imageWidth = '300px';
	export let imageSpacing = 0;
	export let speed = 500;
	export let controlColor = '#444';
	export let controlScale = '0.5';
	export let autoplay = false;
	export let autoplaySpeed = 5000;
	export let displayControls = true;
	let interval;
	let xDown = null;
	let yDown = null;

	const rotateLeft = (e) => {
		const transitioningImage = images[images.length - 1];
		document.getElementById(transitioningImage.id).style.opacity = '0';
		images = [images[images.length - 1], ...images.slice(0, images.length - 1)];
		setTimeout(() => (document.getElementById(transitioningImage.id).style.opacity = '1'), speed);
	};

	const rotateRight = (e) => {
		const transitioningImage = images[0];
		document.getElementById(transitioningImage.id).style.opacity = '0';
		images = [...images.slice(1, images.length), images[0]];
		setTimeout(() => (document.getElementById(transitioningImage.id).style.opacity = '1'), speed);
	};

	const startAutoPlay = () => {
		if (autoplay) {
			interval = setInterval(rotateRight, autoplaySpeed);
		}
	};

	const stopAutoPlay = () => {
		clearInterval(interval);
	};

	$: if (autoplay) {
		startAutoPlay();
	}

	onMount(() => {});

	const handleSwip = () => {
		document.addEventListener('touchstart', handleTouchStart, false);
		document.addEventListener('touchmove', handleTouchMove, false);
	};

	onDestroy(() => {
		stopAutoPlay();
	});

	function getTouches(evt) {
		return evt.touches; // jQuery
	}

	function handleTouchStart(evt) {
		const firstTouch = getTouches(evt)[0];
		xDown = firstTouch.clientX;
		yDown = firstTouch.clientY;
	}

	function handleTouchMove(evt) {
		if (!xDown || !yDown) {
			return;
		}

		var xUp = evt.touches[0].clientX;
		var yUp = evt.touches[0].clientY;

		var xDiff = xDown - xUp;
		var yDiff = yDown - yUp;

		if (Math.abs(xDiff) > Math.abs(yDiff)) {
			/*most significant*/
			if (xDiff > 0) {
				rotateRight();
				/* right swipe */
			} else {
				rotateLeft();
				/* left swipe */
			}
		}
		/* reset values */
		xDown = null;
		yDown = null;
	}
</script>

<div id="carousel-container">
	<div id="carousel-images">
		{#each images as image (image.id)}
			<img
				src={image.path}
				alt={image.id}
				id={image.id}
				style={`width:${imageWidth}; margin: 0 ${imageSpacing}px;`}
				on:mouseover={stopAutoPlay}
				on:mouseout={startAutoPlay}
				on:touchstart={handleSwip}
				animate:flip={{ duration: speed }}
			/>
		{/each}
	</div>
	{#if displayControls}
		<button id="left" on:click={rotateLeft}>
			<slot name="left-control">
				<svg width="39px" height="110px" id="svg8" transform={`scale(${controlScale})`}>
					<g id="layer1" transform="translate(-65.605611,-95.36949)">
						<path
							style={`fill:none;stroke:${controlColor};stroke-width:9.865;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`}
							d="m 99.785711,100.30199 -23.346628,37.07648 c -7.853858,12.81098 -7.88205,12.81098 0,24.78902 l 23.346628,37.94647"
							id="path1412"
						/>
					</g>
				</svg>
			</slot>
		</button>
		<button id="right" on:click={rotateRight}>
			<slot name="right-control">
				<svg width="39px" height="110px" id="svg8" transform={`rotate(180) scale(${controlScale})`}>
					<g id="layer1" transform="translate(-65.605611,-95.36949)">
						<path
							style={`fill:none;stroke:${controlColor};stroke-width:9.865;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`}
							d="m 99.785711,100.30199 -23.346628,37.07648 c -7.853858,12.81098 -7.88205,12.81098 0,24.78902 l 23.346628,37.94647"
							id="path1412"
						/>
					</g>
				</svg>
			</slot>
		</button>
	{/if}
</div>

<style>
	#carousel-container {
		width: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
	}
	#carousel-images {
		display: flex;
		justify-content: center;
		flex-wrap: nowrap;
	}

	button {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		display: flex;
		align-items: center;
		justify-content: center;
		background: transparent;
		border: none;
	}

	button {
		outline: none;
	}

	#left {
		left: 10px;
		height: 40px;
		width: 40px;
		background-color: rgba(0, 0, 0, 0.387);
		border-radius: 50%;
		color: white;
	}

	#right {
		right: 10px;
		height: 40px;
		width: 40px;
		background-color: rgba(0, 0, 0, 0.387);
		border-radius: 50%;
		color: white;
	}
</style>

const img = document.querySelector('img');

const zoomInImg = e => {
	const cursorScreenX = e.clientX;
	const cursorScreenY = e.clientY;
	const imgX = img.offsetLeft;
	const imgY = img.offsetTop;

	const cursorBoxX = cursorScreenX - imgX;
	const cursorBoxY = cursorScreenY - imgY;

	img.style.transformOrigin = `${cursorBoxX}px ${cursorBoxY}px`;
	img.classList.add('zoom-in');
};

const zoomOutImg = () => {
	img.classList.remove('zoom-in');
};

img.addEventListener('mousemove', zoomInImg);
img.addEventListener('mouseout', zoomOutImg);

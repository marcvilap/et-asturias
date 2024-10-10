import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

const scripts = () => {
	const reveals = document.querySelectorAll('.reveal')
	const revealsObserver = new IntersectionObserver(entries => {
		entries.forEach(({ isIntersecting, target }) => {
			target.classList.toggle('reveal', !isIntersecting)
			target.classList.toggle('revealed', isIntersecting)
		})
	})
	reveals.forEach(element => revealsObserver.observe(element))

	new Swiper('.swiper', {
		modules: [Navigation, Pagination],
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-next',
			prevEl: '.swiper-prev',
		},
	})
}

scripts()

document.addEventListener('astro:after-swap', () => scripts())

import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

export const toast = {
	success: (msg: string) =>
		Toastify({
			text: msg,
			duration: 3000,
			gravity: 'top',
			position: 'center',
			style: {
				background: 'linear-gradient(to right, var(--primary-color), var(--text-light))',
				color: 'var(--color-secondary)',
				maxWidth: '320px',
				width: 'fit-content',
				borderRadius: '10px'
			}
		}).showToast(),

	error: (msg: string) =>
		Toastify({
			text: msg,
			duration: 4000,
			gravity: 'top',
			position: 'center',
			style: {
				background: '#b50439',
				color: 'var(--color-text-light)',
				maxWidth: '320px',
				width: 'fit-content',
				borderRadius: '10px'
			}
		}).showToast(),

	info: (msg: string) =>
		Toastify({
			text: msg,
			duration: 3000,
			gravity: 'top',
			position: 'right',
			style: {
				background: 'var(--color-text-light)',
				color: 'var(--color-secondary)',
				maxWidth: '320px',
				width: 'fit-content',
				borderRadius: '10px'
			}
		}).showToast()
}

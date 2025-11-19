import { CrossIcon } from '@/assets/icons'

import Backdrop from './Backdrop'
import ModalPortal from './ModalPortal'

import React from 'react'

type ModalProps = {
	children: React.ReactNode
	title?: string
	onClose?: () => void
	className?: string
	isShowLogo?: boolean
	isOpen: boolean
}

const BaseModal = ({
	children,

	onClose,
	className,

	isOpen
}: ModalProps) => {
	if (!isOpen) return null

	return (
		<ModalPortal>
			<Backdrop onClose={onClose} closeOnOverlayClick closeOnEsc>
				<div
					className={`w-[720px] min-h-[400px] xl:w-[720px] xl:h-[400px] rounded-2xl p-2 bg-background relative border border-accent box-glow ${className}`}
				>
					{children}
					<button
						onClick={onClose}
						className='w-8 h-8 border border-accent rounded-full bg-background p-0.5 flex items-center justify-center absolute top-3 right-3'
					>
						<CrossIcon />
					</button>
				</div>
			</Backdrop>
		</ModalPortal>
	)
}

export default BaseModal

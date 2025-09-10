'use client'
import { usePathname } from 'next/navigation'
import LogOutButton from '../LogOutButton/LogOutButton'
import Progressbar from '../ProgressBar/Progressbar'
import style from './header.module.css'
import Image from 'next/image'

function Header() {
	const pathname = usePathname()
	const show = /^\/day(one|two|three|four|five|six|seven)$/.test(pathname)

	return (
		<div className={`container ${style.header}`}>
			<Image
				className={style.logo}
				width={200}
				height={60}
				src='/logo.svg'
				alt='logo'
			/>

			{show ? <Progressbar /> : null}

			{show ? <LogOutButton /> : null}
		</div>
	)
}

export default Header
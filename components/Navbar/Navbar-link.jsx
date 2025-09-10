import { useUserStore } from '@/lib/store'
import style from './navbar.module.css'
import { Folder } from 'lucide-react'
import Link from 'next/link'

function NavbarLink({ href, day }) {
	// const user = useUserStore(s => s.user)

	return (
		<Link
			className={style.link}
			href={href}
		>
			<Folder
				size={24}
				color='var(--second-text)'
			/>
			Պրակտիկա {day + 1}
		</Link>
	)
}

export default NavbarLink
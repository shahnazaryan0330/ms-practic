import NavbarLink from './Navbar-link'
import style from './navbar.module.css'

function Navbar() {
	const hrefs = [
		'/dayone',
		'/daytwo',
		'/daythree',
		'/dayfour',
		'/dayfive',
		'/daysix',
		'/dayseven'
	]

	return (
		<div className={style.Navbar}>
			{hrefs.map((item, index) => {
				return <NavbarLink
					href={item}
					day={index}
					key={index}
				/>
			})}
		</div>
	)
}

export default Navbar
import Link from 'next/link'
import s from './external.module.css'

function ExternalLink({ label }) {
	return (
		<Link
			href={label}
			className={s.externalLink}
			target='_blank'
		>
			{label}
		</Link>
	)
}

export default ExternalLink
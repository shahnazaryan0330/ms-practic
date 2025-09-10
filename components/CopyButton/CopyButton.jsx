'use client'
import { useState } from 'react'
import s from './copyButton.module.css'
import { Copy } from 'lucide-react'

function CopyButton({ label }) {
	const [isCopy, setIsCopy] = useState(false)

	async function handle() {
		await navigator.clipboard.writeText(label)

		setIsCopy(true)

		setTimeout(() => {
			setIsCopy(false)
		}, 1000)
	}

	return (
		<button
			onClick={handle}
			className={s.copyButton}
		>
			{label}
			<Copy
				size={18}
				stroke='var(--second-text)'
			/>
			{isCopy ? <span className={s.copied}>Պատճենվեց</span> : null}
		</button>
	)
}

export default CopyButton
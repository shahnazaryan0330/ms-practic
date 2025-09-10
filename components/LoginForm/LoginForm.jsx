'use client'
import { useRouter } from 'next/navigation'
import s from './loginForm.module.css'
import { useState } from 'react'
import { fetchUser } from '@/lib/api'
import { useUserStore } from '@/lib/store'

function LoginForm() {
	const router = useRouter()
	const [username, setUsername] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')
	const setUser = useUserStore(s => s.setUser)

	async function onSubmit(e) {
		e.preventDefault()
		setLoading(true)

		const data = await fetchUser(username.trim())

		if (!data) {
			setError('Չի գտնվել')
			return
		}

		await fetch('/api/session', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username }),
		})

		setUser(data)
		router.replace('/dayone')
		setLoading(false)
	}

	return (
		<form onSubmit={onSubmit} className={s.form}>
			<label
				className={s.label}
				htmlFor="login"
			>
				Նախքան սկսելը
				<input
					type="text"
					name='login'
					id={s.login}
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					placeholder='Անուն'
				/>
			</label>
			<ul className={s.infoList}>
				<li className={s.infoListLabel}>Մուտքագրեք լատինատառ</li>
				<li className={s.infoListLabel}>{error}</li>
			</ul>
			<button className={s.button} type='submit'>{loading ? 'Ներբեռնում...' : 'Մուտք'}</button>
		</form>
	)
}

export default LoginForm
'use client'
import s from './confirmButton.module.css'
import { useUserStore } from '@/lib/store'
import { updateUserDay } from '@/lib/api'
import { useState } from 'react'

function ConfirmButton({day}) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const user = useUserStore(s => s.user)
    const setUser = useUserStore(s => s.setUser)
    const hasHydrated = useUserStore(s => s.hasHydrated)
    const disabled = !hasHydrated || !user || user.works?.[day] === true || loading

    async function onConfirm() {
        if (!user) return
        setLoading(true)
        try {
            const updated = await updateUserDay(user.username, [day], true)
            setUser(updated) // положим обновлённого пользователя глобально
        } catch (e) {
            console.error(e)
            setError(e.message || 'Չկարողացա պահպանել')
        } finally {
            setLoading(false)
        }
    }

    if (!hasHydrated) return null
    if (!user) return <button className={s.button} disabled>Нет пользователя</button>


    return (
        <button
            className={s.button}
            onClick={onConfirm}
        >
            <span>{error}</span>
            {loading ? 'Պահպանում եմ...' : user.works?.[day] ? 'Հաստատված է' : 'Հաստատել'}
        </button>
    )
}

export default ConfirmButton
'use client'
import { LogOut } from 'lucide-react'
import s from './logOut.module.css'

import { useUserStore } from '@/lib/store'
import { useRouter } from 'next/navigation'

function LogOutButton() {
    const router = useRouter()

    async function handle() {
        await fetch('/api/session', { method: 'DELETE' })
        useUserStore.getState().clearUser()
        router.replace('/login')
    }

    return (
        <button
            className={s.button}
            onClick={handle}
        >
            <LogOut
                size={24}
            />
            Դուրս գալ
        </button>
    )
}

export default LogOutButton
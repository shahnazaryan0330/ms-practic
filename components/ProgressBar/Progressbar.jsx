'use client'
import s from './progressBar.module.css'
import { useUserStore } from '@/lib/store'

function Progressbar() {
    const user = useUserStore(s => s.user)
    const hasHydrated = useUserStore(s => s.hasHydrated)

    if (!hasHydrated) return null

    return (
        <div className={s.progressBar}>
            <div className={s.progress}>
                <div className={s.line}></div>
                <div
                    style={{width: `${user?.progress}%`}}
                    className={s.currentLine}
                ></div>
            </div>
            <span className={s.percent}>{user?.progress}%</span>
        </div>
    )
}

export default Progressbar
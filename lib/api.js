// src/lib/api.js
export async function fetchUser(username) {
    if (!username) throw new Error('Username is required')

    const ctrl = new AbortController()
    const timeout = setTimeout(() => ctrl.abort(), 10000) // 10s

    try {
        const res = await fetch(`/api/users?username=${encodeURIComponent(username)}`, {
            method: 'GET',
            cache: 'no-store',       // чтобы не кэшировался ответ
            signal: ctrl.signal,
        })

        if (res.status === 404) return null
        if (!res.ok) {
            let msg = 'Request failed'
            try {
                const j = await res.json()
                if (j?.error) msg = j.error
            } catch { }
            throw new Error(msg)
        }
        return await res.json()
    } finally {
        clearTimeout(timeout)
    }
}

export async function updateUserDay(username, day, value = true) {
    const res = await fetch('/api/users', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store',
        body: JSON.stringify({ username, day, value }),
    })
    if (!res.ok) throw new Error((await res.json()).error || 'Update failed')
    return res.json() // вернёт обновлённого user
}
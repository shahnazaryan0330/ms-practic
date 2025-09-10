import { NextResponse } from 'next/server'

export async function POST(req) {
    const { username } = await req.json()
    if (!username) return NextResponse.json({ error: 'username required' }, { status: 400 })

    const res = NextResponse.json({ ok: true })
    res.cookies.set({
        name: 'ms_user',
        value: encodeURIComponent(username), // можно токен, если будет auth
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: 60 * 60 * 24 * 30, // 30 дней
    })
    return res
}

export async function DELETE() {
    const res = NextResponse.json({ ok: true })
    res.cookies.set({ name: 'ms_user', value: '', path: '/', maxAge: 0 })
    return res
}

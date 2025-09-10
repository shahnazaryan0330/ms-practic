import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { todayYerevanISO } from '@/lib/dates'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(req) {
    const { searchParams } = new URL(req.url)
    const username = searchParams.get('username')
    if (!username) {
        return NextResponse.json({ error: 'username is required' }, { status: 400 })
    }

    const user = await prisma.user.findUnique({
        where: { username },
        select: { id: true, username: true, progress: true, works: true },
    })

    if (!user) return NextResponse.json({ error: 'not found' }, { status: 404 })
    return NextResponse.json(user)
}

export async function PATCH(req) {
    const { username, day, value = true } = await req.json()

    if (!username || !day) {
        return NextResponse.json({ error: 'username and day are required' }, { status: 400 })
    }
    if (!/^day[1-7]$/.test(day)) {
        return NextResponse.json({ error: 'day must be day1..day7' }, { status: 400 })
    }

    const user = await prisma.user.findUnique({ where: { username } })
    if (!user) return NextResponse.json({ error: 'not found' }, { status: 404 })

    // Обновляем JSON works и пересчитываем progress
    const nextWorks = { ...(user.works || {}), [day]: !!value }
    const progressCount = Math.ceil(100 / Object.values(nextWorks).length)
    const progressCalc = user.progress + progressCount
    const nextProgress = progressCalc >= 100 ? 100 : progressCalc

    const nextCompletedAt = { ...(user.completedAt || {}) }

    if (value) {
        // ставим дату завершения, если её ещё нет
        if (!nextCompletedAt[day]) nextCompletedAt[day] = todayYerevanISO()
    } else {
        // снимаем отметку — убираем дату
        delete nextCompletedAt[day]
    }

    const updated = await prisma.user.update({
        where: { username },
        data: { works: nextWorks, completedAt: nextCompletedAt, progress: nextProgress },
        select: { id: true, username: true, progress: true, works: true },
    })

    return NextResponse.json(updated)
}
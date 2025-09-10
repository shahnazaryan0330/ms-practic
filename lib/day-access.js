// src/lib/day-access.js
import { prisma } from '@/lib/prisma'

// поддержка как числовых, так и словесных роутов
const wordsMap = {
    dayone: 'day1',
    daytwo: 'day2',
    daythree: 'day3',
    dayfour: 'day4',
    dayfive: 'day5',
    daysix: 'day6',
    dayseven: 'day7',
}

function normalizeDay(param) {
    // param: 'day1' | 'day2' ... | 'dayone' ... 'dayseven'
    return wordsMap[param] || param // вернёт 'dayN'
}

export async function canAccessDay(username, dayParam) {
    const day = normalizeDay(dayParam) // 'dayN'
    const n = Number(day.replace('day', '')) // N

    // Защита: если нет dayN — считаем доступ закрыт
    if (!n || n < 1 || n > 7) {
        return { allowed: false, redirectTo: '/login' }
    }

    const user = await prisma.user.findUnique({
        where: { username },
        select: { works: true },
    })

    if (!user) return { allowed: false, redirectTo: '/login' }

    // Правило: на day2..day7 можно только если day1 === true
    if (n > 1 && !user.works?.day1) {
        // если текущий роут словесный — редиректнем на /dayone, иначе на /day1
        const isWords = !/^day[1-7]$/.test(dayParam)
        return { allowed: false, redirectTo: isWords ? '/dayone' : '/day1' }
    }

    return { allowed: true }
}

// // middleware.js
// import { NextResponse } from 'next/server'

// const wordToIndex = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7 }
// const indexToWord = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven']

// // матчим только словесные day-страницы
// const dayWordsRe = /^\/day(one|two|three|four|five|six|seven)(?:\/|$)/

// export async function middleware(req) {
//   const { pathname, origin } = req.nextUrl

//   // пропускаем статику/апи/фавиконки/файлы
//   if (
//     pathname.startsWith('/_next') ||
//     pathname.startsWith('/api') ||
//     pathname.startsWith('/favicon') ||
//     /\.[\w]+$/.test(pathname)
//   ) {
//     return NextResponse.next()
//   }

//   const cookie = req.cookies.get('ms_user')?.value
//   const loggedIn = !!cookie
//   const isAuthPage = pathname === '/' || pathname === '/login'
//   const m = pathname.match(dayWordsRe) // словесные day-страницы

//   // Залогинен → уводим со стартовых страниц
//   if (loggedIn && isAuthPage) {
//     const url = req.nextUrl.clone()
//     url.pathname = '/dayone'
//     return NextResponse.redirect(url)
//   }

//   // Гость → не пускаем на словесные day-страницы
//   if (!loggedIn && m) {
//     const url = req.nextUrl.clone()
//     url.pathname = '/login'
//     return NextResponse.redirect(url)
//   }

//   // Ступенчатая блокировка: dayN требует day(N-1) == true
//   if (loggedIn && m) {
//     const token = m[1] // one|two|...
//     const idx = wordToIndex[token]
//     if (idx >= 2) {
//       const username = decodeURIComponent(cookie)
//       const apiUrl = new URL('/api/users', origin)
//       apiUrl.searchParams.set('username', username)

//       const r = await fetch(apiUrl.toString(), { cache: 'no-store' })
//       if (!r.ok) {
//         const url = req.nextUrl.clone()
//         url.pathname = '/dayone'
//         return NextResponse.redirect(url)
//       }
//       const user = await r.json()
//       const prevKey = `day${idx - 1}`
//       const prevDone = !!user?.works?.[prevKey]

//       if (!prevDone) {
//         const url = req.nextUrl.clone()
//         url.pathname = `/day${indexToWord[idx - 1]}`
//         return NextResponse.redirect(url)
//       }
//     }
//   }

//   return NextResponse.next()
// }

// export const config = {
//   // матчим всё, кроме служебного и статических файлов
//   matcher: ['/((?!_next|api|static|.*\\..*).*)'],
// }

import { NextResponse } from 'next/server'

const wordToIndex = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7 }
const indexToWord = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven']
const dayWordsRe = /^\/day(one|two|three|four|five|six|seven)(?:\/|$)/

function todayYerevanISO() {
  const fmt = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Yerevan', year: 'numeric', month: '2-digit', day: '2-digit'
  })
  return fmt.format(new Date()) // 'YYYY-MM-DD'
}

export async function middleware(req) {
  const { pathname, origin } = req.nextUrl

  // пропускаем статику/апи/фавиконки
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    /\.[\w]+$/.test(pathname)
  ) return NextResponse.next()

  const cookie = req.cookies.get('ms_user')?.value
  const loggedIn = !!cookie
  const isAuthPage = pathname === '/' || pathname === '/login'
  const m = pathname.match(dayWordsRe)

  if (loggedIn && isAuthPage) {
    const url = req.nextUrl.clone()
    url.pathname = '/dayone'
    return NextResponse.redirect(url)
  }

  if (!loggedIn && m) {
    const url = req.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  // ступенчатый замок + задержка до следующего календарного дня
  if (loggedIn && m) {
    const token = m[1]
    const idx = wordToIndex[token]

    if (idx >= 2) {
      const username = decodeURIComponent(cookie)
      const apiUrl = new URL('/api/users', origin)
      apiUrl.searchParams.set('username', username)

      const r = await fetch(apiUrl.toString(), { cache: 'no-store' })
      if (!r.ok) {
        const url = req.nextUrl.clone()
        url.pathname = '/dayone'
        return NextResponse.redirect(url)
      }
      const user = await r.json()

      const prevKey = `day${idx - 1}`
      const prevDone = !!user?.works?.[prevKey]
      const prevDate = user?.completedAt?.[prevKey] // 'YYYY-MM-DD' или undefined
      const today = todayYerevanISO()

      // нужно: предыдущий день завершён И today > prevDate (т.е. уже следующий календарный день)
      const unlockedByDate = prevDate ? (today > prevDate) : false

      if (!prevDone || !unlockedByDate) {
        const url = req.nextUrl.clone()
        url.pathname = `/day${indexToWord[idx - 1]}`
        return NextResponse.redirect(url)
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next|static|.*\\..*).*)'],
}

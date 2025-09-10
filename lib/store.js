// src/lib/store.js
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useUserStore = create(
    persist(
        (set, get) => ({
            user: null,                 // { id, username, progress, works }
            hasHydrated: false,         // флаг, что стор восстановлен из localStorage

            setHasHydrated: (v) => set({ hasHydrated: v }),
            setUser: (u) => set({ user: u }),
            clearUser: () => set({ user: null }),

            // Удобные апдейтеры (локально в сторе)
            updateWorks(day, value) {
                const prev = get().user
                if (!prev) return
                set({
                    user: {
                        ...prev,
                        works: { ...(prev.works || {}), [day]: value },
                    },
                })
            },
            setProgress(p) {
                const prev = get().user
                if (!prev) return
                set({ user: { ...prev, progress: p } })
            },
        }),
        {
            name: 'user-storage', // ключ в localStorage
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({ user: state.user }), // сохраняем только user
            onRehydrateStorage: () => (state) => {
                // вызовется после восстановления из localStorage
                state?.setHasHydrated(true)
            },
        }
    )
)

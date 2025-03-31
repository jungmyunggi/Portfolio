import { create } from 'zustand';
import { DarkStore } from '@/features/DarkModeToggle/model/darkStoreType';
export const useDarkStore = create<DarkStore>((set) => ({
  isDark: 'Light',
  setIsDark: (mode: 'Dark' | 'Light') => {
    if (mode === 'Dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    set({ isDark: mode });
  },
}));

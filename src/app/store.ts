import { create } from 'zustand';
import { MediaStore } from '@/share/type/MediaStoreType';

export const useMediaStore = create<MediaStore>((set) => ({
  isDesktop: true,
  setIsDesktop: (value: boolean) => set({ isDesktop: value }),
}));

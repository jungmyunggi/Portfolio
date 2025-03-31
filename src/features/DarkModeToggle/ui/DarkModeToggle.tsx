import { useDarkStore } from '@/features/DarkModeToggle/model/DarkStore';
import { Moon, Sun } from 'lucide-react';
import '@/features/DarkModeToggle/style/toggleDark.scss';
export default function DarkModeToggle() {
  const isDark = useDarkStore((state) => state.isDark);
  const setDarkMode = useDarkStore((state) => state.setIsDark);
  const toggleDarkMode = () => {
    setDarkMode(isDark === 'Dark' ? 'Light' : 'Dark');
  };
  return (
    <button onClick={toggleDarkMode} className="toggle-button">
      {isDark === 'Dark' ? <Sun fill="#fff" /> : <Moon fill="#000" />}
    </button>
  );
}

import { createLocalStorageStateHook } from 'use-local-storage-state';

export const useThemeStore = createLocalStorageStateHook('preffered-theme', 'system');

export function useTheme() {
  if (typeof window === 'undefined') {
    return {
      theme: 'system',
      setTheme: () => {
        throw new Error(
          'Setting a theme is not supported inside server-side rendered apps'
        );
      },
      toggleTheme: () => {
        throw new Error(
          'Toggle theme is not supported inside server-side rendered apps'
        );
      },
    };
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [theme, setTheme] = useThemeStore();
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return { theme, setTheme, toggleTheme };
}

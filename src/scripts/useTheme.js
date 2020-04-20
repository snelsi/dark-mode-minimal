import { createLocalStorageStateHook } from 'use-local-storage-state';

const getDefaultTheme = () => {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

export const useThemeStore = createLocalStorageStateHook(
  'preffered-theme',
  getDefaultTheme()
);

export function useTheme() {
  if (typeof window === 'undefined') {
    return {
      theme: 'light',
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

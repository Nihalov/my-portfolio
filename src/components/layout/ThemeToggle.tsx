'use client';

import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!mounted) {
    return <div className="h-9 w-9" />;
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-lg text-[var(--foreground)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      {isDark ? '☼' : '☾'}
    </button>
  );
}

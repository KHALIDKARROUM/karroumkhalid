'use client';

import { useSyncExternalStore } from 'react';
import { Moon, Sun } from 'lucide-react';

const themeEvent = 'portfolio-theme-change';

function subscribe(onChange: () => void) {
  window.addEventListener(themeEvent, onChange);
  return () => window.removeEventListener(themeEvent, onChange);
}

function isDarkMode() {
  return document.documentElement.dataset.theme === 'dark';
}

export function ThemeToggle() {
  const darkMode = useSyncExternalStore<boolean | undefined>(
    subscribe,
    isDarkMode,
    () => undefined,
  );

  function changeTheme(dark: boolean) {
    const theme = dark ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {
      // The switch still works when browser storage is unavailable.
    }
    window.dispatchEvent(new Event(themeEvent));
  }

  return (
    <button
      type="button"
      className="icon-button theme-toggle"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      disabled={darkMode === undefined}
      onClick={() => changeTheme(!darkMode)}
    >
      {darkMode ? (
        <Sun size={17} aria-hidden="true" />
      ) : (
        <Moon size={17} aria-hidden="true" />
      )}
    </button>
  );
}

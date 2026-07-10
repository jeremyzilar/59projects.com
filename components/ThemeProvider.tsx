"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";

const STORAGE_KEY = "59projects-theme";

type Listener = () => void;
const listeners = new Set<Listener>();

function readStoredIsDark(): boolean {
  return window.localStorage.getItem(STORAGE_KEY) === "dark";
}

let cachedIsDark = typeof window !== "undefined" ? readStoredIsDark() : false;

function setIsDark(next: boolean) {
  cachedIsDark = next;
  window.localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
  listeners.forEach((listener) => listener());
}

function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return cachedIsDark;
}

function getServerSnapshot() {
  return false;
}

interface ThemeContextValue {
  isDark: boolean;
  toggleDark: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

/**
 * Tracks a single global light/dark flag, persisted to localStorage. Pages
 * and Nav read `isDark` and swap their own existing bg/fg pair, rather than
 * this provider owning any color values itself. Backed by
 * `useSyncExternalStore` (instead of `useState` + a mount effect) so the
 * localStorage-derived value never causes a server/client render mismatch.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const isDark = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const toggleDark = useCallback(() => {
    setIsDark(!cachedIsDark);
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

import { renderHook, act } from '@testing-library/react';
import { useThemeMode } from './useThemeMode';

describe('useThemeMode', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should initialize with light theme by default', () => {
    const { result } = renderHook(() => useThemeMode());
    expect(result.current.theme).toBe('light');
  });

  it('should load theme from localStorage if set', () => {
    localStorage.setItem('theme', 'dark');
    const { result } = renderHook(() => useThemeMode());
    expect(result.current.theme).toBe('dark');
  });

  it('should toggle between light and dark themes', () => {
    const { result } = renderHook(() => useThemeMode());

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe('light');
    expect(localStorage.getItem('theme')).toBe('light');
  });
});

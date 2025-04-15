// src/styles/__tests__/media.test.ts

import { breakpoints, media } from "./media";


describe('breakpoints', () => {
  it('should define expected breakpoints', () => {
    expect(breakpoints).toEqual({
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    });
  });
});

describe('media utility', () => {
  it('should generate min-width media query', () => {
    expect(media.up('md')).toBe('@media (min-width: 768px)');
    expect(media.up('xl')).toBe('@media (min-width: 1280px)');
  });

  it('should generate max-width media query', () => {
    expect(media.down('sm')).toBe('@media (max-width: 480px)');
    expect(media.down('xs')).toBe('@media (max-width: 320px)');
  });
});

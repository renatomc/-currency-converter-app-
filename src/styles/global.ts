import { css } from '@emotion/react';

import { Theme } from '@emotion/react';

export const globalStyles = (theme: Theme) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    background: ${theme?.colors?.background || '#ffffff'};
    color: ${theme?.colors?.text || '#000000'};
    font-family: 'Inter', sans-serif;
    transition: background 0.3s ease, color 0.3s ease;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:focus {
    outline: 2px solid ${theme?.colors?.primary || '#007BFF'};
    outline-offset: 2px;
  }
`;
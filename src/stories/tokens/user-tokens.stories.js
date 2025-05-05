export default {
    title: 'Design Tokens/User Tokens',
    tags: ['autodocs'],
    parameters: {
      docs: {
        description: {
          component: [
            'This section documents the **User Tokens** – the main configuration layer for customizing your design system.',
            '',
            'These tokens define the most essential values for typography, color, spacing, shape, and breakpoints.',
            '',
            '> ℹ️ **Customize only user tokens to ensure safe updates and compatibility with system tokens.**',
            '',
            '---',
            '',
            '## 🔹 Color Tokens',
            '',
            '| SCSS Token | Default Value | Description |',
            '|------------|---------------|-------------|',
            '| `$md-user-color-primary` | `#6750a4` | Primary theme color |',
            '| `$md-user-color-secondary` | `#625b71` | Secondary color for surfaces and accents |',
            '| `$md-user-color-tertiary` | `#7d5260` | Optional third color |',
            '| `$md-user-color-neutral` | `#605d62` | Neutral for text/background |',
            '| `$md-user-color-error` | `#b3261e` | Error state color |',
            '| `$md-user-color-success` | `#388e3c` | Success state color |',
            '| `$md-user-color-custom` | `#6750a4` | Custom color |',
            '',
            '---',
            '',
            '## 🔹 Typography Tokens',
            '',
            '| SCSS Token | Default Value | Description |',
            '|------------|---------------------------|-------------|',
            '| `$md-user-font-family-primary` | `"Roboto", sans-serif` | Base font family |',
            '| `$md-user-font-weight-regular` | `400` | Standard weight |',
            '| `$md-user-font-weight-medium` | `500` | For medium emphasis |',
            '| `$md-user-font-weight-bold` | `700` | Strong emphasis |',
            '',
            '---',
            '',
            '## 🔹 Shape Tokens',
            '',
            '| SCSS Token | Default Value | Description |',
            '|------------|---------------|-------------|',
            '| `$md-user-shape-extra-small` | `0.25rem` | Small radius for compact elements |',
            '| `$md-user-shape-small` | `0.5rem` | Standard small |',
            '| `$md-user-shape-medium` | `0.75rem` | Default corner radius |',
            '| `$md-user-shape-large` | `1rem` | Large UI elements |',
            '| `$md-user-shape-extra-large` | `1.75rem` | Highly rounded |',
            '',
            '---',
            '',
            '## 🔹 Spacing Tokens',
            '',
            '| SCSS Token | Value | Description |',
            '|------------|--------|-------------|',
            '| `$md-user-spacing-none` | `0rem` | No spacing |',
            '| `$md-user-spacing-xsmall` | `0.25rem` | 4px spacing |',
            '| `$md-user-spacing-small` | `0.5rem` | 8px spacing |',
            '| `$md-user-spacing-medium` | `1rem` | 16px spacing |',
            '| `$md-user-spacing-large` | `1.5rem` | 24px spacing |',
            '| `$md-user-spacing-xlarge` | `2rem` | 32px spacing |',
            '| `$md-user-spacing-2xlarge` | `2.5rem` | 40px spacing |',
            '| `$md-user-spacing-3xlarge` | `3rem` | 48px spacing |',
            '| `$md-user-spacing-4xlarge` | `3.5rem` | 56px spacing |',
            '| `$md-user-spacing-5xlarge` | `4rem` | 64px spacing |',
            '',
            '---',
            '',
            '## 🔹 Breakpoints',
            '',
            '| SCSS Token | Value | Description |',
            '|------------|--------|-------------|',
            '| `$md-user-breakpoint-compact` | `0px` | Phones and small devices |',
            '| `$md-user-breakpoint-medium` | `600px` | Tablets and medium screens |',
            '| `$md-user-breakpoint-large` | `840px` | Laptops and desktops |',
            '| `$md-user-breakpoint-extended-md` | `1240px` | Wide desktop |',
            '| `$md-user-breakpoint-extended-lg` | `1440px` | Large desktop |',
            '| `$md-user-breakpoint-extended-xl` | `1600px` | Extra wide |',
            '| `$md-user-breakpoint-extended-2xl` | `1920px` | 4K and ultrawide |',
            '---'
          ].join('\n'),
        },
      },
    },
  };
  export const UserTokensLoaded = () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'surface shape-medium p-medium';
    wrapper.style.maxWidth = '720px';
    wrapper.style.lineHeight = '1.7';
    wrapper.style.fontFamily = 'var(--md-sys-typography-body-large-font, sans-serif)';
    wrapper.style.backgroundColor = 'var(--md-sys-color-surface)';
    wrapper.style.color = 'var(--md-sys-color-on-surface)';
  
    wrapper.innerHTML = `
      <h2 class="body-large" style="margin-bottom: 1rem;">User Tokens – Overview</h2>
  
      <p class="body-large">
        This section summarizes all <strong>user-level SCSS tokens</strong> that can be safely customized to configure the design system.
        These include color values, typography, spacing, shape and breakpoints.
      </p>
  
      <p class="body-large">
        The tokens are defined in the SCSS file: <code><strong>src/scss/tokens/user-tokens.scss</strong></code>
      </p>
  
      <div class="shape-small p-small" style="background-color: var(--md-sys-color-warning-container); color: var(--md-sys-color-on-warning-container); margin: 1.75rem 0;">
        <p class="body-small" style="margin: 0;">
          <strong>Note:</strong> You should only customize <code>$md-user-*</code> tokens.  
          The <code>$md-sys-*</code> tokens are calculated automatically and must not be changed manually.
        </p>
      </div>
    `;
  
    return wrapper;
  };
  
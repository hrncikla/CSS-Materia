export default {
    title: 'Design Tokens/System Tokens',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: [
                    'This section documents the **System Tokens** – automatically generated values used internally by components.',
                    '',
                    '> ℹ️ **Do not edit system tokens directly. Always customize using `user tokens` instead.**',
                    '',
                    '---',
                    '',
                    '## 🔹 Tonal Palette Variables',
                    '',
                    'The full tonal palette is available as CSS variables derived from system tokens.',
                    'Only a representative sample is shown here for each group:',
                    '',
                    '| CSS Variable     | Resolved From                    |',
                    '|------------------|----------------------------------|',
                    '| `--primary-0`     | `var(--md-sys-color-primary-0)`  |',
                    '| `--primary-10`    | `var(--md-sys-color-primary-10)` |',
                    '| `--primary-20`    | `...`                            |',
                    '| `--primary-100`   | `var(--md-sys-color-primary-100)`|',
                    '| `--secondary-0`   | `var(--md-sys-color-secondary-0)`|',
                    '| `--secondary-10`  | `var(--md-sys-color-secondary-10)`|',
                    '| `--secondary-100` | `var(--md-sys-color-secondary-100)`|',
                    '| `--tertiary-0`    | `var(--md-sys-color-tertiary-0)`|',
                    '| `--tertiary-100`  | `var(--md-sys-color-tertiary-100)`|',
                    '| `--neutral-0`     | `var(--md-sys-color-neutral-0)` |',
                    '| `--neutral-100`   | `var(--md-sys-color-neutral-100)`|',
                    '| `--custom-0`      | `var(--md-sys-color-custom-0)`  |',
                    '| `--custom-100`    | `var(--md-sys-color-custom-100)`|',
                    '| `--error-0`       | `var(--md-sys-color-error-0)`   |',
                    '| `--error-100`     | `var(--md-sys-color-error-100)` |',
                    '| `--success-0`     | `var(--md-sys-color-success-0)` |',
                    '| `--success-100`   | `var(--md-sys-color-success-100)`|',
                    '',
                    '> These tonal values are used to define roles like `--md-sys-color-primary`, `--md-sys-color-on-surface`, etc.',
                    '>  Do not override them directly, always use user tokens to control the palette.',
                    '---',
                    '',
                    '## 🔹 Role-based System Tokens',
                    '',
                    '| CSS Variable | Description |',
                    '|--------------|-------------|',
                    '| `--md-sys-color-primary` | Main primary role color |',
                    '| `--md-sys-color-on-primary` | Text on primary |',
                    '| `--md-sys-color-primary-container` | Container using primary tones |',
                    '| `--md-sys-color-on-primary-container` | Text on container |',
                    '| `--md-sys-color-secondary` | Secondary role color |',
                    '| `--md-sys-color-tertiary` | Tertiary role color |',
                    '| `--md-sys-color-error` | Error color |',
                    '| `--md-sys-color-success` | Success color |',
                    '| `--md-sys-color-surface` | Surface background |',
                    '| `--md-sys-color-on-surface` | Content on surface |',
                    '| `--md-sys-color-outline` | Outline or border |',
                    '',
                    '---',
                    '',
                    '## 🔹 Typography Variables',
                    '',
                    'Each text style (e.g. `headline-small`, `body-medium`) is exposed as three CSS variables:',
                    '',
                    '| CSS Variable | Property |',
                    '|--------------|----------|',
                    '| `--md-sys-typography-display-large-font-size` | Font size |',
                    '| `--md-sys-typography-display-large-line-height` | Line height |',
                    '| `--md-sys-typography-display-large-font-weight` | Font weight |',
                    '| `--md-sys-typography-display-medium-font-size` | Font size |',
                    '| `--md-sys-typography-display-medium-line-height` | Line height |',
                    '| `--md-sys-typography-display-medium-font-weight` | Font weight |',
                    '| `--md-sys-typography-display-small-font-size` | Font size |',
                    '| `--md-sys-typography-display-small-line-height` | Line height |',
                    '| `--md-sys-typography-display-small-font-weight` | Font weight |',
                    '| `--md-sys-typography-headline-large-font-size` | Font size |',
                    '| `--md-sys-typography-headline-large-line-height` | Line height |',
                    '| `--md-sys-typography-headline-large-font-weight` | Font weight |',
                    '| `--md-sys-typography-headline-medium-font-size` | Font size |',
                    '| `--md-sys-typography-headline-medium-line-height` | Line height |',
                    '| `--md-sys-typography-headline-medium-font-weight` | Font weight |',
                    '| `--md-sys-typography-headline-small-font-size` | Font size |',
                    '| `--md-sys-typography-headline-small-line-height` | Line height |',
                    '| `--md-sys-typography-headline-small-font-weight` | Font weight |',
                    '| `--md-sys-typography-title-large-font-size` | Font size |',
                    '| `--md-sys-typography-title-large-line-height` | Line height |',
                    '| `--md-sys-typography-title-large-font-weight` | Font weight |',
                    '| `--md-sys-typography-title-medium-font-size` | Font size |',
                    '| `--md-sys-typography-title-medium-line-height` | Line height |',
                    '| `--md-sys-typography-title-medium-font-weight` | Font weight |',
                    '| `--md-sys-typography-title-small-font-size` | Font size |',
                    '| `--md-sys-typography-title-small-line-height` | Line height |',
                    '| `--md-sys-typography-title-small-font-weight` | Font weight |',
                    '| `--md-sys-typography-body-large-font-size` | Font size |',
                    '| `--md-sys-typography-body-large-line-height` | Line height |',
                    '| `--md-sys-typography-body-large-font-weight` | Font weight |',
                    '| `--md-sys-typography-body-medium-font-size` | Font size |',
                    '| `--md-sys-typography-body-medium-line-height` | Line height |',
                    '| `--md-sys-typography-body-medium-font-weight` | Font weight |',
                    '| `--md-sys-typography-body-small-font-size` | Font size |',
                    '| `--md-sys-typography-body-small-line-height` | Line height |',
                    '| `--md-sys-typography-body-small-font-weight` | Font weight |',
                    '| `--md-sys-typography-label-large-font-size` | Font size |',
                    '| `--md-sys-typography-label-large-line-height` | Line height |',
                    '| `--md-sys-typography-label-large-font-weight` | Font weight |',
                    '| `--md-sys-typography-label-medium-font-size` | Font size |',
                    '| `--md-sys-typography-label-medium-line-height` | Line height |',
                    '| `--md-sys-typography-label-medium-font-weight` | Font weight |',
                    '| `--md-sys-typography-label-small-font-size` | Font size |',
                    '| `--md-sys-typography-label-small-line-height` | Line height |',
                    '| `--md-sys-typography-label-small-font-weight` | Font weight |',
                    '',
                    '> ℹ️ These variables are generated from the SCSS map `$md-sys-typography` and are injected into the root as CSS variables.',
                    '> Use them to ensure consistent typography across all components.',
                    '',
                    '---',
                    '',
                    '## 🔹 Shape Tokens',
                    '',
                    '| System Token | Value | Description |',
                    '|--------------|-------|-------------|',
                    '| `$md-sys-shape-corner-none` | `0` | No radius |',
                    '| `$md-sys-shape-corner-extra-small` | From user token | Compact shapes |',
                    '| `$md-sys-shape-corner-small` | From user token | Default rounded corners |',
                    '| `$md-sys-shape-corner-medium` | From user token | Medium rounding |',
                    '| `$md-sys-shape-corner-large` | From user token | Larger elements |',
                    '| `$md-sys-shape-corner-extra-large` | From user token | Highly rounded |',
                    '| `$md-sys-shape-corner-full` | `1000rem` | Fully circular |',
                    '',
                    '---',
                    '',
                    '## 🔹 Spacing Tokens',
                    '',
                    'System spacing is derived from user spacing and used for gap utilities, layout, containers, etc.',
                    '',
                    '| System Token | Value | Description |',
                    '|--------------|-------|-------------|',
                    '| `$md-sys-space-small` | From user | General spacing unit |',
                    '| `$md-sys-flex-gap-medium` | From user | Used in `.gap-*` classes |',
                    '| `$md-sys-grid-gap-large` | From user | Used in grid utilities |',
                    '',
                    '---',
                    '',
                    '## 🔹 Breakpoints and Container Widths',
                    '',
                    'Used in responsive design and grid/container logic.',
                    '',
                    '| System Token | Value | Description |',
                    '|--------------|-------|-------------|',
                    '| `$md-sys-breakpoint-medium` | `600px` | Tablet screens |',
                    '| `$md-sys-container-medium` | calculated | Max width at medium |',
                    '',
                    '---',
                    '',
                    '## ℹ️ Recommendation',
                    '',
                    '> These tokens are generated internally and used by components, mixins, and utilities.',
                    '> You should only update user tokens (`$md-user-*`) to configure appearance safely.',
                    '',
                    '---'
                ].join('\n')
            }
        }
    }
};

export const SystemTokensLoaded = () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'surface shape-medium p-medium';
    wrapper.style.maxWidth = '720px';
    wrapper.style.lineHeight = '1.6';
    wrapper.style.fontFamily = 'var(--md-sys-typography-body-medium-font, sans-serif)';
    wrapper.style.backgroundColor = 'var(--md-sys-color-surface)';
    wrapper.style.color = 'var(--md-sys-color-on-surface)';

    wrapper.innerHTML = `
      <h2 class="body-large" style="margin-bottom: 0.75rem;">System Tokens – Overview</h2>
  
      <p class="body-medium">
        This documentation summarizes <strong>system SCSS tokens</strong> automatically generated from user tokens. These values are used internally by all components.
      </p>
  
      <p class="body-medium">
        Tokens are defined in the SCSS file: <code><strong>src/scss/tokens/system-tokens.scss</strong></code>
      </p>
  
      <div class="shape-small p-small" style="background-color: var(--md-sys-color-warning-container); color: var(--md-sys-color-on-warning-container); margin: 1.5rem 0;">
        <p class="body-small" style="margin: 0;">
          <strong>Warning:</strong> You should never modify <code>$md-sys-*</code> tokens directly. Always override design tokens through <code>$md-user-*</code> definitions.
        </p>
      </div>
    `;

    return wrapper;
};

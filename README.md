# 8bit.css

8-bit pixel style CSS framework. A modern rewrite of [NES.css](https://github.com/nostalgic-css/NES.css) with a fully updated tech stack.

## Features

- CSS Custom Properties — runtime themeable, no recompile needed
- Dark mode via `prefers-color-scheme` + `[data-theme="dark"]`
- Zero external dependencies — font bundled locally, no Google Fonts
- Two bundles: full (21K) and core (12K)
- dart-sass source with modern `@use`/`@forward` module system

## Quick start

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/8bit.css/css/8bit.css">
```

### npm / pnpm

```bash
pnpm add 8bit.css
```

```html
<link rel="stylesheet" href="node_modules/8bit.css/css/8bit.css">
```

### Font

The Press Start 2P font is **not** auto-loaded. Add this to your `<head>`:

```html
<link rel="preload" href="node_modules/8bit.css/public/fonts/PressStart2P.woff2" as="font" type="font/woff2" crossorigin>
<style>
  @font-face {
    font-family: "Press Start 2P";
    font-style: normal;
    font-weight: 400;
    font-display: block;
    src: url("node_modules/8bit.css/public/fonts/PressStart2P.woff2") format("woff2");
  }
</style>
```

## Components

All classes use the `.bit-` prefix.

### Button

```html
<button class="bit-btn">Default</button>
<button class="bit-btn is-primary">Primary</button>
<button class="bit-btn is-success">Success</button>
<button class="bit-btn is-warning">Warning</button>
<button class="bit-btn is-error">Error</button>
<button class="bit-btn is-disabled" disabled>Disabled</button>
```

### Container

```html
<div class="bit-container">Content</div>

<!-- With title -->
<div class="bit-container bit-with-title">
  <p class="bit-title">Title</p>
  Content
</div>

<!-- Dark -->
<div class="bit-container is-dark">Dark content</div>
```

### Form

```html
<!-- Input -->
<input class="bit-input" type="text" placeholder="Type here...">

<!-- Checkbox -->
<label class="bit-checkbox">
  <input type="checkbox">
  <span>Option</span>
</label>

<!-- Radio -->
<label class="bit-radio">
  <input type="radio" name="group">
  <span>Choice</span>
</label>

<!-- Select -->
<div class="bit-select">
  <select>
    <option>Option A</option>
    <option>Option B</option>
  </select>
</div>
```

### Progress

```html
<progress class="bit-progress" value="60" max="100"></progress>
<progress class="bit-progress is-primary" value="60" max="100"></progress>
<progress class="bit-progress is-success" value="60" max="100"></progress>
<progress class="bit-progress is-warning" value="60" max="100"></progress>
<progress class="bit-progress is-error" value="60" max="100"></progress>
```

### Badge

```html
<span class="bit-badge">Default</span>
<span class="bit-badge is-primary">Primary</span>
<span class="bit-badge is-success">Success</span>
<span class="bit-badge is-warning">Warning</span>
<span class="bit-badge is-error">Error</span>
```

### Balloon (speech bubble)

```html
<div class="bit-balloon">Hello!</div>
<div class="bit-balloon from-right">Hello from the right!</div>
```

### Dialog

```html
<div class="bit-dialog">
  <div class="bit-dialog-header">Game Over</div>
  <div class="bit-dialog-body">You have lost all your lives.</div>
  <div class="bit-dialog-footer">
    <button class="bit-btn">No</button>
    <button class="bit-btn is-primary">Yes</button>
  </div>
</div>
```

### Table

```html
<table class="bit-table">
  <thead>
    <tr><th>Name</th><th>Score</th></tr>
  </thead>
  <tbody>
    <tr><td>Player 1</td><td>9800</td></tr>
    <tr><td>Player 2</td><td>7200</td></tr>
  </tbody>
</table>
```

### Animations

```html
<span class="is-blinking">Blinking</span>
<span class="is-bouncing">Bouncing</span>
<div class="is-shaking">Shaking</div>
```

## Theming

All colors are CSS Custom Properties. Override in your stylesheet:

```css
:root {
  --8bit-btn-primary-bg: #e040fb;
  --8bit-btn-primary-hover: #ce2eea;
  --8bit-btn-primary-shadow: #8b00a8;
}
```

See [`scss/base/variables.scss`](scss/base/variables.scss) for the full list.

## Dark mode

Automatic via `prefers-color-scheme: dark`, or force it manually:

```html
<html data-theme="dark">
```

## SCSS source

```scss
// Full
@use "node_modules/8bit.css/scss/8bit";

// Core only (no decorative components)
@use "node_modules/8bit.css/scss/8bit-core";

// Individual components
@use "node_modules/8bit.css/scss/elements/buttons";
```

## Browser support

Chrome 111+, Firefox 113+, Safari 16.2+

## License

MIT

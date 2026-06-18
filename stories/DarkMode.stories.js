export default {
  title: "Utilities/Dark Mode",
  parameters: { layout: "padded", backgrounds: { default: "dark" } },
};

export const DarkTheme = {
  render: () => `
    <div data-theme="dark" style="padding:2rem;background:#212529;display:flex;flex-direction:column;gap:1.5rem">
      <div style="display:flex;gap:0.75rem;flex-wrap:wrap">
        <button class="bit-btn">Default</button>
        <button class="bit-btn is-primary">Primary</button>
        <button class="bit-btn is-success">Success</button>
        <button class="bit-btn is-error">Error</button>
      </div>
      <div class="bit-container with-title" style="max-width:300px;margin-top:1.5rem">
        <p class="title">Container</p>
        <p>Dark mode container content.</p>
      </div>
      <progress class="bit-progress is-primary" value="60" max="100" style="width:300px"></progress>
      <input class="bit-input" type="text" placeholder="Dark input" style="width:300px" />
    </div>
  `,
};

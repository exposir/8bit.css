export default {
  title: "Components/Badge",
  parameters: { layout: "centered" },
};

export const AllVariants = {
  render: () => `
    <div style="display:flex;gap:0.75rem;align-items:center;flex-wrap:wrap">
      <span class="bit-badge">Default</span>
      <span class="bit-badge is-primary">Primary</span>
      <span class="bit-badge is-success">Success</span>
      <span class="bit-badge is-warning">Warning</span>
      <span class="bit-badge is-error">Error</span>
    </div>
  `,
};

export const InlineWithText = {
  render: () => `
    <p style="font-size:0.875rem">
      Status: <span class="bit-badge is-success">Online</span>
      &nbsp; Lives: <span class="bit-badge is-error">3</span>
      &nbsp; Level: <span class="bit-badge is-primary">42</span>
    </p>
  `,
};

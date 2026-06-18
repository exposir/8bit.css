export default {
  title: "Components/Button",
  parameters: { layout: "centered" },
  argTypes: {
    label: { control: "text" },
    variant: {
      control: "select",
      options: ["default", "primary", "success", "warning", "error"],
    },
    disabled: { control: "boolean" },
  },
};

const Template = ({ label, variant, disabled }) => {
  const cls = [
    "bit-btn",
    variant && variant !== "default" ? `is-${variant}` : "",
    disabled ? "is-disabled" : "",
  ]
    .filter(Boolean)
    .join(" ");
  return `<button type="button" class="${cls}">${label}</button>`;
};

export const Default = Template.bind({});
Default.args = { label: "Button", variant: "default", disabled: false };

export const Primary = Template.bind({});
Primary.args = { label: "Primary", variant: "primary", disabled: false };

export const Success = Template.bind({});
Success.args = { label: "Success", variant: "success", disabled: false };

export const Warning = Template.bind({});
Warning.args = { label: "Warning", variant: "warning", disabled: false };

export const Error = Template.bind({});
Error.args = { label: "Error", variant: "error", disabled: false };

export const Disabled = Template.bind({});
Disabled.args = { label: "Disabled", variant: "default", disabled: true };

export const AllVariants = {
  render: () => `
    <div style="display:flex;gap:1rem;flex-wrap:wrap;align-items:center">
      <button class="bit-btn">Default</button>
      <button class="bit-btn is-primary">Primary</button>
      <button class="bit-btn is-success">Success</button>
      <button class="bit-btn is-warning">Warning</button>
      <button class="bit-btn is-error">Error</button>
      <button class="bit-btn is-disabled">Disabled</button>
    </div>
  `,
};

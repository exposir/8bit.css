export default {
  title: "Components/Progress",
  parameters: { layout: "padded" },
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100 } },
    variant: {
      control: "select",
      options: ["default", "primary", "success", "warning", "error"],
    },
  },
};

const Template = ({ value, variant }) => {
  const cls = [
    "bit-progress",
    variant && variant !== "default" ? `is-${variant}` : "",
  ]
    .filter(Boolean)
    .join(" ");
  return `<progress class="${cls}" value="${value}" max="100" style="width:300px"></progress>`;
};

export const Default = Template.bind({});
Default.args = { value: 50, variant: "default" };

export const Primary = Template.bind({});
Primary.args = { value: 70, variant: "primary" };

export const AllVariants = {
  render: () => `
    <div style="display:flex;flex-direction:column;gap:1rem;width:300px">
      <progress class="bit-progress" value="30" max="100"></progress>
      <progress class="bit-progress is-primary" value="50" max="100"></progress>
      <progress class="bit-progress is-success" value="70" max="100"></progress>
      <progress class="bit-progress is-warning" value="85" max="100"></progress>
      <progress class="bit-progress is-error" value="100" max="100"></progress>
    </div>
  `,
};

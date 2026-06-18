import "../scss/8bit.scss";

/** @type {import('@storybook/html').Preview} */
const preview = {
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#fff" },
        { name: "dark", value: "#212529" },
      ],
    },
    layout: "centered",
  },
};

export default preview;

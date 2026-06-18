export default {
  title: "Utilities/Animations",
  parameters: { layout: "centered" },
};

export const Blinking = {
  render: () => `<button class="bit-btn is-primary is-blinking">Blinking</button>`,
};

export const Bouncing = {
  render: () => `<button class="bit-btn is-success is-bouncing">Bouncing</button>`,
};

export const Shaking = {
  render: () => `<button class="bit-btn is-error is-shaking">Shaking</button>`,
};

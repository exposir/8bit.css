export default {
  title: "Components/Balloon",
  parameters: { layout: "padded" },
};

export const Default = {
  render: () => `
    <div style="padding:2rem">
      <div class="bit-balloon" style="max-width:250px">
        <p>Hello! I'm a speech balloon.</p>
      </div>
    </div>
  `,
};

export const FromRight = {
  render: () => `
    <div style="padding:2rem">
      <div class="bit-balloon from-right" style="max-width:250px">
        <p>Tail on the right side.</p>
      </div>
    </div>
  `,
};

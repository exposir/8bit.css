export default {
  title: "Components/Container",
  parameters: { layout: "padded" },
};

export const Default = {
  render: () => `
    <div class="bit-container" style="width:300px">
      <p>Hello, I'm a container!</p>
    </div>
  `,
};

export const WithTitle = {
  render: () => `
    <div class="bit-container bit-with-title" style="width:300px;margin-top:2rem">
      <p class="bit-title">Title</p>
      <p>Content goes here.</p>
    </div>
  `,
};

export const Dark = {
  render: () => `
    <div class="bit-container is-dark" style="width:300px">
      <p>Dark container</p>
    </div>
  `,
};

export const DarkWithTitle = {
  render: () => `
    <div class="bit-container is-dark bit-with-title" style="width:300px;margin-top:2rem">
      <p class="bit-title">Dark Title</p>
      <p>Dark content here.</p>
    </div>
  `,
};

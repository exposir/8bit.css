export default {
  title: "Components/List",
  parameters: { layout: "padded" },
};

export const Default = {
  render: () => `
    <ul class="bit-list" style="width:250px">
      <li>Item One</li>
      <li>Item Two</li>
      <li>Item Three</li>
    </ul>
  `,
};

export const Disc = {
  render: () => `
    <ul class="bit-list is-disc" style="width:250px">
      <li>Mushroom</li>
      <li>Fire Flower</li>
      <li>Star</li>
    </ul>
  `,
};

export const Circle = {
  render: () => `
    <ul class="bit-list is-circle" style="width:250px">
      <li>Heart</li>
      <li>Shield</li>
      <li>Sword</li>
    </ul>
  `,
};

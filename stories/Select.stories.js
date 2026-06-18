export default {
  title: "Components/Form/Select",
  parameters: { layout: "centered" },
};

export const Default = {
  render: () => `
    <div class="bit-select">
      <select>
        <option>-- Choose Hero --</option>
        <option>Mario</option>
        <option>Luigi</option>
        <option>Peach</option>
        <option>Toad</option>
      </select>
    </div>
  `,
};

export const Disabled = {
  render: () => `
    <div class="bit-select">
      <select disabled>
        <option>Disabled</option>
      </select>
    </div>
  `,
};

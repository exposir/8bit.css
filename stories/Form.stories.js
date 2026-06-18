export default {
  title: "Components/Form",
  parameters: { layout: "padded" },
};

export const Input = {
  render: () => `
    <div style="display:flex;flex-direction:column;gap:1rem;width:300px">
      <input class="bit-input" type="text" placeholder="Default input" />
      <input class="bit-input is-success" type="text" value="Valid value" />
      <input class="bit-input is-error" type="text" value="Invalid value" />
      <input class="bit-input is-warning" type="text" value="Warning state" />
      <input class="bit-input" type="text" placeholder="Disabled" disabled />
      <textarea class="bit-input" placeholder="Textarea"></textarea>
    </div>
  `,
};

export const Checkbox = {
  render: () => `
    <div style="display:flex;flex-direction:column;gap:0.75rem">
      <label class="bit-checkbox">
        <input type="checkbox" checked />
        <span>Checked</span>
      </label>
      <label class="bit-checkbox">
        <input type="checkbox" />
        <span>Unchecked</span>
      </label>
      <label class="bit-checkbox">
        <input type="checkbox" disabled />
        <span>Disabled</span>
      </label>
    </div>
  `,
};

export const Radio = {
  render: () => `
    <div style="display:flex;flex-direction:column;gap:0.75rem">
      <label class="bit-radio">
        <input type="radio" name="demo" checked />
        <span>Option A</span>
      </label>
      <label class="bit-radio">
        <input type="radio" name="demo" />
        <span>Option B</span>
      </label>
      <label class="bit-radio">
        <input type="radio" name="demo" disabled />
        <span>Disabled</span>
      </label>
    </div>
  `,
};

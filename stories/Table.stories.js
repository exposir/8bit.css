export default {
  title: "Components/Table",
  parameters: { layout: "padded" },
};

const tableHTML = (cls = "") => `
  <table class="bit-table ${cls}" style="width:400px">
    <thead>
      <tr><th>Name</th><th>Class</th><th>HP</th></tr>
    </thead>
    <tbody>
      <tr><td>Mario</td><td>Plumber</td><td>★★★</td></tr>
      <tr><td>Link</td><td>Hero</td><td>★★★★</td></tr>
      <tr><td>Samus</td><td>Bounty Hunter</td><td>★★★★★</td></tr>
    </tbody>
  </table>
`;

export const Default = { render: () => tableHTML() };
export const Bordered = { render: () => tableHTML("is-bordered") };
export const Dark = { render: () => tableHTML("is-dark") };
export const Centered = { render: () => tableHTML("is-centered") };

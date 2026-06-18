export default {
  title: "Components/Dialog",
  parameters: { layout: "padded" },
};

export const Default = {
  render: () => `
    <div style="position:relative;height:300px">
      <div class="bit-dialog" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)">
        <div class="bit-dialog-header">Game Over</div>
        <div class="bit-dialog-body">
          <p>You have lost all your lives.</p>
          <p>Continue?</p>
        </div>
        <div class="bit-dialog-footer">
          <button class="bit-btn">No</button>
          <button class="bit-btn is-primary">Yes</button>
        </div>
      </div>
    </div>
  `,
};

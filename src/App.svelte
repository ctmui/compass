<script>
  import ButtonExample from "./components/Button/ButtonExample.svelte";
  import GroupedButtonsExample from "./components/GroupedButtons/GroupedButtonsExample.svelte";

  let activeComponent = "GroupedButtonsExample";

  let components = {
    ButtonExample,
    GroupedButtonsExample

  }
</script>

<style>
  .container {
    margin: 80px 0 0;
    padding: 8px;
  }

  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    box-shadow: 0 0 2px 0 rgba(32, 43, 51, 0.16),
      0 2px 4px 0 rgba(32, 43, 51, 0.12);
    background: #fff;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }
</style>

<div class="header">
  <select bind:value={activeComponent}>
    <option value="ButtonExample">Button</option>
    <option value="GroupedButtonsExample">Grouped Button</option>
  </select>
</div>

<div class="container">
  <svelte:component this={components[activeComponent]} />
</div>

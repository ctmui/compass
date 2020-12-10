<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let size = "default";
  export let isDisabled = false;
  export let buttons = [];

  function handleClick(buttonIndex) {
    dispatch("select", { index: buttonIndex, button: buttons[buttonIndex] });
  }
</script>

<style>
  .grouped-button {
    display: flex;
    width: 100%;
  }

  button {
    border: none;
    height: 48px;
    color: var(--compass-n16);
    padding: 0 24px;
    background: #fff;
    box-shadow: 0 0 0 1px var(--compass-n5);
    outline: none;
    font-weight: 500;
    font-size: 16px;
  }

  button:first-child {
    border-radius: 4px 0 0 4px;
  }

  button:last-child {
    border-radius: 0 4px 4px 0;
  }

  button:active {
    box-shadow: 0 0 0 1px var(--compass-ocean-blue-7);
    z-index: 2;
    color: var(--compass-ocean-blue-7);
  }

  button:not(:first-child):not(:last-child) {
    border-left: none;
    border-right: none;
  }

  button:disabled {
    opacity: 0.3;
  }

  .selected {
    background: var(--compass-ocean-blue-1);
    box-shadow: 0 0 0 1px var(--compass-ocean-blue-7);
    z-index: 1;
    color: var(--compass-ocean-blue-7);
  }

  @media (min-width: 768px) {
    .small {
      height: 44px;
      padding: 0 20px;
    }

    .x-small {
      height: 40px;
      padding: 0 16px;
    }
  }
</style>

<div class="grouped-button">
  {#each buttons as button, i}
    <button
      disabled={isDisabled}
      class={size}
      on:click={() => handleClick(i)}
      class:selected={button.selected}
      {...button.props}>{button.label}</button>
  {/each}
</div>

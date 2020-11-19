<script>
  import { createEventDispatcher } from "svelte";

  export let size = "default";
  export let layerStyle = "default";
  export let theme = "default";
  export let isDisabled = false;
  export let isMobileHalfWidth = false;
  export let Icon = null;
  export let isIconOnly = false;

  const dispatch = createEventDispatcher();

  function handleClick(event) {
    dispatch("click", event);
  }
</script>

<style>
  :root {
    --responsive-width: 100%;
    --responsive-height: 48px;
    --responsive-padding: 12px 16px;
    --responsive-min-width: 168px;
  }

  .compass-button {
    min-width: var(--responsive-min-width);
    height: var(--responsive-height);
    padding: var(--responsive-padding);
    background: var(--compass-ocean-blue-6);
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    width: var(--responsive-width);
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    outline: none;
  }

  .compass-button:disabled {
    opacity: 0.3;
    pointer-events: none;
  }

  .compass-button:active {
    background: var(--compass-ocean-blue-8);
  }

  .is-mobile-half-width {
    width: 50%;
  }

  .destructive {
    background: var(--compass-red-6);
  }

  .destructive:active {
    background: var(--compass-red-8);
  }

  .success {
    background: var(--compass-green-6);
  }

  .success:active {
    background: var(--compass-green-8);
  }

  .basic {
    background: var(--compass-n6);
  }

  .basic:active {
    background: var(--compass-n8);
  }

  .compass-button i {
    width: 24px;
    min-width: 24px;
    height: 24px;
    min-height: 24px;
    margin: 0 8px 0 0;
  }

  .is-icon-only {
    width: 48px;
    min-width: 48px;
    max-width: 48px;
  }

  .is-icon-only i {
    margin: 0;
  }

  .theme-outline {
    border: 1px solid var(--compass-ocean-blue-6);
    color: var(--compass-ocean-blue-6);
    background: transparent;
  }

  .theme-outline:active {
    background: var(--compass-ocean-blue-2);
  }

  .theme-outline.destructive {
    border: 1px solid var(--compass-red-6);
    color: var(--compass-red-6);
  }

  .theme-outline.destructive:active {
    background: var(--compass-red-2);
  }

  .theme-outline.success {
    border: 1px solid var(--compass-green-6);
    color: var(--compass-green-6);
  }

  .theme-outline.success:active {
    background: var(--compass-green-2);
  }

  .theme-ghost {
    border: none;
    color: var(--compass-ocean-blue-6);
    background: transparent;
  }

  .theme-ghost:active {
    background: var(--compass-ocean-blue-2);
  }

  .theme-ghost.destructive {
    color: var(--compass-red-6);
  }

  .theme-ghost.destructive:active {
    background: var(--compass-red-2);
  }

  .theme-ghost.success {
    color: var(--compass-green-6);
  }

  .theme-ghost.success:active {
    background: var(--compass-green-2);
  }

  @media (min-width: 768px) {
    :root {
      --responsive-width: unset;
      --responsive-height: 48px;
      --responsive-padding: 12px 24px;
      --responsive-min-width: 100px;
    }

    .is-mobile-half-width {
      width: unset;
    }

    .small {
      height: 44px;
    }

    .x-small {
      height: 40px;
    }

    .compass-button:hover {
      background: var(--compass-ocean-blue-7);
    }

    .compass-button:active {
      background: var(--compass-ocean-blue-8);
    }

    .destructive:hover {
      background: var(--compass-red-7);
    }

    .destructive:active {
      background: var(--compass-red-8);
    }
    .success:hover {
      background: var(--compass-green-7);
    }
    .success:active {
      background: var(--compass-green-8);
    }
    .basic:hover {
      background: var(--compass-n7);
    }

    .basic:active {
      background: var(--compass-n8);
    }

    .theme-outline:hover {
      background: var(--compass-ocean-blue-1);
    }

    .theme-outline:active {
      background: var(--compass-ocean-blue-2);
    }

    .theme-outline.destructive:hover {
      background: var(--compass-red-1);
    }

    .theme-outline.destructive:active {
      background: var(--compass-red-2);
    }

    .theme-outline.success:hover {
      background: var(--compass-green-1);
    }

    .theme-outline.success:active {
      background: var(--compass-green-2);
    }
    .theme-ghost:hover {
      background: var(--compass-ocean-blue-1);
    }

    .theme-ghost:active {
      background: var(--compass-ocean-blue-2);
    }

    .theme-ghost.destructive:hover {
      background: var(--compass-red-1);
    }

    .theme-ghost.destructive:active {
      background: var(--compass-red-2);
    }

    .theme-ghost.success:hover {
      background: var(--compass-green-1);
    }

    .theme-ghost.success:active {
      background: var(--compass-green-2);
    }
  }
</style>

<button
  on:click={handleClick}
  disabled={isDisabled}
  class="compass-button {size} {layerStyle} theme-{theme}"
  class:is-mobile-half-width={isMobileHalfWidth}
  class:is-icon-only={isIconOnly}>
  {#if Icon}
    <i><svelte:component this={Icon} /></i>
  {/if}
  <slot />
</button>

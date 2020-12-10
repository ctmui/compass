<script>
  import Prism from "prismjs";
  import "prism-svelte";

  export let component;
  export let props;

</script>

<style>
  .example-preview {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
  }

  @media (min-width: 768px) {
    .example-preview {
      display: flex;
      flex-direction: row;
    }
  }
</style>

<div class="example-preview">
  <svelte:component this={component} {...props}>
    <slot />
  </svelte:component>
</div>

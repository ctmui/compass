<script>
  export let open = false;
</script>

<style>
  .side-nav {
    position: fixed;
    top: 0;
    bottom: 0;
    left: -324px;
    width: 300px;
    background: #fff;
    z-index: 10;
    box-shadow: 0 12px 24px -4px rgba(32, 43, 51, 0.24),
      0 8px 60px 0 rgba(32, 43, 51, 0.32);
  }

  .open {
    left: 0;
  }
</style>

<nav class="side-nav" class:open />

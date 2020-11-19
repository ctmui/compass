<script>
  import Button from "./components/Button";
  import Clock from "./icons/Clock.svelte";
</script>

<style>
  .container {
    padding: 8px;
  }

  h2 {
    border-bottom: 1px solid #ccc;
    margin: 0 0 16px;
    padding: 0 0 16px;
  }

  h3 {
    margin: 0 0 8px;
  }

  .row {
    display: flex;
    margin: 0 0 20px;
  }

  .col {
    flex-grow: 1;
    margin: 0 8px 0 0;
  }

  .col:last-child {
    margin: 0;
  }

  .desktop-only {
    display: none;
  }

  @media (min-width: 768px) {
    .mobile-only {
      display: none;
    }

    .desktop-only {
      display: block;
    }
  }
</style>

<div class="container">
  <h1>Primary Buttons</h1>
  <h2>Sizes</h2>
  <div class="row">
    <div class="col mobile-only">
      <h3>Full width</h3>
      <Button>Hello, world!</Button>
    </div>
  </div>
  <div class="row">
    <div class="col mobile-only">
      <h3>Half width</h3>
      <Button isMobileHalfWidth>Hello, world!</Button>
    </div>

    <div class="col desktop-only">
      <h3>Default</h3>
      <Button>Hello, world!</Button>
    </div>

    <div class="col desktop-only">
      <h3>Small</h3>
      <Button size="small">Hello, world!</Button>
    </div>

    <div class="col desktop-only">
      <h3>X-Small</h3>
      <Button size="x-small">Hello, world!</Button>
    </div>
  </div>

  <h2>Layer Styles</h2>
  <h3>Default</h3>
  <div class="row">
    <div class="col">
      <Button>Hello, world!</Button>
    </div>

    <div class="col">
      <Button isDisabled>Hello, world!</Button>
    </div>
  </div>

  <h3>Destructive</h3>
  <div class="row">
    <div class="col">
      <Button layerStyle="destructive">Hello, world!</Button>
    </div>

    <div class="col">
      <Button layerStyle="destructive" isDisabled>Hello, world!</Button>
    </div>
  </div>

  <h3>Success</h3>
  <div class="row">
    <div class="col">
      <Button layerStyle="success">Hello, world!</Button>
    </div>

    <div class="col">
      <Button layerStyle="success" isDisabled>Hello, world!</Button>
    </div>
  </div>

  <h3>Basic</h3>
  <div class="row">
    <div class="col">
      <Button layerStyle="basic">Hello, world!</Button>
    </div>

    <div class="col">
      <Button layerStyle="basic" isDisabled>Hello, world!</Button>
    </div>
  </div>

  <h2>Icon</h2>

  <div class="row">
    <div class="col">
      <Button Icon={Clock}>Hello, world!</Button>
    </div>

    <div class="col">
      <Button isIconOnly Icon={Clock} />
    </div>
  </div>

  <h2>Outline</h2>

  <h3>Default</h3>
  <div class="row">
    <div class="col">
      <Button theme="outline">Hello, world!</Button>
    </div>
    <div class="col">
      <Button theme="outline" isDisabled>Hello, world!</Button>
    </div>
  </div>

  <h3>Destructive</h3>
  <div class="row">
    <div class="col">
      <Button theme="outline" layerStyle="destructive">Hello, world!</Button>
    </div>
    <div class="col">
      <Button theme="outline" layerStyle="destructive" isDisabled>Hello, world!</Button>
    </div>
  </div>

  <h3>Success</h3>
  <div class="row">
    <div class="col">
      <Button theme="outline" layerStyle="success">Hello, world!</Button>
    </div>
    <div class="col">
      <Button theme="outline" layerStyle="success" isDisabled>Hello, world!</Button>
    </div>
  </div>

  <h2>Ghost</h2>

  <h3>Default</h3>
  <div class="row">
    <div class="col">
      <Button theme="ghost">Hello, world!</Button>
    </div>
    <div class="col">
      <Button theme="ghost" isDisabled>Hello, world!</Button>
    </div>
  </div>

  <h3>Destructive</h3>
  <div class="row">
    <div class="col">
      <Button theme="ghost" layerStyle="destructive">Hello, world!</Button>
    </div>
    <div class="col">
      <Button theme="ghost" layerStyle="destructive" isDisabled>Hello, world!</Button>
    </div>
  </div>

  <h3>Success</h3>
  <div class="row">
    <div class="col">
      <Button theme="ghost" layerStyle="success">Hello, world!</Button>
    </div>
    <div class="col">
      <Button theme="ghost" layerStyle="success" isDisabled>Hello, world!</Button>
    </div>
  </div>
</div>

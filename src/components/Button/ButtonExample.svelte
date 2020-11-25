<script>
  import Prism from "prismjs";
  import "prism-svelte";

  import Clock from "../../icons/Clock.svelte";
  import Copy from "../../icons/Copy.svelte";
  import Tick from "../../icons/Tick.svelte";

  import Button from "./Button.svelte";

  let props = {
    size: {
      type: "list",
      name: "Size",
      options: ["default", "small", "x-small"],
    },
    layerStyle: {
      type: "list",
      name: "Style",
      options: ["default", "destructive", "success", "basic"],
    },
    theme: {
      type: "list",
      name: "Theme",
      options: ["default", "outline", "ghost"],
    },
    Icon: {
      name: "Icon",
      type: "icon",
    },
    isIconOnly: {
      name: "Just icon",
      type: "boolean",
    },
    isDisabled: {
      name: "Disabled",
      type: "boolean",
    },
    isMobileHalfWidth: {
      name: "Half width (mobile only)",
      type: "boolean",
    },
    "on:click": {
      name: "Click event",
      type: "directive",
    },
  };

  let showIcon = false;
  $: {
    buttonProps.Icon = showIcon ? Clock : null;
  }

  let buttonProps = {};
  let buttonMethods = ``;

  let propString = "";
  $: {
    propString = "";
    buttonMethods = "";
    Object.keys(buttonProps).forEach((propKey) => {
      if (props[propKey].type === "list") {
        if (buttonProps[propKey])
          propString += `\n    ${propKey || ""}="${buttonProps[propKey]}"`;
      }

      if (props[propKey].type === "icon") {
        if (buttonProps[propKey])
          propString += `\n    ${propKey || ""}={Clock} `;
      }

      if (props[propKey].type === "boolean") {
        if (buttonProps[propKey]) propString += `\n    ${propKey || ""} `;
      }

      if (props[propKey].type === "directive") {
        if (buttonProps[propKey]) {
          propString += `\n    ${propKey + "={handleClick}" || ""} `;
          buttonMethods += `
          
    function handleClick() {
      //...
    }`;
        }
      }
    });

    propString = propString.replace(/\s+$/, "");
  }

  $: codeBlock = `
  \<script\>
    import { Button } from @ctm/compass;${buttonMethods}
  \</script\>

  \<Button ${propString}\>Hello, world!\</Button\>
  `;

  $: highlighted = Prism.highlight(codeBlock, Prism.languages.svelte, "svelte");

  let isCopied = false;
  function copyToClipboard() {
    navigator.clipboard.writeText(codeBlock).then(
      function () {
        isCopied = true;
      },
      function (err) {
        isCopied = false;
      }
    );

    setTimeout(() => {
      isCopied = false;
    }, 3000);
  }
</script>

<style>
  .prop-editor-container {
    display: flex;
    flex-direction: column;
  }

  .prop-editor {
    display: flex;
    flex-direction: column;
  }

  .prop-editor-item {
    margin: 0 0 8px;
  }

  .prop-editor-item label {
    text-transform: capitalize;
  }

  .prop-editor-preview {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
  }

  pre {
    background: rgba(0, 0, 0, 0.8);
    padding: 12px;
    color: #fff;
    display: flex;
    border-radius: 8px;
    position: relative;
    overflow-x: scroll;
    display: flex;
    flex-direction: column;
  }

  pre code {
    overflow-x: scroll;
  }

  @media (min-width: 768px) {
    .prop-editor-container {
      display: flex;
      flex-direction: row;
    }

    .copy {
      position: absolute;
      top: 8px;
      right: 8px;
      display: flex;
    }
  }
</style>

<div class="prop-editor-container">
  <div class="prop-editor">
    {#each Object.keys(props) as propKey}
      <div class="prop-editor-item">
        <label for={propKey}>{props[propKey].name}:</label>
        {#if props[propKey].type === 'list'}
          <select id={propKey} bind:value={buttonProps[propKey]}>
            {#each props[propKey].options as option}
              <option value={option}>{option}</option>
            {/each}
          </select>
        {/if}

        {#if props[propKey].type === 'icon'}
          <input id={propKey} type="checkbox" bind:checked={showIcon} />
        {/if}

        {#if props[propKey].type === 'boolean'}
          <input
            id={propKey}
            type="checkbox"
            bind:checked={buttonProps[propKey]} />
        {/if}

        {#if props[propKey].type === 'directive'}
          <input
            id={propKey}
            type="checkbox"
            bind:checked={buttonProps[propKey]} />
        {/if}
      </div>
    {/each}
  </div>

  <div class="prop-editor-preview">
    <Button {...buttonProps}>
      {#if !buttonProps.isIconOnly}Hello, world!{/if}
    </Button>
  </div>
</div>

<pre>
  <div class="copy">
    <Button
      on:click={copyToClipboard}
      Icon={isCopied ? Tick : Copy}
      theme="ghost"
      size="x-small">{isCopied ? 'Code copied' : 'Copy to clipboard'}</Button>
  </div>
  <code>{@html highlighted}</code>
</pre>

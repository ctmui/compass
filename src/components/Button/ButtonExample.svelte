<script>
  import Clock from "../../icons/Clock.svelte";

  import Button from "./Button.svelte";

  let props = {
    size: {
      type: "list",
      options: ["default", "small", "x-small"],
    },
    layerStyle: {
      type: "list",
      options: ["default", "destructive", "success", "basic"],
    },
    theme: {
      type: "list",
      options: ["default", "outline", "ghost"],
    },
    Icon: {
      type: "icon",
    },
    isIconOnly: {
      type: "boolean",
    },
    isDisabled: {
      type: "boolean",
    },
    isMobileHalfWidth: {
      type: "boolean",
    },
  };

  let showIcon = false;
  $: {
    buttonProps.Icon = showIcon ? Clock : null;
  }

  let buttonProps = {};

  let propString = '';
  $: {
    propString = '';
    Object.keys(buttonProps).forEach(propKey => {
      if (props[propKey].type === 'list') {
        if (buttonProps[propKey]) propString += `${propKey || ''}="${buttonProps[propKey]}" `
      }

      if (props[propKey].type === 'icon') {
        if (buttonProps[propKey]) propString += `${propKey || ''}={Clock} `
      }

      if (props[propKey].type === 'boolean') {
        if (buttonProps[propKey]) propString += `${propKey || ''} `
      }
    })

    propString = propString.replace(/\s+$/, '');
  }

  $: codeBlock = `
  \<script\>
    import { Button } from @ctm/compass;
  \</script\>

  \<Button ${propString}\>\</Button\>
  `;

  function copyToClipboard() {
    navigator.clipboard.writeText(codeBlock).then(function() {
  console.log('Async: Copying to clipboard was successful!');
}, function(err) {
  console.error('Async: Could not copy text: ', err);
});
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

  code {
    white-space: pre;
    background: rgba(0,0,0,.8);
    padding: 12px;
    color: #fff;
    display: flex;
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    .prop-editor-container {
      display: flex;
      flex-direction: row;
    }
  }
</style>

<div class="prop-editor-container">
  <div class="prop-editor">
    {#each Object.keys(props) as propKey}
      <div class="prop-editor-item">
        <label for={propKey}>{propKey}</label>
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
      </div>
    {/each}
  </div>

  <div class="prop-editor-preview">
    <Button {...buttonProps}>
      {#if !buttonProps.isIconOnly}Button{/if}
    </Button>
  </div>

  
</div>

<code on:click={copyToClipboard}> {codeBlock} </code>

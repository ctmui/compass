<script>
  export let fields = {};
  export let props = {};

  function handleIcon(key) {
    if (props[key]) {
      props[key] = null;
    } else {
      props[key] = fields[key].source.component;
    }
  }
</script>

<style>
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
</style>

<div class="prop-editor">
  {#each Object.keys(fields) as key}
    <div class="prop-editor-item">
      <label for={key}>{fields[key].name}:</label>
      {#if fields[key].type === 'list'}
        <select id={key} bind:value={props[key]}>
          {#each fields[key].options as option}
            <option value={option}>{option}</option>
          {/each}
        </select>
      {/if}

      {#if fields[key].type === 'icon'}
        <input id={key} type="checkbox" on:change={() => handleIcon(key)} />
      {/if}

      {#if fields[key].type === 'boolean'}
        <input id={key} type="checkbox" bind:checked={props[key]} />
      {/if}

      {#if fields[key].type === 'directive'}
        <input id={key} type="checkbox" bind:checked={props[key]} />
      {/if}

      {#if fields[key].type === 'collection'}
        <code>Array[]</code>
      {/if}
    </div>
  {/each}
</div>

<script>
  import Prism from "prismjs";
  import "prism-svelte";

  import { Button } from "@ctm/compass";
  import Copy from "./icons/Copy.svelte";
  import Tick from "./icons/Tick.svelte";

  export let componentName = "";
  export let props = {};
  export let fields = {};
  let buttonMethods = ``;
  let propString = "";
  let isCopied = false;

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

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

  $: {
    propString = "";
    buttonMethods = "";

    console.log("props :>> ", props);

    Object.keys(props).forEach((key) => {
      if (fields[key].type === "list") {
        if (props[key]) propString += `\n    ${key || ""}="${props[key]}"`;
      }

      if (fields[key].type === "icon") {
        if (props[key])
          propString += `\n    ${key || ""}={${fields[key].source.name}} `;
      }

      if (fields[key].type === "boolean") {
        if (props[key]) propString += `\n    ${key || ""} `;
      }

      if (fields[key].type === "collection") {
        if (props[key]) propString += `\n    {${key}} `;

        buttonMethods += `

    let buttons = [
      {
        label: "One",
        selected: true,
      },
      {
        label: "Two",
        selected: false,
      },
      {
        label: "Three",
        selected: false,
      }
    ];`;
      }

      if (fields[key].type === "directive") {
        if (props[key]) {
          propString += `\n    on:${key}={handle${capitalize(key)}} `;
          buttonMethods += `

    function handle${capitalize(key)}(event) {
      //...
    }`;
        }
      }
    });

    propString = propString.replace(/\s+$/, "");
  }

  $: codeBlock = `
  \<script\>
    import { ${componentName} } from @ctm/compass;${buttonMethods}
  \</script\>

  \<${componentName}${propString}\>
  \</${componentName}\>
  `;

  $: highlighted = Prism.highlight(codeBlock, Prism.languages.svelte, "svelte");
</script>

<style>
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
    .copy {
      position: absolute;
      top: 8px;
      right: 8px;
      display: flex;
    }
  }
</style>

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

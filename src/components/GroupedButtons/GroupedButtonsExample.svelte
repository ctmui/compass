<script>
  import { GroupedButtons } from "@ctm/compass";

  import PropsEditor from "../../PropEditor.svelte";
  import Example from "../../Example.svelte";
  import CodePreview from "../../CodePreview.svelte";

  let fields = {
    size: {
      type: "list",
      name: "Size",
      options: ["default", "small", "x-small"],
    },
    isDisabled: {
      name: "Disabled",
      type: "boolean",
    },
    select: {
      name: "Select event",
      type: "directive",
    },
    buttons: {
      name: "Buttons",
      type: "collection"
    }
  };

  let props = {
    buttons: [
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
      },
    ],
  };

  $: {
    console.log("props :>> ", props);
  }
</script>

<style>
</style>

<PropsEditor {fields} bind:props />
<Example component={GroupedButtons} {props} />
<CodePreview componentName="GroupedButtons" {fields} {props} />

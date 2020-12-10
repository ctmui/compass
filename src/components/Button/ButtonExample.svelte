<script>
  import Clock from "../../icons/Clock.svelte";

  import { Button } from "@ctm/compass";

  import PropsEditor from "../../PropEditor.svelte";
  import Example from "../../Example.svelte";
  import CodePreview from "../../CodePreview.svelte";

  let fields = {
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
      source: {
        name: "Clock",
        component: Clock,
      },
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
    click: {
      name: "Click event",
      type: "directive",
    },
  };

  let props = {};
</script>

<PropsEditor {fields} bind:props />
<Example component={Button} {props}>Hello, world!</Example>
<CodePreview componentName="Button" {fields} {props} />

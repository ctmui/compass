import type { SvelteComponent } from "svelte";

export interface GroupedButtonsProps {
  size?: "default" | "small" | "x-small";
  buttons?: any[];
  isDisabled?: boolean;
  select?: () => void;
}

declare class GroupedButtons extends SvelteComponent {
  $$prop_def: GroupedButtonsProps;
}

export default GroupedButtons;

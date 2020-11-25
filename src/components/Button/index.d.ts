import type { SvelteComponent } from "svelte";

export interface ButtonProps {
  size?: "default" | "small" | "x-small";
  layerStyle?: "default" | "destructive" | "success" | "basic";
  theme?: "default" | "outline" | "ghost";
  Icon?: any;
  isIconOnly?: boolean;
  isDisabled?: boolean;
  isMobileHalfWidth?: boolean;
  click?: () => void;
}

declare class Button extends SvelteComponent {
  $$prop_def: ButtonProps;
}

export default Button;

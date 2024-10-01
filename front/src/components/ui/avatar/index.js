import { cva } from "class-variance-authority";

export { default as Avatar } from "./Avatar.vue";
export { default as AvatarImage } from "./AvatarImage.vue";
export { default as AvatarFallback } from "./AvatarFallback.vue";

export const avatarVariant = cva(
  "inline-flex items-center justify-center font-normal text-stone-950 select-none shrink-0 bg-stone-100 overflow-hidden dark:text-stone-50 dark:bg-stone-800",
  {
    variants: {
      size: {
        sm: "h-10 w-10 text-xs",
        base: "h-16 w-16 text-2xl",
        lg: "h-32 w-32 text-5xl",
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-md",
      },
    },
  },
);

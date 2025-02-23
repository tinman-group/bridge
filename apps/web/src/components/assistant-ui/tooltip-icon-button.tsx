"use client";

import { cn, IconButton, IconButtonProps, Tooltip } from "@workspace/ui";

export type TooltipIconButtonProps = IconButtonProps & {
  tooltip: string;
  side?: "top" | "bottom" | "left" | "right";
};

export const TooltipIconButton = ({
  children,
  tooltip,
  side = "bottom",
  variant = "ghost",
  size = "1",
  className,
  ...rest
}: TooltipIconButtonProps) => {
  return (
    <Tooltip side={side} content={tooltip}>
      <IconButton
        variant={variant}
        size={size}
        className={cn(className)}
        {...rest}
      >
        {children}
      </IconButton>
    </Tooltip>
  );
};

TooltipIconButton.displayName = "TooltipIconButton";

import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export function AppMain({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div className={cn("flex-auto flex flex-col", className)} {...props}>
      {children}
    </div>
  );
}

export namespace AppMain {
  export const Header = ({ className, ...props }: ComponentProps<"header">) => (
    <header
      data-slot="header"
      className={cn("flex flex-row align-middle gap-2 p-2", className)}
      {...props}
    />
  );

  export const Content = ({ className, ...props }: ComponentProps<"main">) => (
    <main
      data-slot="content"
      className={cn("flex-auto flex flex-col align-top", className)}
      {...props}
    />
  );

  export const Footer = ({ className, ...props }: ComponentProps<"footer">) => (
    <footer
      data-slot="footer"
      className={cn("flex flex-row align-middle gap-2 p-2", className)}
      {...props}
    />
  );
}

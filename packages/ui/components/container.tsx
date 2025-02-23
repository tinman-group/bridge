import { Root } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, PropsWithChildren } from "react";
import { cn } from "../lib/utils.ts";

export type ContainerProps = PropsWithChildren<{
  asChild?: boolean;
  tagName?: string;
}>;

export function Container({
  asChild = false,
  tagName = "div",
  className,
  ...props
}: ContainerProps & ComponentProps<"div">) {
  const Comp = asChild ? Root : tagName;
  return (
    <Comp
      className={cn("h-full flex flex-col justify-stretch", className)}
      {...props}
    />
  );
}

Container.displayName = "Container";

const marginVariant = cva("flex flex-row items-stretch", {
  variants: {
    size: {
      sm: "min-h-12",
      default: "min-h-16",
      lg: "min-h-18",
      xl: "min-h-20",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const Header = ({
  asChild = false,
  className,
  size,
  ...props
}: ContainerProps &
  VariantProps<typeof marginVariant> &
  ComponentProps<"div">) => {
  const Comp = asChild ? Root : "header";
  return (
    <Comp
      className={cn(marginVariant({ size }), "border-b-1", className)}
      {...props}
    />
  );
};

Header.displayName = "Container.Header";
Container.Header = Header;

const Content = ({
  asChild = false,
  className,
  ...props
}: ContainerProps & ComponentProps<"div">) => {
  const Comp = asChild ? Root : "div";
  return <Comp className={cn("flex-auto", className)} {...props} />;
};
Content.displayName = "Container.Content";
Container.Content = Content;

const Footer = ({
  asChild = false,
  className,
  size,
  ...props
}: ContainerProps &
  VariantProps<typeof marginVariant> &
  ComponentProps<"div">) => {
  const Comp = asChild ? Root : "footer";
  return (
    <Comp
      className={cn(marginVariant({ size }), "border-t-1", className)}
      {...props}
    />
  );
};
Footer.displayName = "Container.Footer";
Container.Footer = Footer;

const Spacer = (props: ComponentProps<"div">) => (
  <div className="block relative h-full flex-auto" {...props} />
);
Spacer.displayName = "Container.Spacer";
Container.Spacer = Spacer;

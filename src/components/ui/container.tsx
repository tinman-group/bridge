import { cn } from "@/lib/utils";
import { Root } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, PropsWithChildren } from "react";

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

const marginVariant = cva(
  "flex flex-row items-center justify-between border-b-1 border-t-1",
  {
    variants: {
      size: {
        sm: "min-h-12 px-2",
        default: "min-h-16 px-4",
        lg: "min-h-18 px-4",
        xl: "min-h-20 px-6",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

Container.Header = ({
  asChild = false,
  className,
  size,
  ...props
}: ContainerProps &
  VariantProps<typeof marginVariant> &
  ComponentProps<"div">) => {
  const Comp = asChild ? Root : "header";
  return <Comp className={cn(marginVariant({ size }), className)} {...props} />;
};

Container.Content = ({
  asChild = false,
  className,
  ...props
}: ContainerProps & ComponentProps<"div">) => {
  const Comp = asChild ? Root : "div";
  return <Comp className={cn("flex-auto", className)} {...props} />;
};

Container.Footer = ({
  asChild = false,
  className,
  size,
  ...props
}: ContainerProps &
  VariantProps<typeof marginVariant> &
  ComponentProps<"div">) => {
  const Comp = asChild ? Root : "footer";
  return <Comp className={cn(marginVariant({ size }), className)} {...props} />;
};

Container.Spacer = (props: ComponentProps<"div">) => (
  <div className="block relative h-full flex-auto" {...props} />
);

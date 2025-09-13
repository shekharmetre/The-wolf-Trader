import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#3B82F6] text-white hover:bg-[#2563EB]", // Blue
        destructive:
          "bg-[#EF4444] text-white hover:bg-[#DC2626]", // Red
        outline:
          "border border-[#D1D5DB] bg-white hover:bg-[#F3F4F6] hover:text-[#111827]", // Gray outline
        secondary:
          "bg-blue-600 text-[#111827] hover:bg-[#D1D5DB]", // Light gray
        ghost:
          "hover:bg-[#F3F4F6] hover:text-[#111827]", // Transparent ghost
        link:
          "text-[#3B82F6] underline-offset-4 hover:underline", // Blue link
        premium:
          "bg-gradient-to-r from-[#9333EA] to-[#F59E0B] text-white border border-[#D1D5DB] hover:opacity-90 transition-opacity", // Purple→Amber gradient
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b border-[#2f3548]", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          `focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-2 md:py-4 lg:py-6 text-left font-medium md:font-semibold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:text-white data-[state=open]:text-white cursor-pointer text-[12px] md:text-[20px] lg:text-[28px] md:tracking-[-0.2px] lg:tracking-[-0.4px] leading-4.5 md:leading-7 lg:leading-9
          relative 
          after:absolute
          after:left-0
          after:bottom-0
          after:h-px
          after:w-full
          after:bg-[#2f3548]
          after:scale-x-0
          after:origin-left
          after:transition-transform
          after:duration-300
          data-[state=open]:after:scale-x-100

          `,

          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          className={cn(
            `pointer-events-none size-5 text-[#8f98b2] shrink-0 translate-y-0.5 transition-transform duration-100 `,
          )}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}
interface AccordionContentProps extends React.ComponentProps<typeof AccordionPrimitive.Content> {
  isSecondLast?: boolean;
}
function AccordionContent({
  className,
  children,
  isSecondLast,
  ...props
}: AccordionContentProps) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(
        "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm mt-3 text-left text-[12px] md:text-[16px] lg:text-[18px] font-normal leading-4.5 md:leading-6 lg:leading-7",
        isSecondLast ? "pb-0" : "pb-4",
        className,
      )}
      {...props}
    >
      <div className="pb-0">{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

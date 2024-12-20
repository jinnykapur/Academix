import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import React from "react";

const SearchBar = React.forwardRef(
  ({ className, name = "search", defaultValue = "", ...props }, ref) => {
    return (
      <form
        className={cn(
          "flex flex-col md:flex-row items-center space-y-2 space-x-2 p-2",
          className
        )}
        {...props}
      >
        <SearchBarInput name={name} ref={ref} defaultValue={defaultValue} />
        <SearchBarButton label={name} />
      </form>
    );
  }
);
SearchBar.displayName = "SearchBar";
export default SearchBar;

export const SearchBarInput = React.forwardRef(
  ({ className, name, type = "text", ...props }, ref) => {
    return (
      <Input
        className={cn(
          "bg-foreground font-bold lg:text-lg text-secondary-foreground rounded-lg",
          className
        )}
        ref={ref}
        type={type}
        name={name}
        {...props}
      />
    );
  }
);
SearchBarInput.displayName = "SearchBarInput";

export function SearchBarButton({
  className,
  label,
  type = "submit",
  ...props
}) {
  return (
    <Button
      className={cn(
        "rounded-lg bg-secondary-200 text-primary hover:bg-secondary-200/90 capitalize",
        className
      )}
      type={type}
      {...props}
    >
      {label}
    </Button>
  );
}

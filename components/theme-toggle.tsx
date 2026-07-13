import { Moon, Sun } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

export function ThemeToggle() {
  return (
    <button
      aria-label="Toggle color theme"
      aria-pressed="false"
      className={buttonVariants({ size: "icon", variant: "outline" })}
      data-theme-toggle
      title="Toggle color theme"
      type="button"
    >
      <Sun className="hidden h-4 w-4 dark:block" aria-hidden="true" />
      <Moon className="h-4 w-4 dark:hidden" aria-hidden="true" />
    </button>
  );
}

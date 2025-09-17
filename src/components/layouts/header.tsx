import { cn } from "@/lib/utils";

function Header({ text, className }: { text: string; className?: string }) {
  return (
    <header
      className={cn(
        "text-center font-lexend font-bold text-4xl uppercase italic",
        className
      )}
    >
      {text}
    </header>
  );
}

export default Header;

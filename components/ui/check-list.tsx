import { cn } from "@/lib/utils";

interface CheckListProps {
  items: (string | { title: string; detail: string })[];
  className?: string;
}

export function CheckList({ items, className }: CheckListProps) {
  return (
    <ul className={cn("space-y-3 text-sm text-muted-foreground", className)}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mt-0.5 flex-shrink-0"><path d="m5 12 5 5L20 7"></path></svg>
          {typeof item === "string" ? (
            <span>{item}</span>
          ) : (
            <span><strong className="text-foreground">{item.title}:</strong> {item.detail}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  // Called with the trimmed query when the form is submitted
  onSearch?: (query: string) => void;
}

// Search input + yellow submit button used inside the hero
export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch?.(query.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-md items-center gap-2"
    >
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Course, topic, creator"
          className="h-10 rounded-md border-none bg-white pl-9 text-sm text-slate-800 placeholder:text-slate-400"
        />
      </div>
      <Button
        type="submit"
        className="h-10 rounded-md bg-yellow-400 px-5 text-sm font-semibold text-blue-900 hover:bg-yellow-300"
      >
        Search
      </Button>
    </form>
  );
}

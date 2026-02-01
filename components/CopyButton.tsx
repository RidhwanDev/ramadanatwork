"use client";

import { useState, useCallback } from "react";
import { cn, copyToClipboard } from "@/lib/utils";
import { site } from "@/lib/content";

interface CopyButtonProps {
  text: string;
  className?: string;
  variant?: "default" | "compact";
}

export function CopyButton({ text, className, variant = "default" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center gap-1.5 font-medium transition-all duration-200",
        variant === "default" && "px-3 py-1.5 text-sm rounded-lg bg-sand-100 hover:bg-sand-200 text-night-700",
        variant === "compact" && "px-2 py-1 text-xs rounded-md bg-sand-100/80 hover:bg-sand-200 text-night-600",
        copied && "bg-green-100 text-green-700",
        className
      )}
      aria-label={copied ? site.toasts.copied : "Copy to clipboard"}
    >
      {copied ? (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>{site.toasts.copied}</span>
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <span>Copy</span>
        </>
      )}
    </button>
  );
}

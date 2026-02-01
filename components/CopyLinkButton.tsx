"use client";

import { useState, useCallback } from "react";
import { cn, copyToClipboard } from "@/lib/utils";
import { site } from "@/lib/content";

interface CopyLinkButtonProps {
  sectionId?: string;
  className?: string;
}

export function CopyLinkButton({ sectionId, className }: CopyLinkButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    const url = typeof window !== "undefined" 
      ? `${window.location.origin}${window.location.pathname}${sectionId ? `#${sectionId}` : ""}`
      : "";
    
    const success = await copyToClipboard(url);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [sectionId]);

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200",
        "px-3 py-1.5 rounded-lg text-night-600 hover:bg-sand-100",
        copied && "bg-green-100 text-green-700",
        className
      )}
      aria-label={copied ? site.toasts.linkCopied : "Copy link to this section"}
    >
      {copied ? (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>{site.toasts.linkCopied}</span>
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          <span>Copy link</span>
        </>
      )}
    </button>
  );
}

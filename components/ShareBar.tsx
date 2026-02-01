"use client";

import { useState, useCallback } from "react";
import { copyToClipboard } from "@/lib/utils";
import { site } from "@/lib/content";

interface ShareBarProps {
  title?: string;
  text?: string;
}

export function ShareBar({ title = site.name, text = site.tagline }: ShareBarProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = useCallback(async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const success = await copyToClipboard(url);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, []);

  const handleNativeShare = useCallback(async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url: window.location.href,
        });
      } catch {
        // User cancelled or share failed
      }
    }
  }, [title, text]);

  const canShare = typeof navigator !== "undefined" && !!navigator.share;

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <button
        onClick={handleCopyLink}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all ${
          copied 
            ? "bg-green-100 text-green-700" 
            : "bg-sand-100 text-night-700 hover:bg-sand-200"
        }`}
      >
        {copied ? (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {site.toasts.linkCopied}
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Copy link
          </>
        )}
      </button>

      {canShare && (
        <button
          onClick={handleNativeShare}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm bg-sand-100 text-night-700 hover:bg-sand-200 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          Share
        </button>
      )}
    </div>
  );
}

"use client";

import { useState, FormEvent } from "react";

export function RegisterInterestForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/register-interest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setName("");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to register interest. Please try again."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-night-700 mb-2">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Smith"
          className="w-full px-4 py-2.5 rounded-lg border border-sand-300 bg-white text-night-800 placeholder:text-night-400 focus:outline-none focus:ring-2 focus:ring-dusk-400 focus:border-transparent"
          disabled={status === "loading"}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-night-700 mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="john@example.com"
          className="w-full px-4 py-2.5 rounded-lg border border-sand-300 bg-white text-night-800 placeholder:text-night-400 focus:outline-none focus:ring-2 focus:ring-dusk-400 focus:border-transparent"
          disabled={status === "loading"}
        />
      </div>

      {status === "error" && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-700">{errorMessage}</p>
        </div>
      )}

      {status === "success" && (
        <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-700">
            Thank you! We&apos;ll notify you when the Workplace Pack is available.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Registering...
          </span>
        ) : status === "success" ? (
          "Registered!"
        ) : (
          "Register Interest"
        )}
      </button>
    </form>
  );
}

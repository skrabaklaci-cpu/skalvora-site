"use client";

import { useEffect } from "react";

export function AnalyticsPlaceholder() {
  useEffect(() => {
    // TODO: Replace with your analytics provider and keys (e.g. Plausible, GA4, PostHog).
    if (process.env.NODE_ENV === "development") {
      console.info("[Analytics Placeholder] Page view tracked.");
    }
  }, []);

  return null;
}

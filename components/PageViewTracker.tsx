"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

interface PageViewTrackerProps {
  event: string;
}

/**
 * Fires a named PostHog event once when a page mounts, on top of the
 * automatic `$pageview` capture (see `instrumentation-client.ts`). Gives
 * each static page its own named event (e.g. `about_page_viewed`) instead of
 * relying solely on URL-based filtering of `$pageview`.
 */
export function PageViewTracker({ event }: PageViewTrackerProps) {
  useEffect(() => {
    posthog.capture(event);
  }, [event]);

  return null;
}

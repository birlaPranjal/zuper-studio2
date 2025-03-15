export {};

declare global {
  interface Window {
    gtag: (
      command: "config" | "event",
      trackingIdOrEventName: string,
      options?: Record<string, unknown>
    ) => void;
  }
}

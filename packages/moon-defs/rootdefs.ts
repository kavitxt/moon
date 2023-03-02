import { MoonApi } from "moon/src/windowApi";

export { MoonApi };

export * from "moon/src/types";

declare global {
  const moon: MoonApi;

  // noinspection JSUnusedGlobalSymbols
  interface Window {
    moon: MoonApi;
  }
}

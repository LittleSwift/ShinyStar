import {HexoConfig, HexoSite, HexoTheme} from "~/config";

declare global {
  interface Window {
    __hexoConfig: HexoConfig;
    __hexoSite: HexoSite;
    __hexoTheme: HexoTheme;
  }
}

export {};

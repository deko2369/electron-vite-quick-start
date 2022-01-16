export interface IElectronAPI {
  doAthing: () => void
  doBthing: () => void
}

declare global {
  interface Window {
    api: IElectronAPI
  }
}
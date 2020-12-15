// eslint-disable-next-line
// @ts-ignore
import topbar from "topbar"

export interface TopbarSettings {
  autoRun?: boolean
  barThickness?: number
  barColors?: {
    [key: string]: string
  }
  shadowBlur?: number
  shadowColor?: string
  className?: string
}

export class Topbar {
  constructor(
    settings: TopbarSettings = {
      barColors: { 0: "#281483", 0.3: "#8f6ed5", 1.0: "#d782d9" }
    }
  ) {
    topbar.config(settings)
  }

  show() {
    return topbar.show()
  }

  hide() {
    return topbar.hide()
  }

  progress(to?: string | number) {
    return topbar.progress(to)
  }

  promised<TPromise extends Promise<unknown> = Promise<unknown>>(
    promise: TPromise
  ): TPromise {
    this.show()
    promise.then(this.hide)
    return promise
  }
}

export const awooBar = new Topbar()

export default Topbar

import { ApplicationInsights } from '@microsoft/applicationinsights-web'

class TelemetryService {
  private appInsights

  public initialize(instrumentationKey: string): void {
    this.appInsights = new ApplicationInsights({
      config: {
        instrumentationKey,
        enableAutoRouteTracking: true
      }
    })

    this.appInsights.loadAppInsights()
  }
}

export default new TelemetryService()

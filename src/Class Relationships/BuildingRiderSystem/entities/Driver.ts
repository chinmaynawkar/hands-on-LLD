import { DriverStatus } from "../enums";
import { Location } from "../Location";

//
export class Driver {
    private status: DriverStatus = DriverStatus.OFFLINE;
    private currentLocation: Location;

    constructor(
        public readonly id: string,
        private name:string,
        intialLocation: Location,
    ){
        this.currentLocation = intialLocation;

    }

    public getId(): string {
        return this.id;
}

public getName(): string {
    return this.name;
}

public getStatus(): DriverStatus {
    return this.status;
  }

  public getLocation(): Location {
    return this.currentLocation;
  }

  public updateLocation(newLocation: Location): void {
    this.currentLocation = newLocation;
  }

  public goOnline(): void {
    if (this.status === DriverStatus.ON_TRIP) {
      throw new Error("Driver cannot go online while on trip");
    }
    this.status = DriverStatus.ONLINE;
  }

  public goOffline(): void {
    if (this.status === DriverStatus.ON_TRIP) {
      throw new Error("Driver cannot go offline while on trip");
    }
    this.status = DriverStatus.OFFLINE;
  }

  public startTrip(): void {
    if (this.status !== DriverStatus.ONLINE) {
      throw new Error("Driver must be ONLINE to start a trip");
    }
    this.status = DriverStatus.ON_TRIP;
  }

  public endTrip(): void {
    if (this.status !== DriverStatus.ON_TRIP) {
      throw new Error("Driver is not currently ON_TRIP");
    }
    this.status = DriverStatus.ONLINE;
  }

  public isAvailable(): boolean {
    return this.status === DriverStatus.ONLINE;
  }
}
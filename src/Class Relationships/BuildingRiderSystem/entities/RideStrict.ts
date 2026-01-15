import { RideStatus } from "../enums";
import { Location } from "../Location";
import { RideEvent } from "./RiderEvent";

export class Ride {
    private status : RideStatus = RideStatus.REQUESTED;

    // Composition: ride owns ride events
    private readonly timeline: RideEvent[] = [];

    private driverId?: string;

    constructor(
          private readonly id: string,
    private readonly riderId: string,
    private readonly pickup: Location,
    private readonly drop: Location
  ) {
    this.timeline.push(new RideEvent(RideStatus.REQUESTED));
  }

  public getId(): string {
    return this.id;
  }

  public getStatus(): RideStatus {
    return this.status;
  }

  public getRiderId(): string {
    return this.riderId;
  }

  public getDriverId(): string | undefined {
    return this.driverId;
  }

  public getPickup(): Location {
    return this.pickup;
  }
  
  public getDrop(): Location {
    return this.drop;
  }

  public addEvent(event: RideEvent): void {
    this.timeline.push(event);
  }

   public getTimeline(): RideEvent[] {
    // defensive copy: don't allow external mutation
    return [...this.timeline];
  }

  // Association: ride is associated to a driver (not owned)
  public assignDriver(driverId: string): void {
    if (this.status !== RideStatus.REQUESTED) {
      throw new Error("Driver can only be assigned when ride is REQUESTED");
    }
    this.driverId = driverId;
    this.status = RideStatus.ACCEPTED;
    this.timeline.push(new RideEvent(RideStatus.ACCEPTED));
  }

  public startRide(): void {
    if (this.status !== RideStatus.ACCEPTED) {
      throw new Error("Ride can only start after it is ACCEPTED");
    }
    this.status = RideStatus.IN_PROGRESS;
    this.timeline.push(new RideEvent(RideStatus.IN_PROGRESS));
  }

  public completeRide(): void {
    if (this.status !== RideStatus.IN_PROGRESS) {
      throw new Error("Ride can only complete after it is IN_PROGRESS");
    }
    this.status = RideStatus.COMPLETE;
    this.timeline.push(new RideEvent(RideStatus.COMPLETE));
  }

  public cancelRide(): void {
    if (
      this.status !== RideStatus.REQUESTED &&
      this.status !== RideStatus.ACCEPTED
    ) {
      throw new Error("Ride can only be cancelled before IN_PROGRESS");
    }
    this.status = RideStatus.CANCELLED;
    this.timeline.push(new RideEvent(RideStatus.CANCELLED));
  }
}
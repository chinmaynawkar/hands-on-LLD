import { RideStatus } from "../enums";

export class RideEvent {
  constructor(
    public readonly status: RideStatus,
    public readonly at: Date = new Date()
  ) {}
}
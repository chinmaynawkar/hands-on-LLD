

export enum RideStatus {
    REQUESTED = "REQUESTED",
    ACCEPTED = "ACCEPTED",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETE = "COMPLETE",
    CANCELLED = "CANCELLED"
}

export enum DriverStatus {
    OFFLINE = "OFFLINE",
    ONLINE  = "ONLINE",
    ON_TRIP = "ONTRIP",
}

export enum PaymentStatus {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
}

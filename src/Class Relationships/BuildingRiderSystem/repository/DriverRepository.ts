import { Driver } from "../entities/Driver";

export class DriverRepository {
  private drivers = new Map<string, Driver>();

  save(driver: Driver): void {
    this.drivers.set(driver.getId(), driver);
  }

  findById(id: string): Driver {
    const driver = this.drivers.get(id);
    if (!driver) throw new Error(`Driver not found: ${id}`);
    return driver;
  }

  findAll(): Driver[] {
    return [...this.drivers.values()];
  }
}

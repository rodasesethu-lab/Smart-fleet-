export interface Vehicle {
  id: string; name: string; plate: string; make: string; model: string;
  year: number; status: "active" | "maintenance" | "idle"; fuelType: string;
  mileage: number; lastService: string; nextService: string; driver: string;
}
export interface Driver {
  id: string; name: string; phone: string; license: string; vehicleId: string;
  vehicleName: string; trips: number; efficiencyScore: number;
  status: "on_trip" | "available" | "off_duty";
}
export interface Trip {
  id: string; vehicleId: string; vehicleName: string; driver: string;
  startLocation: string; endLocation: string; distance: number;
  fuelUsed: number; cost: number; date: string; status: "completed" | "in_progress";
}
export interface FuelRecord {
  id: string; vehicleId: string; vehicleName: string; litres: number;
  costPerLitre: number; totalCost: number; odometer: number; date: string;
  station: string; anomaly: boolean; anomalyReason?: string;
}
export interface MaintenanceRecord {
  id: string; vehicleId: string; vehicleName: string; type: string;
  description: string; cost: number; date: string;
  status: "scheduled" | "overdue" | "completed"; priority: "high" | "medium" | "low";
}
export interface AIInsight {
  id: string; type: "cost_forecast" | "maintenance_alert" | "fuel_anomaly" | "efficiency_tip" | "utilisation";
  title: string; message: string; severity: "info" | "warning" | "critical";
  date: string; actionable: boolean;
}
export interface DashboardStats {
  totalVehicles: number; activeVehicles: number; totalDrivers: number;
  monthlyFuelCost: number; monthlyTripCount: number; avgCostPerKm: number;
  fuelEfficiency: number; maintenanceDue: number; co2Saved: number;
}

import { Vehicle, Driver, Trip, FuelRecord, MaintenanceRecord, AIInsight, DashboardStats } from "./types";

export const vehicles: Vehicle[] = [
  { id: "v001", name: "Truck Alpha", plate: "GP 123 ABC", make: "Toyota", model: "Hilux", year: 2021, status: "active", fuelType: "Diesel", mileage: 87420, lastService: "2026-09-15", nextService: "2026-11-15", driver: "Sipho Ndlovu" },
  { id: "v002", name: "Truck Bravo", plate: "GP 456 DEF", make: "Isuzu", model: "D-Max", year: 2020, status: "active", fuelType: "Diesel", mileage: 112350, lastService: "2026-08-20", nextService: "2026-10-20", driver: "Thabo Mokoena" },
  { id: "v003", name: "Truck Charlie", plate: "GP 789 GHI", make: "Ford", model: "Ranger", year: 2022, status: "maintenance", fuelType: "Diesel", mileage: 45200, lastService: "2026-10-01", nextService: "2026-12-01", driver: "Lerato Dlamini" },
  { id: "v004", name: "Van Delta", plate: "GP 321 JKL", make: "Volkswagen", model: "Transporter", year: 2019, status: "active", fuelType: "Diesel", mileage: 156780, lastService: "2026-07-10", nextService: "2026-10-10", driver: "Nomsa Khumalo" },
  { id: "v005", name: "Truck Echo", plate: "GP 654 MNO", make: "Toyota", model: "Hino 300", year: 2021, status: "active", fuelType: "Diesel", mileage: 93100, lastService: "2026-09-25", nextService: "2026-11-25", driver: "Bongani Zulu" },
  { id: "v006", name: "Van Foxtrot", plate: "GP 987 PQR", make: "Mercedes", model: "Vito", year: 2020, status: "idle", fuelType: "Diesel", mileage: 78900, lastService: "2026-06-15", nextService: "2026-09-15", driver: "Unassigned" },
  { id: "v007", name: "Truck Golf", plate: "GP 147 STU", make: "Isuzu", model: "NPR", year: 2023, status: "active", fuelType: "Diesel", mileage: 31200, lastService: "2026-10-10", nextService: "2026-12-10", driver: "Mandla Sithole" },
  { id: "v008", name: "Truck Hotel", plate: "GP 258 VWX", make: "Hino", model: "500", year: 2018, status: "active", fuelType: "Diesel", mileage: 201450, lastService: "2026-08-05", nextService: "2026-10-05", driver: "Kagiso Molefe" },
  { id: "v009", name: "Van India", plate: "GP 369 YZA", make: "Toyota", model: "Quantum", year: 2022, status: "active", fuelType: "Diesel", mileage: 54300, lastService: "2026-09-30", nextService: "2026-11-30", driver: "Palesa Mahlangu" },
  { id: "v010", name: "Truck Juliet", plate: "GP 741 BCD", make: "Ford", model: "Cargo", year: 2020, status: "active", fuelType: "Diesel", mileage: 134500, lastService: "2026-09-01", nextService: "2026-11-01", driver: "Tshepo Nkosi" },
  { id: "v011", name: "Van Kilo", plate: "GP 852 EFG", make: "Hyundai", model: "H100", year: 2021, status: "active", fuelType: "Diesel", mileage: 67800, lastService: "2026-10-05", nextService: "2026-12-05", driver: "Zanele Mthembu" },
  { id: "v012", name: "Truck Lima", plate: "GP 963 HIJ", make: "UD Trucks", model: "Kuzer", year: 2023, status: "active", fuelType: "Diesel", mileage: 22100, lastService: "2026-10-15", nextService: "2026-12-15", driver: "Mpho Radebe" },
];

export const drivers: Driver[] = [
  { id: "d001", name: "Sipho Ndlovu", phone: "072 345 6789", license: "EC", vehicleId: "v001", vehicleName: "Truck Alpha", trips: 47, efficiencyScore: 92, status: "on_trip" },
  { id: "d002", name: "Thabo Mokoena", phone: "083 456 7890", license: "EC", vehicleId: "v002", vehicleName: "Truck Bravo", trips: 52, efficiencyScore: 78, status: "available" },
  { id: "d003", name: "Lerato Dlamini", phone: "071 567 8901", license: "C1", vehicleId: "v003", vehicleName: "Truck Charlie", trips: 38, efficiencyScore: 88, status: "off_duty" },
  { id: "d004", name: "Nomsa Khumalo", phone: "064 678 9012", license: "C1", vehicleId: "v004", vehicleName: "Van Delta", trips: 61, efficiencyScore: 85, status: "on_trip" },
  { id: "d005", name: "Bongani Zulu", phone: "082 789 0123", license: "EC", vehicleId: "v005", vehicleName: "Truck Echo", trips: 44, efficiencyScore: 91, status: "available" },
  { id: "d006", name: "Mandla Sithole", phone: "073 890 1234", license: "EC", vehicleId: "v007", vehicleName: "Truck Golf", trips: 29, efficiencyScore: 94, status: "on_trip" },
  { id: "d007", name: "Kagiso Molefe", phone: "084 901 2345", license: "EC", vehicleId: "v008", vehicleName: "Truck Hotel", trips: 58, efficiencyScore: 72, status: "available" },
  { id: "d008", name: "Palesa Mahlangu", phone: "065 012 3456", license: "C1", vehicleId: "v009", vehicleName: "Van India", trips: 35, efficiencyScore: 89, status: "on_trip" },
  { id: "d009", name: "Tshepo Nkosi", phone: "076 123 4567", license: "EC", vehicleId: "v010", vehicleName: "Truck Juliet", trips: 50, efficiencyScore: 81, status: "available" },
  { id: "d010", name: "Zanele Mthembu", phone: "081 234 5678", license: "C1", vehicleId: "v011", vehicleName: "Van Kilo", trips: 33, efficiencyScore: 90, status: "off_duty" },
  { id: "d011", name: "Mpho Radebe", phone: "072 345 6780", license: "EC", vehicleId: "v012", vehicleName: "Truck Lima", trips: 21, efficiencyScore: 96, status: "on_trip" },
];

export const trips: Trip[] = [
  { id: "t001", vehicleId: "v001", vehicleName: "Truck Alpha", driver: "Sipho Ndlovu", startLocation: "Johannesburg CBD", endLocation: "Pretoria North", distance: 62, fuelUsed: 8.2, cost: 189, date: "2026-10-25", status: "completed" },
  { id: "t002", vehicleId: "v002", vehicleName: "Truck Bravo", driver: "Thabo Mokoena", startLocation: "Sandton", endLocation: "Midrand", distance: 28, fuelUsed: 4.1, cost: 94, date: "2026-10-25", status: "completed" },
  { id: "t003", vehicleId: "v004", vehicleName: "Van Delta", driver: "Nomsa Khumalo", startLocation: "Soweto", endLocation: "Roodepoort", distance: 35, fuelUsed: 5.8, cost: 133, date: "2026-10-25", status: "completed" },
  { id: "t004", vehicleId: "v005", vehicleName: "Truck Echo", driver: "Bongani Zulu", startLocation: "Centurion", endLocation: "Bronkhorstspruit", distance: 78, fuelUsed: 10.5, cost: 242, date: "2026-10-24", status: "completed" },
  { id: "t005", vehicleId: "v007", vehicleName: "Truck Golf", driver: "Mandla Sithole", startLocation: "Kempton Park", endLocation: "Springs", distance: 42, fuelUsed: 5.4, cost: 124, date: "2026-10-24", status: "completed" },
  { id: "t006", vehicleId: "v008", vehicleName: "Truck Hotel", driver: "Kagiso Molefe", startLocation: "Germiston", endLocation: "Boksburg", distance: 18, fuelUsed: 3.2, cost: 74, date: "2026-10-24", status: "completed" },
  { id: "t007", vehicleId: "v009", vehicleName: "Van India", driver: "Palesa Mahlangu", startLocation: "Randburg", endLocation: "Fourways", distance: 15, fuelUsed: 2.1, cost: 48, date: "2026-10-24", status: "completed" },
  { id: "t008", vehicleId: "v010", vehicleName: "Truck Juliet", driver: "Tshepo Nkosi", startLocation: "Alberton", endLocation: "Vereeniging", distance: 65, fuelUsed: 9.8, cost: 225, date: "2026-10-23", status: "completed" },
  { id: "t009", vehicleId: "v001", vehicleName: "Truck Alpha", driver: "Sipho Ndlovu", startLocation: "Pretoria", endLocation: "Rustenburg", distance: 120, fuelUsed: 15.6, cost: 359, date: "2026-10-23", status: "completed" },
  { id: "t010", vehicleId: "v012", vehicleName: "Truck Lima", driver: "Mpho Radebe", startLocation: "Benoni", endLocation: "Witbank", distance: 135, fuelUsed: 16.2, cost: 373, date: "2026-10-23", status: "completed" },
  { id: "t011", vehicleId: "v005", vehicleName: "Truck Echo", driver: "Bongani Zulu", startLocation: "Johannesburg", endLocation: "Polokwane", distance: 310, fuelUsed: 38.5, cost: 886, date: "2026-10-22", status: "completed" },
  { id: "t012", vehicleId: "v002", vehicleName: "Truck Bravo", driver: "Thabo Mokoena", startLocation: "Midrand", endLocation: "Johannesburg CBD", distance: 30, fuelUsed: 5.9, cost: 136, date: "2026-10-22", status: "completed" },
];

export const fuelRecords: FuelRecord[] = [
  { id: "f001", vehicleId: "v001", vehicleName: "Truck Alpha", litres: 65, costPerLitre: 23.01, totalCost: 1495.65, odometer: 87420, date: "2026-10-25", station: "Engen Sandton", anomaly: false },
  { id: "f002", vehicleId: "v002", vehicleName: "Truck Bravo", litres: 72, costPerLitre: 23.01, totalCost: 1656.72, odometer: 112350, date: "2026-10-24", station: "Shell Midrand", anomaly: false },
  { id: "f003", vehicleId: "v004", vehicleName: "Van Delta", litres: 85, costPerLitre: 23.01, totalCost: 1955.85, odometer: 156780, date: "2026-10-24", station: "BP Roodepoort", anomaly: true, anomalyReason: "Fuel consumption 42% above vehicle baseline. Possible fuel theft or leak detected." },
  { id: "f004", vehicleId: "v005", vehicleName: "Truck Echo", litres: 58, costPerLitre: 23.01, totalCost: 1334.58, odometer: 93100, date: "2026-10-23", station: "Caltex Centurion", anomaly: false },
  { id: "f005", vehicleId: "v007", vehicleName: "Truck Golf", litres: 45, costPerLitre: 23.01, totalCost: 1035.45, odometer: 31200, date: "2026-10-23", station: "Total Kempton Park", anomaly: false },
  { id: "f006", vehicleId: "v008", vehicleName: "Truck Hotel", litres: 90, costPerLitre: 23.01, totalCost: 2070.90, odometer: 201450, date: "2026-10-22", station: "Engen Germiston", anomaly: true, anomalyReason: "Unusually high fill up for distance travelled. Consumption 38% above normal." },
  { id: "f007", vehicleId: "v010", vehicleName: "Truck Juliet", litres: 70, costPerLitre: 23.01, totalCost: 1610.70, odometer: 134500, date: "2026-10-22", station: "Shell Alberton", anomaly: false },
  { id: "f008", vehicleId: "v012", vehicleName: "Truck Lima", litres: 55, costPerLitre: 23.01, totalCost: 1265.55, odometer: 22100, date: "2026-10-21", station: "BP Benoni", anomaly: false },
  { id: "f009", vehicleId: "v009", vehicleName: "Van India", litres: 40, costPerLitre: 23.01, totalCost: 920.40, odometer: 54300, date: "2026-10-21", station: "Caltex Randburg", anomaly: false },
  { id: "f010", vehicleId: "v001", vehicleName: "Truck Alpha", litres: 62, costPerLitre: 23.01, totalCost: 1426.62, odometer: 87100, date: "2026-10-20", station: "Total Pretoria", anomaly: false },
];

export const maintenanceRecords: MaintenanceRecord[] = [
  { id: "m001", vehicleId: "v004", vehicleName: "Van Delta", type: "Full Service", description: "Major service overdue by 16 days. Oil change, brake inspection, filter replacement needed.", cost: 4500, date: "2026-10-10", status: "overdue", priority: "high" },
  { id: "m002", vehicleId: "v008", vehicleName: "Truck Hotel", type: "Brake Pads", description: "Brake pads at estimated 78% wear based on mileage patterns. Replace within 2 weeks.", cost: 2800, date: "2026-10-28", status: "scheduled", priority: "high" },
  { id: "m003", vehicleId: "v006", vehicleName: "Van Foxtrot", type: "Full Service", description: "Service overdue. Vehicle has been idle but still requires scheduled maintenance.", cost: 3200, date: "2026-09-15", status: "overdue", priority: "medium" },
  { id: "m004", vehicleId: "v002", vehicleName: "Truck Bravo", type: "Tyre Rotation", description: "Tyre rotation due based on 15,000km interval. Currently at 14,200km since last rotation.", cost: 800, date: "2026-11-01", status: "scheduled", priority: "low" },
  { id: "m005", vehicleId: "v005", vehicleName: "Truck Echo", type: "Oil Change", description: "Oil change due in approximately 900km based on current driving patterns.", cost: 1200, date: "2026-11-05", status: "scheduled", priority: "medium" },
  { id: "m006", vehicleId: "v003", vehicleName: "Truck Charlie", type: "Engine Repair", description: "Currently in workshop for engine diagnostics. Estimated completion in 3 days.", cost: 12000, date: "2026-10-24", status: "scheduled", priority: "high" },
  { id: "m007", vehicleId: "v010", vehicleName: "Truck Juliet", type: "Battery Replacement", description: "Battery showing weak charge patterns. Predicted failure within 30 days.", cost: 2200, date: "2026-11-15", status: "scheduled", priority: "medium" },
  { id: "m008", vehicleId: "v001", vehicleName: "Truck Alpha", type: "Wheel Alignment", description: "Slight pulling detected from trip data. Alignment check recommended.", cost: 650, date: "2026-11-10", status: "scheduled", priority: "low" },
];

export const aiInsights: AIInsight[] = [
  { id: "ai001", type: "fuel_anomaly", title: "Fuel Anomaly Detected: Van Delta", message: "Van Delta (GP 321 JKL) recorded fuel consumption 42% above its baseline on 24 October. This is significantly outside normal range. Possible causes: fuel theft, fuel leak, or incorrect odometer reading. Recommend physical inspection within 24 hours.", severity: "critical", date: "2026-10-25", actionable: true },
  { id: "ai002", type: "cost_forecast", title: "November Fuel Cost Forecast", message: "Based on the last 90 days of fleet activity, your projected fuel spend for November is R38,400. This is 8% higher than October due to increased trip frequency. Consider optimising routes for Truck Echo and Truck Hotel which account for 34% of total fuel spend.", severity: "warning", date: "2026-10-25", actionable: true },
  { id: "ai003", type: "maintenance_alert", title: "Predictive Alert: Truck Hotel Brake Pads", message: "Based on mileage patterns and service history, Truck Hotel brake pads are at approximately 78% wear. At current usage rate, replacement will be needed within 14 days. Scheduling now avoids an estimated R8,500 emergency repair cost.", severity: "warning", date: "2026-10-24", actionable: true },
  { id: "ai004", type: "efficiency_tip", title: "Driver Efficiency: Thabo Mokoena Below Average", message: "Thabo Mokoena (Truck Bravo) has a fuel efficiency score of 78, which is 14% below the fleet average of 87. Analysis shows higher idle time and inconsistent speed patterns. A brief coaching session could save approximately R1,800 per month in fuel costs.", severity: "info", date: "2026-10-24", actionable: true },
  { id: "ai005", type: "utilisation", title: "Underutilised Vehicle: Van Foxtrot", message: "Van Foxtrot has been idle for 60% of the current month with zero trips logged in the last 18 days. At R4,200 monthly fixed cost (insurance, depreciation, parking), this vehicle is costing money without generating revenue. Consider reassigning or temporarily removing from fleet.", severity: "info", date: "2026-10-23", actionable: true },
  { id: "ai006", type: "fuel_anomaly", title: "Fuel Pattern Alert: Truck Hotel", message: "Truck Hotel recorded an unusually high fill up on 22 October. Consumption was 38% above the normal baseline for the distance travelled. This is the second anomaly this month. Strongly recommend a physical fuel system inspection.", severity: "critical", date: "2026-10-22", actionable: true },
  { id: "ai007", type: "cost_forecast", title: "Quarterly Cost Projection", message: "Your fleet is on track to spend R142,000 on fuel and R28,000 on maintenance this quarter. By addressing the two fuel anomalies and scheduling preventive maintenance for the 3 flagged vehicles, you could reduce total costs by approximately R18,600 (11.2%).", severity: "info", date: "2026-10-22", actionable: true },
];

export const dashboardStats: DashboardStats = {
  totalVehicles: 12, activeVehicles: 10, totalDrivers: 11,
  monthlyFuelCost: 35240, monthlyTripCount: 156, avgCostPerKm: 2.31,
  fuelEfficiency: 8.7, maintenanceDue: 3, co2Saved: 1240,
};

export const monthlyCosts = [
  { month: "May", fuel: 31200, maintenance: 8400, total: 39600 },
  { month: "Jun", fuel: 29800, maintenance: 12100, total: 41900 },
  { month: "Jul", fuel: 33500, maintenance: 6200, total: 39700 },
  { month: "Aug", fuel: 34100, maintenance: 9800, total: 43900 },
  { month: "Sep", fuel: 32600, maintenance: 7500, total: 40100 },
  { month: "Oct", fuel: 35240, maintenance: 8200, total: 43440 },
];

export const vehicleEfficiency = [
  { name: "Alpha", efficiency: 7.6 },
  { name: "Bravo", efficiency: 9.2 },
  { name: "Charlie", efficiency: 8.1 },
  { name: "Delta", efficiency: 10.4 },
  { name: "Echo", efficiency: 7.8 },
  { name: "Golf", efficiency: 7.2 },
  { name: "Hotel", efficiency: 11.5 },
  { name: "India", efficiency: 6.8 },
  { name: "Juliet", efficiency: 8.9 },
  { name: "Kilo", efficiency: 7.4 },
  { name: "Lima", efficiency: 6.5 },
];

export const DEMO_CREDENTIALS = {
  email: "demo@smartfleet.co.za",
  password: "[PASSWORD]!",
  companyName: "Mzansi Logistics",
};

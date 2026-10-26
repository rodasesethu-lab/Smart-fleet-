import { MapPin, Fuel, DollarSign, ArrowRight } from "lucide-react";
import { trips } from "../data/demoData";

function TripsPage() {
  const totalDistance = trips.reduce((sum, t) => sum + t.distance, 0);
  const totalFuel = trips.reduce((sum, t) => sum + t.fuelUsed, 0);
  const totalCost = trips.reduce((sum, t) => sum + t.cost, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Trip Management</h1>
        <p className="text-fleet-muted mt-1">Track all fleet trips with distance, fuel, and cost per journey</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-fleet-card rounded-xl p-4 border border-fleet-accent/20"><p className="text-3xl font-bold text-white">{trips.length}</p><p className="text-xs text-fleet-muted mt-1">Recent Trips</p></div>
        <div className="bg-fleet-card rounded-xl p-4 border border-fleet-accent/20"><p className="text-3xl font-bold text-fleet-teal">{totalDistance.toLocaleString()} km</p><p className="text-xs text-fleet-muted mt-1">Total Distance</p></div>
        <div className="bg-fleet-card rounded-xl p-4 border border-fleet-accent/20"><p className="text-3xl font-bold text-fleet-warning">{totalFuel.toFixed(1)} L</p><p className="text-xs text-fleet-muted mt-1">Total Fuel Used</p></div>
        <div className="bg-fleet-card rounded-xl p-4 border border-fleet-accent/20"><p className="text-3xl font-bold text-green-400">R{totalCost.toLocaleString()}</p><p className="text-xs text-fleet-muted mt-1">Total Trip Cost</p></div>
      </div>
      <div className="space-y-3">
        {trips.map((trip) => (
          <div key={trip.id} className="bg-fleet-card rounded-xl p-5 border border-fleet-accent/20 hover:border-fleet-teal/30 transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 bg-fleet-teal/10 rounded-lg flex items-center justify-center flex-shrink-0"><MapPin className="[PASSWORD] text-fleet-teal" /></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-white font-medium">{trip.startLocation}</span>
                    <ArrowRight className="w-4 h-4 text-fleet-muted" />
                    <span className="text-white font-medium">{trip.endLocation}</span>
                  </div>
                  <p className="text-xs text-fleet-muted mt-1">{trip.vehicleName} | {trip.driver} | {trip.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center"><p className="text-sm font-semibold text-white">{trip.distance} km</p><p className="text-xs text-fleet-muted">Distance</p></div>
                <div className="text-center"><div className="flex items-center gap-1 justify-center"><Fuel className="w-3 h-3 text-fleet-warning" /><p className="text-sm font-semibold text-fleet-warning">{trip.fuelUsed} L</p></div><p className="text-xs text-fleet-muted">Fuel</p></div>
                <div className="text-center"><div className="flex items-center gap-1 justify-center"><DollarSign className="w-3 h-3 text-green-400" /><p className="text-sm font-semibold text-green-400">R{trip.cost}</p></div><p className="text-xs text-fleet-muted">Cost</p></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TripsPage;

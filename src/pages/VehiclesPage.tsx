import { Truck, CheckCircle, AlertTriangle, Clock } from "lucide-react";
import { vehicles } from "../data/demoData";

function VehiclesPage() {
  const statusConfig: Record<string, { label: string; color: string; bg: string; icon: any }> = {
    active: { label: "Active", color: "text-green-400", bg: "bg-green-400/10", icon: CheckCircle },
    maintenance: { label: "In Workshop", color: "text-fleet-orange", bg: "bg-fleet-orange/10", icon: AlertTriangle },
    idle: { label: "Idle", color: "text-fleet-muted", bg: "bg-fleet-muted/10", icon: Clock },
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Vehicle Registry</h1>
        <p className="text-fleet-muted mt-1">Manage and monitor all {vehicles.length} vehicles in your fleet</p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-fleet-card rounded-xl p-4 border border-fleet-accent/20">
          <p className="text-3xl font-bold text-green-400">{vehicles.filter((v) => v.status === "active").length}</p>
          <p className="text-xs text-fleet-muted mt-1">Active</p>
        </div>
        <div className="bg-fleet-card rounded-xl p-4 border border-fleet-accent/20">
          <p className="text-3xl font-bold text-fleet-orange">{vehicles.filter((v) => v.status === "maintenance").length}</p>
          <p className="text-xs text-fleet-muted mt-1">In Workshop</p>
        </div>
        <div className="bg-fleet-card rounded-xl p-4 border border-fleet-accent/20">
          <p className="text-3xl font-bold text-fleet-muted">{vehicles.filter((v) => v.status === "idle").length}</p>
          <p className="text-xs text-fleet-muted mt-1">Idle</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {vehicles.map((vehicle) => {
          const config = statusConfig[vehicle.status];
          const StatusIcon = config.icon;
          return (
            <div key={vehicle.id} className="bg-fleet-card rounded-xl p-5 border border-fleet-accent/20 hover:border-fleet-teal/30 transition-all">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-fleet-teal/10 rounded-lg flex items-center justify-center">
                    <Truck className="[PASSWORD] text-fleet-teal" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{vehicle.name}</h3>
                    <p className="text-xs text-fleet-muted">{vehicle.plate}</p>
                  </div>
                </div>
                <div className={"flex items-center gap-1 px-2 py-1 rounded-full " + config.bg}>
                  <StatusIcon className={"w-3 h-3 " + config.color} />
                  <span className={"text-xs font-medium " + config.color}>{config.label}</span>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-fleet-muted">Vehicle</span><span className="text-white">{vehicle.make} {vehicle.model} ({vehicle.year})</span></div>
                <div className="flex justify-between"><span className="text-fleet-muted">Mileage</span><span className="text-white">{vehicle.mileage.toLocaleString()} km</span></div>
                <div className="flex justify-between"><span className="text-fleet-muted">Driver</span><span className="text-white">{vehicle.driver}</span></div>
                <div className="flex justify-between"><span className="text-fleet-muted">Next Service</span><span className="text-white">{vehicle.nextService}</span></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default VehiclesPage;

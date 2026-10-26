import { Users, MapPin, Star } from "lucide-react";
import { drivers } from "../data/demoData";

function DriversPage() {
  const statusConfig: Record<string, { label: string; color: string; bg: string }> = {
    on_trip: { label: "On Trip", color: "text-green-400", bg: "bg-green-400/10" },
    available: { label: "Available", color: "text-blue-400", bg: "bg-blue-400/10" },
    off_duty: { label: "Off Duty", color: "text-fleet-muted", bg: "bg-fleet-muted/10" },
  };
  const getEfficiencyColor = (score: number) => {
    if (score >= 85) return "text-green-400";
    if (score >= 70) return "text-fleet-warning";
    return "text-fleet-orange";
  };
  const avgEfficiency = Math.round(drivers.reduce((sum, d) => sum + d.efficiencyScore, 0) / drivers.length);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Driver Management</h1>
        <p className="text-fleet-muted mt-1">Monitor driver performance and efficiency across your fleet</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-fleet-card rounded-xl p-4 border border-fleet-accent/20"><p className="text-3xl font-bold text-white">{drivers.length}</p><p className="text-xs text-fleet-muted mt-1">Total Drivers</p></div>
        <div className="bg-fleet-card rounded-xl p-4 border border-fleet-accent/20"><p className="text-3xl font-bold text-green-400">{drivers.filter((d) => d.status === "on_trip").length}</p><p className="text-xs text-fleet-muted mt-1">On Trip</p></div>
        <div className="bg-fleet-card rounded-xl p-4 border border-fleet-accent/20"><p className="text-3xl font-bold text-blue-400">{drivers.filter((d) => d.status === "available").length}</p><p className="text-xs text-fleet-muted mt-1">Available</p></div>
        <div className="bg-fleet-card rounded-xl p-4 border border-fleet-accent/20"><p className="text-3xl font-bold text-fleet-teal">{avgEfficiency}</p><p className="text-xs text-fleet-muted mt-1">Avg Efficiency Score</p></div>
      </div>
      <div className="bg-fleet-card rounded-xl border border-fleet-accent/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-fleet-accent/20">
                <th className="text-left px-6 py-4 text-xs font-medium text-fleet-muted uppercase">Driver</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-fleet-muted uppercase">Vehicle</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-fleet-muted uppercase">License</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-fleet-muted uppercase">Trips</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-fleet-muted uppercase">Efficiency</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-fleet-muted uppercase">Status</th>
              </tr>
            </thead>
            <tbody>
              {drivers.map((driver) => {
                const config = statusConfig[driver.status];
                return (
                  <tr key={driver.id} className="border-b border-fleet-accent/10 hover:bg-fleet-accent/5">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-fleet-teal/10 rounded-full flex items-center justify-center"><Users className="w-4 h-4 text-fleet-teal" /></div>
                        <div><p className="text-sm font-medium text-white">{driver.name}</p><p className="text-xs text-fleet-muted">{driver.phone}</p></div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-fleet-text">{driver.vehicleName}</td>
                    <td className="px-6 py-4 text-sm text-fleet-text">{driver.license}</td>
                    <td className="px-6 py-4"><div className="flex items-center gap-1"><MapPin className="w-3 h-3 text-fleet-muted" /><span className="text-sm text-fleet-text">{driver.trips}</span></div></td>
                    <td className="px-6 py-4"><div className="flex items-center gap-2"><Star className={"w-4 h-4 " + getEfficiencyColor(driver.efficiencyScore)} /><span className={"text-sm font-semibold " + getEfficiencyColor(driver.efficiencyScore)}>{driver.efficiencyScore}</span></div></td>
                    <td className="px-6 py-4"><span className={"px-2 py-1 rounded-full text-xs font-medium " + config.bg + " " + config.color}>{config.label}</span></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DriversPage;

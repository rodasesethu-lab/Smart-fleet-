import { Fuel, AlertTriangle, TrendingUp, Droplets } from "lucide-react";
import { fuelRecords } from "../data/demoData";

function FuelPage() {
  const totalLitres = fuelRecords.reduce((sum, r) => sum + r.litres, 0);
  const totalCost = fuelRecords.reduce((sum, r) => sum + r.totalCost, 0);
  const anomalyCount = fuelRecords.filter((r) => r.anomaly).length;
  const avgCostPerLitre = totalCost / totalLitres;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Fuel Tracking</h1>
        <p className="text-fleet-muted mt-1">Monitor fuel consumption and detect anomalies across your fleet</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-fleet-card rounded-xl p-4 border border-fleet-accent/20">
          <Droplets className="w-5 h-5 text-blue-400 mb-2" />
          <p className="text-3xl font-bold text-white">{totalLitres.toLocaleString()} L</p>
          <p className="text-xs text-fleet-muted mt-1">Total Litres</p>
        </div>
        <div className="bg-fleet-card rounded-xl p-4 border border-fleet-accent/20">
          <Fuel className="w-5 h-5 text-fleet-warning mb-2" />
          <p className="text-3xl font-bold text-fleet-warning">R{totalCost.toLocaleString()}</p>
          <p className="text-xs text-fleet-muted mt-1">Total Fuel Spend</p>
        </div>
        <div className="bg-fleet-card rounded-xl p-4 border border-fleet-accent/20">
          <TrendingUp className="w-5 h-5 text-fleet-teal mb-2" />
          <p className="text-3xl font-bold text-fleet-teal">R{avgCostPerLitre.toFixed(2)}</p>
          <p className="text-xs text-fleet-muted mt-1">Avg Cost per Litre</p>
        </div>
        <div className="bg-fleet-card rounded-xl p-4 border border-fleet-accent/20">
          <AlertTriangle className="w-5 h-5 text-fleet-orange mb-2" />
          <p className="text-3xl font-bold text-fleet-orange">{anomalyCount}</p>
          <p className="text-xs text-fleet-muted mt-1">Anomalies Detected</p>
        </div>
      </div>
      <div className="bg-fleet-card rounded-xl border border-fleet-accent/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-fleet-accent/20">
                <th className="text-left px-6 py-4 text-xs font-medium text-fleet-muted uppercase">Vehicle</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-fleet-muted uppercase">Date</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-fleet-muted uppercase">Station</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-fleet-muted uppercase">Litres</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-fleet-muted uppercase">Total Cost</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-fleet-muted uppercase">Odometer</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-fleet-muted uppercase">Status</th>
              </tr>
            </thead>
            <tbody>
              {fuelRecords.map((record) => (
                <tr key={record.id} className={"border-b border-fleet-accent/10 " + (record.anomaly ? "bg-fleet-orange/5" : "hover:bg-fleet-accent/5")}>
                  <td className="px-6 py-4"><p className="text-sm font-medium text-white">{record.vehicleName}</p></td>
                  <td className="px-6 py-4 text-sm text-fleet-text">{record.date}</td>
                  <td className="px-6 py-4 text-sm text-fleet-text">{record.station}</td>
                  <td className="px-6 py-4 text-sm text-fleet-text">{record.litres} L</td>
                  <td className="px-6 py-4 text-sm font-medium text-white">R{record.totalCost.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-fleet-text">{record.odometer.toLocaleString()} km</td>
                  <td className="px-6 py-4">
                    {record.anomaly ? (
                      <div>
                        <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-fleet-orange/10 text-fleet-orange text-xs font-medium w-fit">
                          <AlertTriangle className="w-3 h-3" /> Anomaly
                        </span>
                        <p className="text-xs text-fleet-orange/80 mt-1 max-w-xs">{record.anomalyReason}</p>
                      </div>
                    ) : (
                      <span className="px-2 py-1 rounded-full bg-green-400/10 text-green-400 text-xs font-medium">Normal</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FuelPage;

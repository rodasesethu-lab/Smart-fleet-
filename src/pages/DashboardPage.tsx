import { Truck, Users, Fuel, MapPin, Wrench, TrendingDown, AlertTriangle, Leaf, Brain, ChevronRight } from "lucide-react";
import { dashboardStats, aiInsights, monthlyCosts } from "../data/demoData";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

function DashboardPage() {
  const stats = dashboardStats;
  const statCards = [
    { label: "Total Vehicles", value: stats.totalVehicles, icon: Truck, color: "text-fleet-teal", bg: "bg-fleet-teal/10" },
    { label: "Active Vehicles", value: stats.activeVehicles, icon: Truck, color: "text-green-400", bg: "bg-green-400/10" },
    { label: "Total Drivers", value: stats.totalDrivers, icon: Users, color: "text-blue-400", bg: "bg-blue-400/10" },
    { label: "Monthly Trips", value: stats.monthlyTripCount, icon: MapPin, color: "text-purple-400", bg: "bg-purple-400/10" },
    { label: "Fuel Cost (Oct)", value: "R" + stats.monthlyFuelCost.toLocaleString(), icon: Fuel, color: "text-fleet-warning", bg: "bg-fleet-warning/10" },
    { label: "Avg Cost/km", value: "R" + stats.avgCostPerKm, icon: TrendingDown, color: "text-fleet-teal", bg: "bg-fleet-teal/10" },
    { label: "Maintenance Due", value: stats.maintenanceDue, icon: Wrench, color: "text-fleet-orange", bg: "bg-fleet-orange/10" },
    { label: "CO2 Saved (kg)", value: stats.co2Saved.toLocaleString(), icon: Leaf, color: "text-green-400", bg: "bg-green-400/10" },
  ];
  const severityStyles: Record<string, { bg: string; border: string; icon: string }> = {
    critical: { bg: "bg-fleet-orange/10", border: "border-fleet-orange/30", icon: "text-fleet-orange" },
    warning: { bg: "bg-fleet-warning/10", border: "border-fleet-warning/30", icon: "text-fleet-warning" },
    info: { bg: "bg-fleet-teal/10", border: "border-fleet-teal/30", icon: "text-fleet-teal" },
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Fleet Dashboard</h1>
        <p className="text-fleet-muted mt-1">Realtime overview of your fleet performance and AI insights</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.label} className="bg-fleet-card rounded-xl p-4 border border-fleet-accent/20">
              <div className="flex items-center justify-between mb-3">
                <div className={"w-10 h-10 " + card.bg + " rounded-lg flex items-center justify-center"}>
                  <Icon className={"[PASSWORD] " + card.color} />
                </div>
              </div>
              <p className="text-2xl font-bold text-white">{card.value}</p>
              <p className="text-xs text-fleet-muted mt-1">{card.label}</p>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-fleet-card rounded-xl border border-fleet-accent/20 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="[PASSWORD] text-fleet-teal" />
            <h2 className="text-lg font-semibold text-white">AI Insights Engine</h2>
          </div>
          <p className="text-xs text-fleet-muted mb-4">SmartFleet analyses your fleet data to surface actionable intelligence</p>
          <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
            {aiInsights.slice(0, 5).map((insight) => {
              const style = severityStyles[insight.severity];
              return (
                <div key={insight.id} className={style.bg + " border " + style.border + " rounded-lg p-4"}>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className={"[PASSWORD] " + style.icon + " mt-0.5 flex-shrink-0"} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-white">{insight.title}</h3>
                      <p className="text-xs text-fleet-muted mt-1 leading-relaxed">{insight.message}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-fleet-muted/60">{insight.date}</span>
                        {insight.actionable && (
                          <button className="text-xs text-fleet-teal flex items-center gap-1 hover:underline">Take Action <ChevronRight className="w-3 h-3" /></button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-fleet-card rounded-xl border border-fleet-accent/20 p-6">
          <h2 className="text-lg font-semibold text-white mb-1">Monthly Cost Trend</h2>
          <p className="text-xs text-fleet-muted mb-6">Fuel and maintenance spend over the last 6 months</p>
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={monthlyCosts}>
              <CartesianGrid strokeDasharray="3 3" stroke="#0f3460" />
              <XAxis dataKey="month" stroke="#8892a4" fontSize={12} />
              <YAxis stroke="#8892a4" fontSize={12} tickFormatter={(v: number) => "R" + (v / 1000).toFixed(0) + "k"} />
              <Tooltip contentStyle={{ backgroundColor: "#16213e", border: "1px solid #0f3460", borderRadius: "8px", color: "#e0e0e0" }} formatter={(value: number) => ["R" + value.toLocaleString(), ""]} />
              <Area type="monotone" dataKey="fuel" stackId="1" stroke="#00d4aa" fill="#00d4aa" fillOpacity={0.3} name="Fuel" />
              <Area type="monotone" dataKey="maintenance" stackId="1" stroke="#ffa502" fill="#ffa502" fillOpacity={0.3} name="Maintenance" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;

import { BarChart3, TrendingUp, Leaf, Brain, Zap, Shield } from "lucide-react";
import { monthlyCosts, vehicleEfficiency, drivers, vehicles, dashboardStats } from "../data/demoData";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

function AnalyticsPage() {
  const costForecast = [
    ...monthlyCosts,
    { month: "Nov (AI)", fuel: 38400, maintenance: 9200, total: 47600 },
    { month: "Dec (AI)", fuel: 36800, maintenance: 7800, total: 44600 },
  ];

  const fleetStatus = [
    { name: "Active", value: vehicles.filter((v) => v.status === "active").length, color: "#00d4aa" },
    { name: "Maintenance", value: vehicles.filter((v) => v.status === "maintenance").length, color: "#e94560" },
    { name: "Idle", value: vehicles.filter((v) => v.status === "idle").length, color: "#8892a4" },
  ];

  const driverEfficiency = drivers
    .map((d) => ({ name: d.name.split(" ")[0], score: d.efficiencyScore }))
    .sort((a, b) => b.score - a.score);

  const climateData = [
    { label: "Fuel Saved (L)", value: "540", icon: Zap, color: "text-fleet-teal", bg: "bg-fleet-teal/10" },
    { label: "CO2 Reduced (kg)", value: "1,240", icon: Leaf, color: "text-green-400", bg: "bg-green-400/10" },
    { label: "Breakdowns Prevented", value: "4", icon: Shield, color: "text-blue-400", bg: "bg-blue-400/10" },
    { label: "Efficiency Gain", value: "11.2%", icon: TrendingUp, color: "text-fleet-warning", bg: "bg-fleet-warning/10" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Analytics and AI Forecasting</h1>
        <p className="text-fleet-muted mt-1">Data driven insights with AI powered cost projections and climate impact tracking</p>
      </div>

      <div className="bg-fleet-teal/10 border border-fleet-teal/30 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <Brain className="w-5 h-5 text-fleet-teal" />
          <h3 className="text-sm font-semibold text-fleet-teal">AI Intelligence Summary</h3>
        </div>
        <p className="text-sm text-fleet-text">SmartFleet has analysed 156 trips, 10 fuel records, and 8 maintenance events this month. Based on historical patterns, your fleet could save approximately R18,600 this quarter by addressing 2 fuel anomalies and scheduling preventive maintenance for 3 flagged vehicles. November fuel costs are projected at R38,400 (8% increase from October).</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-fleet-card rounded-xl border border-fleet-accent/20 p-6">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-5 h-5 text-fleet-teal" />
            <h2 className="text-lg font-semibold text-white">Cost Forecast (AI Projected)</h2>
          </div>
          <p className="text-xs text-fleet-muted mb-4">Historical costs with AI projected November and December</p>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={costForecast}>
              <CartesianGrid strokeDasharray="3 3" stroke="#0f3460" />
              <XAxis dataKey="month" stroke="#8892a4" fontSize={11} />
              <YAxis stroke="#8892a4" fontSize={11} tickFormatter={(v: number) => "R" + (v / 1000).toFixed(0) + "k"} />
              <Tooltip contentStyle={{ backgroundColor: "#16213e", border: "1px solid #0f3460", borderRadius: "8px", color: "#e0e0e0" }} formatter={(value: number) => ["R" + value.toLocaleString(), ""]} />
              <Legend />
              <Line type="monotone" dataKey="fuel" stroke="#00d4aa" strokeWidth={2} dot={{ fill: "#00d4aa", r: 4 }} name="Fuel" />
              <Line type="monotone" dataKey="maintenance" stroke="#ffa502" strokeWidth={2} dot={{ fill: "#ffa502", r: 4 }} name="Maintenance" />
              <Line type="monotone" dataKey="total" stroke="#e94560" strokeWidth={2} dot={{ fill: "#e94560", r: 4 }} name="Total" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-fleet-card rounded-xl border border-fleet-accent/20 p-6">
          <h2 className="text-lg font-semibold text-white mb-1">Fleet Status</h2>
          <p className="text-xs text-fleet-muted mb-4">Current vehicle status breakdown</p>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie data={fleetStatus} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value" label={({ name, value }) => name + ": " + value}>
                {fleetStatus.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: "#16213e", border: "1px solid #0f3460", borderRadius: "8px", color: "#e0e0e0" }} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-fleet-card rounded-xl border border-fleet-accent/20 p-6">
          <h2 className="text-lg font-semibold text-white mb-1">Driver Efficiency Ranking</h2>
          <p className="text-xs text-fleet-muted mb-4">AI scored efficiency based on fuel usage and trip performance</p>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={driverEfficiency} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#0f3460" />
              <XAxis type="number" stroke="#8892a4" fontSize={11} domain={[0, 100]} />
              <YAxis type="category" dataKey="name" stroke="#8892a4" fontSize={11} width={60} />
              <Tooltip contentStyle={{ backgroundColor: "#16213e", border: "1px solid #0f3460", borderRadius: "8px", color: "#e0e0e0" }} />
              <Bar dataKey="score" fill="#00d4aa" radius={[0, 4, 4, 0]} name="Efficiency Score" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-fleet-card rounded-xl border border-fleet-accent/20 p-6">
          <h2 className="text-lg font-semibold text-white mb-1">Fuel Efficiency by Vehicle (L/100km)</h2>
          <p className="text-xs text-fleet-muted mb-4">Lower is better. Fleet average: {dashboardStats.fuelEfficiency} L/100km</p>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={vehicleEfficiency}>
              <CartesianGrid strokeDasharray="3 3" stroke="#0f3460" />
              <XAxis dataKey="name" stroke="#8892a4" fontSize={11} />
              <YAxis stroke="#8892a4" fontSize={11} />
              <Tooltip contentStyle={{ backgroundColor: "#16213e", border: "1px solid #0f3460", borderRadius: "8px", color: "#e0e0e0" }} formatter={(value: number) => [value + " L/100km", ""]} />
              <Bar dataKey="efficiency" fill="#ffa502" radius={[4, 4, 0, 0]} name="L/100km" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-fleet-card rounded-xl border border-fleet-accent/20 p-6">
        <div className="flex items-center gap-2 mb-4">
          <Leaf className="w-5 h-5 text-green-400" />
          <h2 className="text-lg font-semibold text-white">Climate Impact (Challenge Area 6)</h2>
        </div>
        <p className="text-xs text-fleet-muted mb-4">SmartFleet directly addresses Climate Resilience and Essential Services through measurable environmental impact</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {climateData.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="text-center p-4 rounded-xl bg-fleet-dark border border-fleet-accent/20">
                <div className={"w-12 h-12 " + item.bg + " rounded-xl flex items-center justify-center mx-auto mb-3"}>
                  <Icon className={"w-6 h-6 " + item.color} />
                </div>
                <p className={"text-2xl font-bold " + item.color}>{item.value}</p>
                <p className="text-xs text-fleet-muted mt-1">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-fleet-card rounded-xl border border-fleet-accent/20 p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Potential Quarterly Savings Breakdown</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-fleet-dark rounded-lg">
            <span className="text-sm text-fleet-text">Fix fuel anomalies (Van Delta + Truck Hotel)</span>
            <span className="text-sm font-semibold text-fleet-teal">R8,200</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-fleet-dark rounded-lg">
            <span className="text-sm text-fleet-text">Preventive maintenance (avoid emergency repairs)</span>
            <span className="text-sm font-semibold text-fleet-teal">R6,400</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-fleet-dark rounded-lg">
            <span className="text-sm text-fleet-text">Driver coaching (Thabo Mokoena efficiency improvement)</span>
            <span className="text-sm font-semibold text-fleet-teal">R2,400</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-fleet-dark rounded-lg">
            <span className="text-sm text-fleet-text">Reassign or remove idle vehicle (Van Foxtrot)</span>
            <span className="text-sm font-semibold text-fleet-teal">R1,600</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-fleet-teal/10 border border-fleet-teal/30 rounded-lg">
            <span className="text-sm font-semibold text-white">Total Potential Quarterly Savings</span>
            <span className="text-lg font-bold text-fleet-teal">R18,600</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsPage;

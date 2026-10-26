import { Wrench, AlertTriangle, Clock, CheckCircle } from "lucide-react";
import { maintenanceRecords } from "../data/demoData";

function MaintenancePage() {
  const overdue = maintenanceRecords.filter((r) => r.status === "overdue").length;
  const scheduled = maintenanceRecords.filter((r) => r.status === "scheduled").length;
  const completed = maintenanceRecords.filter((r) => r.status === "completed").length;
  const totalCost = maintenanceRecords.reduce((sum, r) => sum + r.cost, 0);

  const statusConfig: Record<string, { label: string; color: string; bg: string; icon: any }> = {
    overdue: { label: "Overdue", color: "text-fleet-orange", bg: "bg-fleet-orange/10", icon: AlertTriangle },
    scheduled: { label: "Scheduled", color: "text-fleet-warning", bg: "bg-fleet-warning/10", icon: Clock },
    completed: { label: "Completed", color: "text-green-400", bg: "bg-green-400/10", icon: CheckCircle },
  };
  const priorityConfig: Record<string, { label: string; color: string; bg: string }> = {
    high: { label: "High", color: "text-fleet-orange", bg: "bg-fleet-orange/10" },
    medium: { label: "Medium", color: "text-fleet-warning", bg: "bg-fleet-warning/10" },
    low: { label: "Low", color: "text-blue-400", bg: "bg-blue-400/10" },
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Maintenance Scheduler</h1>
        <p className="text-fleet-muted mt-1">Predictive maintenance scheduling powered by AI pattern analysis</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-fleet-card rounded-xl p-4 border border-fleet-orange/30"><p className="text-3xl font-bold text-fleet-orange">{overdue}</p><p className="text-xs text-fleet-muted mt-1">Overdue</p></div>
        <div className="bg-fleet-card rounded-xl p-4 border border-fleet-accent/20"><p className="text-3xl font-bold text-fleet-warning">{scheduled}</p><p className="text-xs text-fleet-muted mt-1">Scheduled</p></div>
        <div className="bg-fleet-card rounded-xl p-4 border border-fleet-accent/20"><p className="text-3xl font-bold text-green-400">{completed}</p><p className="text-xs text-fleet-muted mt-1">Completed</p></div>
        <div className="bg-fleet-card rounded-xl p-4 border border-fleet-accent/20"><p className="text-3xl font-bold text-white">R{totalCost.toLocaleString()}</p><p className="text-xs text-fleet-muted mt-1">Total Maintenance Cost</p></div>
      </div>
      <div className="space-y-3">
        {maintenanceRecords.map((record) => {
          const status = statusConfig[record.status];
          const priority = priorityConfig[record.priority];
          const StatusIcon = status.icon;
          return (
            <div key={record.id} className={"bg-fleet-card rounded-xl p-5 border " + (record.status === "overdue" ? "border-fleet-orange/30" : "border-fleet-accent/20") + " hover:border-fleet-teal/30 transition-all"}>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <div className={"w-10 h-10 " + status.bg + " rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"}>
                    <StatusIcon className={"w-5 h-5 " + status.color} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-sm font-semibold text-white">{record.type}</h3>
                      <span className={"px-2 py-0.5 rounded-full text-xs font-medium " + status.bg + " " + status.color}>{status.label}</span>
                      <span className={"px-2 py-0.5 rounded-full text-xs font-medium " + priority.bg + " " + priority.color}>{priority.label} Priority</span>
                    </div>
                    <p className="text-sm text-fleet-muted mt-1">{record.vehicleName}</p>
                    <p className="text-xs text-fleet-muted/80 mt-2 leading-relaxed">{record.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 md:text-right">
                  <div><p className="text-sm font-semibold text-white">R{record.cost.toLocaleString()}</p><p className="text-xs text-fleet-muted">Est. Cost</p></div>
                  <div><p className="text-sm font-semibold text-white">{record.date}</p><p className="text-xs text-fleet-muted">{record.status === "overdue" ? "Was Due" : "Due Date"}</p></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MaintenancePage;

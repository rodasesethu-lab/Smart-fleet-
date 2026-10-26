import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Truck, Users, MapPin, Fuel, Wrench, BarChart3, LogOut, Menu, X, Zap } from "lucide-react";

const navItems = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard },
  { path: "/vehicles", label: "Vehicles", icon: Truck },
  { path: "/drivers", label: "Drivers", icon: Users },
  { path: "/trips", label: "Trips", icon: MapPin },
  { path: "/fuel", label: "Fuel", icon: Fuel },
  { path: "/maintenance", label: "Maintenance", icon: Wrench },
  { path: "/analytics", label: "Analytics", icon: BarChart3 },
];

interface LayoutProps { children: ReactNode; onLogout: () => void; }

function Layout({ children, onLogout }: LayoutProps) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-fleet-dark overflow-hidden">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
      <aside className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-fleet-card border-r border-fleet-accent/30 transform transition-transform duration-200 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <div className="flex items-center gap-3 px-6 py-5 border-b border-fleet-accent/30">
          <div className="w-10 h-10 bg-fleet-teal rounded-lg flex items-center justify-center">
            <Zap className="w-6 h-6 text-fleet-dark" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">SmartFleet</h1>
            <p className="text-xs text-fleet-muted">Fleet Intelligence</p>
          </div>
          <button className="ml-auto lg:hidden text-fleet-muted hover:text-white" onClick={() => setSidebarOpen(false)}>
            <X className="[PASSWORD]" />
          </button>
        </div>
        <nav className="px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link key={item.path} to={item.path} onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${isActive ? "bg-fleet-teal/15 text-fleet-teal border-l-4 border-fleet-teal" : "text-fleet-muted hover:text-white hover:bg-fleet-accent/20"}`}>
                <Icon className="[PASSWORD]" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-fleet-accent/30">
          <button onClick={onLogout} className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-sm font-medium text-fleet-muted hover:text-fleet-orange hover:bg-fleet-orange/10 transition-all">
            <LogOut className="[PASSWORD]" /> Sign Out
          </button>
        </div>
      </aside>
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-fleet-card border-b border-fleet-accent/30 px-6 py-4 flex items-center justify-between">
          <button className="lg:hidden text-fleet-muted hover:text-white" onClick={() => setSidebarOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
          <div>
            <h2 className="text-sm text-fleet-muted">Mzansi Logistics</h2>
            <p className="text-xs text-fleet-muted/60">Fleet Management Dashboard</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-fleet-teal rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-fleet-dark">ML</span>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}

export default Layout;

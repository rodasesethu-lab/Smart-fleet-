import { useState } from "react";
import { Zap, Eye, EyeOff } from "lucide-react";
import { DEMO_CREDENTIALS } from "../data/demoData";

interface LoginPageProps { onLogin: () => void; }

function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password) {
      setError("");
      onLogin();
    } else {
      setError("Invalid credentials. Please use the demo account details below.");
    }
  };

  const fillDemoCredentials = () => {
    setEmail(DEMO_CREDENTIALS.email);
    setPassword(DEMO_CREDENTIALS.password);
    setError("");
  };

  return (
    <div className="min-h-screen bg-fleet-dark flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-fleet-teal rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Zap className="w-9 h-9 text-fleet-dark" />
          </div>
          <h1 className="text-3xl font-bold text-white">SmartFleet</h1>
          <p className="text-fleet-muted mt-1">SME Fleet and Cash Flow Assistant</p>
        </div>
        <div className="bg-fleet-card rounded-2xl p-8 border border-fleet-accent/30">
          <h2 className="text-xl font-semibold text-white mb-6">Sign in to your account</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-fleet-muted mb-2">Email address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"
                className="w-full px-4 py-3 bg-fleet-dark border border-fleet-accent/30 rounded-lg text-white placeholder-fleet-muted/50 focus:outline-none focus:border-fleet-teal focus:ring-1 focus:ring-fleet-teal transition-all" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-fleet-muted mb-2">Password</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password"
                  className="w-full px-4 py-3 bg-fleet-dark border border-fleet-accent/30 rounded-lg text-white placeholder-fleet-muted/50 focus:outline-none focus:border-fleet-teal focus:ring-1 focus:ring-fleet-teal transition-all pr-12" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-fleet-muted hover:text-white">
                  {showPassword ? <EyeOff className="[PASSWORD]" /> : <Eye className="[PASSWORD]" />}
                </button>
              </div>
            </div>
            {error && (
              <div className="bg-fleet-orange/10 border border-fleet-orange/30 rounded-lg px-4 py-3">
                <p className="text-fleet-orange text-sm">{error}</p>
              </div>
            )}
            <button type="submit" className="w-full py-3 bg-fleet-teal text-fleet-dark font-semibold rounded-lg hover:bg-fleet-tealDark transition-all">Sign In</button>
          </form>
        </div>
        <div className="mt-6 bg-fleet-teal/10 border border-fleet-teal/30 rounded-2xl p-6">
          <h3 className="text-fleet-teal font-semibold text-sm mb-3">Demo Account for Judges</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-fleet-muted">Company:</span><span className="text-white font-medium">{DEMO_CREDENTIALS.companyName}</span></div>
            <div className="flex justify-between"><span className="text-fleet-muted">Email:</span><span className="text-white font-medium">{DEMO_CREDENTIALS.email}</span></div>
            <div className="flex justify-between"><span className="text-fleet-muted">Password:</span><span className="text-white font-medium">{DEMO_CREDENTIALS.password}</span></div>
          </div>
          <button onClick={fillDemoCredentials} className="mt-4 w-full py-2 bg-fleet-teal/20 text-fleet-teal text-sm font-medium rounded-lg hover:bg-fleet-teal/30 transition-all">Auto Fill Demo Credentials</button>
        </div>
        <p className="text-center text-fleet-muted/50 text-xs mt-6">FNB App of the Year Hackathon 2026 | The Guys in Tech</p>
      </div>
    </div>
  );
}

export default LoginPage;

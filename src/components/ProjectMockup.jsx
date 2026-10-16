import React from 'react';
import {
  ShoppingBag,
  Activity,
  Building2,
  Wallet,
  Home,
  Calculator,
  Server,
  Cloud,
  Smartphone,
  Shield,
  Layers,
  CheckCircle2
} from 'lucide-react';

export default function ProjectMockup({ theme, title }) {
  switch (theme) {
    case 'ecommerce':
      return (
        <div className="w-full min-h-[180px] bg-gradient-to-br from-slate-900 via-slate-950 to-sky-950/40 p-4 flex flex-col justify-between border-b border-slate-800 relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-300">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-md bg-sky-500/20 text-sky-400 border border-sky-500/30">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono font-semibold text-slate-200">AuraFragrance.io</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20">
                <Cloud className="w-3 h-3" /> AWS Deployed
              </span>
            </div>
          </div>

          {/* Mini UI Layout Mockup */}
          <div className="grid grid-cols-3 gap-2.5 z-10 my-auto">
            <div className="p-2 rounded-lg bg-surface-900/90 border border-slate-800 flex flex-col gap-1.5 shadow-sm">
              <div className="h-10 rounded bg-slate-800/80 flex items-center justify-center text-[10px] text-slate-400 font-mono">
                Eau De Parfum
              </div>
              <div className="h-2 w-3/4 rounded bg-slate-700/60" />
              <div className="flex justify-between items-center text-[10px] font-mono text-emerald-400">
                <span>$85</span>
                <span className="text-[9px] text-sky-400 bg-sky-500/10 px-1 rounded">Cart +</span>
              </div>
            </div>

            <div className="p-2 rounded-lg bg-surface-900/90 border border-slate-800 flex flex-col gap-1.5 shadow-sm">
              <div className="h-10 rounded bg-slate-800/80 flex items-center justify-center text-[10px] text-slate-400 font-mono">
                Noir Essence
              </div>
              <div className="h-2 w-2/3 rounded bg-slate-700/60" />
              <div className="flex justify-between items-center text-[10px] font-mono text-emerald-400">
                <span>$120</span>
                <span className="text-[9px] text-sky-400 bg-sky-500/10 px-1 rounded">Cart +</span>
              </div>
            </div>

            <div className="p-2 rounded-lg bg-surface-900/90 border border-slate-800 flex flex-col gap-1.5 shadow-sm hidden sm:flex">
              <div className="h-10 rounded bg-slate-800/80 flex items-center justify-center text-[10px] text-slate-400 font-mono">
                Citrus Mist
              </div>
              <div className="h-2 w-4/5 rounded bg-slate-700/60" />
              <div className="flex justify-between items-center text-[10px] font-mono text-emerald-400">
                <span>$65</span>
                <span className="text-[9px] text-sky-400 bg-sky-500/10 px-1 rounded">Cart +</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 z-10 pt-1 border-t border-slate-800/60">
            <span>MERN Stack Architecture</span>
            <span className="text-sky-400">JWT Auth • Cart API</span>
          </div>
        </div>
      );

    case 'healthcare':
      return (
        <div className="w-full min-h-[180px] bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/40 p-4 flex flex-col justify-between border-b border-slate-800 relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-300">
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <Activity className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono font-semibold text-slate-200">IDOS Healthcare Portal</span>
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
              <Shield className="w-3 h-3" /> Role Based (JWT)
            </span>
          </div>

          {/* Healthcare UI Mockup */}
          <div className="grid grid-cols-2 gap-3 z-10 my-auto">
            <div className="p-2.5 rounded-lg bg-surface-900/90 border border-slate-800 flex flex-col gap-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
                <span>Dr. Consultations</span>
                <span className="text-emerald-400 font-bold">Active</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-[10px] font-mono text-emerald-300">
                  MD
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 w-16 bg-slate-700 rounded" />
                  <div className="h-1.5 w-10 bg-slate-800 rounded" />
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-surface-900/90 border border-slate-800 flex flex-col gap-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
                <span>Medical Travel</span>
                <span className="text-sky-400 font-bold">Verified</span>
              </div>
              <div className="text-[10px] font-mono text-slate-400">
                Appointments & Records
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 z-10 pt-1 border-t border-slate-800/60">
            <span>Flutter Client</span>
            <span className="text-emerald-400">Patient & Doctor Sync</span>
          </div>
        </div>
      );

    case 'hospital':
      return (
        <div className="w-full min-h-[180px] bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950/40 p-4 flex flex-col justify-between border-b border-slate-800 relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-300">
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-md bg-blue-500/20 text-blue-400 border border-blue-500/30">
                <Building2 className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono font-semibold text-slate-200">ILAJ Hospital System</span>
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
              <Layers className="w-3 h-3" /> Multi-Platform
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 z-10 my-auto text-center font-mono">
            <div className="p-2 rounded bg-surface-900/80 border border-slate-800">
              <div className="text-[10px] text-blue-400 font-semibold">Angular</div>
              <div className="text-[9px] text-slate-400 mt-0.5">Admin Web</div>
            </div>
            <div className="p-2 rounded bg-surface-900/80 border border-slate-800">
              <div className="text-[10px] text-emerald-400 font-semibold">Spring Boot</div>
              <div className="text-[9px] text-slate-400 mt-0.5">REST Backend</div>
            </div>
            <div className="p-2 rounded bg-surface-900/80 border border-slate-800">
              <div className="text-[10px] text-sky-400 font-semibold">Flutter</div>
              <div className="text-[9px] text-slate-400 mt-0.5">Mobile App</div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 z-10 pt-1 border-t border-slate-800/60">
            <span>Spring Boot + Angular + Flutter</span>
            <span className="text-blue-400">Enterprise Ecosystem</span>
          </div>
        </div>
      );

    case 'fintech':
      return (
        <div className="w-full min-h-[180px] bg-gradient-to-br from-slate-900 via-slate-950 to-amber-950/40 p-4 flex flex-col justify-between border-b border-slate-800 relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-300">
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-md bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <Wallet className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono font-semibold text-slate-200">RBTEC</span>
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
              <Smartphone className="w-3 h-3" /> Mobile Payments
            </span>
          </div>

          <div className="p-3 rounded-lg bg-surface-900/90 border border-slate-800 z-10 my-auto flex items-center justify-between">
            <div>
              <div className="text-[10px] font-mono text-slate-400">Services Available</div>
              <div className="text-xs font-bold text-amber-300 mt-0.5">Mobile Top-Ups • Bill Pay • Vouchers</div>
            </div>
            <div className="text-right font-mono">
              <span className="px-2 py-1 rounded bg-amber-500/20 text-amber-300 text-[10px]">Secure Pay</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 z-10 pt-1 border-t border-slate-800/60">
            <span>Flutter Mobile Engine</span>
            <span className="text-amber-400">Instant Processing</span>
          </div>
        </div>
      );

    case 'rental':
      return (
        <div className="w-full min-h-[180px] bg-gradient-to-br from-slate-900 via-slate-950 to-purple-950/40 p-4 flex flex-col justify-between border-b border-slate-800 relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-300">
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-md bg-purple-500/20 text-purple-400 border border-purple-500/30">
                <Home className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono font-semibold text-slate-200">Rental Hub</span>
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
              Android & iOS
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 z-10 my-auto">
            <div className="p-2 rounded bg-surface-900/80 border border-slate-800">
              <div className="text-[10px] font-mono text-purple-300">Rental Catalog</div>
              <div className="h-1.5 w-full bg-slate-700 rounded mt-1.5" />
              <div className="h-1.5 w-2/3 bg-slate-800 rounded mt-1" />
            </div>
            <div className="p-2 rounded bg-surface-900/80 border border-slate-800">
              <div className="text-[10px] font-mono text-purple-300">Inquiries</div>
              <div className="h-1.5 w-full bg-slate-700 rounded mt-1.5" />
              <div className="h-1.5 w-1/2 bg-slate-800 rounded mt-1" />
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 z-10 pt-1 border-t border-slate-800/60">
            <span>Cross-Platform Flutter</span>
            <span className="text-purple-400">Unified Management</span>
          </div>
        </div>
      );

    case 'calculator':
    default:
      return (
        <div className="w-full min-h-[180px] bg-gradient-to-br from-slate-900 via-slate-950 to-teal-950/40 p-4 flex flex-col justify-between border-b border-slate-800 relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-300">
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-md bg-teal-500/20 text-teal-400 border border-teal-500/30">
                <Calculator className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono font-semibold text-slate-200">Calculator Web App</span>
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20">
              Vanilla JS & CSS
            </span>
          </div>

          <div className="p-3 rounded-lg bg-surface-900/90 border border-slate-800 max-w-xs mx-auto w-full z-10 my-auto">
            <div className="h-6 rounded bg-slate-950 px-2 flex items-center justify-end text-xs font-mono text-teal-400 border border-slate-800">
              1,248.50 × 12 = 14,982
            </div>
            <div className="grid grid-cols-4 gap-1.5 mt-2">
              {['7', '8', '9', '÷', '4', '5', '6', '×'].map((key) => (
                <div key={key} className="h-5 rounded bg-slate-800/80 text-[10px] font-mono text-slate-300 flex items-center justify-center">
                  {key}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 z-10 pt-1 border-t border-slate-800/60">
            <span>Input Sanitization</span>
            <span className="text-teal-400">Responsive Display</span>
          </div>
        </div>
      );
  }
}

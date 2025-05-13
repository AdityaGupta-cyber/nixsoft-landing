"use client";
import { motion } from "framer-motion";
import { Shield, Terminal, FileCheck, AlertTriangle, Lock, Server } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-2 bg-green-500/20 rounded-full backdrop-blur-sm">
              <span className="text-green-200 font-medium">Linux Security & Compliance</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-green-200">
              Nix-ValGuard: Continuous Linux VA & Compliance Monitoring
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Automate vulnerability assessment and compliance monitoring for your Linux infrastructure. Stay secure and compliant 24/7.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = "/contact-us"}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg"
              >
                Start Free Trial
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = "/pricing"}
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all"
              >
                View Pricing
              </motion.button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="flex items-center gap-2">
                <Terminal className="h-5 w-5 text-green-400" />
                <span className="text-gray-200">Linux-Native</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-gray-200">Real-time Protection</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-green-400" />
                <span className="text-gray-200">Compliance Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-green-400" />
                <span className="text-gray-200">Instant Alerts</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[600px] w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-700">
              <div className="absolute inset-0">
                <div className="p-8">
                  {/* Mock Terminal UI */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h3 className="text-lg font-mono text-green-400">nixvalguard scan --continuous</h3>
                        <p className="text-sm text-gray-400 font-mono">Monitoring system vulnerabilities...</p>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                    </div>
                    
                    {/* Mock Terminal Output */}
                    <div className="font-mono text-sm">
                      <div className="text-green-400">➜ Scanning system packages...</div>
                      <div className="text-gray-400 ml-2">Found 1423 packages</div>
                      <div className="text-green-400">➜ Checking vulnerabilities...</div>
                      <div className="text-yellow-400 ml-2">⚠ CVE-2024-1234 detected in openssl</div>
                      <div className="text-green-400">➜ Verifying compliance...</div>
                      <div className="text-gray-400 ml-2">✓ CIS Benchmark: Level 1 compliant</div>
                    </div>

                    {/* Mock Dashboard Elements */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <Server className="h-6 w-6 text-green-400 mb-2" />
                        <div className="text-2xl font-bold text-white">127</div>
                        <div className="text-sm text-gray-400">Systems Protected</div>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <Shield className="h-6 w-6 text-yellow-400 mb-2" />
                        <div className="text-2xl font-bold text-white">3</div>
                        <div className="text-sm text-gray-400">Critical Issues</div>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <Lock className="h-6 w-6 text-green-400 mb-2" />
                        <div className="text-2xl font-bold text-white">99%</div>
                        <div className="text-sm text-gray-400">Compliance Score</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Alert */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -right-8 -bottom-8 bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-lg shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-full">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium">System Secured</div>
                  <div className="text-xs text-green-200">All vulnerabilities patched</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

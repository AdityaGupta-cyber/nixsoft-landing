"use client";
import { motion } from "framer-motion";
import { Activity, LineChart, Database, Bell, Zap, Settings } from "lucide-react";


const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 text-white overflow-hidden">
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
            <div className="inline-block px-4 py-2 bg-indigo-500/20 rounded-full backdrop-blur-sm">
              <span className="text-indigo-200 font-medium">Next-Gen AI-Powered Observability</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
              Transform Your IT Operations with AI-Driven Observability
            </h1>
            
            <p className="text-xl text-indigo-100 leading-relaxed">
              Harness the power of AI/ML to detect anomalies, predict issues, and maintain peak system performance with our comprehensive observability platform.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = "/contact-us"}
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all shadow-lg"
              >
                Get Started Free
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
                <Activity className="h-5 w-5 text-indigo-400" />
                <span className="text-indigo-200">Real-time Monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-indigo-400" />
                <span className="text-indigo-200">Smart Alerts</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-indigo-400" />
                <span className="text-indigo-200">Anomaly Detection</span>
              </div>
              <div className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-indigo-400" />
                <span className="text-indigo-200">Auto-Resolution</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[600px] w-full bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10">
              <div className="absolute inset-0">
                <div className="p-8">
                  {/* Mock Dashboard UI */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold">System Overview</h3>
                        <p className="text-sm text-indigo-200">Real-time metrics and analytics</p>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse delay-75" />
                        <div className="w-3 h-3 rounded-full bg-red-400 animate-pulse delay-150" />
                      </div>
                    </div>
                    
                    {/* Mock Charts */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 p-4 rounded-lg">
                        <div className="h-[120px] bg-gradient-to-t from-indigo-500/20 to-transparent rounded relative">
                          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-indigo-500/20" />
                        </div>
                      </div>
                      <div className="bg-white/5 p-4 rounded-lg">
                        <div className="h-[120px] bg-gradient-to-t from-purple-500/20 to-transparent rounded relative">
                          <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-purple-500/20" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/5 p-4 rounded-lg">
                      <div className="h-[200px] bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 rounded animate-pulse" />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-white/5 p-4 rounded-lg">
                        <LineChart className="h-6 w-6 text-indigo-400 mb-2" />
                        <div className="text-2xl font-bold">99.9%</div>
                        <div className="text-sm text-indigo-200">Uptime</div>
                      </div>
                      <div className="bg-white/5 p-4 rounded-lg">
                        <Database className="h-6 w-6 text-purple-400 mb-2" />
                        <div className="text-2xl font-bold">1.2ms</div>
                        <div className="text-sm text-indigo-200">Latency</div>
                      </div>
                      <div className="bg-white/5 p-4 rounded-lg">
                        <Activity className="h-6 w-6 text-indigo-400 mb-2" />
                        <div className="text-2xl font-bold">5k/s</div>
                        <div className="text-sm text-indigo-200">Requests</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -right-8 -bottom-8 bg-gradient-to-br from-purple-500 to-indigo-500 p-6 rounded-lg shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-full">
                  <Bell className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium">Anomaly Detected</div>
                  <div className="text-xs text-purple-200">Auto-resolved in 2.3s</div>
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

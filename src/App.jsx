  // GeoVision AI - Complete Mockup Dashboard
// Save as: GeoVisionAIMockup.jsx
// Run with: npm install react react-dom recharts lucide-react

import React, { useState } from 'react';
import { 
  Activity, 
  Droplets, 
  Thermometer, 
  Map, 
  Bell, 
  TrendingUp, 
  CloudRain,
  Sun,
  AlertTriangle,
  CheckCircle,
  Clock,
  Smartphone,
  Monitor,
  Calendar,
  Download,
  Filter,
  Search,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  BarChart3,
  FileText,
  Users,
  Settings,
  Home,
  Navigation,
  RefreshCw,
  Eye,
  EyeOff,
  Loader2,
  Send,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const App = () => {
  // State Management
  const [selectedTehsil, setSelectedTehsil] = useState('Mithi');
  const [showPrediction, setShowPrediction] = useState(true);
  const [selectedSeverity, setSelectedSeverity] = useState('all');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoading, setIsLoading] = useState(false);
  const [alertCount, setAlertCount] = useState(3);

  // Mock Tehsil Data for Sindh & Balochistan
  const tehsilsData = [
    { id: 1, name: 'Mithi', district: 'Tharparkar', province: 'Sindh', severity: 'severe', score: 22, croplandImpact: 12450, trend: 'worsening', ndvi: 0.18, spi: -1.8, lst: 42.3 },
    { id: 2, name: 'Diplo', district: 'Tharparkar', province: 'Sindh', severity: 'severe', score: 28, croplandImpact: 9870, trend: 'stable', ndvi: 0.22, spi: -1.5, lst: 41.8 },
    { id: 3, name: 'Chachro', district: 'Tharparkar', province: 'Sindh', severity: 'extreme', score: 15, croplandImpact: 15600, trend: 'worsening', ndvi: 0.12, spi: -2.1, lst: 44.2 },
    { id: 4, name: 'Umerkot', district: 'Umerkot', province: 'Sindh', severity: 'moderate', score: 45, croplandImpact: 5670, trend: 'improving', ndvi: 0.35, spi: -0.9, lst: 39.5 },
    { id: 5, name: 'Kunri', district: 'Umerkot', province: 'Sindh', severity: 'moderate', score: 48, croplandImpact: 4320, trend: 'stable', ndvi: 0.38, spi: -0.7, lst: 38.9 },
    { id: 6, name: 'Naukot', district: 'Umerkot', province: 'Sindh', severity: 'watch', score: 62, croplandImpact: 2100, trend: 'improving', ndvi: 0.52, spi: -0.3, lst: 36.2 },
    { id: 7, name: 'Quetta', district: 'Quetta', province: 'Balochistan', severity: 'moderate', score: 42, croplandImpact: 8900, trend: 'worsening', ndvi: 0.28, spi: -1.2, lst: 38.5 },
    { id: 8, name: 'Pishin', district: 'Pishin', province: 'Balochistan', severity: 'severe', score: 25, croplandImpact: 11200, trend: 'worsening', ndvi: 0.19, spi: -1.7, lst: 40.2 },
    { id: 9, name: 'Chaman', district: 'Killa Abdullah', province: 'Balochistan', severity: 'extreme', score: 18, croplandImpact: 13400, trend: 'stable', ndvi: 0.14, spi: -1.9, lst: 43.1 },
    { id: 10, name: 'Sibi', district: 'Sibi', province: 'Balochistan', severity: 'severe', score: 32, croplandImpact: 7650, trend: 'improving', ndvi: 0.25, spi: -1.3, lst: 41.5 },
    { id: 11, name: 'Khuzdar', district: 'Khuzdar', province: 'Balochistan', severity: 'extreme', score: 12, croplandImpact: 18900, trend: 'worsening', ndvi: 0.08, spi: -2.3, lst: 45.0 },
    { id: 12, name: 'Turbat', district: 'Kech', province: 'Balochistan', severity: 'severe', score: 21, croplandImpact: 14500, trend: 'stable', ndvi: 0.16, spi: -1.6, lst: 42.7 },
  ];

  // Severity colors and styles
  const severityConfig = {
    normal: { bg: 'bg-green-500', text: 'text-green-700', light: 'bg-green-100', border: 'border-green-200', label: 'Normal' },
    watch: { bg: 'bg-yellow-400', text: 'text-yellow-700', light: 'bg-yellow-100', border: 'border-yellow-200', label: 'Watch' },
    moderate: { bg: 'bg-orange-500', text: 'text-orange-700', light: 'bg-orange-100', border: 'border-orange-200', label: 'Moderate' },
    severe: { bg: 'bg-red-500', text: 'text-red-700', light: 'bg-red-100', border: 'border-red-200', label: 'Severe' },
    extreme: { bg: 'bg-purple-700', text: 'text-purple-700', light: 'bg-purple-100', border: 'border-purple-200', label: 'Extreme' }
  };

  // Filter tehsils based on severity selection
  const filteredTehsils = selectedSeverity === 'all' 
    ? tehsilsData 
    : tehsilsData.filter(t => t.severity === selectedSeverity);

  const selectedTehsilData = tehsilsData.find(t => t.name === selectedTehsil);

  // ML Prediction Data
  const mlPrediction = {
    currentSeverity: 'Severe',
    predictedSeverity: 'Extreme',
    confidence: 87,
    primaryDriver: 'NDVI rate of change (-12% in 2 weeks)',
    riskTrajectory: 'Worsening',
    daysToAction: 9
  };

  // Recent Alerts
  const recentAlerts = [
    { id: 1, tehsil: 'Chachro', severity: 'Extreme', time: '2 hours ago', message: 'Drought escalated from Severe to Extreme', type: 'critical' },
    { id: 2, tehsil: 'Khuzdar', severity: 'Extreme', time: '1 day ago', message: 'ML predicts Extreme drought in 2 weeks', type: 'warning' },
    { id: 3, tehsil: 'Mithi', severity: 'Severe', time: '2 days ago', message: 'Cropland stress exceeded 10,000 hectares', type: 'critical' },
    { id: 4, tehsil: 'Quetta', severity: 'Moderate', time: '3 days ago', message: 'Drought onset detected', type: 'info' },
  ];

  // Statistics
  const statistics = {
    totalTehsils: tehsilsData.length,
    severeExtremeCount: tehsilsData.filter(t => t.severity === 'severe' || t.severity === 'extreme').length,
    totalCroplandImpacted: tehsilsData.reduce((sum, t) => sum + t.croplandImpact, 0),
    hotspotsCount: 2 // Chachro + Khuzdar adjacent
  };

  // Severity Distribution
  const severityDistribution = {
    normal: tehsilsData.filter(t => t.severity === 'normal').length,
    watch: tehsilsData.filter(t => t.severity === 'watch').length,
    moderate: tehsilsData.filter(t => t.severity === 'moderate').length,
    severe: tehsilsData.filter(t => t.severity === 'severe').length,
    extreme: tehsilsData.filter(t => t.severity === 'extreme').length
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header Navigation Bar */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo & Sidebar Toggle */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 p-2 rounded-lg">
                <Map size={24} className="text-white" />
              </div>
              <div>
                <h1 className="font-bold text-xl text-gray-800">GeoVision AI</h1>
                <p className="text-xs text-gray-500">Drought Intelligence System</p>
              </div>
            </div>
          </div>

          {/* User & Quick Actions */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg">
              <Bell size={20} />
              {alertCount > 0 && (
                <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {alertCount}
                </span>
              )}
            </button>
            <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
              <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center text-sm font-bold">
                AD
              </div>
              <span className="hidden md:inline text-sm font-medium">Admin User</span>
            </button>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex border-b border-gray-200 px-4">
          {['dashboard', 'maps', 'predictions', 'alerts', 'reports', 'mobile'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium transition capitalize ${
                activeTab === tab 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab === 'dashboard' && <Home size={16} className="inline mr-1" />}
              {tab === 'maps' && <Map size={16} className="inline mr-1" />}
              {tab === 'predictions' && <TrendingUp size={16} className="inline mr-1" />}
              {tab === 'alerts' && <Bell size={16} className="inline mr-1" />}
              {tab === 'reports' && <FileText size={16} className="inline mr-1" />}
              {tab === 'mobile' && <Smartphone size={16} className="inline mr-1" />}
              {tab}
            </button>
          ))}
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-64 bg-white border-r border-gray-200 min-h-screen p-4">
            <div className="space-y-6">
              {/* Province Overview */}
              <div>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Pilot Provinces</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium">Sindh</span>
                    <span className="text-sm font-bold">6 Tehsils</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-orange-50 rounded-lg">
                    <span className="text-sm font-medium">Balochistan</span>
                    <span className="text-sm font-bold">6 Tehsils</span>
                  </div>
                </div>
              </div>

              {/* Severity Legend */}
              <div>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Severity Legend</h3>
                <div className="space-y-2">
                  {Object.entries(severityConfig).map(([key, config]) => (
                    <div key={key} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`h-3 w-3 rounded-full ${config.bg}`}></div>
                        <span className="text-sm">{config.label}</span>
                      </div>
                      <span className="text-xs text-gray-500">{severityDistribution[key] || 0}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="bg-red-50 p-2 rounded-lg">
                    <p className="text-xs text-red-600">Severe/Extreme Tehsils</p>
                    <p className="text-xl font-bold text-red-700">{statistics.severeExtremeCount}</p>
                  </div>
                  <div className="bg-orange-50 p-2 rounded-lg">
                    <p className="text-xs text-orange-600">Cropland Impacted</p>
                    <p className="text-sm font-bold text-orange-700">{(statistics.totalCroplandImpacted / 1000).toFixed(1)}k ha</p>
                  </div>
                  <div className="bg-purple-50 p-2 rounded-lg">
                    <p className="text-xs text-purple-600">Active Hotspots</p>
                    <p className="text-xl font-bold text-purple-700">{statistics.hotspotsCount}</p>
                  </div>
                </div>
              </div>

              {/* Filter */}
              <div>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Filter by Severity</h3>
                <select 
                  value={selectedSeverity}
                  onChange={(e) => setSelectedSeverity(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Tehsils</option>
                  <option value="normal">Normal</option>
                  <option value="watch">Watch</option>
                  <option value="moderate">Moderate</option>
                  <option value="severe">Severe</option>
                  <option value="extreme">Extreme</option>
                </select>
              </div>
            </div>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6">
          
          {/* STATS CARDS - Module M02 Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Total Tehsils</p>
                  <p className="text-2xl font-bold">{statistics.totalTehsils}</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <Map size={24} className="text-blue-600" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Crisis Tehsils (Severe/Extreme)</p>
                  <p className="text-2xl font-bold text-red-600">{statistics.severeExtremeCount}</p>
                </div>
                <div className="bg-red-100 p-3 rounded-full">
                  <AlertTriangle size={24} className="text-red-600" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Cropland Impacted</p>
                  <p className="text-2xl font-bold">{(statistics.totalCroplandImpacted / 1000).toFixed(1)}k ha</p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <Droplets size={24} className="text-green-600" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Active Drought Hotspots</p>
                  <p className="text-2xl font-bold text-purple-600">{statistics.hotspotsCount}</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <Activity size={24} className="text-purple-600" />
                </div>
              </div>
            </div>
          </div>

          {/* MAIN MAP SECTION - Module M05 GIS Dashboard */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6 overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <div>
                <h2 className="font-semibold text-lg">Drought Severity Map - Pakistan (Sindh & Balochistan)</h2>
                <p className="text-sm text-gray-500">Tehsil-level classification with cropland overlay</p>
              </div>
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => setShowPrediction(!showPrediction)}
                  className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-sm transition ${
                    showPrediction ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {showPrediction ? <Eye size={14} /> : <EyeOff size={14} />}
                  <span>2-Week Prediction Overlay</span>
                </button>
                <button className="flex items-center space-x-2 px-3 py-1.5 bg-gray-100 rounded-lg text-sm">
                  <Download size={14} />
                  <span>Export Map</span>
                </button>
              </div>
            </div>
            
            {/* Mock GIS Map */}
            <div className="relative bg-gradient-to-br from-green-100 via-yellow-100 to-red-100 p-4 min-h-[400px]">
              <div className="relative h-[400px] bg-gray-200 rounded-lg overflow-hidden">
                {/* Mock Map SVG */}
                <svg viewBox="0 0 800 400" className="w-full h-full">
                  {/* Province Boundaries - Sindh */}
                  <polygon points="100,200 200,180 300,220 350,300 250,350 150,320 100,280" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
                  <text x="200" y="280" className="text-sm font-bold fill-gray-700">Sindh</text>
                  
                  {/* Province Boundaries - Balochistan */}
                  <polygon points="50,50 250,30 350,80 300,180 200,200 100,180 50,100" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
                  <text x="180" y="120" className="text-sm font-bold fill-gray-700">Balochistan</text>
                  
                  {/* Tehsil Polygons with Severity Colors */}
                  {/* Extreme - Chachro */}
                  <polygon points="320,280 360,270 370,310 330,320" fill="#6b21a8" opacity="0.7" stroke="#6b21a8" strokeWidth="1" />
                  <text x="340" y="300" className="text-xs fill-white font-bold">Chachro</text>
                  
                  {/* Extreme - Khuzdar */}
                  <polygon points="200,120 240,110 250,150 210,160" fill="#6b21a8" opacity="0.7" stroke="#6b21a8" strokeWidth="1" />
                  <text x="220" y="140" className="text-xs fill-white font-bold">Khuzdar</text>
                  
                  {/* Severe - Mithi */}
                  <polygon points="380,250 420,240 430,280 390,290" fill="#ef4444" opacity="0.7" stroke="#ef4444" strokeWidth="1" />
                  <text x="405" y="270" className="text-xs fill-white font-bold">Mithi</text>
                  
                  {/* Severe - Pishin */}
                  <polygon points="120,80 160,70 170,110 130,120" fill="#ef4444" opacity="0.7" stroke="#ef4444" strokeWidth="1" />
                  <text x="145" y="100" className="text-xs fill-white font-bold">Pishin</text>
                  
                  {/* Severe - Turbat */}
                  <polygon points="60,180 100,170 110,210 70,220" fill="#ef4444" opacity="0.7" stroke="#ef4444" strokeWidth="1" />
                  <text x="85" y="200" className="text-xs fill-white font-bold">Turbat</text>
                  
                  {/* Moderate - Quetta */}
                  <polygon points="250,90 290,80 300,120 260,130" fill="#f97316" opacity="0.7" stroke="#f97316" strokeWidth="1" />
                  <text x="275" y="110" className="text-xs fill-white font-bold">Quetta</text>
                  
                  {/* Moderate - Umerkot */}
                  <polygon points="450,200 490,190 500,230 460,240" fill="#f97316" opacity="0.7" stroke="#f97316" strokeWidth="1" />
                  <text x="475" y="220" className="text-xs fill-white font-bold">Umerkot</text>
                  
                  {/* Watch - Naukot */}
                  <polygon points="520,280 560,270 570,310 530,320" fill="#fbbf24" opacity="0.7" stroke="#fbbf24" strokeWidth="1" />
                  <text x="545" y="300" className="text-xs fill-gray-700 font-bold">Naukot</text>
                  
                  {/* Prediction Overlay Arrow */}
                  {showPrediction && (
                    <>
                      <path d="M340,300 Q380,320 405,290" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="5,5" marker-end="url(#arrow)" />
                      <defs>
                        <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                          <path d="M0,0 L10,5 L0,10 Z" fill="#ef4444" />
                        </marker>
                      </defs>
                      <text x="365" y="315" className="text-xs fill-red-600 font-bold">ML Prediction: Worsening</text>
                    </>
                  )}
                </svg>
                
                {/* Map Legend Overlay */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-lg p-3 shadow-lg">
                  <p className="text-xs font-semibold mb-2">Severity Legend</p>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2"><div className="w-3 h-3 rounded-full bg-green-500"></div><span className="text-xs">Normal</span></div>
                    <div className="flex items-center space-x-2"><div className="w-3 h-3 rounded-full bg-yellow-400"></div><span className="text-xs">Watch</span></div>
                    <div className="flex items-center space-x-2"><div className="w-3 h-3 rounded-full bg-orange-500"></div><span className="text-xs">Moderate</span></div>
                    <div className="flex items-center space-x-2"><div className="w-3 h-3 rounded-full bg-red-500"></div><span className="text-xs">Severe</span></div>
                    <div className="flex items-center space-x-2"><div className="w-3 h-3 rounded-full bg-purple-700"></div><span className="text-xs">Extreme</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TEHSIL LIST - Module M02 Table View */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="font-semibold text-lg">Tehsil-level Drought Status</h2>
              <div className="flex items-center space-x-2">
                <input 
                  type="text" 
                  placeholder="Search tehsil..." 
                  className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="p-1.5 bg-gray-100 rounded-lg">
                  <Filter size={16} />
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr className="text-left text-sm text-gray-600">
                    <th className="p-3">Tehsil</th>
                    <th className="p-3">District</th>
                    <th className="p-3">Province</th>
                    <th className="p-3">Severity</th>
                    <th className="p-3">Composite Score</th>
                    <th className="p-3">Cropland Impact (ha)</th>
                    <th className="p-3">Trend</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTehsils.map((tehsil) => (
                    <tr 
                      key={tehsil.id} 
                      className={`border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition ${selectedTehsil === tehsil.name ? 'bg-blue-50' : ''}`}
                      onClick={() => setSelectedTehsil(tehsil.name)}
                    >
                      <td className="p-3 font-medium">{tehsil.name}</td>
                      <td className="p-3 text-sm">{tehsil.district}</td>
                      <td className="p-3 text-sm">{tehsil.province}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${severityConfig[tehsil.severity].light} ${severityConfig[tehsil.severity].text}`}>
                          {severityConfig[tehsil.severity].label}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-bold">{tehsil.score}</span>
                          <div className="w-16 bg-gray-200 rounded-full h-1.5">
                            <div className={`h-1.5 rounded-full ${tehsil.score < 20 ? 'bg-purple-700' : tehsil.score < 40 ? 'bg-red-500' : tehsil.score < 60 ? 'bg-orange-500' : tehsil.score < 80 ? 'bg-yellow-400' : 'bg-green-500'}`} style={{ width: `${tehsil.score}%` }}></div>
                          </div>
                        </div>
                      </td>
                      <td className="p-3 text-sm">{(tehsil.croplandImpact).toLocaleString()}</td>
                      <td className="p-3">
                        <span className={`text-xs ${tehsil.trend === 'worsening' ? 'text-red-500' : tehsil.trend === 'improving' ? 'text-green-500' : 'text-yellow-500'}`}>
                          {tehsil.trend === 'worsening' ? '↓ Worsening' : tehsil.trend === 'improving' ? '↑ Improving' : '→ Stable'}
                        </span>
                      </td>
                      <td className="p-3">
                        <button className="text-blue-600 text-sm hover:underline">View Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* TWO COLUMN: ML PREDICTION + ALERTS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* ML PREDICTION MODULE - M03 GeoAI Prediction */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <TrendingUp size={20} className="text-blue-600" />
                  <h2 className="font-semibold text-lg">ML Prediction: 2-Week Forecast</h2>
                </div>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">Random Forest | 200 estimators</span>
              </div>
              
              <div className="p-4">
                {/* Selected Tehsil Info */}
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">Selected Tehsil</p>
                  <p className="font-bold text-lg">{selectedTehsilData?.name} - {selectedTehsilData?.district}</p>
                </div>

                {/* Current vs Predicted */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-red-50 rounded-lg">
                    <p className="text-xs text-gray-500">Current Severity</p>
                    <p className="text-2xl font-bold text-red-600">{severityConfig[selectedTehsilData?.severity]?.label}</p>
                    <p className="text-xs">Score: {selectedTehsilData?.score}</p>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <p className="text-xs text-gray-500">Predicted (2 Weeks)</p>
                    <p className="text-2xl font-bold text-purple-600">{mlPrediction.predictedSeverity}</p>
                    <p className="text-xs">Confidence: {mlPrediction.confidence}%</p>
                  </div>
                </div>

                {/* Arrow indicating direction */}
                <div className="flex justify-center mb-4">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <ChevronRight size={24} className="text-gray-500" />
                  </div>
                </div>

                {/* ML Details */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                    <span className="text-sm">Confidence Score</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: `${mlPrediction.confidence}%` }}></div>
                      </div>
                      <span className="text-sm font-bold">{mlPrediction.confidence}%</span>
                    </div>
                  </div>
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500">Primary Driving Feature</p>
                    <p className="text-sm font-medium">{mlPrediction.primaryDriver}</p>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                    <span className="text-sm">Risk Trajectory</span>
                    <span className="text-sm font-bold text-red-600">{mlPrediction.riskTrajectory}</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-orange-50 rounded-lg">
                    <span className="text-sm">⏰ Days until action recommended</span>
                    <span className="text-lg font-bold text-orange-600">{mlPrediction.daysToAction} days</span>
                  </div>
                </div>

                {/* Separate Models Info */}
                <div className="mt-4 p-2 border border-dashed border-gray-300 rounded-lg">
                  <p className="text-xs text-center text-gray-500">📅 Separate models: Rabi Season | Kharif Season</p>
                </div>
              </div>
            </div>

            {/* ALERTS & NOTIFICATIONS MODULE - M04 Alert Engine */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Bell size={20} className="text-red-500" />
                  <h2 className="font-semibold text-lg">Early Warning Alerts</h2>
                </div>
                <button className="text-sm text-blue-600 hover:underline">View All</button>
              </div>
              
              <div className="p-4">
                {/* Alert Feed */}
                <div className="space-y-3 mb-4">
                  {recentAlerts.map((alert) => (
                    <div key={alert.id} className={`p-3 rounded-lg border-l-4 ${
                      alert.type === 'critical' ? 'border-red-500 bg-red-50' : 
                      alert.type === 'warning' ? 'border-yellow-500 bg-yellow-50' : 
                      'border-blue-500 bg-blue-50'
                    }`}>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            {alert.type === 'critical' && <AlertTriangle size={14} className="text-red-500" />}
                            <p className="text-sm font-medium">{alert.tehsil} - {alert.severity}</p>
                          </div>
                          <p className="text-xs text-gray-600">{alert.message}</p>
                          <p className="text-xs text-gray-400 mt-1">{alert.time}</p>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                          <X size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Alert Stats */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-red-600">2</p>
                    <p className="text-xs text-gray-500">Critical Alerts</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-yellow-600">1</p>
                    <p className="text-xs text-gray-500">Warning Alerts</p>
                  </div>
                </div>

                {/* Push Notification Preview */}
                <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Smartphone size={16} className="text-gray-500" />
                    <span className="text-xs font-semibold">FCM Push Notification</span>
                  </div>
                  <div className="bg-white rounded-lg p-2 shadow-sm">
                    <div className="flex items-center space-x-2">
                      <div className="bg-purple-600 rounded-full h-8 w-8 flex items-center justify-center">
                        <Bell size={14} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-bold">GeoVision AI Alert</p>
                        <p className="text-xs text-gray-600">⚠️ Chachro escalated to Extreme drought. Action required.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RESOURCE ALLOCATION & PDF EXPORT - Module M05 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            
            {/* Resource Allocation Ranking */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-semibold text-lg">Resource Allocation Priority</h2>
                <p className="text-xs text-gray-500">Ranked by: Severity × Cropland Impact</p>
              </div>
              <div className="p-4">
                {[...tehsilsData]
                  .filter(t => t.severity === 'extreme' || t.severity === 'severe')
                  .sort((a, b) => (b.croplandImpact * (b.severity === 'extreme' ? 5 : 4)) - (a.croplandImpact * (a.severity === 'extreme' ? 5 : 4)))
                  .slice(0, 5)
                  .map((tehsil, index) => (
                    <div key={tehsil.id} className="flex items-center justify-between p-3 border-b border-gray-100 last:border-0">
                      <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                          index === 0 ? 'bg-red-600' : index === 1 ? 'bg-orange-500' : 'bg-gray-400'
                        }`}>
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium text-sm">{tehsil.name}</p>
                          <p className="text-xs text-gray-500">{tehsil.district}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-red-600">{severityConfig[tehsil.severity].label}</p>
                        <p className="text-xs text-gray-500">{(tehsil.croplandImpact).toLocaleString()} ha</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* PDF Export & Reports */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-semibold text-lg">Generate Reports</h2>
              </div>
              <div className="p-4 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center space-x-2 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
                    <FileText size={18} className="text-blue-600" />
                    <span className="text-sm font-medium">Weekly Summary</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition">
                    <Download size={18} className="text-green-600" />
                    <span className="text-sm font-medium">Export PDF</span>
                  </button>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar size={14} className="text-gray-500" />
                    <span className="text-sm font-medium">Last Report Generated</span>
                  </div>
                  <p className="text-sm">March 15, 2025 - Weekly Drought Bulletin</p>
                  <p className="text-xs text-gray-500 mt-1">Includes: 6 severe tehsils, 12,450 ha cropland impacted</p>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE APP PREVIEW - Module M06 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 mt-6">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <Smartphone size={20} className="text-blue-600" />
                <h2 className="font-semibold text-lg">Field Officer Mobile App Preview</h2>
                <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">Flutter | Offline-capable</span>
              </div>
            </div>
            <div className="p-4 flex justify-center">
              {/* Mock Phone Frame */}
              <div className="w-[320px] bg-gray-900 rounded-3xl p-2 shadow-xl">
                <div className="bg-white rounded-2xl overflow-hidden">
                  {/* App Header */}
                  <div className="bg-gradient-to-r from-green-600 to-blue-600 p-3 text-white">
                    <div className="flex justify-between items-center">
                      <span className="font-bold">GeoVision AI</span>
                      <Bell size={16} className="text-white" />
                    </div>
                    <p className="text-xs opacity-90 mt-1">Field Officer • Tharparkar</p>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-3">
                    {/* Province Overview */}
                    <div className="mb-3">
                      <p className="text-xs text-gray-500 mb-1">Sindh Overview</p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-red-50 p-2 rounded-lg text-center">
                          <p className="text-lg font-bold text-red-600">3</p>
                          <p className="text-xs">Severe/Extreme</p>
                        </div>
                        <div className="bg-orange-50 p-2 rounded-lg text-center">
                          <p className="text-lg font-bold text-orange-600">12,450</p>
                          <p className="text-xs">ha Affected</p>
                        </div>
                      </div>
                    </div>

                    {/* Severe List */}
                    <p className="text-xs font-semibold mb-2">Critical Tehsils</p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 bg-red-50 rounded-lg">
                        <div>
                          <p className="text-sm font-bold">Chachro</p>
                          <p className="text-xs text-gray-500">Extreme</p>
                        </div>
                        <AlertTriangle size={16} className="text-red-500" />
                      </div>
                      <div className="flex justify-between items-center p-2 bg-red-50 rounded-lg">
                        <div>
                          <p className="text-sm font-bold">Mithi</p>
                          <p className="text-xs text-gray-500">Severe</p>
                        </div>
                        <AlertTriangle size={16} className="text-red-500" />
                      </div>
                    </div>

                    {/* Offline Indicator */}
                    <div className="mt-3 p-2 bg-gray-100 rounded-lg flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs">Connected</span>
                      </div>
                      <span className="text-xs text-gray-500">Last sync: 2 min ago</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="ml-6 space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Offline-first cache (shared_preferences)</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>FCM Push notifications</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Auto-refresh on reconnect</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Read-only field access</span>
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default App;
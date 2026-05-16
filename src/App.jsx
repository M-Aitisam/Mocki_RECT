import React, { useState } from 'react';
import { 
  Activity, 
  Droplets, 
  Map, 
  Bell, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Smartphone,
  Calendar,
  Download,
  Filter,
  Search,
  Menu,
  X,
  ChevronRight,
  FileText,
  Home,
  Eye,
  EyeOff,
  BarChart3,
  Clock,
  CloudRain,
  Sun,
  Thermometer,
  Navigation,
  RefreshCw,
  Send,
  Mail,
  Phone,
  MapPin,
  Users,
  Settings,
  BarChart,
  PieChart,
  LineChart,
  Upload,
  Printer,
  Share2,
  Info,
  HelpCircle,
  LogOut,
  User,
  Shield,
  Database,
  Cloud,
  Wifi,
  WifiOff,
  Battery,
  Signal,
  Camera,
  Image,
  Video,
  Mic,
  Plus,
  Minus,
  Trash2,
  Edit,
  Save,
  Copy,
  ExternalLink
} from 'lucide-react';

const App = () => {
  // ==================== STATE MANAGEMENT ====================
  const [selectedTehsil, setSelectedTehsil] = useState('Mithi');
  const [showPrediction, setShowPrediction] = useState(true);
  const [selectedSeverity, setSelectedSeverity] = useState('all');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [alertCount, setAlertCount] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('all');
  const [selectedProvince, setSelectedProvince] = useState('all');
  const [dateRange, setDateRange] = useState('weekly');
  const [notificationEnabled, setNotificationEnabled] = useState(true);
  const [mapZoom, setMapZoom] = useState(6);
  const [mapCenter, setMapCenter] = useState({ lat: 27.5, lng: 66.5 });
  const [selectedReportType, setSelectedReportType] = useState('weekly');
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);
  const [mobileView, setMobileView] = useState('home');
  const [offlineMode, setOfflineMode] = useState(false);

  // ==================== MOCK DATA ====================
  const tehsilsData = [
    { id: 1, name: 'Mithi', district: 'Tharparkar', province: 'Sindh', severity: 'severe', score: 22, croplandImpact: 12450, trend: 'worsening', ndvi: 0.18, spi: -1.8, lst: 42.3, population: 245000, villages: 127 },
    { id: 2, name: 'Diplo', district: 'Tharparkar', province: 'Sindh', severity: 'severe', score: 28, croplandImpact: 9870, trend: 'stable', ndvi: 0.22, spi: -1.5, lst: 41.8, population: 189000, villages: 98 },
    { id: 3, name: 'Chachro', district: 'Tharparkar', province: 'Sindh', severity: 'extreme', score: 15, croplandImpact: 15600, trend: 'worsening', ndvi: 0.12, spi: -2.1, lst: 44.2, population: 312000, villages: 156 },
    { id: 4, name: 'Umerkot', district: 'Umerkot', province: 'Sindh', severity: 'moderate', score: 45, croplandImpact: 5670, trend: 'improving', ndvi: 0.35, spi: -0.9, lst: 39.5, population: 278000, villages: 134 },
    { id: 5, name: 'Kunri', district: 'Umerkot', province: 'Sindh', severity: 'moderate', score: 48, croplandImpact: 4320, trend: 'stable', ndvi: 0.38, spi: -0.7, lst: 38.9, population: 167000, villages: 87 },
    { id: 6, name: 'Naukot', district: 'Umerkot', province: 'Sindh', severity: 'watch', score: 62, croplandImpact: 2100, trend: 'improving', ndvi: 0.52, spi: -0.3, lst: 36.2, population: 134000, villages: 65 },
    { id: 7, name: 'Quetta', district: 'Quetta', province: 'Balochistan', severity: 'moderate', score: 42, croplandImpact: 8900, trend: 'worsening', ndvi: 0.28, spi: -1.2, lst: 38.5, population: 1001000, villages: 234 },
    { id: 8, name: 'Pishin', district: 'Pishin', province: 'Balochistan', severity: 'severe', score: 25, croplandImpact: 11200, trend: 'worsening', ndvi: 0.19, spi: -1.7, lst: 40.2, population: 456000, villages: 178 },
    { id: 9, name: 'Chaman', district: 'Killa Abdullah', province: 'Balochistan', severity: 'extreme', score: 18, croplandImpact: 13400, trend: 'stable', ndvi: 0.14, spi: -1.9, lst: 43.1, population: 234000, villages: 112 },
    { id: 10, name: 'Sibi', district: 'Sibi', province: 'Balochistan', severity: 'severe', score: 32, croplandImpact: 7650, trend: 'improving', ndvi: 0.25, spi: -1.3, lst: 41.5, population: 267000, villages: 98 },
    { id: 11, name: 'Khuzdar', district: 'Khuzdar', province: 'Balochistan', severity: 'extreme', score: 12, croplandImpact: 18900, trend: 'worsening', ndvi: 0.08, spi: -2.3, lst: 45.0, population: 345000, villages: 167 },
    { id: 12, name: 'Turbat', district: 'Kech', province: 'Balochistan', severity: 'severe', score: 21, croplandImpact: 14500, trend: 'stable', ndvi: 0.16, spi: -1.6, lst: 42.7, population: 423000, villages: 189 },
  ];

  const severityConfig = {
    normal: { bg: 'bg-green-500', text: 'text-green-700', light: 'bg-green-100', border: 'border-green-200', label: 'Normal', icon: '✅', action: 'No action needed' },
    watch: { bg: 'bg-yellow-400', text: 'text-yellow-700', light: 'bg-yellow-100', border: 'border-yellow-200', label: 'Watch', icon: '⚠️', action: 'Monitor regularly' },
    moderate: { bg: 'bg-orange-500', text: 'text-orange-700', light: 'bg-orange-100', border: 'border-orange-200', label: 'Moderate', icon: '🌧️', action: 'Prepare response plan' },
    severe: { bg: 'bg-red-500', text: 'text-red-700', light: 'bg-red-100', border: 'border-red-200', label: 'Severe', icon: '🔥', action: 'Immediate intervention required' },
    extreme: { bg: 'bg-purple-700', text: 'text-purple-700', light: 'bg-purple-100', border: 'border-purple-200', label: 'Extreme', icon: '💀', action: 'Emergency response - evacuate if needed' }
  };

  const mlPredictions = {
    'Mithi': { predicted: 'Extreme', confidence: 87, driver: 'NDVI rate of change', daysToAction: 9 },
    'Chachro': { predicted: 'Extreme', confidence: 92, driver: 'SPI trajectory', daysToAction: 5 },
    'Khuzdar': { predicted: 'Extreme', confidence: 89, driver: 'LST anomaly', daysToAction: 7 },
    'Pishin': { predicted: 'Extreme', confidence: 84, driver: 'Historical frequency', daysToAction: 10 },
    'Turbat': { predicted: 'Severe', confidence: 78, driver: 'NDVI rate', daysToAction: 14 },
    'default': { predicted: 'Moderate', confidence: 65, driver: 'Composite trend', daysToAction: 21 }
  };

  const recentAlerts = [
    { id: 1, tehsil: 'Chachro', severity: 'Extreme', time: '2 hours ago', message: 'Drought escalated from Severe to Extreme. Immediate action required!', type: 'critical', lat: 25.4, lng: 70.3 },
    { id: 2, tehsil: 'Khuzdar', severity: 'Extreme', time: '1 day ago', message: 'ML model predicts Extreme drought in 2 weeks with 89% confidence', type: 'warning', lat: 27.8, lng: 66.6 },
    { id: 3, tehsil: 'Mithi', severity: 'Severe', time: '2 days ago', message: 'Cropland stress exceeded 10,000 hectares. Water shortage reported.', type: 'critical', lat: 24.7, lng: 69.8 },
    { id: 4, tehsil: 'Quetta', severity: 'Moderate', time: '3 days ago', message: 'Drought onset detected in northern areas', type: 'info', lat: 30.2, lng: 67.0 },
    { id: 5, tehsil: 'Pishin', severity: 'Severe', time: '3 days ago', message: 'Water levels dropping rapidly', type: 'warning', lat: 30.6, lng: 67.0 },
    { id: 6, tehsil: 'Turbat', severity: 'Severe', time: '4 days ago', message: 'Agricultural stress increasing', type: 'warning', lat: 26.0, lng: 63.0 },
  ];

  const statistics = {
    totalTehsils: tehsilsData.length,
    severeExtremeCount: tehsilsData.filter(t => t.severity === 'severe' || t.severity === 'extreme').length,
    totalCroplandImpacted: tehsilsData.reduce((sum, t) => sum + t.croplandImpact, 0),
    hotspotsCount: 2,
    affectedPopulation: tehsilsData.filter(t => t.severity === 'severe' || t.severity === 'extreme').reduce((sum, t) => sum + t.population, 0),
    totalVillages: tehsilsData.reduce((sum, t) => sum + t.villages, 0)
  };

  const severityDistribution = {
    normal: tehsilsData.filter(t => t.severity === 'normal').length,
    watch: tehsilsData.filter(t => t.severity === 'watch').length,
    moderate: tehsilsData.filter(t => t.severity === 'moderate').length,
    severe: tehsilsData.filter(t => t.severity === 'severe').length,
    extreme: tehsilsData.filter(t => t.severity === 'extreme').length
  };

  const getPredictionForTehsil = (tehsilName) => {
    return mlPredictions[tehsilName] || mlPredictions.default;
  };

  const filteredTehsils = tehsilsData.filter(t => {
    if (selectedSeverity !== 'all' && t.severity !== selectedSeverity) return false;
    if (selectedDistrict !== 'all' && t.district !== selectedDistrict) return false;
    if (selectedProvince !== 'all' && t.province !== selectedProvince) return false;
    if (searchQuery && !t.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const selectedTehsilData = tehsilsData.find(t => t.name === selectedTehsil);
  const selectedPrediction = getPredictionForTehsil(selectedTehsil);

  const handleGenerateReport = () => {
    setIsGeneratingReport(true);
    setTimeout(() => {
      setIsGeneratingReport(false);
      alert('Report generated successfully! Check Downloads folder.');
    }, 2000);
  };

  // ==================== RENDER FUNCTIONS FOR EACH TAB ====================
  
  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold">Welcome to GeoVision AI</h2>
        <p className="text-blue-100 mt-1">Real-time drought monitoring and early warning system for Pakistan</p>
        <div className="flex gap-4 mt-4">
          <div className="bg-white/20 rounded-lg px-3 py-1 text-sm">Last update: Today, 08:00 AM</div>
          <div className="bg-white/20 rounded-lg px-3 py-1 text-sm">Data sources: Sentinel-2, CHIRPS, MODIS</div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div><p className="text-gray-500 text-sm">Total Tehsils</p><p className="text-3xl font-bold">{statistics.totalTehsils}</p><p className="text-xs text-green-600 mt-1">12 monitored</p></div>
            <div className="bg-blue-100 p-3 rounded-full"><Map size={28} className="text-blue-600" /></div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div><p className="text-gray-500 text-sm">Crisis Tehsils</p><p className="text-3xl font-bold text-red-600">{statistics.severeExtremeCount}</p><p className="text-xs text-red-500 mt-1">Need immediate attention</p></div>
            <div className="bg-red-100 p-3 rounded-full"><AlertTriangle size={28} className="text-red-600" /></div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div><p className="text-gray-500 text-sm">Affected Population</p><p className="text-2xl font-bold">{(statistics.affectedPopulation / 1000000).toFixed(1)}M</p><p className="text-xs text-orange-500 mt-1">People impacted</p></div>
            <div className="bg-orange-100 p-3 rounded-full"><Users size={28} className="text-orange-600" /></div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div><p className="text-gray-500 text-sm">Cropland Impacted</p><p className="text-2xl font-bold">{(statistics.totalCroplandImpacted / 1000).toFixed(0)}k ha</p><p className="text-xs text-purple-500 mt-1">Agricultural loss</p></div>
            <div className="bg-green-100 p-3 rounded-full"><Droplets size={28} className="text-green-600" /></div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Severity Distribution Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <h3 className="font-semibold text-lg mb-4">Severity Distribution</h3>
          <div className="space-y-3">
            {Object.entries(severityConfig).map(([key, config]) => (
              <div key={key}>
                <div className="flex justify-between text-sm mb-1">
                  <span className={config.text}>{config.icon} {config.label}</span>
                  <span className="text-gray-600">{severityDistribution[key]} tehsils</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className={`${config.bg} h-2.5 rounded-full`} style={{ width: `${(severityDistribution[key] / statistics.totalTehsils) * 100}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-gray-100">
            <p className="text-xs text-gray-500">Data updated weekly from satellite sources</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <h3 className="font-semibold text-lg mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={() => setActiveTab('reports')} className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition"><FileText size={18} className="text-blue-600" /><span className="text-sm">Generate Report</span></button>
            <button onClick={() => setActiveTab('alerts')} className="flex items-center gap-2 p-3 bg-red-50 rounded-lg hover:bg-red-100 transition"><Bell size={18} className="text-red-600" /><span className="text-sm">View Alerts</span></button>
            <button onClick={() => setActiveTab('predictions')} className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition"><TrendingUp size={18} className="text-purple-600" /><span className="text-sm">ML Predictions</span></button>
            <button onClick={() => setActiveTab('mobile')} className="flex items-center gap-2 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition"><Smartphone size={18} className="text-green-600" /><span className="text-sm">Mobile View</span></button>
          </div>
        </div>
      </div>

      {/* Top Crisis Tehsils */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
        <h3 className="font-semibold text-lg mb-4">⚠️ Top Crisis Tehsils (Need Immediate Action)</h3>
        <div className="space-y-3">
          {tehsilsData.filter(t => t.severity === 'extreme' || t.severity === 'severe').slice(0, 5).map((tehsil, idx) => (
            <div key={tehsil.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">{idx + 1}</div><div><p className="font-medium">{tehsil.name}</p><p className="text-xs text-gray-500">{tehsil.district}, {tehsil.province}</p></div></div>
              <div className="text-right"><span className={`px-2 py-1 rounded-full text-xs font-medium ${severityConfig[tehsil.severity].light} ${severityConfig[tehsil.severity].text}`}>{severityConfig[tehsil.severity].label}</span><p className="text-xs text-gray-500 mt-1">{tehsil.croplandImpact.toLocaleString()} ha affected</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMaps = () => (
    <div className="space-y-6">
      {/* Map Controls */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex flex-wrap gap-3 justify-between items-center">
          <div className="flex gap-2">
            <button onClick={() => setMapZoom(Math.max(3, mapZoom - 1))} className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"><Minus size={18} /></button>
            <span className="p-2 bg-gray-100 rounded-lg text-sm">Zoom: {mapZoom}</span>
            <button onClick={() => setMapZoom(Math.min(12, mapZoom + 1))} className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"><Plus size={18} /></button>
          </div>
          <div className="flex gap-2">
            <select className="p-2 border border-gray-300 rounded-lg text-sm">
              <option>Sindh</option><option>Balochistan</option><option>All Pakistan</option>
            </select>
            <button className="p-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"><RefreshCw size={16} className="inline mr-1" />Refresh Map</button>
          </div>
        </div>
      </div>

      {/* Main Map Visualization */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="font-semibold text-lg">Interactive Drought Severity Map</h2>
          <p className="text-sm text-gray-500">Click on any tehsil to view detailed information</p>
        </div>
        <div className="relative bg-gradient-to-br from-green-100 via-yellow-100 to-red-100 p-4">
          <div className="relative h-[500px] bg-gray-200 rounded-lg overflow-hidden">
            <svg viewBox="0 0 900 500" className="w-full h-full">
              {/* Map Background */}
              <rect width="900" height="500" fill="#e5e7eb" rx="8"/>
              
              {/* Province - Sindh */}
              <polygon points="150,250 300,220 400,260 450,350 350,400 200,380 120,320" fill="#fef3c7" stroke="#d97706" strokeWidth="2" strokeDasharray="4,2"/>
              <text x="280" y="320" className="text-lg font-bold fill-gray-700">Sindh</text>
              
              {/* Province - Balochistan */}
              <polygon points="80,80 350,50 450,100 400,220 300,240 150,220 60,140" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" strokeDasharray="4,2"/>
              <text x="240" y="150" className="text-lg font-bold fill-gray-700">Balochistan</text>
              
              {/* Tehsil markers with severity colors */}
              {/* Extreme zones */}
              <circle cx="420" cy="320" r="18" fill="#6b21a8" opacity="0.8" stroke="#fff" strokeWidth="2"/>
              <text x="410" y="325" className="text-xs fill-white font-bold text-center">Chachro</text>
              
              <circle cx="280" cy="160" r="18" fill="#6b21a8" opacity="0.8" stroke="#fff" strokeWidth="2"/>
              <text x="268" y="165" className="text-xs fill-white font-bold">Khuzdar</text>
              
              {/* Severe zones */}
              <circle cx="500" cy="300" r="15" fill="#ef4444" opacity="0.8" stroke="#fff" strokeWidth="2"/>
              <text x="492" y="305" className="text-xs fill-white font-bold">Mithi</text>
              
              <circle cx="200" cy="110" r="15" fill="#ef4444" opacity="0.8" stroke="#fff" strokeWidth="2"/>
              <text x="192" y="115" className="text-xs fill-white font-bold">Pishin</text>
              
              <circle cx="120" cy="240" r="15" fill="#ef4444" opacity="0.8" stroke="#fff" strokeWidth="2"/>
              <text x="110" y="245" className="text-xs fill-white font-bold">Turbat</text>
              
              <circle cx="420" cy="120" r="15" fill="#ef4444" opacity="0.8" stroke="#fff" strokeWidth="2"/>
              <text x="415" y="125" className="text-xs fill-white font-bold">Sibi</text>
              
              {/* Moderate zones */}
              <circle cx="340" cy="130" r="12" fill="#f97316" opacity="0.8" stroke="#fff" strokeWidth="2"/>
              <text x="332" y="135" className="text-xs fill-white font-bold">Quetta</text>
              
              <circle cx="580" cy="260" r="12" fill="#f97316" opacity="0.8" stroke="#fff" strokeWidth="2"/>
              <text x="570" y="265" className="text-xs fill-white font-bold">Umerkot</text>
              
              {/* Watch zones */}
              <circle cx="650" cy="340" r="10" fill="#fbbf24" opacity="0.8" stroke="#fff" strokeWidth="2"/>
              <text x="642" y="345" className="text-xs fill-gray-700 font-bold">Naukot</text>

              {/* Prediction overlay arrows */}
              {showPrediction && (
                <>
                  <path d="M420,340 Q450,360 500,315" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="6,4" marker-end="url(#arrowRed)"/>
                  <path d="M280,180 Q300,200 280,250" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="6,4" marker-end="url(#arrowRed)"/>
                  <defs>
                    <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                      <path d="M0,0 L10,5 L0,10 Z" fill="#ef4444" />
                    </marker>
                  </defs>
                  <text x="460" y="370" className="text-sm font-bold fill-red-600">→ Worsening Trend</text>
                </>
              )}
            </svg>
            
            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg border border-gray-200">
              <p className="text-sm font-semibold mb-3">Severity Legend</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-green-500"></div><span className="text-sm">Normal - No action</span></div>
                <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-yellow-400"></div><span className="text-sm">Watch - Monitor</span></div>
                <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-orange-500"></div><span className="text-sm">Moderate - Prepare</span></div>
                <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-red-500"></div><span className="text-sm">Severe - Act now</span></div>
                <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-purple-700"></div><span className="text-sm">Extreme - Emergency</span></div>
              </div>
            </div>

            {/* Selected Tehsil Info Card */}
            {selectedTehsilData && (
              <div className="absolute top-4 right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-200 w-64">
                <h4 className="font-bold text-lg">{selectedTehsilData.name}</h4>
                <p className="text-xs text-gray-500">{selectedTehsilData.district}, {selectedTehsilData.province}</p>
                <div className="mt-2 space-y-1">
                  <p className="text-sm"><span className="font-semibold">Severity:</span> <span className={`px-2 py-0.5 rounded-full text-xs ${severityConfig[selectedTehsilData.severity].light} ${severityConfig[selectedTehsilData.severity].text}`}>{severityConfig[selectedTehsilData.severity].label}</span></p>
                  <p className="text-sm"><span className="font-semibold">Score:</span> {selectedTehsilData.score}/100</p>
                  <p className="text-sm"><span className="font-semibold">Cropland:</span> {selectedTehsilData.croplandImpact.toLocaleString()} ha</p>
                  <p className="text-sm"><span className="font-semibold">Population:</span> {selectedTehsilData.population.toLocaleString()}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* District Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <h3 className="font-semibold text-lg mb-3">📊 Sindh Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between"><span>Total Tehsils:</span><span className="font-bold">6</span></div>
            <div className="flex justify-between"><span>Extreme:</span><span className="text-purple-700 font-bold">1 (Chachro)</span></div>
            <div className="flex justify-between"><span>Severe:</span><span className="text-red-600 font-bold">2 (Mithi, Diplo)</span></div>
            <div className="flex justify-between"><span>Moderate:</span><span>2 (Umerkot, Kunri)</span></div>
            <div className="flex justify-between"><span>Watch:</span><span>1 (Naukot)</span></div>
            <div className="mt-3 pt-2 border-t"><div className="flex justify-between font-bold"><span>Total Cropland Impact:</span><span>{(tehsilsData.filter(t=>t.province==='Sindh').reduce((s,t)=>s+t.croplandImpact,0)/1000).toFixed(0)}k ha</span></div></div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <h3 className="font-semibold text-lg mb-3">🗺️ Balochistan Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between"><span>Total Tehsils:</span><span className="font-bold">6</span></div>
            <div className="flex justify-between"><span>Extreme:</span><span className="text-purple-700 font-bold">2 (Khuzdar, Chaman)</span></div>
            <div className="flex justify-between"><span>Severe:</span><span className="text-red-600 font-bold">3 (Pishin, Sibi, Turbat)</span></div>
            <div className="flex justify-between"><span>Moderate:</span><span>1 (Quetta)</span></div>
            <div className="mt-3 pt-2 border-t"><div className="flex justify-between font-bold"><span>Total Cropland Impact:</span><span>{(tehsilsData.filter(t=>t.province==='Balochistan').reduce((s,t)=>s+t.croplandImpact,0)/1000).toFixed(0)}k ha</span></div></div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPredictions = () => (
    <div className="space-y-6">
      {/* ML Model Info */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
        <div className="flex items-center gap-3"><TrendingUp size={28} /><h2 className="text-2xl font-bold">ML Prediction Engine</h2></div>
        <p className="text-purple-100 mt-1">Random Forest model with 200 estimators | Trained on Pakistan drought data (2015-2025)</p>
        <div className="flex gap-3 mt-3"><span className="bg-white/20 rounded-full px-3 py-1 text-sm">Rabi Season Model</span><span className="bg-white/20 rounded-full px-3 py-1 text-sm">Kharif Season Model</span><span className="bg-white/20 rounded-full px-3 py-1 text-sm">F1 Score: 0.73</span></div>
      </div>

      {/* Prediction for Selected Tehsil */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="font-semibold text-lg mb-4">2-Week Forecast for Selected Tehsil</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-xl p-4">
            <label className="text-sm text-gray-500">Select Tehsil</label>
            <select className="w-full mt-1 p-2 border border-gray-300 rounded-lg" value={selectedTehsil} onChange={(e) => setSelectedTehsil(e.target.value)}>
              {tehsilsData.map(t => <option key={t.id} value={t.name}>{t.name} - {t.district}</option>)}
            </select>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-sm text-gray-500">Current Status</p>
            <p className="text-2xl font-bold text-red-600">{severityConfig[selectedTehsilData?.severity]?.label}</p>
            <p className="text-xs">Composite Score: {selectedTehsilData?.score}/100</p>
          </div>
        </div>
      </div>

      {/* Prediction Results */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="font-semibold text-lg mb-4">🎯 Prediction Result</h3>
          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <p className="text-sm text-gray-500">Predicted Severity (2 Weeks)</p>
            <p className="text-4xl font-bold text-purple-600">{selectedPrediction.predicted}</p>
            <div className="mt-3"><div className="w-full bg-gray-200 rounded-full h-2.5"><div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${selectedPrediction.confidence}%` }}></div></div><p className="text-sm mt-1">Confidence: {selectedPrediction.confidence}%</p></div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="font-semibold text-lg mb-4">📊 Prediction Details</h3>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded-lg"><p className="text-xs text-gray-500">Primary Driving Feature</p><p className="font-medium">{selectedPrediction.driver}</p></div>
            <div className="p-3 bg-gray-50 rounded-lg"><p className="text-xs text-gray-500">Risk Trajectory</p><p className="font-medium text-red-600">Worsening ⬇️</p></div>
            <div className="p-3 bg-orange-50 rounded-lg"><p className="text-xs text-gray-500">⏰ Days Until Action Recommended</p><p className="text-2xl font-bold text-orange-600">{selectedPrediction.daysToAction} days</p></div>
          </div>
        </div>
      </div>

      {/* All Tehsils Predictions Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200"><h3 className="font-semibold text-lg">📋 All Tehsils Predictions</h3><p className="text-xs text-gray-500">2-week forecast for all monitored tehsils</p></div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b"><tr className="text-left text-sm">
              <th className="p-3">Tehsil</th><th className="p-3">District</th><th className="p-3">Current</th><th className="p-3">Predicted</th><th className="p-3">Confidence</th><th className="p-3">Days to Act</th>
            </tr></thead>
            <tbody>
              {tehsilsData.map(t => {
                const pred = getPredictionForTehsil(t.name);
                return <tr key={t.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">{t.name}</td><td className="p-3">{t.district}</td>
                  <td className="p-3"><span className={`px-2 py-1 rounded-full text-xs ${severityConfig[t.severity].light} ${severityConfig[t.severity].text}`}>{severityConfig[t.severity].label}</span></td>
                  <td className="p-3"><span className={`px-2 py-1 rounded-full text-xs ${pred.predicted === 'Extreme' ? 'bg-purple-100 text-purple-700' : 'bg-red-100 text-red-700'}`}>{pred.predicted}</span></td>
                  <td className="p-3"><div className="flex items-center gap-2"><div className="w-16 bg-gray-200 rounded-full h-1.5"><div className="bg-green-500 h-1.5 rounded-full" style={{ width: `${pred.confidence}%` }}></div></div><span>{pred.confidence}%</span></div></td>
                  <td className="p-3 text-orange-600 font-bold">{pred.daysToAction} days</td>
                 </tr>;
              })}
            </tbody>
           </table>
        </div>
      </div>
    </div>
  );

  const renderAlerts = () => (
    <div className="space-y-6">
      {/* Alert Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-red-50 rounded-xl p-5 border border-red-200"><div className="flex items-center justify-between"><div><p className="text-red-600 text-sm">Critical Alerts</p><p className="text-3xl font-bold text-red-600">2</p></div><AlertTriangle size={40} className="text-red-500" /></div><p className="text-xs text-red-500 mt-2">Action required immediately</p></div>
        <div className="bg-yellow-50 rounded-xl p-5 border border-yellow-200"><div className="flex items-center justify-between"><div><p className="text-yellow-600 text-sm">Warning Alerts</p><p className="text-3xl font-bold text-yellow-600">2</p></div><Bell size={40} className="text-yellow-500" /></div><p className="text-xs text-yellow-500 mt-2">Monitor closely</p></div>
        <div className="bg-blue-50 rounded-xl p-5 border border-blue-200"><div className="flex items-center justify-between"><div><p className="text-blue-600 text-sm">Info Alerts</p><p className="text-3xl font-bold text-blue-600">1</p></div><Info size={40} className="text-blue-500" /></div><p className="text-xs text-blue-500 mt-2">For your information</p></div>
      </div>

      {/* Alert Feed */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center"><h2 className="font-semibold text-lg">📢 Real-time Alert Feed</h2><div className="flex gap-2"><button className="text-sm text-blue-600 hover:underline">Mark all read</button><button className="text-sm text-gray-500 hover:underline">Filter</button></div></div>
        <div className="divide-y">
          {recentAlerts.map((alert) => (
            <div key={alert.id} className={`p-4 ${alert.type === 'critical' ? 'bg-red-50' : alert.type === 'warning' ? 'bg-yellow-50' : 'bg-blue-50'}`}>
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-full ${alert.type === 'critical' ? 'bg-red-200' : alert.type === 'warning' ? 'bg-yellow-200' : 'bg-blue-200'}`}>
                  {alert.type === 'critical' ? <AlertTriangle size={18} className="text-red-600" /> : alert.type === 'warning' ? <Bell size={18} className="text-yellow-600" /> : <Info size={18} className="text-blue-600" />}
                </div>
                <div className="flex-1"><div className="flex items-center gap-2"><p className="font-bold">{alert.tehsil}</p><span className={`text-xs px-2 py-0.5 rounded-full ${alert.type === 'critical' ? 'bg-red-200 text-red-700' : alert.type === 'warning' ? 'bg-yellow-200 text-yellow-700' : 'bg-blue-200 text-blue-700'}`}>{alert.severity}</span><span className="text-xs text-gray-400">{alert.time}</span></div><p className="text-sm text-gray-600 mt-1">{alert.message}</p></div>
                <button className="text-gray-400 hover:text-gray-600"><X size={16} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Push Notification Settings */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
        <div className="flex items-center justify-between"><div><h3 className="font-semibold text-lg">📱 Push Notification Settings</h3><p className="text-xs text-gray-500">Configure how you receive alerts</p></div><button onClick={() => setNotificationEnabled(!notificationEnabled)} className={`px-4 py-2 rounded-lg text-sm ${notificationEnabled ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'}`}>{notificationEnabled ? 'Enabled' : 'Disabled'}</button></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"><div className="bg-purple-100 p-2 rounded-full"><Smartphone size={16} className="text-purple-600" /></div><div><p className="text-sm font-medium">FCM Push</p><p className="text-xs text-gray-500">Real-time on mobile</p></div></div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"><div className="bg-blue-100 p-2 rounded-full"><Mail size={16} className="text-blue-600" /></div><div><p className="text-sm font-medium">Email Alerts</p><p className="text-xs text-gray-500">admin@geovision.pk</p></div></div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"><div className="bg-green-100 p-2 rounded-full"><Bell size={16} className="text-green-600" /></div><div><p className="text-sm font-medium">SMS Alerts</p><p className="text-xs text-gray-500">+92 XXX XXXXXXX</p></div></div>
        </div>
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="space-y-6">
      {/* Report Generation Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="font-semibold text-xl mb-2">📄 Generate Drought Report</h2>
        <p className="text-gray-500 mb-4">Create comprehensive reports for official documentation and decision making</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div><label className="text-sm font-medium">Report Type</label><select className="w-full mt-1 p-2 border border-gray-300 rounded-lg" value={selectedReportType} onChange={(e) => setSelectedReportType(e.target.value)}><option value="weekly">Weekly Drought Bulletin</option><option value="monthly">Monthly Summary Report</option><option value="custom">Custom Date Range</option></select></div>
          <div><label className="text-sm font-medium">Province</label><select className="w-full mt-1 p-2 border border-gray-300 rounded-lg"><option>Both (Sindh + Balochistan)</option><option>Sindh Only</option><option>Balochistan Only</option></select></div>
          <div><label className="text-sm font-medium">Format</label><select className="w-full mt-1 p-2 border border-gray-300 rounded-lg"><option>PDF Document</option><option>Excel Spreadsheet</option><option>CSV Data</option></select></div>
        </div>

        <button onClick={handleGenerateReport} disabled={isGeneratingReport} className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50 flex items-center justify-center gap-2">
          {isGeneratingReport ? <><RefreshCw size={18} className="animate-spin" /> Generating Report...</> : <><Download size={18} /> Generate Report</>}
        </button>
      </div>

      {/* Report Templates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <div className="flex items-start justify-between"><div><h3 className="font-semibold text-lg">Weekly Drought Bulletin</h3><p className="text-xs text-gray-500">Standard format - NDMA compliant</p></div><FileText size={24} className="text-blue-500" /></div>
          <div className="mt-3 space-y-1 text-sm"><p>✓ Severity maps for all tehsils</p><p>✓ Cropland impact statistics</p><p>✓ ML predictions for next 2 weeks</p><p>✓ Alert summary</p><p>✓ Resource recommendations</p></div>
          <button className="mt-4 text-blue-600 text-sm hover:underline">Preview Template →</button>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <div className="flex items-start justify-between"><div><h3 className="font-semibold text-lg">Executive Summary</h3><p className="text-xs text-gray-500">For senior management</p></div><BarChart3 size={24} className="text-green-500" /></div>
          <div className="mt-3 space-y-1 text-sm"><p>✓ Key findings & recommendations</p><p>✓ High-level severity overview</p><p>✓ Top 5 critical tehsils</p><p>✓ Resource allocation priorities</p><p>✓ Trend analysis</p></div>
          <button className="mt-4 text-blue-600 text-sm hover:underline">Preview Template →</button>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-4 border-b"><h3 className="font-semibold text-lg">📁 Recent Reports</h3></div>
        <div className="divide-y">
          <div className="p-4 flex items-center justify-between"><div><p className="font-medium">Weekly Drought Bulletin - March 10, 2025</p><p className="text-xs text-gray-500">Generated on March 10, 2025 | PDF | 2.4 MB</p></div><div className="flex gap-2"><button className="p-1.5 hover:bg-gray-100 rounded"><Download size={16} /></button><button className="p-1.5 hover:bg-gray-100 rounded"><Printer size={16} /></button><button className="p-1.5 hover:bg-gray-100 rounded"><Share2 size={16} /></button></div></div>
          <div className="p-4 flex items-center justify-between"><div><p className="font-medium">Monthly Summary - February 2025</p><p className="text-xs text-gray-500">Generated on March 1, 2025 | PDF | 5.1 MB</p></div><div className="flex gap-2"><button className="p-1.5 hover:bg-gray-100 rounded"><Download size={16} /></button><button className="p-1.5 hover:bg-gray-100 rounded"><Printer size={16} /></button><button className="p-1.5 hover:bg-gray-100 rounded"><Share2 size={16} /></button></div></div>
        </div>
      </div>
    </div>
  );

  const renderMobile = () => (
    <div className="space-y-6">
      {/* Mobile Preview Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 text-white">
        <div className="flex items-center gap-2"><Smartphone size={28} /><h2 className="text-2xl font-bold">Field Officer Mobile App</h2></div>
        <p className="text-green-100 mt-1">Offline-capable | Real-time sync | Push notifications</p>
      </div>

      {/* Mobile Navigation */}
      <div className="flex gap-2 p-2 bg-white rounded-xl shadow-sm border">
        {['home', 'alerts', 'map', 'profile'].map((view) => (
          <button key={view} onClick={() => setMobileView(view)} className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${mobileView === view ? 'bg-blue-600 text-white' : 'text-gray-500'}`}>{view.charAt(0).toUpperCase() + view.slice(1)}</button>
        ))}
      </div>

      {/* Mobile Content - Based on selected view */}
      <div className="bg-gray-900 rounded-3xl p-2 shadow-xl w-full max-w-md mx-auto">
        <div className="bg-white rounded-2xl overflow-hidden">
          {/* App Header */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 p-4 text-white"><div className="flex justify-between items-center"><span className="font-bold text-lg">GeoVision AI</span><Bell size={18} className="text-white" /></div><p className="text-xs opacity-90 mt-1">Field Officer • Tharparkar</p></div>
          
          {/* App Content based on view */}
          <div className="p-4">
            {mobileView === 'home' && (
              <>
                <div className="mb-4"><p className="text-xs text-gray-500 mb-2">Sindh Overview</p><div className="grid grid-cols-2 gap-3"><div className="bg-red-50 p-3 rounded-xl text-center"><p className="text-2xl font-bold text-red-600">3</p><p className="text-xs">Severe/Extreme</p></div><div className="bg-orange-50 p-3 rounded-xl text-center"><p className="text-2xl font-bold text-orange-600">12.4k</p><p className="text-xs">ha Affected</p></div></div></div>
                <p className="text-sm font-semibold mb-2">⚠️ Critical Tehsils</p><div className="space-y-2"><div className="flex justify-between items-center p-3 bg-red-50 rounded-xl"><div><p className="font-bold">Chachro</p><p className="text-xs text-gray-500">Extreme Drought</p></div><AlertTriangle size={20} className="text-red-500" /></div><div className="flex justify-between items-center p-3 bg-red-50 rounded-xl"><div><p className="font-bold">Mithi</p><p className="text-xs text-gray-500">Severe Drought</p></div><AlertTriangle size={20} className="text-red-500" /></div><div className="flex justify-between items-center p-3 bg-red-50 rounded-xl"><div><p className="font-bold">Khuzdar</p><p className="text-xs text-gray-500">Extreme Drought</p></div><AlertTriangle size={20} className="text-red-500" /></div></div>
                <div className="mt-4 p-3 bg-gray-100 rounded-xl flex items-center justify-between"><div className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div><span className="text-xs">Connected</span></div><span className="text-xs text-gray-500">Last sync: 2 min ago</span><RefreshCw size={14} className="text-gray-500" /></div>
              </>
            )}
            {mobileView === 'alerts' && (
              <div className="space-y-3">
                {recentAlerts.slice(0, 4).map(alert => (
                  <div key={alert.id} className={`p-3 rounded-xl ${alert.type === 'critical' ? 'bg-red-50 border-l-4 border-red-500' : alert.type === 'warning' ? 'bg-yellow-50 border-l-4 border-yellow-500' : 'bg-blue-50 border-l-4 border-blue-500'}`}>
                    <div className="flex justify-between"><p className="font-bold text-sm">{alert.tehsil}</p><span className="text-xs text-gray-400">{alert.time}</span></div>
                    <p className="text-xs mt-1">{alert.message}</p>
                  </div>
                ))}
              </div>
            )}
            {mobileView === 'map' && (
              <div className="h-96 bg-gray-100 rounded-xl flex items-center justify-center"><Map size={48} className="text-gray-400" /><p className="text-sm text-gray-500 mt-2">Interactive Map</p><p className="text-xs text-gray-400">Tap to view details</p></div>
            )}
            {mobileView === 'profile' && (
              <div className="space-y-4"><div className="text-center"><div className="bg-blue-600 text-white rounded-full h-20 w-20 flex items-center justify-center text-2xl font-bold mx-auto">AO</div><p className="font-bold mt-2">Ahmed Officer</p><p className="text-xs text-gray-500">Field Officer • Tharparkar</p></div><div className="space-y-2"><div className="flex justify-between p-3 bg-gray-50 rounded-xl"><span className="text-sm">Notifications</span><div className="flex items-center gap-2"><span className="text-xs text-gray-500">Enabled</span><div className="w-8 h-4 bg-green-500 rounded-full relative"><div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div></div></div></div><div className="flex justify-between p-3 bg-gray-50 rounded-xl"><span className="text-sm">Offline Mode</span><div className="flex items-center gap-2"><span className="text-xs text-gray-500">{offlineMode ? 'On' : 'Off'}</span><div onClick={() => setOfflineMode(!offlineMode)} className={`w-8 h-4 rounded-full relative cursor-pointer ${offlineMode ? 'bg-green-500' : 'bg-gray-300'}`}><div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition ${offlineMode ? 'right-0.5' : 'left-0.5'}`}></div></div></div></div><div className="p-3 bg-gray-50 rounded-xl"><p className="text-sm">Version</p><p className="text-xs text-gray-500">GeoVision AI v2.0.0</p></div></div><button className="w-full mt-4 py-2 bg-red-50 text-red-600 rounded-lg text-sm flex items-center justify-center gap-2"><LogOut size={16} />Logout</button></div>
            )}
          </div>
        </div>
      </div>

      {/* App Features */}
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <div className="bg-white rounded-xl p-3 text-center shadow-sm border"><Wifi size={20} className="text-green-500 mx-auto mb-1" /><p className="text-xs font-medium">Offline-first</p><p className="text-xs text-gray-400">Works without internet</p></div>
        <div className="bg-white rounded-xl p-3 text-center shadow-sm border"><Bell size={20} className="text-purple-500 mx-auto mb-1" /><p className="text-xs font-medium">Push Alerts</p><p className="text-xs text-gray-400">Real-time notifications</p></div>
        <div className="bg-white rounded-xl p-3 text-center shadow-sm border"><Map size={20} className="text-blue-500 mx-auto mb-1" /><p className="text-xs font-medium">GPS Navigation</p><p className="text-xs text-gray-400">Navigate to tehsils</p></div>
        <div className="bg-white rounded-xl p-3 text-center shadow-sm border"><Camera size={20} className="text-orange-500 mx-auto mb-1" /><p className="text-xs font-medium">Photo Upload</p><p className="text-xs text-gray-400">Document ground truth</p></div>
      </div>
    </div>
  );

  // ==================== MAIN RENDER ====================
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-30">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-100 rounded-lg"><Menu size={20} /></button>
            <div className="flex items-center gap-2"><div className="bg-gradient-to-r from-green-600 to-blue-600 p-2 rounded-lg"><Map className="text-white" size={24} /></div><div><h1 className="font-bold text-xl">GeoVision AI</h1><p className="text-xs text-gray-500">Drought Intelligence System</p></div></div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg"><Bell size={20} /><span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">{alertCount}</span></button>
            <div className="flex items-center gap-2"><div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center text-sm font-bold">AD</div><span className="hidden md:inline text-sm font-medium">Admin User</span></div>
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex border-b px-4 overflow-x-auto">
          {['dashboard', 'maps', 'predictions', 'alerts', 'reports', 'mobile'].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 text-sm font-medium capitalize whitespace-nowrap transition ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
              {tab === 'dashboard' && <Home size={14} className="inline mr-1" />}{tab === 'maps' && <Map size={14} className="inline mr-1" />}{tab === 'predictions' && <TrendingUp size={14} className="inline mr-1" />}{tab === 'alerts' && <Bell size={14} className="inline mr-1" />}{tab === 'reports' && <FileText size={14} className="inline mr-1" />}{tab === 'mobile' && <Smartphone size={14} className="inline mr-1" />}{tab}
            </button>
          ))}
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-64 bg-white border-r min-h-screen p-4">
            <div className="space-y-6">
              <div><h3 className="text-xs font-semibold text-gray-400 uppercase mb-3">Pilot Provinces</h3><div className="space-y-2"><div className="flex justify-between p-2 bg-blue-50 rounded-lg"><span>Sindh</span><span className="font-bold">6 Tehsils</span></div><div className="flex justify-between p-2 bg-orange-50 rounded-lg"><span>Balochistan</span><span className="font-bold">6 Tehsils</span></div></div></div>
              <div><h3 className="text-xs font-semibold text-gray-400 uppercase mb-3">Severity Legend</h3><div className="space-y-2">{Object.entries(severityConfig).map(([key, config]) => (<div key={key} className="flex justify-between items-center"><div className="flex items-center gap-2"><div className={`h-3 w-3 rounded-full ${config.bg}`}></div><span className="text-sm">{config.label}</span></div><span className="text-xs text-gray-500">{severityDistribution[key]}</span></div>))}</div></div>
              <div><h3 className="text-xs font-semibold text-gray-400 uppercase mb-3">Quick Stats</h3><div className="space-y-3"><div className="bg-red-50 p-2 rounded-lg"><p className="text-xs text-red-600">Crisis Tehsils</p><p className="text-xl font-bold text-red-700">{statistics.severeExtremeCount}</p></div><div className="bg-orange-50 p-2 rounded-lg"><p className="text-xs text-orange-600">Cropland Impact</p><p className="text-sm font-bold">{(statistics.totalCroplandImpacted/1000).toFixed(1)}k ha</p></div><div className="bg-purple-50 p-2 rounded-lg"><p className="text-xs text-purple-600">Hotspots</p><p className="text-xl font-bold text-purple-700">{statistics.hotspotsCount}</p></div></div></div>
              <div><h3 className="text-xs font-semibold text-gray-400 uppercase mb-3">Filter</h3><select value={selectedSeverity} onChange={(e) => setSelectedSeverity(e.target.value)} className="w-full p-2 border rounded-lg text-sm"><option value="all">All Severities</option><option value="normal">Normal</option><option value="watch">Watch</option><option value="moderate">Moderate</option><option value="severe">Severe</option><option value="extreme">Extreme</option></select></div>
            </div>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'dashboard' && renderDashboard()}
          {activeTab === 'maps' && renderMaps()}
          {activeTab === 'predictions' && renderPredictions()}
          {activeTab === 'alerts' && renderAlerts()}
          {activeTab === 'reports' && renderReports()}
          {activeTab === 'mobile' && renderMobile()}
        </main>
      </div>
    </div>
  );
};

export default App;
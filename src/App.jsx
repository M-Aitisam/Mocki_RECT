// App.jsx - RetailGuard AI (Clean Black/White Professional Version)
import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    { id: 0, name: '1. USER AUTHENTICATION', component: <AuthModule /> },
    { id: 1, name: '2. AI THEFT DETECTION', component: <AIModule /> },
    { id: 2, name: '3. SECURITY DASHBOARD', component: <DashboardModule /> },
    { id: 3, name: '4. REAL-TIME ALERTS', component: <AlertModule /> },
    { id: 4, name: '5. INCIDENT MANAGEMENT', component: <IncidentModule /> },
    { id: 5, name: '6. REPORTING & ANALYTICS', component: <AnalyticsModule /> },
    { id: 6, name: '7. ADMIN CONTROL', component: <AdminModule /> },
    { id: 7, name: '8. VIDEO STORAGE', component: <VideoModule /> },
    { id: 8, name: '9. AI FEEDBACK', component: <FeedbackModule /> },
    { id: 9, name: '10. SECURITY & PRIVACY', component: <PrivacyModule /> },
    { id: 10, name: '11. CCTV INGESTION', component: <CCTVModule /> },
    { id: 11, name: '12. AI PERFORMANCE', component: <PerformanceModule /> },
  ];

  return (
    <div className="app">
      <header className="header">
        <div className="header-left">
          <div className="logo">RG</div>
          <h1>RETAILGUARD AI</h1>
          <span className="version">v1.0</span>
        </div>
        <div className="header-right">
          <span className="badge">RETAIL SECURITY</span>
          <span className="badge">AI SURVEILLANCE</span>
          <span className="badge">REAL-TIME</span>
        </div>
      </header>

      <div className="main-container">
        <nav className="sidebar">
          <h3>SYSTEM MODULES</h3>
          <div className="divider"></div>
          {modules.map((module) => (
            <button
              key={module.id}
              className={`nav-btn ${activeModule === module.id ? 'active' : ''}`}
              onClick={() => setActiveModule(module.id)}
            >
              {module.name}
            </button>
          ))}
        </nav>

        <main className="content">
          <div className="module-container">
            {modules[activeModule].component}
          </div>
        </main>
      </div>
    </div>
  );
}

// ============================================
// MODULE 1: USER AUTHENTICATION
// ============================================
function AuthModule() {
  return (
    <div className="module">
      <div className="module-header">
        <h2>USER AUTHENTICATION</h2>
        <span>Role-Based Access | JWT Security | Multi-Factor Authentication</span>
      </div>

      <div className="module-content">
        <div className="three-col">
          <div className="card">
            <h3>REGISTER NEW USER</h3>
            <div className="form">
              <div className="form-row">
                <label>Full Name:</label>
                <input type="text" placeholder="Enter full name" />
              </div>
              <div className="form-row">
                <label>Email:</label>
                <input type="email" placeholder="Enter email address" />
              </div>
              <div className="form-row">
                <label>Phone:</label>
                <input type="text" placeholder="+92 XXX XXXXXXX" />
              </div>
              <div className="form-row">
                <label>Employee ID:</label>
                <input type="text" placeholder="Store employee ID" />
              </div>
              <div className="form-row">
                <label>Store Name:</label>
                <input type="text" placeholder="Assigned store location" />
              </div>
              <div className="form-row">
                <label>Password:</label>
                <input type="password" placeholder="Create password" />
              </div>
              <div className="form-row">
                <label>Confirm Password:</label>
                <input type="password" placeholder="Confirm password" />
              </div>
              <div className="form-row">
                <label>User Role:</label>
                <select>
                  <option>Security Staff</option>
                  <option>Store Manager</option>
                  <option>System Administrator</option>
                </select>
              </div>
              <button className="btn-primary">REGISTER USER</button>
            </div>
          </div>

          <div className="card">
            <h3>LOGIN PORTAL</h3>
            <div className="form">
              <div className="form-row">
                <label>Email / Employee ID:</label>
                <input type="text" placeholder="email@store.com or EMP001" />
              </div>
              <div className="form-row">
                <label>Password:</label>
                <input type="password" placeholder="Enter password" />
              </div>
              <div className="form-row">
                <label>Login As:</label>
                <select>
                  <option>Security Staff</option>
                  <option>Store Manager</option>
                  <option>Administrator</option>
                </select>
              </div>
              <div className="form-options">
                <label><input type="checkbox" /> Remember this device</label>
                <a href="#">Forgot Password?</a>
              </div>
              <button className="btn-primary">SIGN IN</button>
            </div>
            <div className="divider">OR</div>
            <button className="btn-secondary">Sign in with Company SSO</button>
            <button className="btn-secondary">Two-Factor Authentication</button>
          </div>

          <div className="card">
            <h3>ACTIVE SESSIONS</h3>
            <div className="profile-stats">
              <div className="stat-item">
                <span className="stat-label">Store Managers</span>
                <span className="stat-value">8 Online</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Security Staff</span>
                <span className="stat-value">24 Online</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Administrators</span>
                <span className="stat-value">3 Online</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Total Active</span>
                <span className="stat-value">35 Users</span>
              </div>
            </div>

            <h4>Recent Login Activity</h4>
            <div className="recent-list">
              <div className="recent-item">
                <span>Ahmed Asher</span>
                <span>Security Staff</span>
                <span>2 min ago</span>
              </div>
              <div className="recent-item">
                <span>Hasnat Shah</span>
                <span>Store Manager</span>
                <span>5 min ago</span>
              </div>
              <div className="recent-item">
                <span>Aitisam Ahmed</span>
                <span>Admin</span>
                <span>10 min ago</span>
              </div>
              <div className="recent-item">
                <span>Ali Raza</span>
                <span>Security Staff</span>
                <span>15 min ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MODULE 2: AI THEFT DETECTION
// ============================================
function AIModule() {
  return (
    <div className="module">
      <div className="module-header">
        <h2>AI THEFT DETECTION ENGINE</h2>
        <span>CNN Object Detection | Pose Estimation | Real-Time Analysis</span>
      </div>

      <div className="module-content">
        <div className="stats-row">
          <div className="stat-card">
            <span className="stat-large">16</span>
            <span>Active Cameras</span>
          </div>
          <div className="stat-card">
            <span className="stat-large">98.5%</span>
            <span>System Uptime</span>
          </div>
          <div className="stat-card">
            <span className="stat-large">47</span>
            <span>Detections Today</span>
          </div>
          <div className="stat-card">
            <span className="stat-large">12</span>
            <span>Verified Thefts</span>
          </div>
          <div className="stat-card">
            <span className="stat-large">0.3%</span>
            <span>False Positive Rate</span>
          </div>
        </div>

        <h4>LIVE CAMERA FEEDS WITH AI ANALYSIS</h4>
        <div className="camera-grid">
          {[
            { name: 'ENTRANCE GATE', status: 'Monitoring', conf: '98%', activity: 'Normal' },
            { name: 'AISLE A - ELECTRONICS', status: 'SUSPICIOUS', conf: '94%', activity: 'Item Concealment', alert: true },
            { name: 'AISLE B - GROCERY', status: 'Monitoring', conf: '97%', activity: 'Normal' },
            { name: 'AISLE C - CLOTHING', status: 'Monitoring', conf: '96%', activity: 'Normal' },
            { name: 'CHECKOUT COUNTER', status: 'Monitoring', conf: '99%', activity: 'Normal' },
            { name: 'PARKING LOT', status: 'SUSPICIOUS', conf: '91%', activity: 'Unusual Movement', alert: true },
            { name: 'WAREHOUSE BACK', status: 'ALERT', conf: '89%', activity: 'Unauthorized Access', alert: true },
            { name: 'CUSTOMER SERVICE', status: 'Monitoring', conf: '98%', activity: 'Normal' },
          ].map((cam, i) => (
            <div key={i} className={`camera-card ${cam.alert ? 'alert' : ''}`}>
              <div className="camera-feed">
                <div className="feed-overlay">LIVE STREAM</div>
              </div>
              <div className="camera-info">
                <strong>{cam.name}</strong>
                <span className={cam.alert ? 'alert-text' : ''}>{cam.status}</span>
                <small>Confidence: {cam.conf}</small>
                <small className="detected-activity">Activity: {cam.activity}</small>
              </div>
              {cam.alert && <button className="view-btn">INVESTIGATE</button>}
            </div>
          ))}
        </div>

        <h4>ACTIVE DETECTION EVENTS</h4>
        <table className="detection-table">
          <thead>
            <tr>
              <th>Camera</th>
              <th>Detection Type</th>
              <th>Confidence</th>
              <th>Risk Level</th>
              <th>Timestamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AISLE A - ELECTRONICS</td>
              <td>Item Concealment</td>
              <td>94%</td>
              <td className="risk-high">HIGH</td>
              <td>10:23:45 AM</td>
              <td><button className="action-btn">REVIEW</button></td>
            </tr>
            <tr>
              <td>PARKING LOT</td>
              <td>Unusual Movement</td>
              <td>91%</td>
              <td className="risk-high">HIGH</td>
              <td>10:15:22 AM</td>
              <td><button className="action-btn">REVIEW</button></td>
            </tr>
            <tr>
              <td>WAREHOUSE BACK</td>
              <td>Unauthorized Access</td>
              <td>89%</td>
              <td className="risk-medium">MEDIUM</td>
              <td>09:58:10 AM</td>
              <td><button className="action-btn">REVIEW</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ============================================
// MODULE 3: SECURITY DASHBOARD
// ============================================
function DashboardModule() {
  return (
    <div className="module">
      <div className="module-header">
        <h2>SECURITY MONITORING DASHBOARD</h2>
        <span>Centralized View | Live Feeds | Incident Overview</span>
      </div>

      <div className="module-content">
        <div className="stats-row">
          <div className="stat-card">
            <span className="stat-large">3</span>
            <span>Active Alerts</span>
          </div>
          <div className="stat-card">
            <span className="stat-large">47</span>
            <span>Today's Detections</span>
          </div>
          <div className="stat-card">
            <span className="stat-large">12</span>
            <span>Verified Incidents</span>
          </div>
          <div className="stat-card">
            <span className="stat-large">4.2min</span>
            <span>Avg Response Time</span>
          </div>
          <div className="stat-card">
            <span className="stat-large">98%</span>
            <span>AI Accuracy</span>
          </div>
        </div>

        <div className="two-col">
          <div className="card">
            <h3>LIVE INCIDENT FEED</h3>
            <div className="feed-filters">
              <button className="filter-btn active">All</button>
              <button className="filter-btn">Critical</button>
              <button className="filter-btn">High</button>
              <button className="filter-btn">Medium</button>
              <button className="filter-btn">Resolved</button>
            </div>
            <div className="feed-list">
              {[
                { pri: 'CRITICAL', type: 'Item Concealment', loc: 'Aisle A', time: '2 min ago', assigned: 'Guard 01' },
                { pri: 'HIGH', type: 'Unusual Movement', loc: 'Parking Lot', time: '5 min ago', assigned: 'Guard 03' },
                { pri: 'HIGH', type: 'Unauthorized Access', loc: 'Warehouse', time: '8 min ago', assigned: 'Guard 02' },
                { pri: 'MEDIUM', type: 'Suspicious Loitering', loc: 'Aisle C', time: '12 min ago', assigned: 'Pending' },
              ].map((item, i) => (
                <div key={i} className="feed-item">
                  <span className={`priority ${item.pri === 'CRITICAL' ? 'critical' : item.pri === 'HIGH' ? 'high' : 'medium'}`}>
                    {item.pri}
                  </span>
                  <span>{item.type}</span>
                  <span>{item.loc}</span>
                  <span>{item.time}</span>
                  <span className="assigned">To: {item.assigned}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3>QUICK ACTIONS</h3>
            <div className="action-grid">
              <button className="action-btn">VIEW ALL CAMERAS</button>
              <button className="action-btn">RECENT INCIDENTS</button>
              <button className="action-btn">GENERATE REPORT</button>
              <button className="action-btn">ESCALATE TO MANAGER</button>
              <button className="action-btn">VIEW ALERT HISTORY</button>
              <button className="action-btn">AI FEEDBACK</button>
            </div>

            <h4>STORE INFORMATION</h4>
            <div className="store-info">
              <p><strong>Store Name:</strong> RetailMart F-10</p>
              <p><strong>Security Level:</strong> Enhanced Surveillance</p>
              <p><strong>Active Guards:</strong> 6 / 8</p>
              <p><strong>Cameras Online:</strong> 16 / 16</p>
              <p><strong>Last Audit:</strong> 2026-04-22</p>
            </div>
          </div>
        </div>

        <div className="map-preview">
          <h4>STORE LAYOUT - INCIDENT HEATMAP</h4>
          <div className="map-placeholder">
            <div className="grid"></div>
            <span className="marker high">Aisle A - High Risk</span>
            <span className="marker medium">Parking - Medium Risk</span>
            <span className="marker low">Checkout - Low Risk</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MODULE 4: REAL-TIME ALERTS
// ============================================
function AlertModule() {
  return (
    <div className="module">
      <div className="module-header">
        <h2>REAL-TIME ALERT SYSTEM</h2>
        <span>Instant Notifications | Browser Alerts | Priority Escalation</span>
      </div>

      <div className="module-content">
        <h4>ALERT CHANNELS STATUS</h4>
        <div className="channel-row">
          <div className="channel-btn active">BROWSER PUSH (Active)</div>
          <div className="channel-btn">SMS GATEWAY (Ready)</div>
          <div className="channel-btn">EMAIL (Active)</div>
          <div className="channel-btn">SIREN SYSTEM (Standby)</div>
          <div className="channel-btn">MOBILE APP (Connected)</div>
        </div>

        <h4>ACTIVE ALERTS - IMMEDIATE RESPONSE REQUIRED</h4>
        <table className="alert-table">
          <thead>
            <tr>
              <th>Priority</th>
              <th>Alert Type</th>
              <th>Location</th>
              <th>Time Detected</th>
              <th>Status</th>
              <th>Assigned To</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="priority-critical">CRITICAL</td>
              <td>Item Concealment</td>
              <td>Aisle A - Electronics</td>
              <td>10:23:45 AM</td>
              <td>Pending</td>
              <td>Unassigned</td>
              <td><button className="action-btn">DISPATCH</button></td>
            </tr>
            <tr>
              <td className="priority-critical">CRITICAL</td>
              <td>Unusual Movement</td>
              <td>Parking Lot - Zone B</td>
              <td>10:15:22 AM</td>
              <td>Acknowledged</td>
              <td>Guard 03</td>
              <td><button className="action-btn">MONITOR</button></td>
            </tr>
            <tr>
              <td className="priority-high">HIGH</td>
              <td>Unauthorized Access</td>
              <td>Warehouse Back Door</td>
              <td>09:58:10 AM</td>
              <td>Dispatched</td>
              <td>Guard 02</td>
              <td><button className="action-btn">TRACK</button></td>
            </tr>
          </tbody>
        </table>

        <h4>ALERT ESCALATION MATRIX</h4>
        <div className="escalation-matrix">
          <div className="matrix-item">
            <span>Level 1</span>
            <span>Security Staff Notification</span>
            <span>Immediate</span>
          </div>
          <div className="matrix-item">
            <span>Level 2</span>
            <span>Store Manager Alert</span>
            <span>No response in 2 min</span>
          </div>
          <div className="matrix-item">
            <span>Level 3</span>
            <span>Security Supervisor</span>
            <span>No response in 5 min</span>
          </div>
          <div className="matrix-item">
            <span>Level 4</span>
            <span>Police Notification</span>
            <span>Critical incident only</span>
          </div>
        </div>

        <h4>ALERT HISTORY (LAST 24 HOURS)</h4>
        <div className="history-list">
          <div className="history-item">
            <span>Alert dispatched to Guard 01</span>
            <span>Item Concealment - Aisle A</span>
            <span>10:23 AM</span>
            <span>Resolved</span>
          </div>
          <div className="history-item">
            <span>SMS sent to Store Manager</span>
            <span>Unauthorized Access - Warehouse</span>
            <span>09:58 AM</span>
            <span>Resolved</span>
          </div>
          <div className="history-item">
            <span>Browser alert acknowledged</span>
            <span>Suspicious Activity - Parking</span>
            <span>08:45 AM</span>
            <span>False Positive</span>
          </div>
          <div className="history-item">
            <span>Escalated to Supervisor</span>
            <span>Unusual Movement - Night</span>
            <span>03:12 AM</span>
            <span>Investigating</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MODULE 5: INCIDENT MANAGEMENT
// ============================================
function IncidentModule() {
  return (
    <div className="module">
      <div className="module-header">
        <h2>INCIDENT MANAGEMENT</h2>
        <span>Verify | Review | Document | Track Incidents</span>
      </div>

      <div className="module-content">
        <div className="stats-row">
          <div className="stat-card">
            <span className="stat-large">47</span>
            <span>Total Incidents</span>
          </div>
          <div className="stat-card">
            <span className="stat-large">12</span>
            <span>Verified Thefts</span>
          </div>
          <div className="stat-card">
            <span className="stat-large">8</span>
            <span>False Positives</span>
          </div>
          <div className="stat-card">
            <span className="stat-large">27</span>
            <span>Under Review</span>
          </div>
          <div className="stat-card">
            <span className="stat-large">35</span>
            <span>Resolved</span>
          </div>
        </div>

        <h4>PENDING VERIFICATION INCIDENTS</h4>
        <table className="incident-table">
          <thead>
            <tr>
              <th>Incident ID</th>
              <th>Camera</th>
              <th>Detection Type</th>
              <th>Confidence</th>
              <th>Timestamp</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>INC-042</td>
              <td>Aisle A - Electronics</td>
              <td>Item Concealment</td>
              <td>94%</td>
              <td>10:23:45 AM</td>
              <td>Pending</td>
              <td>
                <button className="action-btn approve">VERIFY</button>
                <button className="action-btn reject">REJECT</button>
              </td>
            </tr>
            <tr>
              <td>INC-041</td>
              <td>Parking Lot - Zone B</td>
              <td>Unusual Movement</td>
              <td>91%</td>
              <td>10:15:22 AM</td>
              <td>Pending</td>
              <td>
                <button className="action-btn approve">VERIFY</button>
                <button className="action-btn reject">REJECT</button>
              </td>
            </tr>
            <tr>
              <td>INC-040</td>
              <td>Warehouse Back Door</td>
              <td>Unauthorized Access</td>
              <td>89%</td>
              <td>09:58:10 AM</td>
              <td>Acknowledged</td>
              <td>
                <button className="action-btn approve">VERIFY</button>
                <button className="action-btn reject">REJECT</button>
              </td>
            </tr>
          </tbody>
        </table>

        <h4>VERIFIED INCIDENTS - EVIDENCE RECORD</h4>
        <div className="verified-list">
          {[
            { id: 'INC-038', type: 'Theft', location: 'Aisle B', time: 'Yesterday', evidence: 'Video Clip', status: 'Closed' },
            { id: 'INC-035', type: 'Attempted Theft', location: 'Checkout', time: 'Yesterday', evidence: 'Images', status: 'Closed' },
            { id: 'INC-032', type: 'Theft', location: 'Electronics', time: '2026-04-21', evidence: 'Video Clip', status: 'Police Reported' },
          ].map((inc, i) => (
            <div key={i} className="verified-item">
              <div className="verified-info">
                <strong>{inc.id}</strong>
                <span>{inc.type}</span>
                <span>{inc.location}</span>
                <span>{inc.time}</span>
                <span className="evidence">{inc.evidence}</span>
                <span>{inc.status}</span>
              </div>
              <button className="view-evidence">VIEW EVIDENCE</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// MODULE 6: REPORTING & ANALYTICS
// ============================================
function AnalyticsModule() {
  return (
    <div className="module">
      <div className="module-header">
        <h2>REPORTING & ANALYTICS</h2>
        <span>Theft Pattern Analysis | High-Risk Zones | Trends</span>
      </div>

      <div className="module-content">
        <div className="filter-row">
          <span>Report Period:</span>
          <button className="filter-btn active">Today</button>
          <button className="filter-btn">This Week</button>
          <button className="filter-btn">This Month</button>
          <button className="filter-btn">Custom Range</button>
        </div>

        <div className="stats-row">
          <div className="stat-card">
            <span className="stat-large">47</span>
            <span>Total Detections</span>
            <span className="trend-up">+12% vs yesterday</span>
          </div>
          <div className="stat-card">
            <span className="stat-large">12</span>
            <span>Confirmed Thefts</span>
            <span className="trend-up">+8% vs yesterday</span>
          </div>
          <div className="stat-card">
            <span className="stat-large">8</span>
            <span>False Positives</span>
            <span className="trend-down">-5% vs yesterday</span>
          </div>
          <div className="stat-card">
            <span className="stat-large">94%</span>
            <span>AI Accuracy</span>
            <span className="trend-up">+2% vs yesterday</span>
          </div>
        </div>

        <h4>HIGH-RISK ZONES - STORE LAYOUT HEATMAP</h4>
        <div className="heatmap">
          <div className="heatmap-grid">
            <div className="zone high-risk">
              <span>ELECTRONICS AISLE</span>
              <span>Risk: 94%</span>
              <span>12 incidents</span>
            </div>
            <div className="zone medium-risk">
              <span>PARKING LOT</span>
              <span>Risk: 78%</span>
              <span>8 incidents</span>
            </div>
            <div className="zone medium-risk">
              <span>WAREHOUSE</span>
              <span>Risk: 72%</span>
              <span>6 incidents</span>
            </div>
            <div className="zone low-risk">
              <span>CHECKOUT</span>
              <span>Risk: 34%</span>
              <span>3 incidents</span>
            </div>
          </div>
        </div>

        <div className="legend">
          <span class="high-risk-legend">High Risk (80-100%)</span>
          <span class="medium-risk-legend">Medium Risk (50-79%)</span>
          <span class="low-risk-legend">Low Risk (0-49%)</span>
        </div>

        <h4>THEFT PATTERN ANALYSIS</h4>
        <table className="pattern-table">
          <thead>
            <tr>
              <th>Time Slot</th>
              <th>Most Targeted Aisle</th>
              <th>Avg Incidents</th>
              <th>Recommendation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10:00 AM - 1:00 PM</td>
              <td>Electronics</td>
              <td>4.2 per day</td>
              <td>Increase patrol</td>
            </tr>
            <tr>
              <td>3:00 PM - 6:00 PM</td>
              <td>Clothing</td>
              <td>3.8 per day</td>
              <td>Additional cameras</td>
            </tr>
            <tr>
              <td>7:00 PM - 10:00 PM</td>
              <td>Parking Lot</td>
              <td>2.5 per day</td>
              <td>Better lighting</td>
            </tr>
          </tbody>
        </table>

        <div className="export-section">
          <button className="btn-primary">EXPORT FULL REPORT (PDF)</button>
          <button className="btn-secondary">EXPORT DATA (CSV)</button>
          <button className="btn-secondary">SEND TO MANAGEMENT</button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MODULE 7: ADMIN CONTROL
// ============================================
function AdminModule() {
  return (
    <div className="module">
      <div className="module-header">
        <h2>ADMINISTRATOR CONTROL</h2>
        <span>User Management | System Configuration | Access Control</span>
      </div>

      <div className="module-content">
        <div className="two-col">
          <div className="card">
            <h3>USER MANAGEMENT</h3>
            <div className="form">
              <div className="form-row">
                <label>Search Users:</label>
                <input type="text" placeholder="Name, email, or role..." />
              </div>
            </div>
            <table className="user-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Store</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ahmed Asher</td>
                  <td>Security Staff</td>
                  <td>RetailMart F-10</td>
                  <td>Active</td>
                  <td><button className="action-btn">EDIT</button> <button className="action-btn">DISABLE</button></td>
                </tr>
                <tr>
                  <td>Hasnat Shah</td>
                  <td>Store Manager</td>
                  <td>RetailMart G-9</td>
                  <td>Active</td>
                  <td><button className="action-btn">EDIT</button> <button className="action-btn">DISABLE</button></td>
                </tr>
                <tr>
                  <td>Aitisam Ahmed</td>
                  <td>Administrator</td>
                  <td>All Stores</td>
                  <td>Active</td>
                  <td><button className="action-btn">EDIT</button> <button className="action-btn">DISABLE</button></td>
                </tr>
              </tbody>
            </table>
            <button className="btn-primary">ADD NEW USER</button>
          </div>

          <div className="card">
            <h3>SYSTEM CONFIGURATION</h3>
            <div className="config-group">
              <label>AI Sensitivity Level</label>
              <select>
                <option>Low (Fewer alerts)</option>
                <option selected>Medium (Balanced)</option>
                <option>High (More alerts)</option>
              </select>
            </div>
            <div className="config-group">
              <label>Alert Sound</label>
              <select>
                <option>Enable</option>
                <option selected>Disable</option>
              </select>
            </div>
            <div className="config-group">
              <label>Auto-Escalate After</label>
              <select>
                <option>1 minute</option>
                <option selected>2 minutes</option>
                <option>5 minutes</option>
              </select>
            </div>
            <div className="config-group">
              <label>Data Retention Period</label>
              <select>
                <option>7 days</option>
                <option selected>30 days</option>
                <option>90 days</option>
              </select>
            </div>
            <button className="btn-primary">SAVE CONFIGURATION</button>
          </div>
        </div>

        <div className="card">
          <h3>CAMERA ACCESS CONTROL</h3>
          <div className="camera-access-list">
            <div className="access-item">
              <span>Camera 01 - Entrance Gate</span>
              <span>All Security Staff</span>
              <button className="action-btn">MODIFY ACCESS</button>
            </div>
            <div className="access-item">
              <span>Camera 02 - Aisle A</span>
              <span>All Security Staff</span>
              <button className="action-btn">MODIFY ACCESS</button>
            </div>
            <div className="access-item">
              <span>Camera 05 - Warehouse</span>
              <span>Managers + Supervisors only</span>
              <button className="action-btn">MODIFY ACCESS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MODULE 8: VIDEO STORAGE & EVIDENCE
// ============================================
function VideoModule() {
  return (
    <div className="module">
      <div className="module-header">
        <h2>VIDEO STORAGE & EVIDENCE</h2>
        <span>30-Day Retention | Clip Playback | Evidence Export</span>
      </div>

      <div className="module-content">
        <div className="stats-row">
          <div className="stat-card">
            <span className="stat-large">89%</span>
            <span>Storage Used</span>
          </div>
          <div className="stat-card">
            <span className="stat-large">2.4 TB</span>
            <span>Total Stored</span>
          </div>
          <div className="stat-card">
            <span className="stat-large">847</span>
            <span>Stored Clips</span>
          </div>
          <div className="stat-card">
            <span className="stat-large">28</span>
            <span>Days Remaining</span>
          </div>
        </div>

        <h4>RECENT EVIDENCE CLIPS</h4>
        <div className="video-grid">
          {[
            { id: 'EVID-042', incident: 'Item Concealment', camera: 'Aisle A', date: '2026-04-23', duration: '45 sec' },
            { id: 'EVID-041', incident: 'Unusual Movement', camera: 'Parking Lot', date: '2026-04-23', duration: '32 sec' },
            { id: 'EVID-040', incident: 'Unauthorized Access', camera: 'Warehouse', date: '2026-04-22', duration: '28 sec' },
            { id: 'EVID-038', incident: 'Theft', camera: 'Electronics', date: '2026-04-22', duration: '1:12 min' },
          ].map((ev, i) => (
            <div key={i} className="video-card">
              <div className="video-thumbnail">THUMBNAIL</div>
              <div className="video-info">
                <strong>{ev.id}</strong>
                <span>{ev.incident}</span>
                <span>Camera: {ev.camera}</span>
                <span>Date: {ev.date}</span>
                <span>Duration: {ev.duration}</span>
              </div>
              <div className="video-actions">
                <button className="action-btn">PLAY</button>
                <button className="action-btn">DOWNLOAD</button>
              </div>
            </div>
          ))}
        </div>

        <div className="export-section">
          <button className="btn-primary">EXPORT EVIDENCE PACKAGE</button>
          <button className="btn-secondary">REQUEST POLICE ACCESS</button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MODULE 9: AI FEEDBACK & IMPROVEMENT
// ============================================
function FeedbackModule() {
  return (
    <div className="module">
      <div className="module-header">
        <h2>AI FEEDBACK & MODEL IMPROVEMENT</h2>
        <span>User Corrections | Retraining Data | Accuracy Tracking</span>
      </div>

      <div className="module-content">
        <div className="stats-row">
          <div className="stat-card">
            <span className="stat-large">94%</span>
            <span>Current Accuracy</span>
          </div>
          <div className="stat-card">
            <span className="stat-large">847</span>
            <span>Total Feedback Items</span>
          </div>
          <div className="stat-card">
            <span className="stat-large">612</span>
            <span>Verified Correct</span>
          </div>
          <div className="stat-card">
            <span className="stat-large">235</span>
            <span>Incorrect Detections</span>
          </div>
          <div className="stat-card">
            <span className="stat-large">28</span>
            <span>Pending Review</span>
          </div>
        </div>

        <h4>FEEDBACK QUEUE - VERIFICATION NEEDED</h4>
        <div className="feedback-grid">
          {[
            { time: '10:23 AM', camera: 'Aisle A', detection: 'Item Concealment', aiConf: '94%', userVote: 'False', status: 'Will retrain' },
            { time: '10:15 AM', camera: 'Parking Lot', detection: 'Unusual Movement', aiConf: '91%', userVote: 'True', status: 'Confirmed' },
            { time: '09:58 AM', camera: 'Warehouse', detection: 'Unauthorized Access', aiConf: '89%', userVote: 'True', status: 'Confirmed' },
            { time: '08:45 AM', camera: 'Aisle C', detection: 'Suspicious Loitering', aiConf: '87%', userVote: 'False', status: 'Will retrain' },
          ].map((fb, i) => (
            <div key={i} className="feedback-item">
              <div className="feedback-details">
                <span className="time">{fb.time}</span>
                <span>{fb.camera}</span>
                <span className="detection-type">{fb.detection}</span>
                <span>AI Confidence: {fb.aiConf}</span>
                <span className={`user-vote ${fb.userVote === 'True' ? 'verified' : 'rejected'}`}>
                  User: {fb.userVote}
                </span>
                <span>Status: {fb.status}</span>
              </div>
            </div>
          ))}
        </div>

        <h4>MODEL IMPROVEMENT STATUS</h4>
        <div className="improvement-stats">
          <div className="progress-item">
            <span>Collected for retraining</span>
            <div className="progress-bar"><div className="progress-fill" style={{width: '28%'}}>28%</div></div>
            <span>235 / 1000 samples needed</span>
          </div>
          <div className="progress-item">
            <span>Last retrained</span>
            <div className="progress-bar"><div className="progress-fill" style={{width: '100%'}}>2026-04-15</div></div>
          </div>
          <div className="progress-item">
            <span>Next scheduled retraining</span>
            <div className="progress-bar"><div className="progress-fill" style={{width: '40%'}}>In 3 days</div></div>
          </div>
        </div>

        <button className="btn-primary">SUBMIT BULK FEEDBACK FOR RETRAINING</button>
      </div>
    </div>
  );
}

// ============================================
// MODULE 10: SECURITY & PRIVACY
// ============================================
function PrivacyModule() {
  return (
    <div className="module">
      <div className="module-header">
        <h2>SECURITY & PRIVACY CONTROLS</h2>
        <span>Data Protection | Access Logs | Compliance Monitoring</span>
      </div>

      <div className="module-content">
        <div className="two-col">
          <div className="card">
            <h3>ACCESS LOGS</h3>
            <p>Last 10 system access events</p>
            <div className="log-list">
              {[
                { user: 'Admin', action: 'Login successful', time: '10:00 AM', ip: '192.168.1.1' },
                { user: 'Guard 01', action: 'Viewed Camera 03', time: '09:45 AM', ip: '192.168.1.15' },
                { user: 'Manager', action: 'Exported Report', time: '09:30 AM', ip: '192.168.1.10' },
                { user: 'Guard 02', action: 'Verified Incident', time: '09:15 AM', ip: '192.168.1.16' },
                { user: 'Admin', action: 'Changed Alert Settings', time: '09:00 AM', ip: '192.168.1.1' },
              ].map((log, i) => (
                <div key={i} className="log-item">
                  <span><strong>{log.user}</strong> - {log.action}</span>
                  <span>{log.time}</span>
                  <span>{log.ip}</span>
                </div>
              ))}
            </div>
            <button className="btn-secondary">VIEW FULL LOGS</button>
          </div>

          <div className="card">
            <h3>PRIVACY COMPLIANCE</h3>
            <div className="compliance-item">
              <span>PECA Act Compliance</span>
              <span class="status-verified">VERIFIED</span>
            </div>
            <div className="compliance-item">
              <span>Data Localization</span>
              <span class="status-verified">COMPLIANT</span>
            </div>
            <div className="compliance-item">
              <span>GDPR (EU Customers)</span>
              <span class="status-warning">PARTIAL</span>
            </div>
            <div className="compliance-item">
              <span>ISO 27001</span>
              <span class="status-pending">IN PROGRESS</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>DATA ENCRYPTION STATUS</h3>
          <div className="encryption-stats">
            <div className="encrypt-item">
              <span>Data at Rest</span>
              <span>AES-256</span>
              <span>ACTIVE</span>
            </div>
            <div className="encrypt-item">
              <span>Data in Transit</span>
              <span>TLS 1.3</span>
              <span>ACTIVE</span>
            </div>
            <div className="encrypt-item">
              <span>Video Storage</span>
              <span>AES-256</span>
              <span>ACTIVE</span>
            </div>
            <div className="encrypt-item">
              <span>Backup Encryption</span>
              <span>AES-256</span>
              <span>ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MODULE 11: CCTV INGESTION (RTSP)
// ============================================
function CCTVModule() {
  return (
    <div className="module">
      <div className="module-header">
        <h2>CCTV INGESTION - RTSP STREAMS</h2>
        <span>16 Cameras | Frame Extraction | Real-Time Processing</span>
      </div>

      <div className="module-content">
        <div className="stats-row">
          <div className="stat-card">
            <span className="stat-large">16</span>
            <span>Total Cameras</span>
          </div>
          <div className="stat-card">
            <span className="stat-large">16</span>
            <span>Active Streams</span>
          </div>
          <div className="stat-card">
            <span className="stat-large">30 fps</span>
            <span>Capture Rate</span>
          </div>
          <div className="stat-card">
            <span className="stat-large">1080p</span>
            <span>Resolution</span>
          </div>
          <div className="stat-card">
            <span className="stat-large">4.2 MB/s</span>
            <span>Bandwidth</span>
          </div>
        </div>

        <div className="two-col">
          <div className="card">
            <h3>CAMERA REGISTRY</h3>
            <table className="camera-registry">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>RTSP URL</th>
                  <th>Status</th>
                  <th>Frames</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CAM01</td>
                  <td>Main Entrance</td>
                  <td>rtsp://192.168.1.101/stream1</td>
                  <td class="status-active">LIVE</td>
                  <td>30 fps</td>
                </tr>
                <tr>
                  <td>CAM02</td>
                  <td>Aisle A</td>
                  <td>rtsp://192.168.1.102/stream1</td>
                  <td class="status-active">LIVE</td>
                  <td>30 fps</td>
                </tr>
                <tr>
                  <td>CAM05</td>
                  <td>Warehouse</td>
                  <td>rtsp://192.168.1.105/stream1</td>
                  <td class="status-active">LIVE</td>
                  <td>30 fps</td>
                </tr>
              </tbody>
            </table>
            <button className="btn-primary">ADD NEW CAMERA</button>
          </div>

          <div className="card">
            <h3>STREAM PROCESSING STATUS</h3>
            <div className="processing-stats">
              <div className="proc-item">
                <span>Frame extraction rate</span>
                <span>16 fps (1 frame per camera per sec)</span>
              </div>
              <div className="proc-item">
                <span>AI inference per frame</span>
                <span>28 ms avg</span>
              </div>
              <div className="proc-item">
                <span>Total processing load</span>
                <span>448 ms per cycle</span>
              </div>
              <div className="proc-item">
                <span>Buffer health</span>
                <span>98% (Stable)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>RTSP CONNECTION STATUS</h3>
          <div className="rtsp-status">
            <div className="status-item online">Main Gateway - ONLINE</div>
            <div className="status-item online">Backup Gateway - ONLINE</div>
            <div className="status-item warning">Camera 12 - HIGH LATENCY</div>
            <div className="status-item online">All others - STABLE</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MODULE 12: AI PERFORMANCE MONITORING
// ============================================
function PerformanceModule() {
  return (
    <div className="module">
      <div className="module-header">
        <h2>AI PERFORMANCE MONITORING</h2>
        <span>Precision | Recall | F1 Score | Real-Time Metrics</span>
      </div>

      <div className="module-content">
        <div className="stats-row">
          <div className="stat-card">
            <span className="stat-large">94.2%</span>
            <span>Precision</span>
          </div>
          <div className="stat-card">
            <span className="stat-large">91.8%</span>
            <span>Recall</span>
          </div>
          <div className="stat-card">
            <span className="stat-large">93.0%</span>
            <span>F1 Score</span>
          </div>
          <div className="stat-card">
            <span className="stat-large">0.3%</span>
            <span>False Positive Rate</span>
          </div>
          <div className="stat-card">
            <span className="stat-large">28ms</span>
            <span>Inference Time</span>
          </div>
        </div>

        <h4>PERFORMANCE METRICS - LAST 7 DAYS</h4>
        <table className="metrics-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Precision</th>
              <th>Recall</th>
              <th>F1 Score</th>
              <th>False Positives</th>
              <th>True Positives</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2026-04-23</td>
              <td>94.2%</td>
              <td>91.8%</td>
              <td>93.0%</td>
              <td>2</td>
              <td>8</td>
            </tr>
            <tr>
              <td>2026-04-22</td>
              <td>93.5%</td>
              <td>90.2%</td>
              <td>91.8%</td>
              <td>3</td>
              <td>9</td>
            </tr>
            <tr>
              <td>2026-04-21</td>
              <td>92.8%</td>
              <td>89.5%</td>
              <td>91.1%</td>
              <td>4</td>
              <td>7</td>
            </tr>
          </tbody>
        </table>

        <h4>PERFORMANCE TARGETS</h4>
        <div className="targets-grid">
          <div className="target-item">
            <span>Precision Target</span>
            <div className="progress-bar"><div className="progress-fill" style={{width: '94%'}}>94% / 95%</div></div>
          </div>
          <div className="target-item">
            <span>Recall Target</span>
            <div className="progress-bar"><div className="progress-fill" style={{width: '92%'}}>92% / 93%</div></div>
          </div>
          <div className="target-item">
            <span>F1 Score Target</span>
            <div className="progress-bar"><div className="progress-fill" style={{width: '93%'}}>93% / 94%</div></div>
          </div>
          <div className="target-item">
            <span>Inference Speed Target</span>
            <div className="progress-bar"><div className="progress-fill" style={{width: '70%'}}>28ms / 20ms</div></div>
          </div>
        </div>

        <div className="alert-performance-note">
          <strong>Note:</strong> Current model achieves target precision. Next retraining scheduled to improve recall to 93% and reduce false positives below 0.25%.
        </div>
      </div>
    </div>
  );
}

export default App;
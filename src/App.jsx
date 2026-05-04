// App.jsx - AI Powered DevOps Assistant for Kubernetes Workloads
import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    { id: 0, name: '1. USER AUTHENTICATION', component: <AuthModule /> },
    { id: 1, name: '2. LANDING & NAVIGATION', component: <LandingModule /> },
    { id: 2, name: '3. WORKLOAD MANAGEMENT', component: <WorkloadModule /> },
    { id: 3, name: '4. STRUCTURED QUERYING', component: <StructuredQueryModule /> },
    { id: 4, name: '5. LOGS & EVENTS', component: <LogsModule /> },
    { id: 5, name: '6. METRICS & MONITORING', component: <MetricsModule /> },
    { id: 6, name: '7. SERVICE HEALTH', component: <HealthModule /> },
    { id: 7, name: '8. INFRASTRUCTURE OVERVIEW', component: <InfraModule /> },
    { id: 8, name: '9. DASHBOARD & FILTERS', component: <DashboardModule /> },
    { id: 9, name: '10. CONVERSATIONAL AI', component: <AIModule /> },
    { id: 10, name: '11. SECURITY & COMPLIANCE', component: <SecurityModule /> },
  ];

  return (
    <div className="app">
      <header className="header">
        <div className="header-left">
          <div className="logo">DA</div>
          <h1>DEVOPS ASSISTANT</h1>
          <span className="version">v1.0</span>
        </div>
        <div className="header-right">
          <span className="badge">KUBERNETES</span>
          <span className="badge">PROMETHEUS</span>
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
        <span>JWT Authentication | Role-Based Access | Secure Login</span>
      </div>

      <div className="module-content">
        <div className="two-col">
          <div className="card">
            <h3>LOGIN PORTAL</h3>
            <div className="form">
              <div className="form-row">
                <label>Username / Email:</label>
                <input type="email" placeholder="developer@company.com" />
              </div>
              <div className="form-row">
                <label>Password:</label>
                <input type="password" placeholder="Enter password" />
              </div>
              <div className="form-row">
                <label>Cluster Environment:</label>
                <select>
                  <option>Development Cluster</option>
                  <option>Staging Cluster</option>
                  <option>Production Cluster</option>
                </select>
              </div>
              <div className="form-options">
                <label><input type="checkbox" /> Remember this device</label>
                <a href="#">Forgot Password?</a>
              </div>
              <button className="btn-primary">CONNECT TO CLUSTER</button>
            </div>
            <div className="divider">OR</div>
            <button className="btn-secondary">Sign in with Kubeconfig File</button>
            <button className="btn-secondary">SSO (OAuth2.0)</button>
          </div>

          <div className="card">
            <h3>ACTIVE SESSIONS</h3>
            <div className="profile-stats">
              <div className="stat-item">
                <span className="stat-label">Active Sessions</span>
                <span className="stat-value">12 Online</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Connected Clusters</span>
                <span className="stat-value">3</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Total Users</span>
                <span className="stat-value">28</span>
              </div>
            </div>

            <h4>Recent Login Activity</h4>
            <div className="recent-list">
              <div className="recent-item">
                <span>Ahmed Asher</span>
                <span>DevOps Engineer</span>
                <span>2 min ago</span>
              </div>
              <div className="recent-item">
                <span>Hasnat Shah</span>
                <span>SRE</span>
                <span>5 min ago</span>
              </div>
              <div className="recent-item">
                <span>Aitisam Ahmed</span>
                <span>Developer</span>
                <span>10 min ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MODULE 2: LANDING & NAVIGATION
// ============================================
function LandingModule() {
  return (
    <div className="module">
      <div className="module-header">
        <h2>PLATFORM OVERVIEW</h2>
        <span>Unified Kubernetes Operations | Real-Time Cluster Management</span>
      </div>

      <div className="module-content">
        <div className="hero-section">
          <h3>AI Powered DevOps Assistant</h3>
          <p>Simplify Kubernetes operations with unified dashboard, structured querying, and real-time observability</p>
          <div className="feature-grid">
            <div className="feature-card">
              <h4>Workload Management</h4>
              <span>Create, monitor, and scale Pods, Deployments, Jobs, CronJobs</span>
            </div>
            <div className="feature-card">
              <h4>Real-Time Metrics</h4>
              <span>CPU/Memory usage with Prometheus integration</span>
            </div>
            <div className="feature-card">
              <h4>Log Streaming</h4>
              <span>Live logs with filtering and search</span>
            </div>
            <div className="feature-card">
              <h4>Service Health</h4>
              <span>Endpoint health checks and probe status</span>
            </div>
            <div className="feature-card">
              <h4>Structured Querying</h4>
              <span>Form-based workload creation - no YAML required</span>
            </div>
            <div className="feature-card">
              <h4>AI Assistant</h4>
              <span>Natural language queries for cluster operations</span>
            </div>
          </div>
        </div>

        <div className="quick-actions">
          <h4>Quick Navigation</h4>
          <div className="action-buttons">
            <button className="btn-primary">View Dashboard</button>
            <button className="btn-secondary">Create Workload</button>
            <button className="btn-secondary">Check Metrics</button>
            <button className="btn-secondary">View Logs</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MODULE 3: WORKLOAD MANAGEMENT
// ============================================
function WorkloadModule() {
  return (
    <div className="module">
      <div className="module-header">
        <h2>KUBERNETES WORKLOAD MANAGEMENT</h2>
        <span>Pods | Deployments | Jobs | CronJobs | Services</span>
      </div>

      <div className="module-content">
        <div className="stats-row">
          <div className="stat-card"><span className="stat-large">24</span><span>Pods</span></div>
          <div className="stat-card"><span className="stat-large">12</span><span>Running</span></div>
          <div className="stat-card"><span className="stat-large">8</span><span>Pending</span></div>
          <div className="stat-card"><span className="stat-large">4</span><span>Failed</span></div>
          <div className="stat-card"><span className="stat-large">6</span><span>Deployments</span></div>
        </div>

        <div className="filter-bar">
          <input type="text" placeholder="Search workloads..." className="search-input" />
          <select className="filter-select"><option>All Namespaces</option><option>default</option><option>kube-system</option></select>
          <select className="filter-select"><option>All Status</option><option>Running</option><option>Pending</option><option>Failed</option></select>
        </div>

        <h4>PODS</h4>
        <table className="workload-table">
          <thead>
            <tr><th>Name</th><th>Namespace</th><th>Status</th><th>Node</th><th>Restarts</th><th>Age</th><th>Actions</th></tr>
          </thead>
          <tbody>
            <tr><td>nginx-deployment-7c4b5d6f8-abc12</td><td>default</td><td className="status-running">Running</td><td>node-01</td><td>0</td><td>2d</td><td><button className="action-btn">Logs</button><button className="action-btn">Exec</button></td></tr>
            <tr><td>backend-api-pod</td><td>production</td><td className="status-running">Running</td><td>node-02</td><td>2</td><td>5d</td><td><button className="action-btn">Logs</button><button className="action-btn">Exec</button></td></tr>
            <tr><td>database-migration-job</td><td>default</td><td className="status-failed">Failed</td><td>node-01</td><td>3</td><td>1h</td><td><button className="action-btn">Logs</button><button className="action-btn">Retry</button></td></tr>
            <tr><td>redis-cache-pod</td><td>cache</td><td className="status-pending">Pending</td><td>-</td><td>0</td><td>30m</td><td><button className="action-btn">Describe</button></td></tr>
          </tbody>
        </table>

        <h4>DEPLOYMENTS</h4>
        <table className="workload-table">
          <thead><tr><th>Name</th><th>Replicas</th><th>Available</th><th>Strategy</th><th>Age</th><th>Actions</th></tr></thead>
          <tbody>
            <tr><td>nginx-deployment</td><td>3</td><td>3</td><td>RollingUpdate</td><td>10d</td><td><button className="action-btn">Scale</button><button className="action-btn">Restart</button></td></tr>
            <tr><td>backend-api</td><td>5</td><td>4</td><td>RollingUpdate</td><td>7d</td><td><button className="action-btn">Scale</button><button className="action-btn">Restart</button></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ============================================
// MODULE 4: STRUCTURED QUERYING
// ============================================
function StructuredQueryModule() {
  return (
    <div className="module">
      <div className="module-header">
        <h2>STRUCTURED QUERYING & WORKLOAD CREATION</h2>
        <span>Form-Based Creation | No YAML Required | Templates</span>
      </div>

      <div className="module-content">
        <div className="two-col">
          <div className="card">
            <h3>CREATE NEW DEPLOYMENT</h3>
            <div className="form">
              <div className="form-row"><label>Deployment Name:</label><input type="text" placeholder="my-app-deployment" /></div>
              <div className="form-row"><label>Namespace:</label><select><option>default</option><option>production</option><option>staging</option></select></div>
              <div className="form-row"><label>Container Image:</label><input type="text" placeholder="nginx:latest" /></div>
              <div className="form-row"><label>Replicas:</label><input type="number" defaultValue="3" /></div>
              <div className="form-row"><label>Container Port:</label><input type="text" placeholder="80" /></div>
              <div className="form-row"><label>CPU Request:</label><input type="text" placeholder="100m" /></div>
              <div className="form-row"><label>Memory Request:</label><input type="text" placeholder="128Mi" /></div>
              <button className="btn-primary">CREATE DEPLOYMENT</button>
            </div>
          </div>

          <div className="card">
            <h3>CREATE CRONJOB</h3>
            <div className="form">
              <div className="form-row"><label>CronJob Name:</label><input type="text" placeholder="database-backup" /></div>
              <div className="form-row"><label>Schedule (Cron):</label><input type="text" placeholder="0 2 * * *" /></div>
              <div className="form-row"><label>Container Image:</label><input type="text" placeholder="alpine:latest" /></div>
              <div className="form-row"><label>Command:</label><input type="text" placeholder="echo 'Backup completed'" /></div>
              <div className="form-row"><label>Restart Policy:</label><select><option>OnFailure</option><option>Never</option></select></div>
              <button className="btn-primary">CREATE CRONJOB</button>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>SAVED TEMPLATES</h3>
          <div className="template-list">
            <div className="template-item">nginx-deployment-template</div>
            <div className="template-item">backend-api-template</div>
            <div className="template-item">postgres-statefulset-template</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MODULE 5: LOGS & EVENTS
// ============================================
function LogsModule() {
  return (
    <div className="module">
      <div className="module-header">
        <h2>LOGS & EVENTS</h2>
        <span>Real-Time Log Streaming | Event Correlation | Search & Filter</span>
      </div>

      <div className="module-content">
        <div className="filter-bar">
          <select className="filter-select"><option>Select Pod</option><option>nginx-deployment-abc12</option><option>backend-api-pod</option></select>
          <select className="filter-select"><option>All Namespaces</option><option>default</option><option>production</option></select>
          <select className="filter-select"><option>Last 10 minutes</option><option>Last 1 hour</option><option>Last 24 hours</option></select>
          <button className="btn-primary">STREAM LOGS</button>
        </div>

        <div className="log-viewer">
          <div className="log-line">2026-05-04 10:30:01 [INFO] Server started on port 8080</div>
          <div className="log-line">2026-05-04 10:30:05 [INFO] Connected to database</div>
          <div className="log-line">2026-05-04 10:31:12 [WARN] High memory usage detected</div>
          <div className="log-line">2026-05-04 10:32:45 [ERROR] Failed to connect to external API: timeout</div>
          <div className="log-line">2026-05-04 10:33:20 [INFO] Retrying connection...</div>
          <div className="log-line">2026-05-04 10:34:00 [ERROR] Maximum retries exceeded</div>
        </div>

        <h4>KUBERNETES EVENTS</h4>
        <table className="events-table">
          <thead><tr><th>Type</th><th>Reason</th><th>Object</th><th>Message</th><th>Timestamp</th></tr></thead>
          <tbody>
            <tr><td>Warning</td><td>FailedScheduling</td><td>redis-pod</td><td>0/3 nodes available</td><td>10:32 AM</td></tr>
            <tr><td>Normal</td><td>Pulled</td><td>nginx-deployment</td><td>Successfully pulled image</td><td>10:28 AM</td></tr>
            <tr><td>Normal</td><td>Created</td><td>backend-api</td><td>Created container</td><td>10:25 AM</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ============================================
// MODULE 6: METRICS & MONITORING
// ============================================
function MetricsModule() {
  return (
    <div className="module">
      <div className="module-header">
        <h2>METRICS & MONITORING</h2>
        <span>Prometheus Integration | CPU/Memory Charts | Real-Time Metrics</span>
      </div>

      <div className="module-content">
        <div className="stats-row">
          <div className="stat-card"><span className="stat-large">45%</span><span>Cluster CPU Usage</span></div>
          <div className="stat-card"><span className="stat-large">62%</span><span>Cluster Memory Usage</span></div>
          <div className="stat-card"><span className="stat-large">24</span><span>Active Pods</span></div>
          <div className="stat-card"><span className="stat-large">3</span><span>Nodes</span></div>
        </div>

        <div className="two-col">
          <div className="card">
            <h3>CPU USAGE (Last 1 Hour)</h3>
            <div className="chart-placeholder">
              <div className="chart-bar" style={{height: '30%'}}>30%</div>
              <div className="chart-bar" style={{height: '45%'}}>45%</div>
              <div className="chart-bar" style={{height: '52%'}}>52%</div>
              <div className="chart-bar" style={{height: '48%'}}>48%</div>
              <div className="chart-bar" style={{height: '41%'}}>41%</div>
              <div className="chart-bar" style={{height: '38%'}}>38%</div>
            </div>
          </div>
          <div className="card">
            <h3>MEMORY USAGE (Last 1 Hour)</h3>
            <div className="chart-placeholder">
              <div className="chart-bar" style={{height: '55%'}}>55%</div>
              <div className="chart-bar" style={{height: '58%'}}>58%</div>
              <div className="chart-bar" style={{height: '62%'}}>62%</div>
              <div className="chart-bar" style={{height: '60%'}}>60%</div>
              <div className="chart-bar" style={{height: '57%'}}>57%</div>
              <div className="chart-bar" style={{height: '54%'}}>54%</div>
            </div>
          </div>
        </div>

        <h4>TOP PODS BY CPU USAGE</h4>
        <table className="metrics-table">
          <thead><tr><th>Pod Name</th><th>Namespace</th><th>CPU (cores)</th><th>Memory (MB)</th><th>Restarts</th></tr></thead>
          <tbody>
            <tr><td>backend-api-pod</td><td>production</td><td>0.45</td><td>512</td><td>0</td></tr>
            <tr><td>nginx-deployment-abc12</td><td>default</td><td>0.12</td><td>128</td><td>0</td></tr>
            <tr><td>database-pod</td><td>production</td><td>0.89</td><td>1024</td><td>2</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ============================================
// MODULE 7: SERVICE HEALTH
// ============================================
function HealthModule() {
  return (
    <div className="module">
      <div className="module-header">
        <h2>SERVICE HEALTH</h2>
        <span>Health Endpoints | Liveness/Readiness Probes | Status Monitoring</span>
      </div>

      <div className="module-content">
        <h4>SERVICE HEALTH STATUS</h4>
        <table className="health-table">
          <thead><tr><th>Service Name</th><th>Namespace</th><th>Health Endpoint</th><th>Status</th><th>Response Time</th><th>Last Check</th></tr></thead>
          <tbody>
            <tr><td>nginx-service</td><td>default</td><td>/health</td><td className="status-healthy">HEALTHY</td><td>120ms</td><td>Just now</td></tr>
            <tr><td>backend-api</td><td>production</td><td>/api/health</td><td className="status-healthy">HEALTHY</td><td>245ms</td><td>Just now</td></tr>
            <tr><td>database-service</td><td>production</td><td>/healthz</td><td className="status-unhealthy">UNHEALTHY</td><td>Timeout</td><td>30s ago</td></tr>
            <tr><td>redis-cache</td><td>cache</td><td>/ping</td><td className="status-healthy">HEALTHY</td><td>45ms</td><td>Just now</td></tr>
          </tbody>
        </table>

        <div className="card">
          <h3>CONFIGURE HEALTH CHECK</h3>
          <div className="form">
            <div className="form-row"><label>Service Name:</label><input type="text" placeholder="my-service" /></div>
            <div className="form-row"><label>Health Endpoint URL:</label><input type="text" placeholder="https://service/health" /></div>
            <div className="form-row"><label>Check Interval (seconds):</label><input type="number" defaultValue="30" /></div>
            <button className="btn-primary">ADD HEALTH CHECK</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MODULE 8: INFRASTRUCTURE OVERVIEW
// ============================================
function InfraModule() {
  return (
    <div className="module">
      <div className="module-header">
        <h2>INFRASTRUCTURE OVERVIEW</h2>
        <span>Node Status | Resource Allocation | Cluster Health</span>
      </div>

      <div className="module-content">
        <div className="stats-row">
          <div className="stat-card"><span className="stat-large">3</span><span>Total Nodes</span></div>
          <div className="stat-card"><span className="stat-large">3</span><span>Ready Nodes</span></div>
          <div className="stat-card"><span className="stat-large">0</span><span>Not Ready</span></div>
          <div className="stat-card"><span className="stat-large">24</span><span>Total Pods</span></div>
        </div>

        <h4>NODE DETAILS</h4>
        <table className="node-table">
          <thead><tr><th>Node Name</th><th>Status</th><th>CPU Capacity</th><th>CPU Usage</th><th>Memory Capacity</th><th>Memory Usage</th><th>Pods</th></tr></thead>
          <tbody>
            <tr><td>node-01</td><td className="status-ready">Ready</td><td>8 cores</td><td>3.2 cores</td><td>16 GB</td><td>8.5 GB</td><td>8</td></tr>
            <tr><td>node-02</td><td className="status-ready">Ready</td><td>8 cores</td><td>4.1 cores</td><td>16 GB</td><td>10.2 GB</td><td>10</td></tr>
            <tr><td>node-03</td><td className="status-ready">Ready</td><td>8 cores</td><td>2.8 cores</td><td>16 GB</td><td>7.1 GB</td><td>6</td></tr>
          </tbody>
        </table>

        <div className="cluster-health">
          <h4>CLUSTER HEALTH SCORE</h4>
          <div className="health-score">92%</div>
          <div className="health-message">Cluster is operating normally. Minor resource constraints on node-02.</div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MODULE 9: DASHBOARD & FILTERS
// ============================================
function DashboardModule() {
  return (
    <div className="module">
      <div className="module-header">
        <h2>UNIFIED DASHBOARD</h2>
        <span>Centralized View | Real-Time Updates | Advanced Filtering</span>
      </div>

      <div className="module-content">
        <div className="filter-bar">
          <select className="filter-select"><option>All Namespaces</option><option>default</option><option>production</option><option>staging</option></select>
          <select className="filter-select"><option>All Workloads</option><option>Pods</option><option>Deployments</option><option>Jobs</option></select>
          <select className="filter-select"><option>All Status</option><option>Running</option><option>Failed</option><option>Pending</option></select>
          <input type="text" placeholder="Search..." className="search-input" />
        </div>

        <div className="stats-row">
          <div className="stat-card"><span className="stat-large">24</span><span>Total Pods</span></div>
          <div className="stat-card"><span className="stat-large">18</span><span>Running</span></div>
          <div className="stat-card"><span className="stat-large">2</span><span>Failed</span></div>
          <div className="stat-card"><span className="stat-large">4</span><span>Pending</span></div>
          <div className="stat-card"><span className="stat-large">45%</span><span>CPU Usage</span></div>
        </div>

        <div className="two-col">
          <div className="card">
            <h3>RECENT ALERTS</h3>
            <div className="alert-list">
              <div className="alert-item warning">Pod database-pod restarting frequently (5 restarts in 1h)</div>
              <div className="alert-item info">Deployment backend-api scaled to 5 replicas</div>
              <div className="alert-item error">Service health check failed for database-service</div>
            </div>
          </div>
          <div className="card">
            <h3>QUICK ACTIONS</h3>
            <div className="action-grid">
              <button className="action-btn">Create Pod</button>
              <button className="action-btn">Scale Deployment</button>
              <button className="action-btn">View All Logs</button>
              <button className="action-btn">Check Metrics</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MODULE 10: CONVERSATIONAL AI
// ============================================
function AIModule() {
  const [messages, setMessages] = useState([
    { type: 'ai', text: 'Hello! I am your DevOps Assistant. You can ask me about your Kubernetes cluster. For example: "Show me all failed pods" or "What is the CPU usage?"' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { type: 'user', text: input }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'ai', text: `I will help you with "${input}". This feature will integrate with your Kubernetes cluster API.` }]);
    }, 500);
    setInput('');
  };

  return (
    <div className="module">
      <div className="module-header">
        <h2>CONVERSATIONAL AI ASSISTANT</h2>
        <span>Natural Language Queries | Cluster Operations | Intelligent Insights</span>
      </div>

      <div className="module-content">
        <div className="chat-container">
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message ${msg.type}`}>
                <strong>{msg.type === 'user' ? 'You:' : 'AI Assistant:'}</strong>
                <span>{msg.text}</span>
              </div>
            ))}
          </div>
          <div className="chat-input-area">
            <input 
              type="text" 
              className="chat-input" 
              placeholder="Ask me anything about your cluster... Example: 'Show me pods with high CPU usage'"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button className="btn-primary" onClick={sendMessage}>Send</button>
          </div>
          <div className="chat-suggestions">
            <span>Suggested queries:</span>
            <button className="suggestion-btn">Show all failed pods</button>
            <button className="suggestion-btn">What is cluster CPU usage?</button>
            <button className="suggestion-btn">List recent events</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MODULE 11: SECURITY & COMPLIANCE
// ============================================
function SecurityModule() {
  return (
    <div className="module">
      <div className="module-header">
        <h2>SECURITY & COMPLIANCE</h2>
        <span>RBAC | Audit Logs | Compliance Monitoring | Secret Management</span>
      </div>

      <div className="module-content">
        <div className="two-col">
          <div className="card">
            <h3>AUDIT LOGS</h3>
            <div className="log-list">
              <div className="log-item"><span><strong>Admin</strong> - Created deployment 'nginx'</span><span>10:30 AM</span></div>
              <div className="log-item"><span><strong>DevOps User</strong> - Scaled backend-api to 5 replicas</span><span>09:45 AM</span></div>
              <div className="log-item"><span><strong>System</strong> - Health check failed for database</span><span>09:15 AM</span></div>
              <div className="log-item"><span><strong>Admin</strong> - Updated kubeconfig</span><span>08:30 AM</span></div>
            </div>
            <button className="btn-secondary">Download Audit Logs</button>
          </div>

          <div className="card">
            <h3>COMPLIANCE STATUS</h3>
            <div className="compliance-item"><span>RBAC Enabled</span><span className="status-verified">VERIFIED</span></div>
            <div className="compliance-item"><span>Pod Security Standards</span><span className="status-verified">ENFORCED</span></div>
            <div className="compliance-item"><span>Network Policies</span><span className="status-warning">PARTIAL</span></div>
            <div className="compliance-item"><span>Secrets Encryption</span><span className="status-verified">ENABLED</span></div>
          </div>
        </div>

        <div className="card">
          <h3>RBAC CONFIGURATION</h3>
          <div className="rbac-info">
            <p><strong>Current User:</strong> devops-engineer@company.com</p>
            <p><strong>Roles:</strong> cluster-admin (dev cluster), namespace-admin (prod cluster)</p>
            <p><strong>Permissions:</strong> Full read/write on all resources</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
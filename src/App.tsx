import React from 'react';
import { Download, Monitor, Activity, Zap, Layout } from 'lucide-react';
import { FaApple, FaWindows, FaLinux } from 'react-icons/fa';

function App() {
  return (
    <>
      {/* Background Orbs */}
      <div className="background-glow">
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
      </div>

      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)', borderRadius: '99px', color: 'var(--accent)', fontWeight: 600, marginBottom: '24px' }}>
            <Zap size={16} /> v1.0.0 Now Available
          </div>
          <h1>Type Faster.<br />Track <span className="text-accent">Everything.</span></h1>
          <p>TypeTrace is a cross-platform desktop application that silently monitors your global typing speeds in the background while offering a beautiful built-in practice arena.</p>
          
          <div className="btn-group">
            <a href="#download" className="btn btn-primary">
              <Download size={20} />
              Download Now
            </a>
            <a href="#features" className="btn btn-glass">
              Learn More
            </a>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="features" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center' }}>Get TypeTrace for your OS</h2>
          <p style={{ textAlign: 'center', marginBottom: '4rem' }}>Available completely free for Mac, Windows, and Linux.</p>
          
          <div className="features-grid" style={{ marginTop: '0' }}>
            {/* macOS */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <FaApple size={48} color="var(--text-primary)" style={{ marginBottom: '16px' }} />
              <h3>macOS</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '24px' }}>Requires Apple Silicon or Intel Mac</p>
              <a href="#" className="btn btn-glass" style={{ width: '100%', justifyContent: 'center' }}>
                Download .dmg
              </a>
            </div>

            {/* Windows */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <FaWindows size={48} color="var(--accent)" style={{ marginBottom: '16px' }} />
              <h3>Windows</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '24px' }}>Windows 10 or 11 (64-bit)</p>
              <a href="#" className="btn btn-glass" style={{ width: '100%', justifyContent: 'center' }}>
                Download .exe
              </a>
            </div>

            {/* Linux */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <FaLinux size={48} color="#8b5cf6" style={{ marginBottom: '16px' }} />
              <h3>Linux</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '24px' }}>AppImage (Requires X11 for Global Hook)</p>
              <a href="#" className="btn btn-glass" style={{ width: '100%', justifyContent: 'center' }}>
                Download .AppImage
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features" style={{ paddingTop: '4rem' }}>
          <h2 style={{ textAlign: 'center' }}>Why TypeTrace?</h2>
          <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>Designed for power users, developers, and writers who want to analyze their performance.</p>
          
          <div className="features-grid">
            <div className="glass-card">
              <div className="feature-icon">
                <Activity size={24} />
              </div>
              <h3>Global Keylogging</h3>
              <p style={{ fontSize: '1rem', marginTop: '12px' }}>Track your WPM across all apps silently. TypeTrace uses an ultra-efficient background process that won't slow down your computer.</p>
            </div>
            
            <div className="glass-card">
              <div className="feature-icon">
                <Layout size={24} />
              </div>
              <h3>Practice Arena</h3>
              <p style={{ fontSize: '1rem', marginTop: '12px' }}>Built-in typing test inspired by Monkeytype. Practice in 15s, 30s, or 60s bursts to warm up your fingers.</p>
            </div>
            
            <div className="glass-card">
              <div className="feature-icon">
                <Monitor size={24} />
              </div>
              <h3>Live Dashboards</h3>
              <p style={{ fontSize: '1rem', marginTop: '12px' }}>Beautiful glassmorphic UI with real-time graphs displaying your 60-second typing history and lifetime peak WPM.</p>
            </div>
          </div>
        </section>

        <footer>
          <p style={{ fontSize: '0.9rem' }}>© {new Date().getFullYear()} TypeTrace. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;

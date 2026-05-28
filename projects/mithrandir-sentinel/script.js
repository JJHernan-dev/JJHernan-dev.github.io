// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Features
const features = [
  { t: 'Real-time TCP Monitoring', d: 'Live DataGrid streams active connections directly from the OS network stack.' },
  { t: 'Threat Detection Engine', d: 'Flags high-risk connections and surfaces defensive security alerts.' },
  { t: 'SOC Dashboard', d: 'Metric cards, telemetry panels and animated alert indicators.' },
  { t: 'Search & Filtering', d: 'Slice the connection feed with configurable refresh intervals.' },
  { t: 'Persistent Settings', d: 'User preferences saved across sessions.' },
  { t: 'Custom Window Chrome', d: 'Responsive dark UI with bespoke window shell.' },
];
const fg = document.getElementById('features-grid');
features.forEach((f, i) => {
  const el = document.createElement('div');
  el.className = 'corner-frame feature';
  el.innerHTML = `<div class="num">0${i + 1}</div><h3>${f.t}</h3><p>${f.d}</p>`;
  fg.appendChild(el);
});

// Gallery
const shots = [
  { src: 'assets/screen-dashboard.png', code: 'SCR_01', title: 'Security Dashboard', desc: 'Live metrics, high-risk feed and operational status.' },
  { src: 'assets/screen-connections.png', code: 'SCR_02', title: 'Active TCP Connections', desc: 'Searchable table of every socket with risk scoring.' },
  { src: 'assets/screen-alerts.png', code: 'SCR_03', title: 'Security Alerts', desc: 'Timestamped detections from the threat engine.' },
  { src: 'assets/screen-settings.png', code: 'SCR_04', title: 'Settings & About', desc: 'Refresh intervals, demo mode and author links.' },
];
const gg = document.getElementById('gallery-grid');
shots.forEach(s => {
  const el = document.createElement('figure');
  el.className = 'corner-frame shot';
  el.innerHTML = `
    <div class="shot-head">
      <span class="left"><span class="led led-success"></span>${s.code} · CAPTURE</span>
      <span class="rec">● REC</span>
    </div>
    <div class="shot-img scanline"><img src="${s.src}" alt="${s.title}" loading="lazy"/></div>
    <figcaption class="shot-cap"><h3>${s.title}</h3><p>${s.desc}</p></figcaption>`;
  gg.appendChild(el);
});

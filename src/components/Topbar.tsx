import React from "react";

interface TopbarProps {
  onToggleSidebar: () => void;
}

export default function Topbar({ onToggleSidebar }: TopbarProps) {
  return (
    <header style={{ height: 56, background: '#f5f6f8', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e0e3e8', padding: '0 32px 0 16px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={onToggleSidebar} style={{ background: 'none', border: 'none', marginRight: 16, cursor: 'pointer', padding: 0 }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="6" width="28" height="2.5" rx="1.25" fill="#233044"/>
            <rect y="13" width="28" height="2.5" rx="1.25" fill="#233044"/>
            <rect y="20" width="28" height="2.5" rx="1.25" fill="#233044"/>
          </svg>
        </button>
        <span style={{ fontSize: 24, fontWeight: 600, color: '#6b7685' }}>자산관리 목록</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/profile.png" alt="profile" style={{ width: 36, height: 36, borderRadius: '50%', marginRight: 10, background: '#fff' }} />
        <span style={{ color: '#233044', fontWeight: 500, fontSize: 16 }}>한유성</span>
      </div>
    </header>
  );
} 
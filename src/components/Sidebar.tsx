import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface SidebarProps {
  open: boolean;
}

export default function Sidebar({ open }: SidebarProps) {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [assetMenuOpen, setAssetMenuOpen] = useState(false);
  const [historyMenuOpen, setHistoryMenuOpen] = useState(false);
  const [noticeMenuOpen, setNoticeMenuOpen] = useState(false);
  const [authMenuOpen, setAuthMenuOpen] = useState(false);

  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  const menuItems = [
    { id: 1, label: '대시보드', path: '/' },
    { id: 2, label: '자산 목록', path: '/assets' },
    { id: 3, label: '자산 등록', path: '/assets/new' },
    { id: 4, label: '보고서', path: '/reports' },
    { id: 5, label: '설정', path: '/settings' },
  ];

  return (
    <div style={{
      width: '250px',
      backgroundColor: '#f5f5f5',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: '60px',
      padding: '20px 0',
      borderRight: '1px solid #e0e0e0'
    }}>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {menuItems.map((item) => (
            <li key={item.id} style={{ padding: '10px 20px' }}>
              <a
                href={item.path}
                style={{
                  textDecoration: 'none',
                  color: '#333',
                  display: 'block',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
} 
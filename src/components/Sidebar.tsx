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

  return (
    <nav
      style={{
        width: open ? 240 : 0,
        minWidth: open ? 240 : 0,
        background: '#233044',
        color: '#fff',
        padding: 0,
        overflow: 'hidden',
        transition: 'width 0.2s, min-width 0.2s',
      }}
    >
      {open && (
        <>
          <div style={{ display: 'flex', alignItems: 'center', height: 64, paddingLeft: 24, borderBottom: '1px solid #2e3b4e' }}>
            <Image src="/logo.png" alt="logo" width={36} height={36} style={{ marginRight: 12 }} />
            <span style={{ fontWeight: 700, fontSize: 22 }}>지어소프트</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px 0 16px 0', borderBottom: '1px solid #2e3b4e' }}>
            <Image src="/profile.png" alt="profile" width={60} height={60} style={{ borderRadius: '50%', marginBottom: 8, background: '#fff' }} />
            <div style={{ color: '#bfc9d9', fontSize: 15, marginBottom: 2 }}>Welcome,</div>
            <div style={{ color: '#fff', fontWeight: 500, fontSize: 16 }}>한유성</div>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {/* 사용자 관리 */}
            <li style={{ padding: '16px 24px', borderBottom: '1px solid #2e3b4e', cursor: 'pointer', position: 'relative' }} onClick={() => setUserMenuOpen((v) => !v)}>
              <span style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                사용자 관리
                <span style={{ marginLeft: 8, fontSize: 12 }}>{userMenuOpen ? '▲' : '▼'}</span>
              </span>
              {userMenuOpen && (
                <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0 0', background: '#2e3b4e', borderRadius: 4 }} onClick={stopPropagation}>
                  <li style={{ padding: '10px 24px', color: '#fff', cursor: 'pointer' }}><Link href="#" style={{ color: '#fff', textDecoration: 'none' }} onClick={stopPropagation}>부서 관리</Link></li>
                  <li style={{ padding: '10px 24px', color: '#fff', cursor: 'pointer' }}><Link href="#" style={{ color: '#fff', textDecoration: 'none' }} onClick={stopPropagation}>사용자 관리</Link></li>
                  <li style={{ padding: '10px 24px', color: '#fff', cursor: 'pointer' }}><Link href="#" style={{ color: '#fff', textDecoration: 'none' }} onClick={stopPropagation}>비밀번호 초기화</Link></li>
                </ul>
              )}
            </li>
            {/* 장비 관리 */}
            <li style={{ padding: '16px 24px', borderBottom: '1px solid #2e3b4e', cursor: 'pointer', position: 'relative' }} onClick={() => setAssetMenuOpen((v) => !v)}>
              <span style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                장비 관리
                <span style={{ marginLeft: 8, fontSize: 12 }}>{assetMenuOpen ? '▲' : '▼'}</span>
              </span>
              {assetMenuOpen && (
                <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0 0', background: '#2e3b4e', borderRadius: 4 }} onClick={stopPropagation}>
                  <li style={{ padding: '10px 24px', color: '#fff', cursor: 'pointer' }}><Link href="#" style={{ color: '#fff', textDecoration: 'none' }} onClick={stopPropagation}>전체 장비 리스트</Link></li>
                  <li style={{ padding: '10px 24px', color: '#fff', cursor: 'pointer' }}><Link href="#" style={{ color: '#fff', textDecoration: 'none' }} onClick={stopPropagation}>검색 필터</Link></li>
                  <li style={{ padding: '10px 24px', color: '#fff', cursor: 'pointer' }}><Link href="#" style={{ color: '#fff', textDecoration: 'none' }} onClick={stopPropagation}>분류 코드 관리</Link></li>
                  <li style={{ padding: '10px 24px', color: '#fff', cursor: 'pointer' }}><Link href="#" style={{ color: '#fff', textDecoration: 'none' }} onClick={stopPropagation}>신규 장비 등록</Link></li>
                  <li style={{ padding: '10px 24px', color: '#fff', cursor: 'pointer' }}><Link href="#" style={{ color: '#fff', textDecoration: 'none' }} onClick={stopPropagation}>엑셀 일괄 등록</Link></li>
                  <li style={{ padding: '10px 24px', color: '#fff', cursor: 'pointer' }}><Link href="#" style={{ color: '#fff', textDecoration: 'none' }} onClick={stopPropagation}>엑셀 정보 추출</Link></li>
                  <li style={{ padding: '10px 24px', color: '#fff', cursor: 'pointer' }}><Link href="#" style={{ color: '#fff', textDecoration: 'none' }} onClick={stopPropagation}>장비 상세 관리</Link></li>
                </ul>
              )}
            </li>
            {/* 이력 조회 */}
            <li style={{ padding: '16px 24px', borderBottom: '1px solid #2e3b4e', cursor: 'pointer', position: 'relative' }} onClick={() => setHistoryMenuOpen((v) => !v)}>
              <span style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                이력 조회
                <span style={{ marginLeft: 8, fontSize: 12 }}>{historyMenuOpen ? '▲' : '▼'}</span>
              </span>
              {historyMenuOpen && (
                <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0 0', background: '#2e3b4e', borderRadius: 4 }} onClick={stopPropagation}>
                  <li style={{ padding: '10px 24px', color: '#fff', cursor: 'pointer' }}><Link href="#" style={{ color: '#fff', textDecoration: 'none' }} onClick={stopPropagation}>장비 이력</Link></li>
                  <li style={{ padding: '10px 24px', color: '#fff', cursor: 'pointer' }}><Link href="#" style={{ color: '#fff', textDecoration: 'none' }} onClick={stopPropagation}>사용자별 이력</Link></li>
                </ul>
              )}
            </li>
            {/* 공지사항 관리 */}
            <li style={{ padding: '16px 24px', borderBottom: '1px solid #2e3b4e', cursor: 'pointer', position: 'relative' }} onClick={() => setNoticeMenuOpen((v) => !v)}>
              <span style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                공지사항 관리
                <span style={{ marginLeft: 8, fontSize: 12 }}>{noticeMenuOpen ? '▲' : '▼'}</span>
              </span>
              {noticeMenuOpen && (
                <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0 0', background: '#2e3b4e', borderRadius: 4 }} onClick={stopPropagation}>
                  <li style={{ padding: '10px 24px', color: '#fff', cursor: 'pointer' }}><Link href="#" style={{ color: '#fff', textDecoration: 'none' }} onClick={stopPropagation}>공지사항 관리</Link></li>
                </ul>
              )}
            </li>
            {/* 권한 관리 */}
            <li style={{ padding: '16px 24px', borderBottom: '1px solid #2e3b4e', cursor: 'pointer', position: 'relative' }} onClick={() => setAuthMenuOpen((v) => !v)}>
              <span style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                권한 관리
                <span style={{ marginLeft: 8, fontSize: 12 }}>{authMenuOpen ? '▲' : '▼'}</span>
              </span>
              {authMenuOpen && (
                <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0 0', background: '#2e3b4e', borderRadius: 4 }} onClick={stopPropagation}>
                  <li style={{ padding: '10px 24px', color: '#fff', cursor: 'pointer' }}><Link href="#" style={{ color: '#fff', textDecoration: 'none' }} onClick={stopPropagation}>메뉴·화면 권한 관리</Link></li>
                </ul>
              )}
            </li>
          </ul>
        </>
      )}
    </nav>
  );
} 
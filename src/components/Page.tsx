import React from 'react';

const Page: React.FC = () => {
  return (
    <div style={{
      marginLeft: '250px',
      marginTop: '60px',
      padding: '20px',
      minHeight: 'calc(100vh - 60px)',
      backgroundColor: '#ffffff'
    }}>
      <h2>대시보드</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        marginTop: '20px'
      }}>
        <div style={{
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3>총 자산 수</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>1,234</p>
        </div>
        <div style={{
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3>이번 달 신규 등록</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>56</p>
        </div>
        <div style={{
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3>유지보수 예정</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>23</p>
        </div>
      </div>
    </div>
  );
};

export default Page; 
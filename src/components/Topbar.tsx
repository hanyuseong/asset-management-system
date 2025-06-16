import React from 'react';

const Topbar: React.FC = () => {
  return (
    <div style={{
      height: '60px',
      backgroundColor: '#1a1a1a',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000
    }}>
      <h1 style={{ margin: 0, fontSize: '1.5rem' }}>자산 관리 시스템</h1>
    </div>
  );
};

export default Topbar; 
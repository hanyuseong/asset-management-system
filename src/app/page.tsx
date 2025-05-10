import React from "react";

const assetData = [
  { id: "ASSET002", type: "Monitor", user: "aa", status: "Approved", buy: "2025. 4. 5.", exp: "2025. 4. 5.", dept: "오픈서비스사업팀", manager: "홍길동", returned: "사용중", reg: "2025. 4. 5." },
  { id: "ASSET003", type: "Keyboard", user: "aa", status: "Pending", buy: "2025. 4. 5.", exp: "2025. 4. 5.", dept: "플랫폼개발팀", manager: "이애순", returned: "사용중", reg: "2025. 4. 5." },
  { id: "ASSET004", type: "Mouse", user: "aa", status: "Approved", buy: "2025. 4. 5.", exp: "2025. 4. 5.", dept: "이커머스팀", manager: "한유성", returned: "사용중", reg: "2025. 4. 5." },
  { id: "ASSET005", type: "Printer", user: "aa", status: "Rejected", buy: "2025. 4. 5.", exp: "2025. 4. 5.", dept: "오픈서비스사업팀", manager: "홍길동", returned: "사용중", reg: "2025. 4. 5." },
  { id: "ASSET006", type: "Projector", user: "aa", status: "Approved", buy: "2025. 4. 5.", exp: "2025. 4. 5.", dept: "플랫폼개발팀", manager: "이애순", returned: "사용중", reg: "2025. 4. 5." },
  { id: "ASSET007", type: "Tablet", user: "bb", status: "Approved", buy: "2025. 4. 5.", exp: "2025. 4. 5.", dept: "이커머스팀", manager: "한유성", returned: "사용중", reg: "2025. 4. 5." },
  { id: "ASSET008", type: "Headphones", user: "bb", status: "Pending", buy: "2025. 4. 5.", exp: "2025. 4. 5.", dept: "오픈서비스사업팀", manager: "홍길동", returned: "사용중", reg: "2025. 4. 5." },
  { id: "ASSET009", type: "Webcam", user: "bb", status: "Approved", buy: "2025. 4. 5.", exp: "2025. 4. 5.", dept: "플랫폼개발팀", manager: "이애순", returned: "사용중", reg: "2025. 4. 5." },
  { id: "ASSET010", type: "Router", user: "bb", status: "Approved", buy: "2025. 4. 5.", exp: "2025. 4. 5.", dept: "이커머스팀", manager: "한유성", returned: "사용중", reg: "2025. 4. 5." },
  { id: "ASSET011", type: "Server", user: "bb", status: "Approved", buy: "2025. 4. 5.", exp: "2025. 4. 5.", dept: "오픈서비스사업팀", manager: "홍길동", returned: "사용중", reg: "2025. 4. 5." },
];

export default function Home() {
  return (
    <div style={{ padding: 32 }}>
      <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 4px rgba(0,0,0,0.04)', padding: 32, minHeight: 400, border: '1px solid #e0e3e8' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: 8 }}><input type="checkbox" /></th>
              <th style={{ border: '1px solid #ddd', padding: 8 }}>자산번호</th>
              <th style={{ border: '1px solid #ddd', padding: 8 }}>장비유형</th>
              <th style={{ border: '1px solid #ddd', padding: 8 }}>사용자</th>
              <th style={{ border: '1px solid #ddd', padding: 8 }}>승인상태</th>
              <th style={{ border: '1px solid #ddd', padding: 8 }}>구매일자</th>
              <th style={{ border: '1px solid #ddd', padding: 8 }}>만료일자</th>
              <th style={{ border: '1px solid #ddd', padding: 8 }}>부서</th>
              <th style={{ border: '1px solid #ddd', padding: 8 }}>관리자</th>
              <th style={{ border: '1px solid #ddd', padding: 8 }}>반납여부</th>
              <th style={{ border: '1px solid #ddd', padding: 8 }}>등록일자</th>
            </tr>
          </thead>
          <tbody>
            {assetData.map((row, idx) => (
              <tr key={row.id}>
                <td style={{ border: '1px solid #ddd', padding: 8 }}><input type="checkbox" /></td>
                <td style={{ border: '1px solid #ddd', padding: 8 }}>{row.id}</td>
                <td style={{ border: '1px solid #ddd', padding: 8 }}>{row.type}</td>
                <td style={{ border: '1px solid #ddd', padding: 8 }}>{row.user}</td>
                <td style={{ border: '1px solid #ddd', padding: 8 }}>{row.status}</td>
                <td style={{ border: '1px solid #ddd', padding: 8 }}>{row.buy}</td>
                <td style={{ border: '1px solid #ddd', padding: 8 }}>{row.exp}</td>
                <td style={{ border: '1px solid #ddd', padding: 8 }}>{row.dept}</td>
                <td style={{ border: '1px solid #ddd', padding: 8 }}>{row.manager}</td>
                <td style={{ border: '1px solid #ddd', padding: 8 }}>{row.returned}</td>
                <td style={{ border: '1px solid #ddd', padding: 8 }}>{row.reg}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
          <button style={{ padding: '6px 14px', margin: '0 4px', border: '1px solid #d1d5db', background: '#fff', borderRadius: 4, cursor: 'pointer' }}>{'<'}</button>
          <button style={{ padding: '6px 14px', margin: '0 4px', border: '1px solid #3182f6', background: '#3182f6', color: '#fff', borderRadius: 4, cursor: 'pointer' }}>1</button>
          <button style={{ padding: '6px 14px', margin: '0 4px', border: '1px solid #d1d5db', background: '#fff', borderRadius: 4, cursor: 'pointer' }}>2</button>
          <button style={{ padding: '6px 14px', margin: '0 4px', border: '1px solid #d1d5db', background: '#fff', borderRadius: 4, cursor: 'pointer' }}>3</button>
          <button style={{ padding: '6px 14px', margin: '0 4px', border: '1px solid #d1d5db', background: '#fff', borderRadius: 4, cursor: 'pointer' }}>{'>'}</button>
        </div>
      </div>
    </div>
  );
}

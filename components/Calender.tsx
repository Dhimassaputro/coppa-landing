// app/calendar/page.tsx
'use client';

import React, { useEffect, useMemo, useState } from 'react';

type EventItem = {
  title: string;
  sub?: string;
  vp?: string;
  bg?: string;
  color?: string;
};

const SAMPLE_EVENTS: Record<string, EventItem[]> = {
  '2025-10-02': [{ title: 'Mini K-Meet', sub: 'Opening mini market', vp: 'VP 111001', bg: 'linear-gradient(90deg,#ff9de3,#7b6bff)', color: '#ff9de3' }],
  '2025-10-08': [{ title: 'XP Meez Live', sub: 'Live streaming', vp: 'VP 222002', bg: 'linear-gradient(90deg,#28e0ff,#7b50ff)', color: '#28e0ff' }],
  '2025-10-12': [{ title: '5T Coppà JBegtk K- Market', sub: 'BTS Fan Fest Fest', vp: 'VP 860602', bg: 'linear-gradient(90deg,#6b4bff,#9d52ff)', color: '#6b4bff' }],
  '2025-10-18': [{ title: 'Meet & Greet', sub: 'Fan meetup', vp: 'VP 333003', bg: 'linear-gradient(90deg,#ffb86b,#ff67e6)', color: '#ffb86b' }],
  '2025-10-23': [{ title: '37 Copamgz KP Market', sub: 'F A P Meet Vol. 2.', vp: 'VP 850192', bg: 'linear-gradient(90deg,#28e0ff,#7b50ff)', color: '#7b50ff' }],
  '2025-10-30': [{ title: 'Halloween Special', sub: 'Themed event', vp: 'VP 444004', bg: 'linear-gradient(90deg,#2b2b2b,#6b4bff)', color: '#ff8c00' }]
};

export default function CalendarMonthPage(): JSX.Element {
  const [monthIso] = useState('2025-10');
  const { year, monthIndex } = useMemo(() => {
    const [y, m] = monthIso.split('-').map(Number);
    return { year: y, monthIndex: m - 1 };
  }, [monthIso]);

  const daysGrid = useMemo(() => {
    const firstDay = new Date(year, monthIndex, 1).getDay();
    const offset = (firstDay + 6) % 7;
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    const cells: Array<number | null> = [];
    for (let i = 0; i < offset; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(d);
    while (cells.length % 7 !== 0) cells.push(null);
    return cells;
  }, [year, monthIndex]);

  const eventsInMonth = useMemo(() => {
    const prefix = `${monthIso}-`;
    return Object.entries(SAMPLE_EVENTS)
      .filter(([k]) => k.startsWith(prefix))
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([date, evs]) => ({ date, evs }));
  }, [monthIso]);

  const eventDatesSet = useMemo(() => {
    const set = new Set<string>();
    eventsInMonth.forEach((e) => set.add(e.date));
    return set;
  }, [eventsInMonth]);

  const [selectedIso, setSelectedIso] = useState<string | null>(eventsInMonth[0]?.date ?? null);

  useEffect(() => {
    setSelectedIso(eventsInMonth[0]?.date ?? null);
  }, [eventsInMonth]);

  const primaryColorFor = (iso: string | null) => {
    if (!iso) return null;
    const evs = SAMPLE_EVENTS[iso];
    if (!evs || evs.length === 0) return null;
    return evs[0].color ?? null;
  };

  return (
    <div className="page-root">
      <header>
        <h1>
          COPPAMAGZ
          <br />
          EVENT CALENDAR
        </h1>
        <p>Menampilkan semua event pada bulan <strong>{monthIso}</strong>. Klik tanggal untuk melihat detail.</p>
      </header>

      <main className="container">
        <section className="calendar-wrap">
          <div className="calendar-head">
            <div className="month">{monthIso}</div>
          </div>

          <div className="grid-week" aria-hidden>
            <div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div><div>S</div>
          </div>

          <div className="grid-days">
            {daysGrid.map((d, idx) => {
              const iso = d === null ? null : `${monthIso}-${String(d).padStart(2, '0')}`;
              const hasEvent = iso ? eventDatesSet.has(iso) : false;
              const isActive = iso === selectedIso;
              const primaryColor = primaryColorFor(iso);

              const numStyle: React.CSSProperties = {};
              const wrapperStyle: React.CSSProperties = {};

              if (primaryColor) {
                wrapperStyle.boxShadow = `0 0 0 6px ${primaryColor}22, 0 0 12px ${primaryColor}33`;
                numStyle.border = `2px solid ${primaryColor}33`;
              }

              if (isActive) {
                numStyle.background = primaryColor ?? '#ff67e6';
                numStyle.color = '#0b0710';
                numStyle.boxShadow = `0 0 28px ${primaryColor ?? '#ff67e6'}88`;
              }

              return (
                <button
                  key={idx}
                  className={`day ${d === null ? 'empty' : ''} ${hasEvent ? 'mark' : ''} ${isActive ? 'active' : ''}`}
                  onClick={() => iso && setSelectedIso(iso)}
                  aria-pressed={isActive}
                  style={hasEvent && !isActive ? wrapperStyle : undefined}
                >
                  <span className="num" style={numStyle}>{!d ? '' : d}</span>
                </button>
              );
            })}
          </div>

          <div className="month-events">
            <h2>Semua Event Bulan {monthIso}</h2>
            {eventsInMonth.length === 0 ? (
              <div className="no-events">Tidak ada event di bulan ini.</div>
            ) : (
              <div className="events-list">
                {eventsInMonth.map(({ date, evs }) => {
                  const primary = primaryColorFor(date) ?? '#777';
                  return (
                    <div key={date} className={`event-row ${selectedIso === date ? 'selected' : ''}`} onClick={() => setSelectedIso(date)} style={{ borderLeft: `4px solid ${primary}` }}>
                      <div className="event-date" style={{ color: primary }}>{date.split('-').pop()}</div>
                      <div className="event-body">
                        {evs.map((ev, i) => (
                          <div key={i} className="event-meta-line">
                            <div className="title">{ev.title}</div>
                            <div className="sub">{ev.sub}</div>
                            <div className="vp">{ev.vp}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="detail-panel">
            <h3>Detail — {selectedIso ?? '-'}</h3>
            {selectedIso && SAMPLE_EVENTS[selectedIso] ? (
              SAMPLE_EVENTS[selectedIso].map((ev, i) => (
                <div className="event-card" key={i}>
                  <div className="event-thumb" style={{ background: ev.bg ?? 'linear-gradient(90deg,#222,#333)' }} />
                  <div className="event-info">
                    <div className="event-title">{ev.title}</div>
                    <div className="event-sub">{ev.sub}</div>
                    <div className="event-meta">{ev.vp}</div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-events">Tidak ada event terdaftar untuk tanggal ini.</div>
            )}
          </div>
        </section>
      </main>

      <style jsx>{`
        :root {
          --bg-pink-1: #1b0216;
          --bg-pink-2: #2b0717;
          --neon-pink: #ff67e6;
          --neon-cyan: #4df0ff;
        }

        /* Force background pink with !important to override global themes */
        .page-root {
          min-height: 100vh !important;
          padding: 28px !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          background:
            radial-gradient(ellipse at 15% 10%, rgba(255,103,230,0.16), transparent 12%),
            radial-gradient(ellipse at 85% 80%, rgba(255,149,200,0.10), transparent 12%),
            var(--bg-pink-1) !important;
          color: #f6eefe !important;
          font-family: Inter, Montserrat, system-ui !important;
        }

        header { text-align: center; margin-bottom: 12px; }
        header h1 { color: var(--neon-pink); font-size: 32px; margin: 6px 0; font-weight: 800; }
        header p { opacity: 0.95; margin: 0; }

        .container { width: 920px; max-width: 96%; }
        .calendar-wrap { border-radius: 18px; padding: 18px; border: 1px solid rgba(255,255,255,0.06); background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); }

        .calendar-head { display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; }
        .month { font-weight:800; letter-spacing:1px; font-size:14px; padding:6px 12px; border-radius:8px; background: rgba(255,255,255,0.02); }

        .grid-week { display:grid; grid-template-columns:repeat(7,1fr); gap:8px; text-align:center; color:rgba(255,255,255,0.48); font-size:12px; margin-bottom:6px; }
        .grid-days { display:grid; grid-template-columns:repeat(7,1fr); gap:8px; text-align:center; font-weight:600; margin-bottom:18px; }

        .day { padding:8px 6px; border-radius:8px; background:transparent; color:#f3e9f5; border:0; cursor:pointer; transition: transform 0.12s ease; }
        .day:hover { transform: translateY(-2px); }
        .day.empty { opacity:0.14; cursor:default; transform:none; }

        .num { display:inline-block; padding:8px 10px; border-radius:50%; min-width:34px; transition: all 0.18s ease; background: transparent; color: #f3e9f5; }
        .day.active .num { /* active will get colored via inline styles */ }
        .day.mark .num { /* marked dates will get ring via inline wrapperStyle */ }

        .month-events { margin-top:6px; border-top:1px dashed rgba(255,255,255,0.03); padding-top:12px; }
        .month-events h2 { margin:0 0 10px 0; font-size:16px; color:#fff; }
        .events-list { display:flex; flex-direction:column; gap:8px; max-height:220px; overflow:auto; padding-right:6px; }
        .event-row { display:flex; gap:12px; padding:10px; border-radius:10px; background:rgba(255,255,255,0.02); cursor:pointer; border:1px solid rgba(255,255,255,0.02); align-items:flex-start; }
        .event-row.selected { box-shadow:0 8px 30px rgba(0,0,0,0.6) inset; outline:2px solid rgba(255,103,230,0.06); }
        .event-date { width:48px; height:48px; border-radius:8px; background:linear-gradient(90deg,#111,#222); display:flex; align-items:center; justify-content:center; font-weight:800; color:var(--neon-pink); }
        .event-body { flex:1; display:flex; flex-direction:column; gap:4px; }
        .event-meta-line .title { font-weight:700; color:#fff; }
        .event-meta-line .sub { font-size:13px; color:#f6eefe; opacity:0.9; }
        .event-meta-line .vp { font-weight:700; color:var(--neon-cyan); font-size:13px; }

        .detail-panel { margin-top:14px; border-top:1px dashed rgba(255,255,255,0.03); padding-top:12px; }
        .detail-panel h3 { margin:0 0 8px 0; }
        .event-card { display:flex; gap:12px; padding:12px; border-radius:12px; background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); border:1px solid rgba(255,255,255,0.04); margin-bottom:8px; align-items:center; }
        .event-thumb { width:120px; height:78px; border-radius:8px; background-size:cover; background-position:center; flex-shrink:0; }
        .event-info { display:flex; flex-direction:column; gap:6px; }
        .event-title { font-weight:800; color:var(--neon-pink); }
        .no-events { color: rgba(255,255,255,0.6); padding:8px 0; }

        @media (max-width:1000px) { .container { width:100%; } }
      `}</style>
    </div>
  );
}

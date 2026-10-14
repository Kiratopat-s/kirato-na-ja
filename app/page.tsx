export default function Home() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Parcelink หน้าหลัก">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none">
              <path d="m16 3 12 6.5v13L16 29 4 22.5v-13L16 3Z" />
              <path d="m4.5 9.7 11.5 6.5 11.5-6.5M16 16.5V29M10 6.3l12 6.8v6" />
            </svg>
          </span>
          <span>parcelink</span>
        </a>

        <nav className="top-nav" aria-label="เมนูหลัก">
          <a href="#features">ฟีเจอร์</a>
          <a href="#support">ช่วยเหลือ</a>
          <span className="nav-divider" aria-hidden="true" />
          <span className="language-label">TH</span>
        </nav>
      </header>

      <main className="login-layout" id="home">
        <section className="intro-panel" aria-labelledby="intro-title">
          <div className="intro-copy">
            <p className="eyebrow">
              <span /> ระบบจัดการพัสดุสำหรับทีมยุคใหม่
            </p>
            <h1 id="intro-title">
              ทุกพัสดุ
              <br />
              อยู่ในมือคุณ
            </h1>
            <p className="intro-description">
              จัดการ ติดตาม และส่งต่อทุกการจัดส่งได้ในที่เดียว
              ให้ทุกขั้นตอนชัดเจนตั้งแต่ต้นทางถึงปลายทาง
            </p>
          </div>

          <div className="shipment-board" aria-label="ตัวอย่างสถานะพัสดุ">
            <div className="board-topline">
              <span>ภาพรวมการจัดส่ง</span>
              <span className="live-label">
                <span /> LIVE
              </span>
            </div>
            <div className="shipment-number">
              1,284<span> ชิ้น</span>
            </div>
            <div className="shipment-caption">พัสดุที่ดูแลในเดือนนี้</div>
            <div className="shipment-chart" aria-hidden="true">
              <div className="chart-grid">
                <i />
                <i />
                <i />
              </div>
              <svg viewBox="0 0 420 112" preserveAspectRatio="none">
                <path
                  className="chart-area"
                  d="M0 88C34 81 44 92 75 68S121 72 148 55 193 64 222 38 269 59 298 30 337 44 366 18 395 22 420 8V112H0Z"
                />
                <path
                  className="chart-line"
                  d="M0 88C34 81 44 92 75 68S121 72 148 55 193 64 222 38 269 59 298 30 337 44 366 18 395 22 420 8"
                />
                <circle cx="366" cy="18" r="5" />
              </svg>
              <div className="chart-labels">
                <span>1 ต.ค.</span>
                <span>8 ต.ค.</span>
                <span>15 ต.ค.</span>
                <span>22 ต.ค.</span>
                <span>วันนี้</span>
              </div>
            </div>
            <div className="board-footer">
              <span>
                <i className="status-dot status-green" /> จัดส่งสำเร็จ
              </span>
              <strong>96.8%</strong>
              <span className="board-change">↑ 8.2%</span>
            </div>
            <div className="floating-package" aria-hidden="true">
              <svg viewBox="0 0 52 52" fill="none">
                <path d="m26 5 19 10.5v21L26 47 7 36.5v-21L26 5Z" />
                <path d="m7.8 15.8 18.2 10 18.2-10M26 26v20M17 10l19 10.5v9" />
              </svg>
            </div>
          </div>
          <p className="panel-footnote">
            ติดตามทุกเส้นทางได้แบบเรียลไทม์ <span>↗</span>
          </p>
        </section>

        <section className="form-panel" aria-labelledby="login-title">
          <div className="form-content">
            <div className="mobile-brand brand">
              <span className="brand-mark" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none">
                  <path d="m16 3 12 6.5v13L16 29 4 22.5v-13L16 3Z" />
                  <path d="m4.5 9.7 11.5 6.5 11.5-6.5M16 16.5V29M10 6.3l12 6.8v6" />
                </svg>
              </span>
              <span>parcelink</span>
            </div>
            <p className="form-kicker">ยินดีต้อนรับกลับ</p>
            <h2 id="login-title">เข้าสู่ระบบ</h2>
            <p className="form-description">กรอกข้อมูลบัญชีของคุณเพื่อไปต่อ</p>

            <form className="login-form">
              <label htmlFor="email">อีเมล</label>
              <div className="input-wrap">
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <rect x="2.5" y="4" width="15" height="12" rx="2" />
                  <path d="m3.5 5 6.5 5.5L16.5 5" />
                </svg>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="password-heading">
                <label htmlFor="password">รหัสผ่าน</label>
                <a href="#reset-password">ลืมรหัสผ่าน?</a>
              </div>
              <div className="input-wrap">
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <rect x="3.5" y="8.5" width="13" height="9" rx="2" />
                  <path d="M6.5 8.5V6a3.5 3.5 0 1 1 7 0v2.5M10 12v2" />
                </svg>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="กรอกรหัสผ่าน"
                  autoComplete="current-password"
                  required
                />
              </div>

              <label className="remember-option">
                <input type="checkbox" name="remember" />
                <span className="custom-checkbox" aria-hidden="true" />
                จดจำฉันในระบบ
              </label>

              <button className="submit-button" type="submit">
                เข้าสู่ระบบ <span aria-hidden="true">→</span>
              </button>
            </form>

            <div className="form-separator">
              <span>หรือ</span>
            </div>
            <p className="signup-prompt">
              ยังไม่มีบัญชี? <a href="#contact">ติดต่อทีมงาน</a>
            </p>
          </div>
          <footer className="form-footer">
            <span>© 2026 Parcelink</span>
            <a href="#privacy">ความเป็นส่วนตัว</a>
          </footer>
        </section>
      </main>
    </div>
  );
}

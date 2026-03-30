import './SmartLinkPage.css';

const COVER_ART =
  'https://imagestore.ffm.to/link/696ebf792e00006b008c5d89/697708312f000016007f72e7_0594eda9b61e8dacb87e1abc2f35d32d.jpeg';

const STREAMING_LINKS = [
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/album/7tAImO0jC2X682dNB4a4YI',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
    color: '#1DB954',
  },
  {
    label: 'Apple Music',
    href: 'https://geo.music.apple.com/us/album/deck-of-cards-single/1866379749?app=music',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 0 0-1.877-.726 10.496 10.496 0 0 0-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.958 1.04 1.88.475 3.208a4.98 4.98 0 0 0-.394 1.548c-.043.34-.06.682-.079 1.024-.013.22-.01.44-.01.66v13.12c0 .44.02.88.07 1.316.155 1.37.668 2.52 1.662 3.438 1.043.958 2.296 1.408 3.702 1.43.293.005.586.012.88.012h12.72c.41 0 .82-.01 1.23-.04 1.28-.108 2.44-.524 3.358-1.43.95-.94 1.4-2.1 1.5-3.42.013-.18.027-.36.027-.54V6.82c0-.23-.01-.46-.027-.697zm-8.056 3.16v6.29a2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1 2.5-2.5c.34 0 .666.068.963.19V5.51l4.537-1.01v3.784z" />
      </svg>
    ),
    color: '#FC3C44',
  },
  {
    label: 'TIDAL',
    href: 'http://www.tidal.com/album/486860762',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.012 3.992L8.008 7.996 4.004 3.992 0 7.996l4.004 4.004 4.004-4.004 4.004 4.004 4.004-4.004zM8.008 16.004l4.004-4.004 4.004 4.004 4.004-4.004-4.004-4.004-4.004 4.004-4.004-4.004-4.004 4.004z" />
      </svg>
    ),
    color: '#00FFFF',
  },
  {
    label: 'Deezer',
    href: 'https://www.deezer.com/album/890410182',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.81 12.204c0-.32-.258-.578-.578-.578H5.768a.578.578 0 0 0-.578.578v.578h13.62v-.578zm-13.62 2.31h13.62v.577H5.19v-.578zm0 2.31h13.62v.577H5.19v-.578zm0-6.93h13.62v.578H5.19v-.578zm0-2.31h13.62v.578H5.19V7.584z" />
      </svg>
    ),
    color: '#EF5466',
  },
  {
    label: 'Amazon Music',
    href: 'https://music.amazon.com/albums/B0GDXLTZPF',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.958 10.09c0 1.232.029 2.256-.59 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.698-3.182v.685zm3.186 7.705c-.209.189-.512.201-.745.076-1.047-.869-1.233-1.272-1.814-2.099-1.733 1.767-2.96 2.295-5.208 2.295-2.659 0-4.731-1.641-4.731-4.925 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.889 5.944-1.095V6.6c0-.736.057-1.605-.373-2.241-.371-.568-1.085-.804-1.713-.804-1.163 0-2.2.596-2.45 1.833-.051.275-.253.546-.525.56l-2.944-.318c-.248-.056-.522-.257-.451-.637C5.565 2.378 8.238 1.5 10.63 1.5c1.232 0 2.84.328 3.807 1.261C15.67 3.898 15.558 5.5 15.558 7.24v4.758c0 1.431.594 2.061 1.152 2.835.197.276.239.606-.01.811l-1.556 1.151zm2.309 3.206c-.403.312-.988.332-1.449.124-2.038-1.688-2.403-2.469-3.514-4.074-3.362 3.427-5.748 4.456-10.118 4.456-5.162 0-9.179-3.185-9.179-9.559C-4.807 1.945-.315-.5 4.638-.5 7.37-.5 9.79.46 11.512 2.35c1.606 1.749 2.057 4.133 2.057 6.399v1.166c0 2.301.957 3.536 1.861 4.728.313.414.379.905-.016 1.2l-1.961 1.558z" />
      </svg>
    ),
    color: '#FF9900',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/watch?v=1KGntXXwfBA',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
    color: '#FF0000',
  },
  {
    label: 'YouTube Music',
    href: 'https://music.youtube.com/playlist?list=OLAK5uy_nn8bF0caPTCvoS0r8_mCcXV9dHpW00I6I',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.404c-3.48 0-6.3 2.82-6.3 6.3s2.82 6.3 6.3 6.3 6.3-2.82 6.3-6.3-2.82-6.3-6.3-6.3zm2.772 9.684L9.6 12l5.172-3.384v6.768z" />
      </svg>
    ),
    color: '#FF0000',
  },
];

const SOCIAL_LINKS = [
  {
    label: 'YouTube',
    href: 'https://youtube.com/@yumeth.voicetales',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
  },
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/artist/48fSdVyiuRXmjGSOCy8aVD',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@yumeth.voicetales/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.16 8.16 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/yumeth.voicetales/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/yumeth.voicetales',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

export default function SmartLinkPage() {
  return (
    <div className="slp-root">
      {/* Card suit decorations */}
      <span className="slp-suit slp-suit--tl" aria-hidden="true">♠</span>
      <span className="slp-suit slp-suit--tr" aria-hidden="true">♥</span>
      <span className="slp-suit slp-suit--bl" aria-hidden="true">♦</span>
      <span className="slp-suit slp-suit--br" aria-hidden="true">♣</span>

      <main className="slp-card">
        {/* Cover art */}
        <div className="slp-cover-wrap">
          <img
            src={COVER_ART}
            alt="Deck of Cards – Single cover art by Yumeth Athukorala"
            className="slp-cover"
            loading="eager"
          />
          <div className="slp-cover-shine" aria-hidden="true" />
        </div>

        {/* Artist / title info */}
        <header className="slp-header">
          <h1 className="slp-title">Deck of Cards</h1>
          <p className="slp-artist">Yumeth Athukorala</p>
          <p className="slp-type">Single</p>
        </header>

        {/* Streaming platform buttons */}
        <section className="slp-section" aria-label="Streaming platforms">
          <p className="slp-section-label">Listen on</p>
          <ul className="slp-streaming-list" role="list">
            {STREAMING_LINKS.map(({ label, href, icon, color }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="slp-stream-btn"
                  style={{ '--platform-color': color } as React.CSSProperties}
                  aria-label={`Listen on ${label}`}
                >
                  <span className="slp-stream-icon">{icon}</span>
                  <span className="slp-stream-label">{label}</span>
                  <span className="slp-stream-arrow" aria-hidden="true">›</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Social links */}
        <section className="slp-section" aria-label="Follow on social media">
          <p className="slp-section-label">Follow</p>
          <ul className="slp-social-list" role="list">
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="slp-social-btn"
                  aria-label={`Follow on ${label}`}
                >
                  <span className="slp-social-icon">{icon}</span>
                  <span className="slp-social-label">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <footer className="slp-footer">
          <p>© 2025 Yumeth Athukorala. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

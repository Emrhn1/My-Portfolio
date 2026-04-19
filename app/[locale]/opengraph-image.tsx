import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Emirhan Erkan — Frontend Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#0a0a0f',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'monospace',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background grid lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(40,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(40,212,255,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glow accent */}
        <div
          style={{
            position: 'absolute',
            top: '-200px',
            right: '-100px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16,64,232,0.25) 0%, transparent 70%)',
          }}
        />

        {/* Top label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#28d4ff',
            }}
          />
          <span style={{ color: '#28d4ff', fontSize: '18px', letterSpacing: '3px', textTransform: 'uppercase' }}>
            Portfolio
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: '80px',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '24px',
            display: 'flex',
          }}
        >
          Emirhan Erkan
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: '32px',
            background: 'linear-gradient(90deg, #28d4ff, #1040e8)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: '48px',
            display: 'flex',
          }}
        >
          Frontend Developer
        </div>

        {/* Tech stack pills */}
        <div style={{ display: 'flex', gap: '16px' }}>
          {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((tech) => (
            <div
              key={tech}
              style={{
                padding: '8px 20px',
                border: '1px solid rgba(40,212,255,0.3)',
                borderRadius: '4px',
                color: '#94a3b8',
                fontSize: '18px',
                background: 'rgba(40,212,255,0.05)',
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            right: '80px',
            color: '#334155',
            fontSize: '18px',
            letterSpacing: '1px',
          }}
        >
          emirhanerkan.com
        </div>
      </div>
    ),
    size
  );
}

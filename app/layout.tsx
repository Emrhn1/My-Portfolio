// app/layout.tsx — Root layout (minimal shell)
// html/body is provided by app/[locale]/layout.tsx
// This file is required by Next.js but delegates to locale layouts.
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return children as React.ReactElement;
}

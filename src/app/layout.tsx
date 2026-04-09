import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BBM485 — KNIME Architecture Evaluation',
  description: 'Concrete Architecture Evaluation: KNIME Workbench',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head></head>
      <body className="h-full overflow-hidden">{children}</body>
    </html>
  );
}

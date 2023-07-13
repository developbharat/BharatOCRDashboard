import '../css/main.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BharatOCR Dashboard',
  description: 'Welcome to BharatOCR Dashboard',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' dir='ltr'>
      <body className='px-12 py-12'>{children}</body>
    </html>
  );
}

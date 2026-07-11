import "./globals.css";
import RefreshRedirect from '@/components/RefreshRedirect'
import { siteConfig } from '@/config/site'

export const metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RefreshRedirect />
        {children}
        </body>
    </html>
  );
}
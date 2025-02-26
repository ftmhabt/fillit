import ReduxProvider from "@/providers/reduxProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}

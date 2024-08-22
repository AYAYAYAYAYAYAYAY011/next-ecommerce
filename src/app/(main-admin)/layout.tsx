export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <h1>Main-Dashboard Layout</h1>
          {children}</body>
      </html>
    );
  }
import "./globals.css";

export const metadata = {
  title: "Jahnavi | Me-API Playground",
  description: "Portfolio powered by backend APIs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}

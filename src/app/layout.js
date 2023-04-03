import Sidebar from "@/components/sidebar/Sidebar";
import "./globals.css";
import Header from "@/components/header/page";

export const metadata = {
  title: "web app cp",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}

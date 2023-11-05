import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "TechLogans Hiring",
  description: "This app is developed for skill testing by Zain Ul Abideen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-blue-950/10`}>
        <header className="bg-blue-950 p-5"></header>
        {children}
      </body>
    </html>
  );
}

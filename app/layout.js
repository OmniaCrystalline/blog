/** @format */
import "./globals.css";
import Navigation from "./components/Navigation";
import { cookies } from "next/headers";
import Footer from "./components/Footer";
import AuthProvider from "@/utils/providers/AuthProvider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const theme = cookies().get("theme");
  const context =
    (theme && theme.value === "light") || undefined ? "light" : "dark";
  return (
    <html lang='en'>
      <body
        className={`container ml-auto mr-auto grid min-h-screen max-w-6xl min-w-sm transition-all ${context} grid-rows-[auto_1fr_auto]`}>
        <AuthProvider>
          <Navigation theme={context} />
          <div className=''>{children}</div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

// app/layout.js
import "./globals.css";
import { AuthContextProvider } from "./contexts/AuthContext";

export const metadata = {
  title: "Your App",
  description: "Shopping list with auth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}

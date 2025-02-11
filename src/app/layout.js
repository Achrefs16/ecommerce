import { CartProvider } from "../app/context/CartContext"; // Import du contexte
import { AddressProvider } from "../app/context/AddressContext";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <CartProvider>
            <AddressProvider> {/* Utilisation du contexte pour englober l'application */}
          {children}
          </AddressProvider>
        </CartProvider>
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Outfit} from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";



export const metadata = {
 
};

const outfit=Outfit({subsets:['latin']})

export default function RootLayout({ children }) {
  return (
     <ClerkProvider>
    <html lang="en">
      <body
      className={outfit.className}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}

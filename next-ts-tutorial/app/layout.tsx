import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "@/app/Providers";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "IMDB Clone",
    description: "IMDB Next JS clone with tailwind.",
};

export default function RootLayout(
    {children,}: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Providers>
            <Header />
            {children}
        </Providers>
        </body>
        </html>
    );
}

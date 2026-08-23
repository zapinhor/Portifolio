import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://danilo-petraglia-portfolio.poligames2000.chatgpt.site"),
  title: "Danilo Petraglia | Portfólio",
  description: "Portfólio de Danilo Petraglia — game developer, projetos SMAUG e desenvolvimento web.",
  openGraph: {
    title: "Danilo Petraglia | Games & Web",
    description: "Game developer e desenvolvedor web. Conheça os projetos SMAUG criados durante a formação em Jogos Digitais.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Danilo Petraglia — Game Developer & Web" }],
  },
  twitter: { card: "summary_large_image", title: "Danilo Petraglia | Games & Web", description: "Game developer e desenvolvedor web.", images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}

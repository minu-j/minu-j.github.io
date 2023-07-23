import "./globals.scss";
import "./reset.scss";
import { Noto_Sans_KR } from "next/font/google";

const inter = Noto_Sans_KR({
  weight: ["400", "100", "300", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "MINU`s portfolio",
  description: "Front-end developer Jung Minu`s portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

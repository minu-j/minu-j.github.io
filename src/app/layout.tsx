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
  openGraph: {
    title: "MINU`s portfolio",
    description: "Front-end developer Jung Minu`s portfolio",
    url: "https://minu-j.github.io",
    siteName: "MINU`s portfolio",
    images: [
      {
        url: "https://drive.google.com/uc?id=1bq7uOTMge66eB2YHTz9pYqlMQz9LPLWf",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
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

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'

const workSans = localFont({
  src: [
    {
      path: '../public/fonts/WorkSans-Black.ttf',
      weight: '900',
      style: 'normal'
    },
    {
      path: '../public/fonts/WorkSans-ExtraBold.ttf',
      weight: '800',
      style: 'normal'
    },
    {
      path: '../public/fonts/WorkSans-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../public/fonts/WorkSans-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../public/fonts/WorkSans-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/fonts/WorkSans-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/WorkSans-Thin.ttf',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../public/fonts/WorkSans-ExtraLight.ttf',
      weight: '100',
      style: 'normal'
    },
  ],
  variable: '--font-work-sans'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={workSans.variable}
      >
        {children}
      </body>
    </html>
  );
}

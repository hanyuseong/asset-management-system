"use client";
import React, { useState } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          <Sidebar open={sidebarOpen} />
          <div style={{ flex: 1, background: '#f7f8fa', display: 'flex', flexDirection: 'column' }}>
            <Topbar onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />
            <div style={{ flex: 1 }}>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}

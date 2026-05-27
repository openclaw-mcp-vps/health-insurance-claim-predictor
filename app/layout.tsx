import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Health Insurance Claim Predictor",
  description: "Predict health insurance claim approval likelihood before submission."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2c8ba3d1-4a75-4bea-a308-dd107e0f8012"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}

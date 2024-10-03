import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: {
		template: "%s | MyCal",
		default: "MyCal", // a default is required when creating a template
	},
	description: "Myanmar Calendar Info with Next.js",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
				<Script
					id="math-jax"
					src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
				/>
			</body>
		</html>
	);
}

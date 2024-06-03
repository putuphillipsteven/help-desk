import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import 'quill/dist/quill.core.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Dimata Help Desk',
	description: 'Help Desk App by Dimata',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' data-theme='dimataTheme'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
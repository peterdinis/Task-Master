import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navigation from './_components/shared/Navigation';
import ThemeProvider from './_components/shared/providers/ThemeProvider';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'Task Master',
	description: 'Jira alternative application',
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
				<ThemeProvider>
					<Navigation />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}

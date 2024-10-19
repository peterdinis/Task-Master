import { Button } from '@/components/ui/button';
import { MdAssignment } from "react-icons/md";
import Link from 'next/link';
import type { FC } from 'react';
import ThemeButton from './ThemeToggle';

const Navigation: FC = () => {
	return (
		<>
			<nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
				<div className="w-full max-w-7xl mx-auto px-4">
					<div className="flex justify-between h-14 items-center">
						<Link href="#" className="flex items-center" prefetch={false}>
							<MdAssignment className="h-6 w-6" />
							<span className='ml-2 font-bold'>Task Master</span>
						</Link>
						<nav className="hidden md:flex gap-4">
							<Link
								href="#"
								className="font-medium flex items-center text-sm transition-colors hover:underline"
								prefetch={false}
							>
								Home
							</Link>
							<Link
								href="#"
								className="font-medium flex items-center text-sm transition-colors hover:underline"
								prefetch={false}
							>
								About
							</Link>
							<Link
								href="#"
								className="font-medium flex items-center text-sm transition-colors hover:underline"
								prefetch={false}
							>
								Services
							</Link>
							<Link
								href="#"
								className="font-medium flex items-center text-sm transition-colors hover:underline"
								prefetch={false}
							>
								Contact
							</Link>
						</nav>
						<div className="flex items-center gap-4">
							<Button variant="outline" size="sm">
								<Link href="/login">
								Login</Link>
							</Button>
							<Button size="sm">
								<Link href="/register">
								Register</Link>
							</Button>
							<ThemeButton />
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navigation;

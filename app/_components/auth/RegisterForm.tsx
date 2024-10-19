'use client';

import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlertCircle } from 'lucide-react';
import { type FC, useState } from 'react';

const RegisterForm: FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError('');

		if (!email || !password) {
			setError('Please fill in all fields');
			return;
		}

		// Here you would typically call your authentication API
		console.log('Login attempt with:', { email, password });
		// For demo purposes, let's simulate an error
		setError('Invalid email or password');
	};

	return (
		<div className="flex justify-center items-center min-h-screen">
			<Card className="w-full max-w-md mx-auto">
				<CardHeader>
					<CardTitle className="text-2xl font-bold">
						Login to Jira Clone
					</CardTitle>
					<CardDescription>
						Enter your credentials to access your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								placeholder="Enter your email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="password">Password</Label>
							<Input
								id="password"
								type="password"
								placeholder="Enter your password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						{error && (
							<div className="text-red-500 text-sm flex items-center">
								<AlertCircle className="w-4 h-4 mr-2" />
								{error}
							</div>
						)}
						<Button type="submit" className="w-full">
							Login
						</Button>
					</form>
				</CardContent>
				<CardFooter className="flex justify-center">
					<p className="text-sm text-muted-foreground">
						Don't have an account?{' '}
						<a href="#" className="text-primary hover:underline">
							Sign up
						</a>
					</p>
				</CardFooter>
			</Card>
		</div>
	);
};

export default RegisterForm;

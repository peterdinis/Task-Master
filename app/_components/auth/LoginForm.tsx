'use client';

import { useLogin } from '@/app/_hooks/auth/useLogin';
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
import type { FC } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

type LoginFormInputs = {
	email: string;
	password: string;
};

const LoginForm: FC = () => {
	// Initialize the react-hook-form methods
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormInputs>();

	// Use your custom useLogin hook
	const { mutate: login, isPending, error } = useLogin();

	// Handle form submission
	const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
		login(
			{ json: data },
			{
				onError: () => {
					console.error('Login failed');
				},
				onSuccess: () => {
					console.log('Login successful');
				},
			},
		);
	};

	return (
		<div className="flex justify-center items-center min-h-screen">
			<Card className="w-full max-w-md mx-auto">
				<CardHeader>
					<CardTitle className="text-2xl font-bold">
						Task Master Login
					</CardTitle>
					<CardDescription>
						Enter your credentials to access your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								placeholder="Enter your email"
								// Use react-hook-form's register method to handle input
								{...register('email', { required: 'Email is required' })}
							/>
							{/* Display error if email field is invalid */}
							{errors.email && (
								<p className="text-red-500 text-sm">{errors.email.message}</p>
							)}
						</div>
						<div className="space-y-2">
							<Label htmlFor="password">Password</Label>
							<Input
								id="password"
								type="password"
								placeholder="Enter your password"
								// Use react-hook-form's register method to handle input
								{...register('password', { required: 'Password is required' })}
							/>
							{/* Display error if password field is invalid */}
							{errors.password && (
								<p className="text-red-500 text-sm">
									{errors.password.message}
								</p>
							)}
						</div>
						{/* Show API error if login fails */}
						{error && (
							<div className="text-red-500 text-sm flex items-center">
								<AlertCircle className="w-4 h-4 mr-2" />
								{error.message || 'Invalid email or password'}
							</div>
						)}
						<Button type="submit" className="w-full" disabled={isPending}>
							{isPending ? 'Logging in...' : 'Login'}
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

export default LoginForm;

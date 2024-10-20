import { client } from '@/lib/rpc';
import { useMutation } from '@tanstack/react-query';
import type { InferRequestType, InferResponseType } from 'hono';

type ResponseType = InferResponseType<(typeof client.api.auth.login)['$post']>;
type RequestType = InferRequestType<(typeof client.api.auth.login)['$post']>;
('json');

export const useLogin = () => {
	const mutation = useMutation<ResponseType, Error, RequestType>({
		mutationKey: ['loginUser'],
		mutationFn: async ({ json }) => {
			const response = await client.api.auth.login['$post']({ json });
			return await response.json();
		},
	});

	return mutation;
};

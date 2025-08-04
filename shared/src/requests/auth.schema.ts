import { z } from 'zod';

import { DTOValidators } from '../schemas';

const userValidator = DTOValidators.user;

export const register = z.object({
	name: DTOValidators.name,
	login: userValidator.login,
	password: userValidator.password,
	repeatPassword: userValidator.password
});

export const login = z.object({
	login: userValidator.login,
	password: userValidator.password
});

export type RegisterRequest = z.infer<typeof register>;
export type LoginRequest = z.infer<typeof login>;

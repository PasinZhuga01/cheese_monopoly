import { z } from 'zod';

/* common */
export const id = z.number().min(1);
export const name = z.string().min(1).max(255);

export const nullableId = id.nullable();

/* other */
export const user = {
	login: z.string().min(3).max(80),
	password: z.string().min(1).max(255),
	photo: z.union([z.string(), z.null()])
};

export const game = {
	status: z.enum(['recruiting', 'process', 'completed']),
	process: z.enum(['dice', 'field', 'decision'])
};

export const contract = {
	isActive: z.union([z.literal(0), z.literal(1)])
};

export const field = { type: z.enum(['asset', 'start', 'jail', 'casino', 'goto_jail']) };

export const asset = {
	type: z.string().max(255),
	status: z.enum(['free', 'owned', 'mortgaged']),
	price: z.number().min(1),
	branchCount: z.number().min(0)
};

import { z } from 'zod';

const id = z.number().min(1);
const nullableId = z.union([id, z.null()]);

export const user = z
	.object({
		id,
		current_player_id: nullableId,
		login: z.string().min(3).max(80),
		password: z.string().min(1).max(255),
		name: z.string().min(1).max(255),
		photo: z.union([z.string(), z.null()])
	})
	.transform(({ current_player_id, ...object }) => ({ ...object, currentPlayerId: current_player_id }));

export const game = z
	.object({
		id,
		current_player_id: nullableId,
		current_contract_id: nullableId,
		winner_id: z.number().min(1),
		status: z.enum(['recruiting', 'process', 'completed']),
		process: z.enum(['dice', 'field', 'decision'])
	})
	.transform(({ current_player_id, current_contract_id, winner_id, ...object }) => ({
		...object,
		currentPlayerId: current_player_id,
		currentContractId: current_contract_id,
		winnerId: winner_id
	}));

export const contract = z
	.object({
		id,
		is_active: z.union([z.literal(0), z.literal(1)]),
		initiator_id: id,
		signatory_id: id
	})
	.transform((object) => ({
		id: object.id,
		isActive: object.is_active,
		initiatorId: object.initiator_id,
		signatoryId: object.signatory_id
	}));

export const player = z
	.object({
		id,
		next_player_id: id,
		current_field_id: id,
		game_id: id
	})
	.transform((object) => ({
		id: object.id,
		nextPlayerId: object.next_player_id,
		currentFieldId: object.current_field_id,
		gameId: object.game_id
	}));

export const field = z
	.object({
		id,
		asset_id: nullableId,
		type: z.enum(['asset', 'start', 'jail', 'casino', 'goto_jail'])
	})
	.transform(({ asset_id, ...object }) => ({ ...object, assetId: asset_id }));

export const asset = z
	.object({
		id,
		owner_id: nullableId,
		name: z.string().max(255),
		type: z.string().max(255),
		status: z.enum(['free', 'owned', 'mortgaged']),
		asset_price: z.number().min(1),
		branch_price: z.number().min(1),
		asset_rent_price: z.number().min(1),
		branch_rent_price: z.number().min(1),
		branch_count: z.number().min(0)
	})
	.transform(({ owner_id, asset_price, branch_price, asset_rent_price, branch_rent_price, branch_count, ...object }) => ({
		...object,
		ownerId: owner_id,
		assetPrice: asset_price,
		branchPrice: branch_price,
		assetRentPrice: asset_rent_price,
		branchRentPrice: branch_rent_price,
		branchCount: branch_count
	}));

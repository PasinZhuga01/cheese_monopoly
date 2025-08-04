import { z } from 'zod';

import {
	id,
	nullableId,
	name,
	user as userValidators,
	game as gameValidators,
	contract as contractValidators,
	field as fieldValidators,
	asset as assetValidators
} from './validators';

export const user = z
	.object({ id, current_player_id: nullableId, name, ...userValidators })
	.transform(({ current_player_id, ...object }) => ({ ...object, currentPlayerId: current_player_id }));

export const game = z
	.object({ id, current_player_id: nullableId, current_contract_id: nullableId, winner_id: id, ...gameValidators })
	.transform(({ current_player_id, current_contract_id, winner_id, ...object }) => ({
		...object,
		currentPlayerId: current_player_id,
		currentContractId: current_contract_id,
		winnerId: winner_id
	}));

export const contract = z
	.object({ id, initiator_id: id, signatory_id: id, is_active: contractValidators.isActive })
	.transform((object) => ({
		id: object.id,
		isActive: object.is_active,
		initiatorId: object.initiator_id,
		signatoryId: object.signatory_id
	}));

export const player = z.object({ id, next_player_id: id, current_field_id: id, game_id: id }).transform((object) => ({
	id: object.id,
	nextPlayerId: object.next_player_id,
	currentFieldId: object.current_field_id,
	gameId: object.game_id
}));

export const field = z
	.object({ id, asset_id: nullableId, ...fieldValidators })
	.transform(({ asset_id, ...object }) => ({ ...object, assetId: asset_id }));

export const asset = z
	.object({
		id,
		owner_id: nullableId,
		name,
		type: assetValidators.type,
		status: assetValidators.status,
		asset_price: assetValidators.price,
		branch_price: assetValidators.price,
		asset_rent_price: assetValidators.price,
		branch_rent_price: assetValidators.price,
		branch_count: assetValidators.branchCount
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

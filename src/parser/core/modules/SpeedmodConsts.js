import STATUSES from 'data/STATUSES'

export const PARTYWIDE_SPEED_BUFF_FLAGS = {
	NONE: 0,
	FEY_WIND: 1,
	ARROW_5: 2,
	ARROW_10: 4,
	ARROW_15: 8,
	ARROW_ALL: 2|4|8,
}
const FLAGS = PARTYWIDE_SPEED_BUFF_FLAGS

export const PARTYWIDE_SPEED_BUFF_TO_FLAG_MAP = {
	[STATUSES.FEY_WIND.id]: FLAGS.FEY_WIND,
	[STATUSES.THE_ARROW.id]: {
		0.5: FLAGS.ARROW_5,
		1.0: FLAGS.ARROW_10,
		1.5: FLAGS.ARROW_15,
	},
}

// List of statuses we consider. Make sure to add to this when adding speed map entries
export const SPEED_BUFF_STATUS_IDS = [
	STATUSES.THE_ARROW.id,
	STATUSES.FEY_WIND.id,
	STATUSES.CIRCLE_OF_POWER.id, // Ley Lines buff
	STATUSES.PRESENCE_OF_MIND.id,
	// TODO: Add these once statuses exist or are generated
	//STATUSES.SHIFU.id,
	//STATUSES.ARMYS_PAEON_I.id,
	//STATUSES.ARMYS_PAEON_II.id,
	//STATUSES.ARMYS_PAEON_III.id,
	//STATUSES.ARMYS_PAEON_IV.id,
	//STATUSES.BLOOD_WEAPON.id,
	//STATUSES.GREASED_LIGHTNING_I.id,
	//STATUSES.GREASED_LIGHTNING_II.id,
	//STATUSES.GREASED_LIGHTNING_III.id,
	//STATUSES.HUTON.id,
]

// Map combinations of {jobSpeedBuff} and arrow/feyWind, based on https://docs.google.com/spreadsheets/d/1JZE94VgMhXrPeoxJOrL8z6LTcxcpYS8so5wLBnhPeLw/
export const JOB_SPEED_BUFF_TO_SPEEDMOD_MAP = {
	0: {
		[FLAGS.NONE]: 100,
		[FLAGS.FEY_WIND]: 97,
		[FLAGS.ARROW_5]: 95,
		[FLAGS.ARROW_10]: 90,
		[FLAGS.ARROW_15]: 85,
		[FLAGS.FEY_WIND|FLAGS.ARROW_5]: 92,
		[FLAGS.FEY_WIND|FLAGS.ARROW_10]: 87,
		[FLAGS.FEY_WIND|FLAGS.ARROW_15]: 82,
	},
	[STATUSES.CIRCLE_OF_POWER.id]: {
		[FLAGS.NONE]: 85,
		[FLAGS.FEY_WIND]: 82,
		[FLAGS.ARROW_5]: 80,
		[FLAGS.ARROW_10]: 76,
		[FLAGS.ARROW_15]: 72,
		[FLAGS.FEY_WIND|FLAGS.ARROW_5]: 78,
		[FLAGS.FEY_WIND|FLAGS.ARROW_10]: 73,
		[FLAGS.FEY_WIND|FLAGS.ARROW_15]: 69,
	},
	[STATUSES.PRESENCE_OF_MIND.id]: {
		[FLAGS.NONE]: 80,
		[FLAGS.FEY_WIND]: 77,
		[FLAGS.ARROW_5]: 76,
		[FLAGS.ARROW_10]: 72,
		[FLAGS.ARROW_15]: 68,
		[FLAGS.FEY_WIND|FLAGS.ARROW_5]: 73,
		[FLAGS.FEY_WIND|FLAGS.ARROW_10]: 69,
		[FLAGS.FEY_WIND|FLAGS.ARROW_15]: 65,
	},
//	[STATUSES.SHIFU.id]: {
//		[FLAGS.NONE]: 90,
//		[FLAGS.FEY_WIND]: 87,
//		[FLAGS.ARROW_5]: 85,
//		[FLAGS.ARROW_10]: 81,
//		[FLAGS.ARROW_15]: 76,
//		[FLAGS.FEY_WIND|FLAGS.ARROW_5]: 82,
//		[FLAGS.FEY_WIND|FLAGS.ARROW_10]: 78,
//		[FLAGS.FEY_WIND|FLAGS.ARROW_15]: 73,
//	},
//	[STATUSES.ARMYS_PAEON_I.id]: {
//		[FLAGS.NONE]: 96,
//		[FLAGS.FEY_WIND]: 94,
//		[FLAGS.ARROW_5]: 92,
//		[FLAGS.ARROW_10]: 87,
//		[FLAGS.ARROW_15]: 82,
//		[FLAGS.FEY_WIND|FLAGS.ARROW_5]: 89,
//		[FLAGS.FEY_WIND|FLAGS.ARROW_10]: 84,
//		[FLAGS.FEY_WIND|FLAGS.ARROW_15]: 79,
//	},
//	[STATUSES.ARMYS_PAEON_II.id]: {
//		[FLAGS.NONE]: 92,
//		[FLAGS.FEY_WIND]: 90,
//		[FLAGS.ARROW_5]: 88,
//		[FLAGS.ARROW_10]: 83,
//		[FLAGS.ARROW_15]: 79,
//		[FLAGS.FEY_WIND|FLAGS.ARROW_5]: 85,
//		[FLAGS.FEY_WIND|FLAGS.ARROW_10]: 81,
//		[FLAGS.FEY_WIND|FLAGS.ARROW_15]: 76,
//	},
//	[STATUSES.ARMYS_PAEON_III.id]: {
//		[FLAGS.NONE]: 88,
//		[FLAGS.FEY_WIND]: 86,
//		[FLAGS.ARROW_5]: 84,
//		[FLAGS.ARROW_10]: 80,
//		[FLAGS.ARROW_15]: 75,
//		[FLAGS.FEY_WIND|FLAGS.ARROW_5]: 81,
//		[FLAGS.FEY_WIND|FLAGS.ARROW_10]: 77,
//		[FLAGS.FEY_WIND|FLAGS.ARROW_15]: 73,
//	},
//	[STATUSES.ARMYS_PAEON_IV.id]: {
//		[FLAGS.NONE]: 84,
//		[FLAGS.FEY_WIND]: 82,
//		[FLAGS.ARROW_5]: 80,
//		[FLAGS.ARROW_10]: 76,
//		[FLAGS.ARROW_15]: 72,
//		[FLAGS.FEY_WIND|FLAGS.ARROW_5]: 78,
//		[FLAGS.FEY_WIND|FLAGS.ARROW_10]: 74,
//		[FLAGS.FEY_WIND|FLAGS.ARROW_15]: 69,
//	},
//	[STATUSES.BLOOD_WEAPON.id]: {
//		[FLAGS.NONE]: 90,
//		[FLAGS.FEY_WIND]: 87,
//		[FLAGS.ARROW_5]: 85,
//		[FLAGS.ARROW_10]: 81,
//		[FLAGS.ARROW_15]: 76,
//		[FLAGS.FEY_WIND|FLAGS.ARROW_5]: 82,
//		[FLAGS.FEY_WIND|FLAGS.ARROW_10]: 78,
//		[FLAGS.FEY_WIND|FLAGS.ARROW_15]: 73,
//	},
//	[STATUSES.GREASED_LIGHTNING_I.id]: {
//		[FLAGS.NONE]: 95,
//		[FLAGS.FEY_WIND]: 93,
//		[FLAGS.ARROW_5]: 91,
//		[FLAGS.ARROW_10]: 86,
//		[FLAGS.ARROW_15]: 81,
//		[FLAGS.FEY_WIND|FLAGS.ARROW_5]: 88,
//		[FLAGS.FEY_WIND|FLAGS.ARROW_10]: 83,
//		[FLAGS.FEY_WIND|FLAGS.ARROW_15]: 78,
//	},
//	[STATUSES.GREASED_LIGHTNING_II.id]: {
//		[FLAGS.NONE]: 90,
//		[FLAGS.FEY_WIND]: 88,
//		[FLAGS.ARROW_5]: 86,
//		[FLAGS.ARROW_10]: 81,
//		[FLAGS.ARROW_15]: 77,
//		[FLAGS.FEY_WIND|FLAGS.ARROW_5]: 83,
//		[FLAGS.FEY_WIND|FLAGS.ARROW_10]: 79,
//		[FLAGS.FEY_WIND|FLAGS.ARROW_15]: 74,
//	},
//	[STATUSES.GREASED_LIGHTNING_III.id]: {
//		[FLAGS.NONE]: 85,
//		[FLAGS.FEY_WIND]: 83,
//		[FLAGS.ARROW_5]: 81,
//		[FLAGS.ARROW_10]: 77,
//		[FLAGS.ARROW_15]: 73,
//		[FLAGS.FEY_WIND|FLAGS.ARROW_5]: 79,
//		[FLAGS.FEY_WIND|FLAGS.ARROW_10]: 74,
//		[FLAGS.FEY_WIND|FLAGS.ARROW_15]: 70,
//	},
//	[STATUSES.HUTON.id]: {
//		[FLAGS.NONE]: 85,
//		[FLAGS.FEY_WIND]: 83,
//		[FLAGS.ARROW_5]: 81,
//		[FLAGS.ARROW_10]: 77,
//		[FLAGS.ARROW_15]: 73,
//		[FLAGS.FEY_WIND|FLAGS.ARROW_5]: 79,
//		[FLAGS.FEY_WIND|FLAGS.ARROW_10]: 74,
//		[FLAGS.FEY_WIND|FLAGS.ARROW_15]: 70,
//	},
}

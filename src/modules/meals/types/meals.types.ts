import { Icons } from '@shared/components';

export const enum Afwas {
	Veel = 3,
	Gemiddeld = 2,
	Weinig = 1,
}

export interface MealFilter {
	value: string;
	order: number;
	img: Icons;
}

// Db -> [VEEL, GEMIDDELD, WEINIG]

// switch(db.afwas)
// case(afwas.Veel)
// // render something

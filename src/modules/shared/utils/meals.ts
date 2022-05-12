import { Afwas } from '@meals/types';

export const mapWashing = (value: number): string => {
	switch (value) {
		case Afwas.Weinig:
			return 'Weinig';

		case Afwas.Gemiddeld:
			return 'Gemiddeld';

		case Afwas.Veel:
			return 'Veel';
	}
};

export interface Image {
	path: string;
	alt?: string;
}

export interface DefaultComponentProps {
    className?: string;
}

export interface Ingredients {
    title: string;
}

export interface Meal {
    title: string;
    ingredients: string[];
    afwas: string;
    image: string;
    price: string;
    tijd: string;
    vriezer: boolean;
}

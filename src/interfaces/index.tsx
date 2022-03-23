export interface API {
	categories: Category[];
}

export interface Category {
	id: number;
	name: string;
	parentId: number | null;
	subCategories: Category[];
}

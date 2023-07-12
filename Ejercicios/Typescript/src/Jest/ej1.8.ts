interface Item {
    name: string;
    price: number;
}

export const setPrice = (item: Item, price: number): Item => {
    return {
        ...item,
        price: price,
    };
};

export const addToCart = (cart: Item[], item: Item): Item[] => {
    return [...cart, item];
};

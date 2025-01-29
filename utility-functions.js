import productData from './data.json';

export const calculateTotalPrice = (productsObject) => {
    return Object.keys(productsObject).reduce((total, productName) => {
        const product = productData.find(item => item.name === productName);
        return total + (productsObject[productName] * product.price);
    }, 0);
};

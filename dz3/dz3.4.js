const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let value = products.filter(function (product) {
    return product.photos && product.photos.length > 0;
})

let sorted = products.sort(function cmpr(product1, product2) {
    if (product1.price < product2.price) {
        return -1;
    }
})

console.log(value);
console.log(sorted);

/** 1 Получить все товары, у которых есть фотографии
2 Отсортируйте товары по цене (от низкой цены к высокой), метод sort */
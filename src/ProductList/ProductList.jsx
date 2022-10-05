import React, {useState} from 'react';
import './ProductList.css';
import ProductItem from '../ProductItem/ProductItem.jsx';
import {useTelegram} from '../hooks/useTelegram.js';

const products = [
    {
        id: '1',
        title: 'Смартфон iPhone XR',
        price: 25186,
        description: 'Смартфон Apple iPhone XR 128GB 128 ГБ, черный'
    },
    {
        id: '2',
        title: 'Смартфон iPhone XR',
        price: 69685,
        description: 'Смартфон Apple iPhone XR 64 ГБ, коралловый'
    },
    {
        id: '3',
        title: 'Смартфон iPhone 11',
        price: 43190,
        description: 'Смартфон Apple iPhone 11 128 ГБ, зеленый'
    },
    {
        id: '4',
        title: 'Смартфон iPhone 7',
        price: 13500,
        description: 'Смартфон Apple iPhone 7 256 ГБ, серебряный'
    },
    {
        id: '5',
        title: 'Смартфон iPhone 13',
        price: 60000,
        description: 'Смартфон Apple iPhone 13 128 ГБ, Pink'
    },
    {
        id: '6',
        title: 'Смартфон iPhone 13',
        price: 60990,
        description: 'Смартфон Apple iPhone 13 128 ГБ, синий'
    },
    {
        id: '7',
        title: 'Смартфон iPhone 13 Pro',
        price: 99900,
        description: 'Смартфон Apple iPhone 13 Pro Max 256 ГБ, сияющая звезда'
    },
    {
        id: '8',
        title: 'Смартфон iPhone 8',
        price: 19900,
        description: 'Смартфон Apple iPhone 8 64 ГБ 64 ГБ, black'
    },
];

const getTotalPrice = (items) => {
    return items.reduce((acc, item) => {
        return acc += item.price;
    }, 0);
};

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg} = useTelegram();

    const onAdd = product => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if (alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }
        setAddedItems(newItems);
        if (newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            });

        }
    };
    return (
        <div className={'list'}>
            {
                products.map(item => (
                    <ProductItem
                        product={item}
                        onAdd={onAdd}
                        className={'item'}
                    />
                ))
            }
        </div>
    );
};

export default ProductList;
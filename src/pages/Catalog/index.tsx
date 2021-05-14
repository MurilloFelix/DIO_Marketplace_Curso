import React, { useState } from 'react';
import { Text, View, } from 'react-native';
import {
  Container,
  ProductContainer,
  ProductList,
  Product,
  ProductImage,
  ProductTitle,
  PriceContainer,
  ProductPrice,
  ProductButton,
  ProductButtonText,
 } from './styles'

const Catalog = () => {
  const [products, setProducts] = useState([{
    "products": [
      {
        "id": "1",
        "title": "Assinatura Trimestral",
        "image_url":
          "https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png",
        "price": 150
      },
      {
        "id": "2",
        "title": "Assinatura Anual",
        "image_url":
          "https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/annual_subscription_qyolci.png",
        "price": 540
      }
    ]
  }])


  return (
    <Container>
    </Container>
  );
};

export default Catalog;

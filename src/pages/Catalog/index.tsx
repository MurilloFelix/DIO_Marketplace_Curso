import React, {useState} from 'react';
import {View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
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
} from './styles';

import { formatValue } from '../../utils/formaValue';

export interface ProductsDataProps {
  id: string;
  title: string;
  image_url: string;
  price: number;
}


const Catalog = () => {
  const [products, setProducts] = useState<ProductsDataProps[]>([
        {
          id: '1',
          title: 'Assinatura Trimestral',
          image_url:
            'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png',
          price: 150,
        },
        {
          id: '2',
          title: 'Assinatura Anual',
          image_url:
            'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/annual_subscription_qyolci.png',
          price: 540,
        },
  ]);

  return (
    <Container>
      <ProductContainer>
        <ProductList
          data = {products}
          keyExtractor = {(item)=>item.id}
          ListFooterComponent={<View></View>}
          ListFooterComponentStyle={{
            height: 80,
          }}
          renderItem = {({item}) =>(
            <Product>
              <ProductImage source={{ uri: item.image_url }} />
              <ProductTitle>{item.title}</ProductTitle>
              <PriceContainer>
                <ProductPrice>{formatValue(item.price)}</ProductPrice>
                <ProductButton onPress={()=>{}}>
                  <ProductButtonText>Adicionar</ProductButtonText>
                  <FeatherIcon size={30} name="plus-circle" color="#D1D7E9"/>
                </ProductButton>
              </PriceContainer>
            </Product>
          )}
        />
      </ProductContainer>
    </Container>
  );
};

export default Catalog;

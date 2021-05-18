import React, { useState, useEffect } from 'react';
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

import FloatingCard from '../FloatingCard';
import api from '../../services/api';

export interface ProductsDataProps {
  id: string;
  title: string;
  image_url: string;
  quantity?: number,
  price: number;
}


const Catalog = () => {
  const [products, setProducts] = useState<ProductsDataProps[]>([]);

  useEffect(()=>{
    async function loadProducts() {
      const { data } = await api.get('/products')

      setProducts(data)
    }
    loadProducts()
  }, [])

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
      <FloatingCard />
    </Container>
  );
};

export default Catalog;

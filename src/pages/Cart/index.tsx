import React, { useState , useMemo } from 'react';
import { View } from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather'

import {
  Container,
  ProductContainer,
  ProductList,
  Product,
  ProductImage,
  ProductTitleContainer,
  ProductTitle,
  ProductPriceContainer,
  TotalContainer,
  ProductSinglePrice,
  ProductPrice,
  ProductQuantity,
  ActionContainer,
  ActionButton,
  TotalProductsContainer,
  TotalProductsText,
  SubTotalValue
} from './styles';

import { formatValue } from '../../utils/formaValue'

export interface ProductsCartProps {
  id: string;
  title: string;
  image_url: string;
  quantity: number,
  price: number;
}

const Cart = ()=> {
  const [ products, setProducts ] = useState<ProductsCartProps[]>([
    {
      id: '1',
      title: 'Assinatura Trimestral',
      image_url:
        'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png',
      quantity: 1,
      price: 150,
    },
    {
      id: '2',
      title: 'Assinatura Anual',
      image_url:
        'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/annual_subscription_qyolci.png',
      quantity: 2,
      price: 540,
    },
]);

  const cartSize = useMemo(() =>{
    return products.length || 0;
  }, [products])

  const cartTotal = useMemo(() =>{
    const cartAmount = products.reduce((accumulator, product) =>{
      const totalPrice = accumulator + product.price * product.quantity
      return totalPrice
    }, 0)

    return formatValue(cartAmount)
  }, [products])

  return  (
    <Container>
      <ProductContainer>
        <ProductList
          data= {products}
          keyExtractor= {(item)=> item.id}
          ListFooterComponent= {<View />}
          ListFooterComponentStyle =  {{
            height: 80,
          }}
          renderItem={({item}) =>(
            <Product>
              <ProductImage source={{ uri: item.image_url }} />
              <ProductTitleContainer>

                <ProductTitle>{item.title}</ProductTitle>
                <ProductPriceContainer>

                  <ProductSinglePrice>
                    {formatValue(item.price)}
                  </ProductSinglePrice>

                  <TotalContainer>
                    <ProductQuantity>
                      {`${item.quantity}X`}
                    </ProductQuantity>

                    <ProductPrice>
                      {formatValue(item.price * item.quantity)}
                    </ProductPrice>
                  </TotalContainer>

                </ProductPriceContainer>

              </ProductTitleContainer>
              <ActionContainer>

                <ActionButton onPress={()=>{}} >
                  <FeatherIcon name="plus" color="#E83F5B" size={16}/>
                </ActionButton>

                <ActionButton onPress={()=>{}} >
                  <FeatherIcon name="minus" color="#E83F5B" size={16}/>
                </ActionButton>

              </ActionContainer>
            </Product>
          )}
        />
      </ProductContainer>
      <TotalProductsContainer>
        <FeatherIcon name="shopping-cart" color='#fff' size={24}/>
        <TotalProductsText>{cartSize} { cartSize === 1 ? 'Item' : 'Itens'}</TotalProductsText>
        <SubTotalValue>{cartTotal}</SubTotalValue>
      </TotalProductsContainer>
    </Container>
  );
}

export default Cart

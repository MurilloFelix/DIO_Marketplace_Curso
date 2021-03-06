import React from 'react';
import { useNavigation } from '@react-navigation/native'
import FeatherIcon from 'react-native-vector-icons/Feather';


import {
  Container,
  CartButton,
  CartButtonText,
  CartPricing,
  CartTotalPrice
} from './styles';


const FloatingCard = ()=>{
  const navigation = useNavigation();
  return(
    <Container>
      <CartButton onPress={()=>navigation.navigate('Cart')}>
        <FeatherIcon name="shopping-cart"  size={24} color="#F3F9FF"/>
        <CartButtonText>2 Itens</CartButtonText>
        <CartPricing>
          <CartTotalPrice>R$ 200,00</CartTotalPrice>
        </CartPricing>
        <FeatherIcon name="chevron-right"  size={24} color="#F3F9FF"/>
      </CartButton>
    </Container>
  )
}

export default FloatingCard

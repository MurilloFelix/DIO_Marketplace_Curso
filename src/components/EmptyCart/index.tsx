import React from 'react'
import FeatherIcon from 'react-native-vector-icons/Feather'

import { Container, EmptyCartText } from './styles'

const EmptyCart = ()=>{
  return(
    <Container>
      <FeatherIcon name="slash" size={38} color='#F3F9FF' />
      <EmptyCartText>Seu carrinho está vazio</EmptyCartText>
    </Container>
  )
}

export default EmptyCart

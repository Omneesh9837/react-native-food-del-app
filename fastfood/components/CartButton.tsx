import {View,Text,TouchableOpacity} from 'react-native'
import React from 'react'
import { images } from '@/constants';
const CartButton=()=>{
    const totalItems=10;
    return(
        <TouchableOpacity className="cart-btn" onPress={()=>{}}>
            <Image source={images.bag} className="size-5" resizeMode="contain" />
            <Text>CartButton</Text>

        </TouchableOpacity>
    )
}
export default CartButton
import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import shoppingItems from '../data/items.json'
import { formatCurrency } from '../util/formatCurrency'

type CartItemProps = {
    id: number
    quantity: number
}

const CartItem = ({id, quantity}: CartItemProps) => {

    const {removeFromCart} = useShoppingCart()

    const item = shoppingItems.find(item => item.id === id)

    if(item == null) return null

  return (
        <Stack direction='horizontal' gap={2} className='d-flex align-items-center' >
            <img src={item.imgUrl} alt="item cart" style={{width: '125px', height: '75px', objectFit: 'cover'}} />
            <div className='me-auto'>
                <div>
                    {item.name} {quantity > 1 && <span className='text-muted' style={{fontSize: '.65rem'}}>x{quantity}</span>}
                </div>
                <div className='text-muted' style={{fontSize: '.85rem'}}>
                    {formatCurrency(item.price)}
                </div>
            </div>
            <div>
                {formatCurrency(item.price * quantity)}
            </div>
            <Button variant='outline-danger' size='sm' onClick={()=> removeFromCart(item.id)}>&times;</Button>
        </Stack>
    )
}

export default CartItem
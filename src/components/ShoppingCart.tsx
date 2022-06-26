import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { formatCurrency } from '../util/formatCurrency'
import CartItem from './CartItem'
import shoppingItems from '../data/items.json'

type Props = {
    isOpen: boolean
}

const ShoppingCart = ({isOpen}: Props) => {

    const {closeCart, cartItems} = useShoppingCart()

  return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item =>(
                        <CartItem key={item.id} {...item} />
                    ))}
                    <div className='ms-auto fw-bold fs-5'>
                        Total {formatCurrency(cartItems.reduce((total, currentItem)=>{
                            const item = shoppingItems.find(i => i.id === currentItem.id)

                            return total + (item?.price || 0) * currentItem.quantity
                        },0))}
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default ShoppingCart
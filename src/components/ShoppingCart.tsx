import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'

type Props = {
    isOpen: boolean
}

const ShoppingCart = ({isOpen}: Props) => {

    const {closeCart} = useShoppingCart()

  return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
        </Offcanvas>
    )
}

export default ShoppingCart
import { createContext, ReactNode, useContext, useState } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContextProps = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

type CartItem = {
    id: number
    quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContextProps)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id: number) {
        setCartItems(prevItems => {
            if (prevItems.find(item => item.id === id) == null) {
                return [...prevItems, { id, quantity: 1 }]
            } else {
                return prevItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id: number) {
        setCartItems(prevItems => {
            if (prevItems.find(item => item.id === id)?.quantity === 1) {
                return prevItems.filter(item => item.id !== id)
            } else {
                return prevItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: number) {
        setCartItems(prevItems => {
            return prevItems.filter(item => item.id !== id)
        })
    }

    return (
        <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
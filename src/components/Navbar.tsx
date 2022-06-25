import React from 'react'
import { Container, Navbar as NavbarBs} from 'react-bootstrap'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <NavbarBs className='bg-white shadow-sm mb-3'>
        <Container>
            Nav
        </Container>
    </NavbarBs>
  )
}

export default Navbar
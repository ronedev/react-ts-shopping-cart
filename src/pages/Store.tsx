import React from 'react'
import { Col, Row } from 'react-bootstrap'
import StoreItem from '../components/StoreItem'
import storeItems from '../data/items.json'

type Props = {}

const Store = (props: Props) => {
  return (
        <>
            <Row lg={3} md={2} xs={1}>
                {storeItems.map(item =>(
                    <Col>
                        <StoreItem {...item} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Store
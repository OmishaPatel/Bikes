import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
`
function Announcement() {
    return (
        <div>
            <Container>Free shipping on all orders over $500</Container>
        </div>
    )
}

export default Announcement

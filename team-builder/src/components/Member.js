import React from 'react'
import styled from 'styled-components'


const MemberDiv = styled.div`
border: 1px solid black;
`

export default function Member(props) {
    const {details} = props


    return (
        <MemberDiv>
            <h3>{details.name}</h3>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
            <button>-edit-</button>
        </MemberDiv>
    )
}
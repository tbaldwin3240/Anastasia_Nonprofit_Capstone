import styled from 'styled-components' 

export const SerciesConatiner = styled.div`

height: 800px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background:#01060;

@media screen and (max-width:768px) {
    height:1100px;
}

@media screen and (max-width:480px){
    height:1300px; 
}
`
export const ServicesWrapper = styled.div `
    max-width:1000px;
    margin:0 auto;
    display: grid;
    grid-template-columns:1fr 1fr 1fr; 
    align-items:center;
    grid-gap:16px; 
    padding: 0 50px; 

    @media screen and (max-width:1000px) {
        grid-template-columns: 1fr 1fr; 
    }
    @

`

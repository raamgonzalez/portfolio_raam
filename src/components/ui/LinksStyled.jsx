import styled from 'styled-components'

export const LinkedStyled = styled.a`
display: block;
color: $base;
font-size: 1.5rem;
padding: 5px 10px;
place-self: flex-end;
text-align: center;
opacity: 0.5;
transition: all 0.3s ease-in-out;

&:hover {
	opacity: 1;
}
`

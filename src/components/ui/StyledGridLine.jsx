import styled from 'styled-components'

export const StyledGridLine = styled.div`
  width: 100%;
  margin: 80px 0 80px 0;
  height: 2px;
  left: calc(-100px / 2 * -1);
  
  background: linear-gradient(
    to right,
    #d9d9d940,
    #d9d9d940 13%,
    transparent 0,
    transparent
  );
  background-size: 5px 1px;

  ${props => props.variant === 'vertical' ? 'transform: rotate(90deg) translateX(10rem) translateY(-15rem) ; width: 20rem;' : null}
  ${props => props.variant === 'verticalcorrection' ? 'transform: rotate(90deg) translateX(-10rem) translateY(-2rem) ; width: 20rem;' : null}

  @media (480px <= width <= 768px) {
    margin: 40px 0 40px 0;
  }
  @media (240px <= width <= 480px) {
    margin: 20px 0 20px 0;
  }

`

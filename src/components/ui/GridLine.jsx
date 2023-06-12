import styled from 'styled-components'

export const StyledGridLine = styled.div`
  --height: 1px;
  --width: 5px;
  --fade-stop: 90%;
  --offset: -100px;

  width: 100%;
  margin: 80px 0 80px 0;
  height: var(--height);
  left: calc(-100px / 2 * -1);
  
  background: linear-gradient(
    to right,
    #d9d9d940,
    #d9d9d940 13%,
    transparent 0,
    transparent
  );
  background-size: 5px 1px;
`

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --primary: #9747FF;
  --text-grey-01: #9D9D9D;
  --text-grey-02: #484848;
  --backgroundCard: #FEFEFE;
  --favorite: #E9D1AF;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}


body {
  font-family: 'Inter', sans-serif;
}
`;

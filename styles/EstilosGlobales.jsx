import { createGlobalStyle } from "styled-components";
import Variables from "./Variables";

const EstilosGlobales = createGlobalStyle`

 ${Variables}

 *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
 }

html{
    width: 100%;
    scroll-behavior: smooth;
}

body{
    font-family: var(--fuente-principal);
    background: var(--bg-principal);
}
h1,h2,h3{
    color: var(--color-texto-principal);
}
h1,h2,h3,p,span{
    line-height: 1.4;
    letter-spacing: 0.4px;
}
p,span,svg{
    color: var(--color-texto-secundario);
    font-family:var(--fuente-secundaria)
}

img,svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
ul{
    list-style-type: none;
}

a{
    text-decoration: none;
    color: inherit
}
`;

export default EstilosGlobales;

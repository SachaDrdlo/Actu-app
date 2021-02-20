import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text}
  }
  .allContent {
      background-color: ${({ theme }) => theme.header};
  }
  .allContent .header .header-btn a {
      background-color: ${({ theme }) => theme.btn};
  }
  .oneCardCol .oneCardCol-oneCardRow {
    background-color: ${({ theme }) => theme.card};
  }
  .oneCardCol .oneCardCol-oneCardRow .oneCardCol-oneCardRow-content h3{
    color: ${({ theme }) => theme.text}
  }
  h1 {
    color: ${({ theme }) => theme.text}
  }
  .oneCardCol .oneCardCol-oneCardRow .oneCardCol-oneCardRow-content a {
    color: ${({ theme }) => theme.btn}
  }
  `

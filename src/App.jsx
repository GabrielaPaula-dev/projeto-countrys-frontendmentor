import { Header } from "./components/header";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "./contexts/theme-context";
import { AppRouts } from "./pages/routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <Header />
        <AppRouts />
      </ThemeProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  *{
  margin:0;
  padding:0;
  box-sizing:border-box;
  }
  ul{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  ::-webkit-scrollbar{
    width: 0;
  }
`;
export default App;

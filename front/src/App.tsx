import { ThemeProvider } from "styled-components";
import { globalStyle, theme } from "./globals";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const GlobalStyle = globalStyle;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider >
  );
}

export default App;

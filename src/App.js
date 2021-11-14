// import Header from "./master/Header"
import MainContent from "./master/MainContent"

import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';


const theme = createTheme();

export default function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
          <div className="App">
              <Header />
              <MainContent />
          </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

import "./styles.css";


import Header from "./master/Header"
import MainContent from "./master/MainContent"

import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';

const theme = createMuiTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
        <div className="App">
            <Header />
            <MainContent />
        </div>
    </ThemeProvider>
    
  );
}

import './App.css';
import Board from './components/Board';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#87d6c7',
      main: '#6accba',
      dark: '#4a8e82',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#3f6072',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    button: {
      textTransform: 'none'
    }
  },
  
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Board/>
    </div>
    </ThemeProvider>
  );
}

export default App;

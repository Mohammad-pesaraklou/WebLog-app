import { gql, useQuery } from '@apollo/client';
import './components/App.css';
import { createTheme, ThemeProvider } from '@mui/material';
// components
import Header from './components/layouts/Header';


const theme = createTheme({
  palette: {
    primary:{
      main: '#212121'
    },
    secondary: {
      main: '#1b5e20'
    }
  }
})



function App() {


  return (
    <div style={{background: '#e0e0e0', minHeight: '100vh'}}>
      <ThemeProvider theme={theme}>
     <Header />
    </ThemeProvider>
      </div>
  );
}

export default App;

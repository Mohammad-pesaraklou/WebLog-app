import './components/App.css';
import { createTheme, ThemeProvider } from '@mui/material';
// components
import HomePage from './components/HomePage';
import Layout from './components/layouts/Layout';
import { Route, Routes } from 'react-router-dom';
import AuthorPage from './components/AuthorPage';
import BlogPage from './components/BlogPage';


const theme = createTheme({
  palette: {
    primary:{
      main: '#212121'
    },
    secondary: {
      main: '#1b5e20'
    }
  },
  typography:{
    fontFamily: "Montserrat"
  }
})



function App() {


  return (
    <div style={{background: '#e0e0e0', minHeight: '100vh'}}>
      <ThemeProvider theme={theme}>
     <Layout>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/blogs/:slug' element={<BlogPage />}/>
        <Route path='/authors/:slug' element={<AuthorPage />}/>
      </Routes>
     </Layout>
    </ThemeProvider>
      </div>
  );
}

export default App;

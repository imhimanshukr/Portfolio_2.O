import React from 'react';
import {
  ChakraProvider,
  extendTheme,
  Container,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Work from './Pages/Work.jsx';
import Footer from './Pages/Footer.jsx';
import "./custom.css";

const customTheme = extendTheme({
  config: {
    initialColorMode: 'light',
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? '#0F0F0F' : '#f2f2f2',
      },
    }),
  },
});

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Container maxW={['100%','100%','100%', '85%']}>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer/>
        </Router>
      </Container>
    </ChakraProvider>
  );
}

export default App;

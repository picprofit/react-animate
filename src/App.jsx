import React  from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Home from './Pages/Home';
import Services from './Pages/Services';
import Architecture from './Pages/Architecture';
import Software from './Pages/Software';
import Preloader from './components/Preloader';
import Header from './components/Header';

const StyledContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  width: 100%;
`;

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AnimatePresence exitBeforeEnter initial={false}>
        <StyledContent
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Preloader>
            <Route path="/" exact component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/architecture" component={Architecture} />
            <Route path="/software" component={Software} />
          </Preloader>
        </StyledContent>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;

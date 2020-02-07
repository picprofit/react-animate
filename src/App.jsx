import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter,
  Route,
  useLocation,
  useHistory
} from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Home from './Pages/Home';
import Services from './Pages/Services';
import Header from './components/Header';

const StyledContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 200px);
  width: 100%;
`;

function App() {
  const location = useLocation();
  const history = useHistory();
  let [logoDisplayed, setLogoDisplayed] = useState(true);
  console.log(location.pathname);
  useEffect(() => {
    setLogoDisplayed(location.pathname !== '/');
  }, [location]);

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <BrowserRouter>
        <Header displayLogo={logoDisplayed} />
        <StyledContent
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
        </StyledContent>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;

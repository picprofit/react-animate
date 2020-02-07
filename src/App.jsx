import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, useLocation } from 'react-router-dom';

import Home from './Pages/Home';
import Services from './Pages/Services';
import Header from './components/Header';

const StyledContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 200px);
  width: 100%;
`;

function App() {
  const location = useLocation();
  let [logoDisplayed, setLogoDisplayed] = useState(true);

  useEffect(() => {
    setLogoDisplayed(location.pathname !== '/');
  }, [location]);

  return (
    <BrowserRouter>
      <Header displayLogo={logoDisplayed} />
      <StyledContent>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
      </StyledContent>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import Title from './components/Title'
import Main from './components/Main'
import Footer from './components/Footer'
import { Divider } from 'semantic-ui-react';



function App() {
  return (
    <div>
      <Title />
      <Divider />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

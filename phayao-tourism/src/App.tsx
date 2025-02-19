import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AttractionDetails from './pages/AttractionDetails';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/attraction/:id" component={AttractionDetails} />
        <Route path="/contact" component={ContactUs} />
      </Switch>
    </Router>
  );
};

export default App;
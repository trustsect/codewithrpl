import CoreComponent from './components/CoreComponent';
import { Container } from 'react-bootstrap'
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
AOS.init();

class App extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = "#f1f2f6"
  }
  render() {
  return (
  <Container className="pt-5">
    <CoreComponent />
  </Container>
  );
  }
}


export default App;

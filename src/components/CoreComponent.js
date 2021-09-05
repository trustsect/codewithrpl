import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Row, Col, Nav, Navbar, Form, Container } from 'react-bootstrap'
import Title from './Title';
import Heading from './Heading';
import Paragraph from './Paragraph';
import Links from './Links';
import Image from './Image';
import Table from './Table';
import List from './List';
import Id from './Id';
import Class from './Class';
import Iframe from './Iframe';
import FormHTML from './Form';
import logo from './img/rpl.png'

const material = [
  "Title",
  "Heading",
  "Paragraph",
  "Links",
  "Image",
  "Table",
  "List",
  "Id",
  "Class",
  "Iframe",
  "Form"
];

function CoreComponent() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
    const results = material.filter(person =>
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div>
    <Navbar bg="white" className="border-bottom py-1 ps-2" fixed="top" expand="lg">
      <Container>
        <Navbar.Brand href="./" className="py-auto">
          <img src={logo} width="40px" alt=""/>
          CodeWithRPL
        </Navbar.Brand>
        </Container>
      </Navbar>

      <Tab.Container id="left-tabs-example" defaultActiveKey="Title">
        <Row className="my-4">
          <Col sm={3}>
          <div
            style={{background: "#ffffff"}}
            className="p-3 rounded-3 shadow-sm m-1 mt-2"
          >
            <Nav variant="pills" className="flex-column">
              <Form.Control
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
                className="bg-light border-0 my-3"
                style={{height: "40px"}}
              />
              {searchResults.map(item => (
              <Nav.Item className="my-2 rounded-3">
                <Nav.Link eventKey={item} className="rounded-3">HTML - {item}</Nav.Link>
              </Nav.Item>
              ))}
            </Nav>
            </div>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="Title">
                <div className="form-box p-3 px-1 rounded-3 shadow-sm m-1 mt-2">
                  <Title />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Heading">
                <div className="form-box p-3 px-1 rounded-3 shadow-sm m-1 mt-2">
                  <Heading />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Paragraph">
                <div className="form-box p-3 px-1 rounded-3 shadow-sm m-1 mt-2">
                  <Paragraph />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Links">
                <div className="form-box p-3 px-1 rounded-3 shadow-sm m-1 mt-2">
                  <Links />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Image">
                <div className="form-box p-3 px-1 rounded-3 shadow-sm m-1 mt-2">
                  <Image />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Table">
                <div className="form-box p-3 px-1 rounded-3 shadow-sm m-1 mt-2">
                  <Table />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="List">
                <div className="form-box p-3 px-1 rounded-3 shadow-sm m-1 mt-2">
                  <List />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Id">
                <div className="form-box p-3 px-1 rounded-3 shadow-sm m-1 mt-2">
                  <Id />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Class">
                <div className="form-box p-3 px-1 rounded-3 shadow-sm m-1 mt-2">
                  <Class />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Iframe">
                <div className="form-box p-3 px-1 rounded-3 shadow-sm m-1 mt-2">
                  <Iframe />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Form">
                <div className="form-box p-3 px-1 rounded-3 shadow-sm m-1 mt-2">
                  <FormHTML />
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default CoreComponent;

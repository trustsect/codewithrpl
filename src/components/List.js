import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Row, Col, Form } from 'react-bootstrap'
import './../App.css';
import AOS from 'aos';
import axios from 'axios';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

class List extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault()
    const name = event.target[0].value
    const id = event.target[1].value
    const code = event.target[2].value
    const list = true;
    const open_tag = "<ul>"
    const close_tag = "</li>"
    if (code.includes(open_tag)){
      if (code.includes(close_tag)) {
        axios.put(`https://61293f58068adf001789b84b.mockapi.io/api/siswa/${id}`, { name, list })
        .then(res => {
          alert("Sukses")
          window.location.reload(false)
        });
      }else{
        alert("Penulisan Kode Masih Salah!")
      }
    }else{
      alert("Penulisan Kode Masih Salah!")
    }
  }

  state = {
    persons: [],
    filtered: []
  }

  componentDidMount() {
    axios.get(`https://61293f58068adf001789b84b.mockapi.io/api/siswa?list=true`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }
  render() {
  return (
    <Container>
    <Form onSubmit={this.handleSubmit} className="py-3">
      <h2>List</h2>
        <p>Buatlah Penulisan Kode Unordered List HTML Pada Form Di Bawah! <br/>Note: Jangan Menggunakan Attribut Lain Seperti Id/Class.</p>
        <Row>
        <Col sm="auto">
        <Form.Control
          type="text"
          placeholder="Nama"
          className="bg-light p-2 border-0 my-1 formw"
          ref={node => (this.inputNode = node)}
        />
        </Col>
        <Col sm="auto">
        <Form.Control
          type="text"
          placeholder="No. Absen"
          className="bg-light p-2 border-0 my-1 formw"
          ref={node => (this.inputNode = node)}
        />
        </Col>
        </Row>
        <Form.Control
          as="textarea"
          rows={6}
          className="bg-light p-2 border-0 my-1 textarea"
          placeholder="Kode"
        />
        <Button
          variant="primary"
          className="my-2 submit-btn"
          style={{width: "305px"}}
          type="submit"
        >
          Submit
        </Button>
        </Form>

        <center>
          <hr className="w-25"/>
        </center>
        
        <h4 className="mt-5 mb-2">Submit Status</h4>
        { this.state.persons.map(person => 
        <div className="submitList bg-light rounded-3 p-3 d-inline-block m-1">
          <div className="list d-inline">{person.name.substr(0,20)}</div>
          <div className="status rounded-3 p-1 px-2 float-end">Success</div>
        </div>
        )}
    </Container>
  );
  }
}


export default List;

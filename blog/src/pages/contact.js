import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";

export default () => (
    <div>
        <Header title="Header of index page" />
        <div className='container mt-4'>
            <h1>Contact Us page</h1>
            <div className="row justify-content-md-center">
                <div className='col-md-6'>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Example select</Form.Label>
                            <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Example multiple select</Form.Label>
                            <Form.Control as="select" multiple>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.Submit">
                            <Button>Submit</Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>
        <Footer />
    </div>
)

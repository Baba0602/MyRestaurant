import React from 'react';
import {Col, Row} from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export default function Footer() {
    return (
        <Jumbotron className='text-left text-light bg-dark mb-0 mt-5 font-footer p-4'>
            <Container>
                <Row>
                    <Col xs={7} sm={8} className='border-right'>
                        <p className='text-uppercase'>LOCATIONS</p>
                        <Row className='text-capitalize'>
                            <Col lg={3}>
                                <p>West Bengal
                                    47-Newtown, Kolkata
                                    Pin-487526
                                </p>
                            </Col>
                            <Col lg={3}>
                                <p>Rajasthan
                                    Vaishali Nagar,jaipur
                                    pin-700345
                                </p>
                            </Col>
                        </Row>

                    </Col>
                    <Col>
                        <Col>
                            <p className='text-uppercase'>Hours</p>
                            <p>Monday — Thursday
                                <p>8am — 11pm </p>
                            </p>

                            <p>
                                Friday — Sunday
                                <p>11am — 11pm</p>
                            </p>
                        </Col>
                    </Col>
                </Row>
            </Container>

        </Jumbotron>
    );
}
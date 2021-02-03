import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

export default function CustomContainer() {
    return (
        <Container className='h-auto my-4 pt-3'>
            <Row className='h-100'>
                <Col className="text-center m-auto">
                    <h2 className='text-uppercase'>A Destination</h2>
                    <p className='m-auto w-75 pb-lg-5'>A Restaurant that delievers best food around.
                        Foodie people can check out this beautiful website of
                        our Restaurant. We Have delicious food item of different
                        varities for both veg and non veg people.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
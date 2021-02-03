import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

export default function ColumnsContainer() {
    return (
        <Container className='mt-4'>
            <Row className='text-center'>
                <Col>
                    <h2>A DESTINATION</h2>
                </Col>
            </Row>
            <Row className='mt-3 text-left h-auto mb-4'>
                <Col className='mx-auto' md={5}>
                    <p>A Restaurant that delievers best food around.
                        Foodie people can check out this beautiful website of
                        our Restaurant. We Have delicious food item of different
                        varities for both veg and non veg people.
                    </p>
                </Col>

                <Col className='mx-auto' md={5}>
                    <p>check out menu for delievery. We have all time meals.
                        Breakfast, Lunch and Dinner all types of food is provided.
                        We have a very good service with tasty food.
                        Do check and fulfill your craving.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
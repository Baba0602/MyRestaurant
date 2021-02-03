import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

export default function KitchenNames() {
    return (
        <Container className='text-left text-dark text-uppercase'>
            <Row className='mt-3 h-auto'>
                <Col>
                    <h2>Neha Sharma</h2>
                    <h5 className='text-secondary'>EXECUTIVE CHEF</h5>
                   
                </Col>

                <Col>
                    <h2>ajeet Singh
                    </h2>
                    <h5 className='text-secondary'>CHEF DE CUISINE </h5>
                </Col>

                <Col>
                    <h2>Ajay nagar </h2>
                    <h5 className='text-secondary'>PASTRY CHEF </h5>
                    
                </Col>
            </Row>
        </Container>
    );
}
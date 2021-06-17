import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react'

import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import { Container, Col, Button } from 'react-bootstrap';
import { Label, Field } from '../../utils/Theme';

export const ShopAdd = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/Brands/")
            .then(res => setBrands(res.data))
            .catch(console.log)
    }, []);


    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData.entries())
        console.log(data)
        axios.post("http://127.0.0.1:8000/api/Shops/", data)
            .then(res => {
                console.log(res.data)
            })
            .catch(console.log)
    }


    return (
        <FormContainer>
            <h1>Create Shop</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} >
                        <Label>Brand</Label>
                        <Form.Control
                            as="select"
                            type="text"
                            name="brand"
                        >
                            {brands.map((brand) => (
                                <option value={brand.id}> {brand.name}</option>

                            ))}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} >
                        <Label>City</Label>
                        <Field
                            type="text"
                            name="city"
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} >
                        <Label>Shopping Mall Name</Label>
                        <Field
                            name="mall_name"
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Label>Registered customers</Label>
                        <Field
                            type="text"
                            name="customers"
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Label>Opening date</Label>
                        <Field
                            type="text"
                            name="opened"
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <div className="container ">
                        <Button className="btn btn-warning" type="submit" href="/Shop">Create</Button>
                    </div>
                </Form.Row>
            </Form>
        </FormContainer >


    );
};

const FormContainer = styled(Container)`
    max-width:600px;
    height: 100vh;
    margin-top: 30px !important;
    align-items: center;
    text-align: center;
`;
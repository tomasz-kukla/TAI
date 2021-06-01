import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react'

import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

import { Label, Field } from '../../utils/Theme';
import { Container, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export const ShopDetail = () => {

    const { id } = useParams();

    const [shop, setShop] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/Brands/")
            .then(res => setBrands(res.data))
            .catch(console.log)
    }, []);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/Shops/" + id + "/")
            .then(res => setShop(res.data))
            .catch(console.log)
    }, []);

    const handleEdit = () => {
        axios.put("http://127.0.0.1:8000/api/Shops/" + id + "/", shop)
            .then(res => console.log("Successfully modified."))
            .catch(console.log)
    }

    const handleDelete = () => {
        axios.delete("http://127.0.0.1:8000/api/Shops/" + id + "/")
            .then(res => console.log("Successfully deleted."))
            .catch(console.log)
    };

    const onChange = (event) => {
        event.preventDefault();
        const newData = { ...shop }
        newData[event.target.name] = event.target.value
        setShop(newData)
    }


    return (
        <FormContainer>
            <h1>Edit Shop</h1>
            <Form onSubmit={event => event.preventDefault()}>
                <Form.Row>
                    <Form.Group as={Col} >
                        <Label>Brand</Label>
                        <Form.Control
                            onChange={onChange}
                            as="select"
                            type="text"
                            name="brand"
                            defaultValue={shop.brand}
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
                            onChange={onChange}
                            type="text"
                            name="city"
                            defaultValue={shop.city}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} >
                        <Label>Shopping Mall Name</Label>
                        <Field
                            onChange={onChange}
                            name="mall_name"
                            defaultValue={shop.mall_name}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Label>Registered customers</Label>
                        <Field
                            onChange={onChange}
                            type="text"
                            name="customers"
                            defaultValue={shop.customers}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Label>Opening date</Label>
                        <Field
                            onChange={onChange}
                            type="text"
                            name="opened"
                            defaultValue={shop.opened}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Buttons className="container row">
                        <Button className="btn btn-warning col-4" onClick={handleEdit} href="/Shop">Edit</Button>
                        <Button className="btn btn-danger col-4" onClick={handleDelete} href="/Shop">Delete</Button>
                    </Buttons>
                </Form.Row>
            </Form>
        </FormContainer >

    )
}


const FormContainer = styled(Container)`
     max-width:600px;
    height: 100vh;
    margin-top: 30px !important;
    align-items: center;
    text-align: center;

`;
const Buttons = styled(Container)`
     
    align-items: center;
    text-align: center;
    justify-content: center;
 
`;

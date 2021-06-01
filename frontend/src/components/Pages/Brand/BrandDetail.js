import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react'

import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

import { Label, Field } from '../../utils/Theme';

import { Container, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export const BrandDetail = () => {
    const { id } = useParams();

    const [brand, setBrand] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/Brands/" + id + "/")
            .then(res => setBrand(res.data))
            .catch(console.log)
    }, []);

    const handleEdit = () => {
        axios.put("http://127.0.0.1:8000/api/Brands/" + id + "/", {
            name: brand.name,
            category: brand.category,
            origin: brand.origin,
            established: brand.established,
        })
            .then(res => console.log("Successfully modified."))
            .catch(console.log)
    }

    const handleDelete = () => {
        axios.delete("http://127.0.0.1:8000/api/Brands/" + id + "/")
            .then(res => console.log("Successfully deleted."))
            .catch(console.log)
    };

    const onChange = (event) => {
        event.preventDefault();
        const newData = { ...brand }
        newData[event.target.name] = event.target.value
        setBrand(newData)
    }


    return (
        <FormContainer>
            <h1>Edit Brand</h1>
            <Form onSubmit={event => event.preventDefault()}>
                <Form.Row>
                    <Form.Group as={Col} >
                        <Label>Name</Label>
                        <Field
                            onChange={onChange}
                            type="text"
                            name="name"
                            defaultValue={brand.name}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} >
                        <Label>Category</Label>
                        <Field
                            onChange={onChange}
                            type="text"
                            name="category"
                            defaultValue={brand.category}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} >
                        <Label>Origin</Label>
                        <Field
                            name="origin"
                            defaultValue={brand.origin}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Label>Established</Label>
                        <Field
                            onChange={onChange}
                            type="text"
                            name="established"
                            defaultValue={brand.established}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Buttons className="container row">
                        <Button className="btn btn-warning col-4" onClick={handleEdit} href="/Brand">Edit</Button>
                        <Button className="btn btn-danger col-4" onClick={handleDelete} href="/Brand">Delete</Button>
                    </Buttons>
                </Form.Row>
            </Form>
        </FormContainer>
    );
};




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

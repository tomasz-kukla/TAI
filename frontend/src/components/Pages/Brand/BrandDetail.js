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

    const [brands, setBrands] = useState([]);
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/Brands/" + id + "/")
            .then(res => setBrands(res.data))
            .catch(console.log)
    }, []);

    const handleEdit = () => {
        axios.put("http://127.0.0.1:8000/api/Brands/" + id + "/")
            .then(res => console.log("Successfully modified."))
            .catch(console.log)
    }

    const handleDelete = () => {
        axios.delete("http://127.0.0.1:8000/api/Brands/" + id + "/")
            .then(res => console.log("Successfully deleted."))
            .catch(console.log)

    };


    return (
        <FormContainer>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} >
                        <Label>Name</Label>
                        <Field
                            type="text"
                            name="name"
                            defaultValue={brands.name}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} >
                        <Label>Category</Label>
                        <Field
                            type="text"
                            name="category"
                            defaultValue={brands.category}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} >
                        <Label>Origin</Label>
                        <Field
                            name="origin"
                            defaultValue={brands.origin}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Label>Established</Label>
                        <Field
                            type="text"
                            name="date"
                            defaultValue={brands.established}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <div className="container ">
                        <Button className="btn btn-warning" onClick={handleEdit}>Edit</Button>
                        <Button className="btn btn-danger" onClick={handleDelete} href="/Brand">Delete</Button>
                    </div>
                </Form.Row>
            </Form>
        </FormContainer>
    );
};




const FormContainer = styled(Container)`
    max-width:600px;

`;
import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react'

import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import { Container, Col, Button } from 'react-bootstrap';
import { Label, Field } from '../../utils/Theme';



export const BrandAdd = () => {
    const [data, setData] = useState();


    const handleAdd = () => {

        axios.post("http://127.0.0.1:8000/api/Brands/", {
            name: data.name,
            category: data.category,
            origin: data.origin,
            established: data.established,
        })
            .then(res => {
                console.log(res.data)
            })
            .catch(console.log)
    }

    const onChange = (event) => {
        event.preventDefault();
        const newData = { ...data }
        newData[event.target.name] = event.target.value
        setData(newData)
    }


    return (
        <FormContainer>
            <h1>Create Brand</h1>
            <Form onSubmit={event => event.preventDefault()}>
                <Form.Row>
                    <Form.Group as={Col} >
                        <Label>Name</Label>
                        <Field
                            onChange={onChange}
                            type="text"
                            name="name"
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
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} >
                        <Label>Origin</Label>
                        <Field
                            onChange={onChange}
                            name="origin"
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
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <div className="container ">
                        <Button className="btn btn-warning" onClick={handleAdd}>Create</Button>
                    </div>
                </Form.Row>
            </Form>
        </FormContainer>


    );
};

const FormContainer = styled(Container)`
    max-width:600px;

`;
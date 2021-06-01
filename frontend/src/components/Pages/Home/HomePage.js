import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react'

import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

import { Label, Field } from '../../utils/Theme';
import { Container, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


export const HomePage = (props) => {


    const [shops, setShops] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/Brands/")
            .then(res => setBrands(res.data))
            .catch(console.log)
    }, []);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/Shops/")
            .then(res => setShops(res.data))
            .catch(console.log)
    }, []);


    return (
        <Sect className="container row">

            <Cols className="col-6">
                <h3>Brands</h3>
                {brands.map((brand) => (
                    <div className="card text-center border-primary mb-3">
                        <div className="card-body">
                            <h5 className="card-text" key={brand.id}>
                                {brand.name}</h5>
                        </div>
                    </div>
                ))
                }
            </Cols>

            <Cols className="col-6">
                <h3>Shops</h3>
                {shops.map((shop) => (
                    <div className="card text-center border-secondary mb-3">
                        <div className="card-body" key={shop.id}>
                            <h5 className="card-text ">
                                {shop.city} - {shop.mall_name}
                            </h5>
                        </div>

                    </div>

                ))}
            </Cols>

        </Sect>


    );

};

const Sect = styled.div`
    margin: auto;
    margin-top: 70px !important;
    height: 100vh;
    
`
const Cols = styled.div`
    align-items: center;
    text-align: center;
    
`


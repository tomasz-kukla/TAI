import axios from 'axios';
import { useState, useEffect } from 'react';

import styled from 'styled-components';

import { BrandDetail } from './BrandDetail';


export const BrandPage = (props) => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {

        axios.get("http://127.0.0.1:8000/api/Brands/")
            .then(res => {
                setBrands(res.data)
            })
            .catch(console.log)
    }, []);

    return (
        <Sect className="container text-center">
            <h2>Brands</h2>
            <a class="btn btn-secondary float-right"
                href={'/BrandAdd/'}>Create Brand</a>

            {brands.map((brand) => (
                <Div className="card text-center border-danger mb-3" styles={`width: 20rem`}>
                    <div className="card-header">
                        <h5 className="card-title" key={brand.id}>
                            {brand.name}</h5>
                    </div>

                    <div className="card-body" key={brand.id}>
                        <t className="card-text" >
                            <b>Category:</b> {brand.category}</t>
                        <br />
                        <t className="card-text" >
                            <b>Established: </b>{brand.established}</t>
                        <br />
                        <t className="card-text" key={brand.id}>
                            <b>Country:</b> {brand.origin}</t>
                    </div>

                    <div className="card-footer">
                        <a
                            onClick={() => BrandDetail(brand)}
                            href={'/Brands/' + brand.id + "/"}
                            class="btn btn-danger"
                        >
                            Edit
                        </a>
                    </div>
                </Div>

            ))
            }
        </Sect >
    );

};

const Div = styled.div`
    margin-top: 30px;
    
`
const Sect = styled.div`
    margin: auto;
    height: 100vh;
    
`
const Cols = styled.div`
    align-items: center;
    text-align: center;
    
`

import axios from 'axios';
import { useState, useEffect } from 'react';

import styled from 'styled-components';

import { ShopDetail } from './ShopDetail';

export const ShopPage = (props) => {
    const [shops, setShops] = useState([]);

    useEffect(() => {

        axios.get("http://127.0.0.1:8000/api/Shops/")
            .then(res => {
                setShops(res.data)
            })
            .catch(console.log)
    }, []);



    return (
        <div className="container text-center">
            <h2>Shops</h2>
            <a class="btn btn-secondary float-right"
                href={'/ShopAdd/'}>Create Shop</a>

            {shops.map((shop) => (
                <Div className="card text-center border-danger mb-3" styles={`width: 20rem`}>
                    <div className="card-header">
                        <h5 className="card-title" key={shop.id}>
                            {shop.city} - {shop.mall_name}</h5>
                    </div>

                    <div className="card-body" key={shop.id}>
                        <t className="card-text" >
                            <b>Opened: </b>{shop.opened}</t>
                        <br />
                        <t className="card-text" >
                            <b>Registered customers:</b> {shop.customers}</t>
                        <br />
                        <t className="card-text" key={shop.id}>
                            <b>Brand:</b> {shop.brand}</t>
                    </div>

                    <div className="card-footer">
                        <a
                            onClick={() => ShopDetail(shop)}
                            href={'/Shops/' + shop.id + "/"}
                            class="btn btn-danger"
                        >
                            Edit
                        </a>
                    </div>
                </Div>

            ))
            }
        </div >
    );

};

const Div = styled.div`
    margin-top: 30px;
    
`
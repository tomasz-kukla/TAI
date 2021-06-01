import { useState, useEffect } from 'react';

import { Container } from 'react-bootstrap';

import axios from 'axios';

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
        <div>
            <h2 >Shops</h2>
            {shops.map((shop) => (
                <Container>
                    <div>
                        <ul class="list-group">
                            <li class="list-group-item "  key={shop.id}>{shop.city} - {shop.estabished}</li>
                        </ul>
                    </div>
                </Container>

            ))}
        </div>
    );

};
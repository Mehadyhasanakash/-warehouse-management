import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const {inventoryId} = useParams()
    const [inventory, setInventory] = useState({});

    useEffect(() =>{
        const url = `http://localhost:5000/inventory/${inventoryId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setInventory(data))
    } ,[])
    return (
        <div>
            <h1>welcome to : {inventory.name}</h1>
        </div>
    );
};

export default InventoryDetail;
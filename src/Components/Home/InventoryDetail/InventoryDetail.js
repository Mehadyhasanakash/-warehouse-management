import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const {inventoryId} = useParams()
    return (
        <div>
            <h1>welcome to : {inventoryId}</h1>
        </div>
    );
};

export default InventoryDetail;
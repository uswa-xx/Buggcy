import React, { useState } from 'react';
import { createProduct, updateProduct, deleteProduct } from '../services/apiService';

const AdminPage = () => {
  const [product, setProduct] = useState({ title: '', price: '', description: '' });
  const [productId, setProductId] = useState('');

  const handleCreate = async () => {
    const newProduct = await createProduct(product);
    console.log('Product created', newProduct);
  };

  const handleUpdate = async () => {
    const updatedProduct = await updateProduct(productId, product);
    console.log('Product updated', updatedProduct);
  };

  const handleDelete = async () => {
    await deleteProduct(productId);
    console.log('Product deleted');
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <div>
        <input type="text" placeholder="Product ID" value={productId} onChange={(e) => setProductId(e.target.value)} />
        <input type="text" placeholder="Title" value={product.title} onChange={(e) => setProduct({ ...product, title: e.target.value })} />
        <input type="text" placeholder="Price" value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} />
        <input type="text" placeholder="Description" value={product.description} onChange={(e) => setProduct({ ...product, description: e.target.value })} />
        <button onClick={handleCreate}>Create Product</button>
        <button onClick={handleUpdate}>Update Product</button>
        <button onClick={handleDelete}>Delete Product</button>
      </div>
    </div>
  );
};

export default AdminPage;

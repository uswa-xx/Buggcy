import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import { createProduct, updateProduct, deleteProduct, fetchProducts } from '../services/apiService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../components/styles/AdminPage.module.css';

const AdminPage = () => {
  const [product, setProduct] = useState({ title: '', price: '', description: '', category: '', image: '' });
  const [productId, setProductId] = useState('');
  const { mutate } = useSWR('products', fetchProducts);
  //const navigate = useNavigate();

  const handleCreate = async () => {
    try {
      console.log('Creating product:', product);
      const newProduct = await createProduct(product);
      console.log('Product created:', newProduct);
      await mutate(fetchProducts, true);
      console.log('Product list updated');
      toast.success('Product created successfully!');
      setProduct({ title: '', price: '', description: '', category: '', image: '' }); 
      setProductId('');
     // setTimeout(() => {
      // navigate('/'); 
      //}, 500);
    } catch (error) {
      console.error('Error creating product:', error);
      toast.error('Error creating product!');
    }
  };

  const handleUpdate = async () => {
    try {
      console.log('Updating product with ID:', productId);
      const updatedProduct = await updateProduct(productId, product);
      console.log('Product updated:', updatedProduct);
      await mutate(fetchProducts, true);
      console.log('Product list updated');
      toast.success('Product updated successfully!');
      setProduct({ title: '', price: '', description: '', category: '', image: '' }); 
      setProductId(''); 
    } catch (error) {
      console.error('Error updating product:', error);
      toast.error('Error updating product!');
    }
  };

  const handleDelete = async () => {
    try {
      console.log('Deleting product with ID:', productId);
      await deleteProduct(productId);
      console.log('Product deleted');
      await mutate(fetchProducts, true);
      console.log('Product list updated');
      toast.success('Product deleted successfully!');
      setProduct({ title: '', price: '', description: '', category: '', image: '' });
      setProductId(''); 
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error('Error deleting product!');
    }
  };

  return (
    <div className={styles.adminPage}>
      <ToastContainer />
      <h1>Admin Page</h1>
      <div className={styles.formContainer}>
        <input
          type="text"
          placeholder="Product ID"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Title"
          value={product.title}
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Price"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={product.description}
          onChange={(e) => setProduct({ ...product, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          value={product.category}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={product.image}
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
        />
        <div className={styles.buttonContainer}>
          <button onClick={handleCreate}>Create Product</button>
          <button onClick={handleUpdate}>Update Product</button>
          <button onClick={handleDelete}>Delete Product</button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

import React, { useState } from 'react';
import styles from './styles/OrderForm.module.css';
import { useCart } from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';

const OrderForm = () => {
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    postalCode: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order placed', { shippingDetails, cart });
    clearCart();
    setShippingDetails({
      name: '',
      address: '',
      email: '',
      phone: '',
      country: '',
      state: '',
      city: '',
      postalCode: '',
    });
    setOrderPlaced(true);
  };

  const handleContinueShopping = () => {
    navigate('/');
  };

  return (
    <div>
      {!orderPlaced ? (
        <form className={styles.orderForm} onSubmit={handleSubmit}>
          <h2>Shipping Details</h2>
          <label>
            Name:
            <input type="text" name="name" value={shippingDetails.name} onChange={handleChange} required />
          </label>
          <label>
            Address:
            <input type="text" name="address" value={shippingDetails.address} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={shippingDetails.email} onChange={handleChange} required />
          </label>
          <label>
            Phone:
            <input type="tel" name="phone" value={shippingDetails.phone} onChange={handleChange} required />
          </label>
          <label>
            Country:
            <input type="text" name="country" value={shippingDetails.country} onChange={handleChange} required />
          </label>
          <label>
            State:
            <input type="text" name="state" value={shippingDetails.state} onChange={handleChange} required />
          </label>
          <label>
            City:
            <input type="text" name="city" value={shippingDetails.city} onChange={handleChange} required />
          </label>
          <label>
            Postal Code:
            <input type="text" name="postalCode" value={shippingDetails.postalCode} onChange={handleChange} required />
          </label>
          <button type="submit">Place Order</button>
        </form>
      ) : (
        <div className={styles.successMessage}>
          <h2>Order placed successfully!</h2>
          <button onClick={handleContinueShopping}>Continue Shopping</button>
        </div>
      )}
    </div>
  );
};

export default OrderForm;

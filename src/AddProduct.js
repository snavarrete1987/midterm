import React, { useState } from 'react';
import './AddProduct.css';


function AddProduct() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    category: '',
    quantity: 0,
    price: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(product));
    console.log(product);
  };
  return (
    <div className="form-container">
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <label className='container'>
                    Name:
                    <input type="text" name="name" value={product.name} onChange={handleChange} />
                </label>
                
                <label className='container'>
                    Description:
                    <input type="text" name="description" value={product.description} onChange={handleChange} />
                </label>
                <label className='container'>
                    Category:
                    <input type="text" name="category" value={product.category} onChange={handleChange} />
                </label>
                <label className='container'>
                    Quantity:
                    <input type="number" name="quantity" value={product.quantity} onChange={handleChange} />
                </label>

                <label className='container'>
                    Price:
                <input type="number" name="price" value={product.price} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
                <button type="button" onClick={() => alert('Canceled')}>Cancel</button>
            </div>
        </form>
    </div>
);
  
}

export default AddProduct;




    


import React, { useEffect, useState } from 'react';

const ManageAllProducts = () => {
    const[products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allProducts')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])

    const deleteProduct =(id)=>{
        // console.log(id);
        fetch(`http://localhost:5000/deleteProducts/${id}`,{
            method:'DELETE',
            headers:{
                'content-type':'application/json'
            }
        })
        .then(res=> res.json())
        .then(data =>{
            if(data.deletedCount>0){
                alert('Product Deleted Successfully')
                const newProducts = products.filter(productss=> productss._id !==id)
                setProducts(newProducts);
            }
        })
    }

// console.log(products);

    return (
        <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 container mx-auto g-0'>
            {
                products.map(products =>
                    <div className='col my-3' key={products._id}>
                     
  
    <div className="card h-100 bg-success text-white">
      <img src={products.img} className="card-img-top w-50 mx-auto" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Name: {products.name}</h5>
        <p className="card-text">Brand: {products.brand}</p>
        {/* <p className="card-text">Category: {product.type}</p> */}
        <p className="card-text">Price: ${products.price}</p>
        <button className='btn btn-danger' onClick={()=>deleteProduct(products._id)}>Delete Product</button>
      </div>
    </div>
 

  
 





                    </div>)
            }
            
        </div>
    );
};

export default ManageAllProducts;
import React, { useEffect, useState } from 'react';
import ShowWatches from '../ShowWatches/ShowWatches';
const Home = () => {
      // set data for home page 
    //   const [allProducts, setAllProducts] = useState([]);
    const [products,setProducts] = useState([]);


      // load data from server
      useEffect(() => {
          fetch('http://localhost:5000/allProducts')
              .then(res => res.json())
              .then(data => setProducts(data))
      }, [])
    return(
        <div className="container">

                {/* Tour Package Part */}
                <div className="text-center course-title">
                <h2><span className="text-primary">TourHub's </span> Watches Collectios</h2>
                <p className="mb-5">Our main moto to give the best offers to all..Check out our hot offers<br /> We claim you will never regret it!</p>
            </div>
            <div className="mx-auto container">
                <div className="mx-auto row">
                  
                        <div className="row">
                            {
                                products.map((products) => (<ShowWatches key={products.key}
                                    products={products}>

                                </ShowWatches>
                                ))
                            }
        </div>
        </div>
        </div>
        </div>
    
    )
}
export default Home;
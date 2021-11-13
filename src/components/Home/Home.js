import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import ShowWatches from '../ShowWatches/ShowWatches';
const Home = () => {
      // set data for home page 
      const [products,setProducts] = useState([]);
      const [reviews,setReviews] = useState([]);


      // load data from server
      useEffect(() => {
          fetch('http://localhost:5000/allProducts')
              .then(res => res.json())
              .then(data => setProducts(data))
      }, [])
      useEffect(()=>{
        fetch('http://localhost:5000/findReview')
        .then(res=>res.json())
        .then(data=> setReviews(data))
      },[])
    return(
        <div className="container">
               
               <div>
                <Header></Header>
            </div>

                {/* Tour Package Part */}
                <div className="text-center course-title">
                <h2><span className="text-primary">TourHub's </span> Watches Collectios</h2>
                <p className="mb-5">Our main moto to give the best offers to all..Check out our hot offers<br /> We claim you will never regret it!</p>
            </div>
            <div className="mx-auto container">
                <div className="mx-auto row">
                  
                        <div className="row">
                            {
                                products.slice(0,6).map((products) => (<ShowWatches key={products.key}
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
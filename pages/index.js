import React from 'react'

const index = () => {
  return {
    <>
      HeroBanner

      <div>
        <h2>Most Famous Food Items</h2>
        <p>Pizza</p>
      </div>

      <div>
        {['Product 1' ,'Product 2'].map(
          (product) => product)}
      </div>

      Footer
    </>
  }
}
export default Home;

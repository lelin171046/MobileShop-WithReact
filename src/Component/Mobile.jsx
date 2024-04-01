import React from 'react';

const Mobile = ({mobiles}) => {
    const {name, brand, image, description} = mobiles;
    console.log(mobiles);
    return (
        <div style={{border:' 4px solid red', borderRadius:'16px', gap:'10px', margin:'10px'}}>
           <div class="card w-96 bg-base-100 shadow-xl">
            <h3>Brand:{brand}</h3>
 <image>{image}</image>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{name}</h2>
    <p>Discription:{description}</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
      <button class="btn ">More</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Mobile;
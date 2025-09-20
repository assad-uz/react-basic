import React from 'react';
import './assets/ExtrnCss.css'

const AddExtrnCss = () => {
  return (
    <div>
      <div>
            <h2
          style={{
            backgroundColor: "GrayText",
            color: "white",
            textAlign: "center",
            padding: "10px",
            marginTop:"10px"
          }}
        >
          External CSS
        </h2>
        </div>
      <div>
        <h2 className='parent'>This is parent Page</h2>
      </div>
      <div>
        <h2 className='child'>This is child Page</h2>
      </div>
    </div>
  );
};

export default AddExtrnCss;
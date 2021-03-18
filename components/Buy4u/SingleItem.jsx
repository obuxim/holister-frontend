import React from "react";

const SingleItem = ({ item }) => {
  return (
    <>
      <div className="col-5">
        <div className="form-group">{item.name}</div>
      </div>
      <div className="col-3">
        <div className="form-group">{item.qty}</div>
      </div>
      <div className="col-3">
        <div className="form-group">{item.price}</div>
      </div>
    </>
  );
};

export default SingleItem;

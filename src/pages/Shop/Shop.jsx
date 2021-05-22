import React from "react";
import { useState, useEffect } from "react";
import shopData from "../../data/shopData.js";
import PreviewCollection from "../../components/preview-col/PreviewCollection";
import './Shop.scss';

const Shop = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    setCollections(shopData);
  }, []);

  return (
    <>
      <div>
       <h1 className="logo-side">|| &nbsp; &nbsp; Collections</h1>
       {collections.map(({ id, ...otherCol}) => {
         return <div className="shop-page">
           <PreviewCollection key={id} {...otherCol}  />
         </div>
       })}
      </div>
    </>
  );
};

export default Shop;

import React from "react";
import "./PreviewCollection.scss";
import CollectionItem from "../collection-item/CollectionItem";

const PreviewCollection = ({ title, items }) => {
  return (
    <>
      <div className="collection-preview">
        <div className="title">
          <center><h4>{title}</h4></center>
        </div>
        <div className="preview">
          {items
            .filter((item, index) => index < 4)
            .map(({id, ...otherCol}) => (
              <CollectionItem key={id} {...otherCol} />
            ))}
        </div>
      </div>
    </>
  );
};

export default PreviewCollection;

import React, { useEffect, useState } from "react";
import data from "../../data";
import MenuItem from "../menu-item/MenuItem";
import "./Directory.scss";

const Directory = () => {
  const [sections, setSections] = useState([]);

  useEffect(() =>{
    setSections(data);
  },[])


  return (
    <>
      <div className="directory-menu">
        {sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    </>
  );
};

export default Directory;

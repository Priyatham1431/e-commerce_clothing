import React, { useEffect, useState } from "react";
import data from "../../data/data";
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
        {sections.map(({ id, ...otherSections }) => (
          <MenuItem key={id} {...otherSections} />
        ))}
      </div>
    </>
  );
};

export default Directory;

import React from "react";
import "./MenuItem.scss";
import {withRouter} from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <>
      <div className={`${size} menu-item`}>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
          onClick={() => history.push(`${match.url}${linkUrl}`)}
        />
        <div className="content" onClick={() => history.push(`${linkUrl}`)}>
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">Shop Here</span>
        </div>
      </div>
    </>
  );
};

export default withRouter(MenuItem);

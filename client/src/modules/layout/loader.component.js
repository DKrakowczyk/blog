import React, { useState } from "react";

export const LoaderComponent = props => {
  const loader = props.show ? (
    <div className="loader-wrapper">
      <img
        className="loaders"
        src="http://samherbert.net/svg-loaders/svg-loaders/puff.svg"
        width="200"
        alt=""
      />
    </div>
  ) : (
    <></>
  );

  return <>{loader}</>;
};

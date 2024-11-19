import React from "react";

const Bloglayout = ({children} : {children: React.ReactNode}) => {
  return (
    <div>
      <h2>This is the blog layout</h2>
      {children}
    </div>
  )
}

export default Bloglayout;

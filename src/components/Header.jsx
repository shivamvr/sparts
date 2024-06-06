import React from "react";

const Header = () => {
  return (
    <div className='header'>
        <h1 className='heading'>Find the Best Activity for you Child!</h1>
        <div className='flex justify-center gap-10'>
          <button className='btn'>For Academies</button>
          <button className='btn'>SpArts in your home</button>
      </div>
    </div>
  );
};

export default Header;

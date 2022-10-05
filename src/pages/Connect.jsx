import React, { useState } from "react";
import { Link } from "react-router-dom";
import profile from './vivian.png'
import { BsFillPatchCheckFill, BsFillPlusCircleFill } from "react-icons/bs";


function Connect({item}) {

  const [thumbs, setThumbs] = useState(false);
  const handleLike = () => {
    setThumbs(!thumbs);
  };

  return (
      <Link to={`/item/${item.id}`}>
        <div className="flex flex-col justify-center w-full min-w-[250px]  md:max-w-[270px] bg-[#FFFFFF] rounded-[20px] drop-shadow">
          <div>
            <div className="justify-center">
              <img src={item.image} alt="" onContextMenu={(e)=> e.preventDefault()}  className="h-48 w-full rounded-t-xl object-center object-cover"/>
            </div>
          </div>
          <div className="px-[20px] py-[10px]">
            <div className="mt-[-40px] mb-2">
                <div className="justify-center flex">
                    <img src={profile} onContextMenu={(e)=> e.preventDefault()} width='60px' />
                </div>
                <div className="pl-4">
                  <div className="flex justify-center">
                    <h1 className="text-[16px] font-[700] pr-2">Sadiq Gallery</h1>
                    <div className="text-[#4176FF]"><BsFillPatchCheckFill /></div>
                  </div>
                  <div className="flex text-xs justify-center font-[600]">
                    {/* <p className="pr-2">15 items</p> */}
                    <p>32k followers</p>
                  </div>
                </div>
            </div>
          </div>

        </div>
       
      </Link>
                
  );
}

export default Connect;
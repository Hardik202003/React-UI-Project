import React from "react";
import { FaHeart } from "react-icons/fa6";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";

const Post = ({ data, bgColor, color }) => {
  return (
    <>
      <div
        className="post_container"
        style={{
          backgroundColor: `${bgColor}`,
          color: `${color}`,
        }}>

        <div className="person">  <h3>{data.userName}</h3>
          <div className="text"> <p>{data.title} </p> </div>
        </div>
        <div className="post_img">
          <img src={data.mImg} alt="" />
    
        </div >
        </div>
      </>
  );
}
      

export default Post;
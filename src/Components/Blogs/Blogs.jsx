import "./Blogs.css";
import React from "react";

import BlogsList from "./BlogsList.jsx";

const Blogs = () => {
  return (
    <div className="blogs">
      <p className="text-center text-[20px] sm:text-[30px] font-[700]">
        Articles
      </p>
      <div className="wrapper mt-7 pb-2">
        {BlogsList && BlogsList?.map((item, index) => (
          <div key={index} className="item rounded">
            <div className="w-[280px] overflow-hidden">
              <img
                src={item?.img}
                width={"280px"}
                className="rounded-t object-cover h-[180px]"
              />
            </div>
            <div className="my-3 px-5 w-[280px] flex flex-col justify-between h-[245px]">
              <p className="text-[14px] font-[600] text-justify flex items-end">
                {item?.heading?.substring(0, 70)}
              </p>
              <p className="text-[13px] text-justify mt-2 flex-1">
                {item?.description?.substring(0, 265)}...
              </p>
              <p className="text-[11px] font-[500] text-[red] mt-1 hover:underline cursor-pointer text-end">See More...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

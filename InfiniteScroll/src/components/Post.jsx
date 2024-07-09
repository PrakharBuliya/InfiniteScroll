import React, { useEffect } from "react";
import "../App.css";

const Post = ({ data, setPageNo }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((param) => {
      console.log(param);
      if (param[0].isIntersecting) {
        observer.unobserve(lastImage);
        setPageNo((pageNo) => pageNo + 1);
      }
    });

    const lastImage = document.querySelector(".image-post:last-child");

    console.log(lastImage, "Last Image-----");

    if (!lastImage) {
      return;
    }
    observer.observe(lastImage);
  }, [data]);

  return (
    <div className="container">
      {data.map((item, index) => {
        return (
          <img
            className="image-post"
            key={item.id}
            src={item.download_url}
            alt=""
          />
        );
      })}
    </div>
  );
};

export default Post;

id_ed25519;

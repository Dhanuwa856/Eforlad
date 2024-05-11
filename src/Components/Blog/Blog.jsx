import React from "react";
import "./Blog.css";
import Title from "../Title/Title";
import Blog_01 from "../../assets/blog-image0.jpg";
import Blog_02 from "../../assets/blog-image.jpg";

const Blog = () => {
  return (
    <div className="blog container-fuild">
      <Title sectiontitle="OUR BLOG" />
      <p className="sub-p">
        Lorem Ipsum is that it has a more-or-less normal distribution of letters
      </p>
      <div className="blog-posts container">
        <div className="post">
          <div className="post-img">
            <img src={Blog_01} alt="" />
            <div className="post-date">4 Feb 2024</div>
          </div>
          <div className="post-detail">
            <div className="post-by">Post By : Travel Agency</div>
            <div className="post-like">
              <p>
                <span>05</span> Like
              </p>
              <p>
                <span>06</span> Comment
              </p>
            </div>
          </div>
          <h3 className="post-title">London Amazing Tour</h3>
          <p className="post-info">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web
          </p>
        </div>
        <div className="post">
          <div className="post-img">
            <img src={Blog_02} alt="" />
            <div className="post-date">4 Dec 2023</div>
          </div>
          <div className="post-detail">
            <div className="post-by">Post By : Travel Agency</div>
            <div className="post-like">
              <p>
                <span>05</span> Like
              </p>
              <p>
                <span>06</span> Comment
              </p>
            </div>
          </div>
          <h3 className="post-title">London Amazing Tour</h3>
          <p className="post-info">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

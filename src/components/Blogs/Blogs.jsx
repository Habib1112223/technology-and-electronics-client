import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <>
      <section className="w-10/12 mx-auto pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="block mb-2 text-lg font-semibold text-primary">
                  Our Blogs
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                  Our Recent News
                </h2>
                <p className="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4">
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Why Keep Up With Latest Trends Using the Best Tech Blogs"
              CardDescription="Professionals in almost every industry have trouble keeping up to date with changing tech trends. So, the best and the only way to stay relevant with technology is through the information available online!"
              image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="The 7 Best Tech Blogs That Look Into General Trends"
              CardDescription="Professionals in almost every industry have trouble keeping up to date with changing tech trends. So, the best and the only way to stay relevant with technology is through the information available online!"
              image="https://i.ibb.co/Y23YC07/image-02.jpg"
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="The 4 Best Tech Blogs That Report on the Metaverse"
              CardDescription="Professionals in almost every industry have trouble keeping up to date with changing tech trends. So, the best and the only way to stay relevant with technology is through the information available online!"
              image="https://i.ibb.co/7jdcnwn/image-03.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

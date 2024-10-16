// import Link from 'next/link'
// import React from 'react'

// const Blog = () => {

// interface blogType{
//     image:string,
//     category:string,
//     author:string,
//     title:string,
//     para:string,
//     readbtn:string
// }

// const blogData: blogType[] = [
//     {
//         image:"/home/blog-default.png",
//         category:"Web Design",
//         author:"Lalit Gupta",
//         title:"Hello World",
//         para:"Hello World is there for testing purpose please check.",
//         readbtn:"Read More..."
//     },
//     {
//         image:"/home/blog-default.png",
//         category:"Web Design",
//         author:"Lalit Gupta",
//         title:"Hello World",
//         para:"Hello World is there for testing purpose please check.",
//         readbtn:"Read More..."
//     },
//     {
//         image:"/home/blog-default.png",
//         category:"Web Design",
//         author:"Lalit Gupta",
//         title:"Hello World",
//         para:"Hello World is there for testing purpose please check.",
//         readbtn:"Read More..."
//     },
// ]

//   return (
//     <div className='du-container text-white py-12'>
//          <div className='pb-12 text-center'>
//             <div className='uppercase text-primary'>Blogs</div>
//             <h1>Latest Articles & Insights</h1>
//             </div>
//         <div className='grid grid-cols-12 gap-12'>
//            {
//             blogData.map((e,i)=>(
//                 <div key={i} className='col-span-4 border-dotted border-2 rounded-md border-primary p-4'>
//                 <img className='rounded-md' src={e.image} />
//                 <div className='flex justify-between py-4'><div>Category : <span className='bg-primary px-4 py-1 rounded-full text-sm text-black font-semibold'>{e.category}</span></div><div>{e.author}</div></div>
//                 <div className='text-[30px] font-bold'>{e.title}</div>
//                 <p>{e.para}</p>
//                 <button className='mt-4 text-primary text-[20px]'><Link href="/">{e.readbtn}</Link></button>
//             </div>
//             ))
//            }
//         </div>
//     </div>
//   )
// }

// export default Blog

"use client"; // Add this line to specify that this is a Client Component

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Blog = () => {
  interface BlogType {
    image: string;
    category: string;
    author: string;
    title: string;
    para: string;
    readbtn: string;
  }

  const [blogData, setBlogData] = useState<BlogType[]>([]); // State to hold blog data
  const [loading, setLoading] = useState<boolean>(true); // State for loading

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/blogs");
        const data = await response.json();
        setBlogData(data); // Assuming the API returns an array of blog objects
      } catch (error) {
        console.error("Failed to fetch blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Simple loading state
  }

  return (
    <div className='du-container text-white py-12'>
      <div className='pb-12 text-center'>
        <div className='uppercase text-primary'>Blogs</div>
        <h1>Latest Articles & Insights</h1>
      </div>
      <div className='grid grid-cols-12 gap-12'>
        {blogData.map((e, i) => (
          <div
            key={i}
            className='col-span-4 border-dotted border-2 rounded-md border-primary p-4'
          >
            <Image className='rounded-md' src={e.image} alt={e.title} />
            <div className='flex justify-between py-4'>
              <div>
                Category :{" "}
                <span className='bg-primary px-4 py-1 rounded-full text-sm text-black font-semibold'>
                  {e.category}
                </span>
              </div>
              <div>{e.author}</div>
            </div>
            <div className='text-[30px] font-bold'>{e.title}</div>
            <p>{e.para}</p>
            <button className='mt-4 text-primary text-[20px]'>
              <Link href='/'>{e.readbtn}</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

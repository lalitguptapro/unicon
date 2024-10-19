import Image from "next/image";
import React from "react";

const Meetteam = () => {

    const teamData = [
        {
            image:"/lalit-gupta.jpg",
            name:"Lalit Gupta",
            designation:"Founder & CEO"
        },
        {
            image:"/lalit-gupta.jpg",
            name:"Lalit Gupta",
            designation:"Founder & CEO"
        },
        {
            image:"/lalit-gupta.jpg",
            name:"Lalit Gupta",
            designation:"Founder & CEO"
        },
        {
            image:"/lalit-gupta.jpg",
            name:"Lalit Gupta",
            designation:"Founder & CEO"
        },
    ]

  return (
    <div className='du-container pb-20 pt-4'>

        <h2 className="text-primary pb-8">Meet Our Team</h2>
      <div className='grid grid-cols-12 gap-12'>
       {
        teamData.map((e,i)=>(
            <div className='col-span-3 text-white team-bg'>
            <Image
              src={e.image}
              width='400'
              height='200'
              className='rounded-t-md h-[300px] object-cover'
            />
            <div className='p-4'>
              <h2>{e.name}</h2>
              <p>{e.designation}</p>
            </div>
          </div>
        ))
       }
      </div>
    </div>
  );
};

export default Meetteam;

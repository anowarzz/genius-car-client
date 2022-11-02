import React from 'react';
import './BannerItem.css'


const BannerItem = ({slide}) => {

const {image, id, prev, next} = slide


    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className='carousel-img'>
        <img src={image} alt="img1" className="w-full rounded-xl" />
        </div>
        
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className=' text-6xl font-bold text-white'>Affordable <br />
                Price for Car <br />
                Servicing
                </h1>
            </div>
        
            <div className="absolute w-2/5 flex justify-end transform -translate-y-1/2 left-24 top-1/2">
               <p className='text-white text-lg md:text-xl'>
               There are many variations of passages of  available, but the majority have suffered alteration in some form
               </p>
            </div>
        
            <div className="absolute w-2/5 flex justify-start transform -translate-y-1/2 left-24 top-3/4">
            <button className="btn hover:bg-[#ff3911a1] bg-brightRed mr-5">Discover More</button>
            <button className="btn  btn-outline border-brightRed hover:bg-brightRed "><p className='text-white'>Latest Project</p></button>
            </div>
        
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a> 
              <a href={`#slide${next}`} className="btn btn-circle bg-red-500">❯</a>
            </div>
          </div> 
    );
};

export default BannerItem;
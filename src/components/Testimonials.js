import React, { useState } from "react";
import { FiChevronRight,FiChevronLeft } from "react-icons/fi";
import Card from "./Card";

const Testimonials = (props) => {
    let reviews=props.reviews;

    const [index, setIndex]=useState(0);
    function leftHandler(){
        if((index-1) <0)
            setIndex(reviews.length-1);
        else
            setIndex(index-1);
        
    }

    function rightHandler(){
        if((index+1) >=reviews.length)
            setIndex(0);
        else
            setIndex(index+1);

    }
    function surpriseHandler(){
       let random = Math.floor(Math.random() * reviews.length);
       setIndex(random);
        
    } 


    return (
        <div className="w-[85vw] md:w-[700px] flex flex-col justify-center items-center mt-10 p-10 transition-all duration-400 bg-white hover:shadow-xl rounded-md">
            {
                <Card reviews={reviews[index]}> </Card>
            }
            <div className="flex justify-center text-3xl mt-5 gap-3 text-violet-400 font-400">
                <button 
                onClick={leftHandler}
                className="cursor-pointer hover:text-violet-500">
                    <FiChevronLeft></FiChevronLeft>
                </button>
                <button 
                onClick={rightHandler}
                className="cursor-pointer hover:text-violet-500" >
                    <FiChevronRight></FiChevronRight>
                </button>
            </div>

            <div className="">
               <button 
               onClick={surpriseHandler}
               className="bg-violet-500 hover:bg-violet-600 transition-all duration-200 cursor-pointer px-10 py-2 mt-2 rounded-md font-bold text-white text-lg bg-opacity-90">
                    Surprise Me
               </button>
            </div>

        </div>

    );
}

export default Testimonials;
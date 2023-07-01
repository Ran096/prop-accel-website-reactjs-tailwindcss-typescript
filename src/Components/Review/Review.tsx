import React from "react";
import img from "../Image/alexander-hipp-iEEBWgY_6lA-unsplash-min.jpg"

const UserReview=[{
    id:0,
    img : img,
    Name : 'Lolla Smith',
    Company :'Microsoft',
    Content :'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make',
},
{
    id:1,
    img: img,
    Name : 'Lolla Smith',
    Company :'Microsoft',
    Content :'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make',
},
{
    id:2,
    img:img,
    Name : 'Lolla Smith',
    Company :'Microsoft',
    Content :'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make',
}]


export default function Review() {
    return (
        <>
            <div className=" top-[1959px] absolute w-full flex flex-cols md:flex-row  ">
                    <div className="left-[630px] top-[467px] absolute justify-start items-start gap-6 inline-flex">
                        <div className="justify-center items-center gap-2.5 flex"></div>
                        <div className="justify-center items-center gap-2.5 flex"></div>
                        <div className="justify-center items-center gap-2.5 flex"></div>
                        <div className="justify-center items-center gap-2.5 flex"></div>
                        <div className="justify-center items-center gap-2.5 flex"></div>
                    </div>
                    <div className="h-[378px] left-[175px] top-[57px] absolute flex-col justify-center items-start gap-8 inline-flex">
                        <div className="self-stretch flex-col justify-start items-start gap-6 inline-flex">
                            <div className="text-black text-[40px] font-bold">Review from customers</div>
                            <div className="w-[399px] text-black text-[12px] font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</div>
                        </div>
                        <div className="w-[1459px] h-[238px] g-2 relative  flex-row justify-start items-start gap-4 inline-flex">

                            { UserReview.map((item ,index)=>{
                                return(
                                    <div key={index} className="px-12 py-9 bg-white rounded-lg shadow border border border border border-fuchsia-300 border-opacity-40 flex-col justify-center items-center gap-2.5 inline-flex">
                                <div className="flex-col justify-start items-start gap-6 flex">
                                    <div className="justify-start items-center gap-6 inline-flex">
                                        <img className="w-[70px] h-[70px] rounded-[56.50px]" src={item.img} />
                                        <div className="flex-col justify-start items-start gap-2 inline-flex">
                                            <div className="flex-col justify-start items-start gap-2 flex">
                                                <div className="w-[88px] h-4 text-black text-[16px] font-bold">{item.Name}</div>
                                                <div className="w-[65px] h-4 text-black text-[14px] font-normal">{item.Company}</div>
                                            </div>
                                            <div className="justify-start items-center gap-2 inline-flex">
                                                <div className="w-5 h-5 relative"></div>
                                                <div className="w-5 h-5 relative"></div>
                                                <div className="w-5 h-5 relative"></div>
                                                <div className="w-5 h-5 relative"></div>
                                                <div className="w-5 h-5 relative"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[369px] text-black text-[12px] font-normal">{item.Content} </div>
                                </div>
                            </div>
                                )
                            })} 
                            <div className="p-[5px] bg-fuchsia-300 bg-opacity-40 rounded-[100px] shadow justify-center items-center gap-2.5 inline-flex">
                                <div className="w-10 h-10 relative rounded-[80px]">
                                    <div className="w-[22px] h-[18px] left-[9px] top-[11px] absolute">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
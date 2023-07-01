import React from "react";

export default function Footer() {
    return (
        <>

            <div className="w-full h-[493px] left-0 top-[2514px] bg-[#3c0775] absolute">
            

                <div className="w-[995px] h-[74px] py-5 left-[222px] top-[419px] absolute border border-white justify-center items-center gap-48 inline-flex">
                    <div className="text-white text-[12px] font-normal">All Right Reserved @Copyright 2023</div>
                    <div className="justify-start items-center gap-16 flex">
                        <div className="justify-start items-start gap-6 flex">
                            <div className="text-white text-[12px] font-normal">Terms of Service</div>
                            <div className="text-white text-[12px] font-normal">Privacy Policy</div>
                            <div className="text-white text-[12px] font-normal">Product</div>
                        </div>
                        <div className="h-6 justify-start items-center gap-4 flex">
                            <div className="w-6 h-6 relative"></div>
                            <div className="w-6 h-6 relative"></div>
                            <div className="w-6 h-6 relative"></div>
                            <div className="w-6 h-6 relative"></div>
                        </div>
                    </div>
                 
                    </div>
             
                
                <div className="left-[422px] top-[68px] absolute text-white flex-col justify-start items-center gap-16 inline-flex">
                    <div className="flex-col justify-start items-center gap-6 flex">
                        <div className="text-black text-[32px] font-bold">We have what you’re looking for</div>
                        <div className="w-[596px] text-center text-[12px] font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a</div>
                    </div>
                    <div className="pl-9 pr-[35px] py-[15px] bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg justify-center items-center inline-flex">
                        <div className="text-white text-[20px] font-bold">Get Started Now</div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
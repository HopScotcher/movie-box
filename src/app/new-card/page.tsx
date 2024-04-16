"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export default function ThreeDCardDemo() {
  return (
    //   <CardContainer className="inter-var">
    //     <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  card lg:card-side min-w-full">
    //       <div className="lg:h-full">
    //         <CardItem translateZ="100" className="lg:h-full w-full mt-4">
    //           <img
    //             src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //             height="1000"
    //             width="1000"
    //             className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
    //             alt="thumbnail"
    //           />
    //         </CardItem>
    //       </div>
    //       <div className="p-3">
    //         <CardItem
    //           translateZ="50"
    //           className="text-xl font-bold text-neutral-600 dark:text-white"
    //         >
    //           Make things float in air
    //         </CardItem>
    //         <CardItem
    //           as="p"
    //           translateZ="60"
    //           className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
    //         >
    //           Hover over this card to unleash the power of CSS perspective
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, similique! Iusto vero dolor ut error quaerat, cupiditate accusamus sunt commodi perspiciatis soluta voluptas nam illum animi ratione laborum quidem similique.
    //         </CardItem>

    //         <div className="flex justify-between items-center mt-20">
    //           <CardItem
    //             translateZ={20}
    //             as={Link}
    //             href="#"
    //             target="__blank"
    //             className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
    //           >
    //             Save to Favorites
    //           </CardItem>
    //           <CardItem
    //             translateZ={20}
    //             as="button"
    //             className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
    //           >
    //             Watch Trailer
    //           </CardItem>
    //         </div>
    //       </div>
    //     </CardBody>
    //   </CardContainer>

    <div
      className={`min-h-screen flex justify-center items-cente bg-no-repeat bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]`}
    >
      <div className="card border-yellow-600 ">
        <div className="card-header">
          <div className="card-title">Title</div>
        </div>

        <div className="card-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          reprehenderit!
        </div>

        <div className="card-footer">footer</div>
      </div>
    </div>
  );
}

// import React from 'react'

// export default function NewCard() {
//   return (
//     <div className="min-h-screen flex justify-center items-center bg-blue-300">
//         <div className="card border-yellow-600 ">
//             <div className="card-header">
//                 <div className="card-title">Title</div>
//             </div>
//             <div className="card-body">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, reprehenderit!
//             </div>
//             <div className="card-footer">
//                 footer
//             </div>

//         </div>
//     </div>
//   )
// }

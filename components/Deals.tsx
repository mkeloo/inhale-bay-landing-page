// import React from "react";
// import Image from "next/image";
// import { ArrowRight } from "lucide-react";
// import heroBgImage from "@/public/hero/hero-bg2.jpg";
// import deal1Img from "@/public/deals/raz-deals1.webp";
// import deal2Img from "@/public/deals/vtouch-deals2.png";
// import deal3Img from "@/public/deals/orian-deals3.png";
// import deal4Img from "@/public/deals/southconnect-deals4.png";
// import deal5Img from "@/public/deals/southconnect-deals5.png";
// import deal6Img from "@/public/deals/geekbar-deals6.png";

// const Deals = () => {
//   return (
//     <div id="deals" className="relative w-full h-full py-8 pt-16 pb-16 ">
//       <Image
//         src={heroBgImage}
//         alt="Background with smoke"
//         layout="fill"
//         objectFit="cover"
//         quality={100}
//         className="absolute inset-0 z-[-10] opacity-50"
//       />
//       <div className="max-w-7xl mx-auto w-full h-full px-12">
//         <div className="flex items-center justify-start mb-8 py-8">
//           <h1 className="text-6xl font-extrabold bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent">
//             Deals & Promotions
//           </h1>
//         </div>
//         {/* Bento Box Items */}
//         <div className="w-full h-auto flex items-center justify-center gap-4 ">
//           <div className="w-[40%] h-[36rem] flex flex-col gap-4">
//             <div className="group/image h-[40%] w-full relative rounded-lg shadow-lg overflow-hidden bg-gradient-to-r from-orange-400 to-yellow-500">
//               <Image
//                 src={deal1Img}
//                 alt="Deal 1"
//                 layout="fill"
//                 objectFit="cover"
//                 className="opacity-75 transform transition-transform duration-200 group-hover/image:scale-110"
//               />
//               <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
//                 <div className="bg-yellow-600 bg-opacity-60 p-4 rounded-lg">
//                   <h2 className="text-3xl font-bold">Mega Clearance</h2>
//                   <p className="text-lg">Up to 70% off selected items</p>
//                   <button className="group/btn bg-orange-500 p-4 rounded-lg mt-2 flex items-center text-white font-semibold hover:scale-105 duration-200 transition-transform">
//                     Shop Now
//                     <ArrowRight
//                       strokeWidth={3}
//                       className="ml-1 transform transition-transform duration-200 group-hover/btn:translate-x-2"
//                     />
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="group/image h-[60%] w-full relative rounded-lg shadow-lg overflow-hidden bg-gradient-to-r from-purple-400 to-pink-500">
//               <Image
//                 src={deal2Img}
//                 alt="Deal 2"
//                 layout="fill"
//                 objectFit="cover"
//                 className="opacity-75 transform transition-transform duration-200 group-hover/image:scale-110"
//               />
//               <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
//                 <div className="bg-pink-700 bg-opacity-60 p-4 rounded-lg">
//                   <h2 className="text-3xl font-bold">Multi-Buy Savings</h2>
//                   <p className="text-lg">6 for $20.99 on 10ml bottles</p>
//                   <button className="group/btn bg-pink-500 p-4 rounded-lg mt-2 flex items-center text-white font-semibold hover:scale-105 duration-200 transition-transform">
//                     Shop Now
//                     <ArrowRight
//                       strokeWidth={3}
//                       className="ml-1 transform transition-transform duration-200 group-hover/btn:translate-x-2"
//                     />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="w-[60%] h-[36rem] flex flex-col gap-4">
//             <div className="w-full h-full flex gap-4">
//               <div className="group/image h-full w-[60%] relative rounded-lg shadow-lg overflow-hidden bg-gradient-to-r from-blue-400 to-indigo-900">
//                 <Image
//                   src={deal3Img}
//                   alt="Deal 3"
//                   layout="fill"
//                   objectFit="cover"
//                   className="opacity-75 transform transition-transform duration-200 group-hover/image:scale-110"
//                 />
//                 <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
//                   <div className="bg-blue-900 bg-opacity-70 p-4 rounded-lg">
//                     <h2 className="text-3xl font-bold">Summer Specials</h2>
//                     <p className="text-lg">Enjoy hot deals this summer</p>
//                     <button className="group/btn bg-blue-500 p-4 rounded-lg mt-2 flex items-center text-white font-semibold hover:scale-105 duration-200 transition-transform">
//                       Shop Now
//                       <ArrowRight
//                         strokeWidth={3}
//                         className="ml-1 transform transition-transform duration-200 group-hover/btn:translate-x-2"
//                       />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="group/image h-full w-[40%] relative rounded-lg shadow-lg overflow-hidden bg-gradient-to-r from-green-400 to-teal-500">
//                 <Image
//                   src={deal4Img}
//                   alt="Deal 4"
//                   layout="fill"
//                   objectFit="cover"
//                   className="opacity-75 transform transition-transform duration-200 group-hover/image:scale-110"
//                 />
//                 <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
//                   <div className="bg-teal-700 bg-opacity-60 p-4 rounded-lg">
//                     <h2 className="text-3xl font-bold">Buy 1 Get 1 Free</h2>
//                     <p className="text-md">Exclusive offer on select items</p>
//                     <button className="group/btn bg-teal-500 p-4 rounded-lg mt-2 flex items-center text-white font-semibold hover:scale-105 duration-200 transition-transform">
//                       Shop Now
//                       <ArrowRight
//                         strokeWidth={3}
//                         className="ml-1 transform transition-transform duration-200 group-hover/btn:translate-x-2"
//                       />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full h-full flex gap-4">
//               <div className="group/image h-full w-[45%] relative rounded-lg shadow-lg overflow-hidden bg-gradient-to-r from-red-400 to-blue-500">
//                 <Image
//                   src={deal5Img}
//                   alt="Deal 5"
//                   layout="fill"
//                   objectFit="cover"
//                   className="opacity-75 transform transition-transform duration-200 group-hover/image:scale-110"
//                 />
//                 <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
//                   <div className="bg-blue-800 bg-opacity-60 p-4 rounded-lg">
//                     <h2 className="text-3xl font-bold">Starter Kits</h2>
//                     <p className="text-lg">Perfect for beginners</p>
//                     <button className="group/btn bg-rose-400 p-4 rounded-lg mt-2 flex items-center text-white font-semibold hover:scale-105 duration-200 transition-transform">
//                       Shop Now
//                       <ArrowRight
//                         strokeWidth={3}
//                         className="ml-1 transform transition-transform duration-200 group-hover/btn:translate-x-2"
//                       />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="group/image h-full w-[55%] relative rounded-lg shadow-lg overflow-hidden bg-gradient-to-r from-yellow-400 to-orange-500">
//                 <Image
//                   src={deal6Img}
//                   alt="Deal 6"
//                   layout="fill"
//                   objectFit="cover"
//                   className="opacity-75 transform transition-transform duration-200 group-hover/image:scale-110"
//                 />
//                 <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
//                   <div className="bg-orange-700 bg-opacity-60 p-4 rounded-lg">
//                     <h2 className="text-3xl font-bold">Limited Edition</h2>
//                     <p className="text-lg">Exclusive limited-time items</p>
//                     <button className="group/btn bg-yellow-400 p-4 rounded-lg mt-2 flex items-center text-white font-semibold hover:scale-105 duration-200 transition-transform">
//                       Shop Now
//                       <ArrowRight
//                         strokeWidth={3}
//                         className="ml-1 transform transition-transform duration-200 group-hover/btn:translate-x-2"
//                       />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Deals;

import React from "react";

const Deals = () => {
  return <div>Deals</div>;
};

export default Deals;

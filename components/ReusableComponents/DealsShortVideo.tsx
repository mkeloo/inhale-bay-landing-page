// "use client";
// import React from "react";
// import Image from "next/image";
// import { ArrowRight } from "lucide-react";
// import VideoPlayer from "@/components/ReusableComponents/VideoPlayer";

// const LostMaryShortVideo1 = "/assets/bespoke_ads/lostmaryshort1.mp4";
// const deal1Img = "/assets/deals/raz-deals1.webp";
// const deal2Img = "/assets/deals/vtouch-deals2.png";
// const deal3Img = "/assets/deals/orian-deals3.png";
// const deal4Img = "/assets/deals/southconnect-deals4.png";
// const deal5Img = "/assets/deals/southconnect-deals5.png";
// const deal6Img = "/assets/deals/geekbar-deals6.png";

// const DealsShortVideo = () => {
//   // Define a fixed height for the video and deals section
//   const videoHeight = "45rem"; // Adjust this to fit your design needs

//   return (
//     <div className="max-w-screen-2xl mx-auto w-full flex items-center justify-center gap-4">
//       {/* Short Video */}
//       <div className="w-[30%] h-full" style={{ height: videoHeight }}>
//         <VideoPlayer
//           src={LostMaryShortVideo1}
//           className="w-full h-full rounded-2xl shadow-lg"
//           autoPlay
//           muted
//         />
//       </div>

//       {/* Deals section with matching height */}
//       <div
//         className="w-[70%] flex flex-col gap-4"
//         style={{ height: videoHeight }}
//       >
//         <div className="w-full h-1/2 flex gap-4">
//           <div className="group/image h-full w-[60%] relative rounded-lg shadow-lg overflow-hidden bg-gradient-to-r from-blue-400 to-indigo-900">
//             <Image
//               src={deal3Img}
//               alt="Deal 3"
//               width={500}
//               height={500}
//               className="opacity-75 object-cover transform transition-transform duration-200 group-hover/image:scale-110"
//             />
//             <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
//               <div className="bg-blue-900 bg-opacity-70 p-4 rounded-lg">
//                 <h2 className="text-3xl font-bold">Summer Specials</h2>
//                 <p className="text-lg">Enjoy hot deals this summer</p>
//                 <button className="group/btn bg-blue-500 p-4 rounded-lg mt-2 flex items-center text-white font-semibold hover:scale-105 duration-200 transition-transform">
//                   Shop Now
//                   <ArrowRight
//                     strokeWidth={3}
//                     className="ml-1 transform transition-transform duration-200 group-hover/btn:translate-x-2"
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="group/image h-full w-[40%] relative rounded-lg shadow-lg overflow-hidden bg-gradient-to-r from-green-400 to-teal-500">
//             <Image
//               src={deal4Img}
//               alt="Deal 4"
//               width={500}
//               height={500}
//               className="opacity-75 object-cover transform transition-transform duration-200 group-hover/image:scale-110"
//             />
//             <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
//               <div className="bg-teal-700 bg-opacity-60 p-4 rounded-lg">
//                 <h2 className="text-3xl font-bold">Buy 1 Get 1 Free</h2>
//                 <p className="text-md">Exclusive offer on select items</p>
//                 <button className="group/btn bg-teal-500 p-4 rounded-lg mt-2 flex items-center text-white font-semibold hover:scale-105 duration-200 transition-transform">
//                   Shop Now
//                   <ArrowRight
//                     strokeWidth={3}
//                     className="ml-1 transform transition-transform duration-200 group-hover/btn:translate-x-2"
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="w-full h-1/2 flex gap-4">
//           <div className="group/image h-full w-[45%] relative rounded-lg shadow-lg overflow-hidden bg-gradient-to-r from-red-400 to-blue-500">
//             <Image
//               src={deal5Img}
//               alt="Deal 5"
//               width={500}
//               height={500}
//               className="opacity-75 object-cover transform transition-transform duration-200 group-hover/image:scale-110"
//             />x
//             <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
//               <div className="bg-blue-800 bg-opacity-60 p-4 rounded-lg">
//                 <h2 className="text-3xl font-bold">Starter Kits</h2>
//                 <p className="text-lg">Perfect for beginners</p>
//                 <button className="group/btn bg-rose-400 p-4 rounded-lg mt-2 flex items-center text-white font-semibold hover:scale-105 duration-200 transition-transform">
//                   Shop Now
//                   <ArrowRight
//                     strokeWidth={3}
//                     className="ml-1 transform transition-transform duration-200 group-hover/btn:translate-x-2"
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="group/image h-full w-[55%] relative rounded-lg shadow-lg overflow-hidden bg-gradient-to-r from-yellow-400 to-orange-500">
//             <Image
//               src={deal6Img}
//               alt="Deal 6"
//               width={500}
//               height={500}
//               className="opacity-75 object-cover transform transition-transform duration-200 group-hover/image:scale-110"
//             />
//             <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
//               <div className="bg-orange-700 bg-opacity-60 p-4 rounded-lg">
//                 <h2 className="text-3xl font-bold">Limited Edition</h2>
//                 <p className="text-lg">Exclusive limited-time items</p>
//                 <button className="group/btn bg-yellow-400 p-4 rounded-lg mt-2 flex items-center text-white font-semibold hover:scale-105 duration-200 transition-transform">
//                   Shop Now
//                   <ArrowRight
//                     strokeWidth={3}
//                     className="ml-1 transform transition-transform duration-200 group-hover/btn:translate-x-2"
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DealsShortVideo;

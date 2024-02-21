/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      //0 => 480px
      'sm': '480px',
      // 480px => 768px *

      'md': '770px',
      // 770px => 1020px ...

      'lg': '1020px',
      // 1020px => 1200px

      'xl': '1200px',
      // 1200px => ...

      '2xl': '1300px',
      //1400px => ...

      '3xl': '1500px',
      //1400px => ...

      '4xl': '2500px',
      //1400px => ...
    },
   
    extend: {
      colors: {
        'hambourger': '#4c4c4c',
        'borderColor': '#FFD700',
        'progressBarBg': '#e5ffee',
        'altBg': '#fafbfd',
        'altBgMedium': '#d9d9d9',
        'textMedium': '#FFD700',
        'textLight': '#FFD700',
        'darkBgLight': '#313131',
        'darkBgMedium': '#131313',
        
  
      },
     
    },
  },
  plugins: [require("daisyui")],
}


// <section
//       className="text-textMedium py-20 bg-altBg rounded-lg shadow-lg max-w-full mx-auto px-4 lg:bg-white lg:relative lg:h-[86vh]"
//       // style={{ border: "2px solid black" }}
//       // container relative h-[85vh] -z-10 text-center
//     >
//        <div className="h-96 z-10 mb-20 lg:absolute lg:pt-0 lg:h-[450px] lg:right-[30%] lg:top-[13%]">
//       {/* absolute top-10 right-64 */}
//         <img src={myPhoto} alt="" className="h-full mx-auto rounded-lg" style={{}} />
//         {/* h-[550px] w-[400px] */}
//       </div>

//       <div className="flex justify-center mt-10 mb-5"> <img src={quotes} alt="" /> </div>

//       <div className="text-2xl text-center px-8 lg:text-3xl lg:absolute lg:h-full lg:w-[55vw] lg:left-0 lg:bg-altBg lg:pt-44 lg:pr-[25%] xl:pr-[15%]">
//         {/* h-full w-[900px] */}
//         <div className="">
//           {/* text-4xl pt-36 px-52 */}
//           <p>
//             "I&#39;m out to invest in an enduring software career and to seek
//             self-development, advancement and improvement while enjoying job
//             satisfaction."
//             {/* Well proven in, with the precision and loyalty
//             required to excel. */}
//           </p>
//         </div>
//       </div>

//       <img src={dottedSmall} alt="bg" className="absolute top-5 right-[400px] hidden lg:block animate-pulse"/>
//       <img src={dottedSmall} alt="bg" className="absolute top-5 right-[500px] hidden lg:block"/>
//       <img src={dottedSmall} alt="bg" className="absolute top-36 right-[400px] hidden lg:block"/>
      

     
//     </section>
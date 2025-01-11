// // // // import React from 'react'
// // // // function Filters({ showFilters, setShowFilters, filters, setFilters, }) {
// // // //   const categories = [{
// // // //     name: "Oil",
// // // //     value:"oil"
// // // //   },
// // // //   {
// // // //     name: "Honey",
// // // //     value:"honey"
// // // //     },
// // // //     {
// // // //       name: "Dairy",
// // // //       value:"dairy"
// // // //     },
// // // //     {
// // // //       name: "jam",
// // // //       value:"jams"
// // // //     },
// // // //   ]
// // // //   const ages = [
// // // //     {
// // // //       name: "0-2 years old",
// // // //       values:"0-2"
// // // //     },
// // // //     {
// // // //       name: "3-5 years old",
// // // //       values:"3-5"
// // // //     },
// // // //     {
// // // //       name: "6-8 years old",
// // // //       values:"6-8"
// // // //     },
// // // //     {
// // // //       name: "9-12 years old",
// // // //       values:"9-12"
// // // //     },
// // // //     {
// // // //       name: "13+ years old",
// // // //       values:"12-20"
// // // //     }
// // // //   ]

// // // //   return (
// // // //     <div
// // // //       className='w-72 flex flex-col'>
// // // //       <div className='flex justify-between'>
// // // //         <h1 className='text-orange-500 text-xl'>Filters</h1>
// // // //         <i className='ri-close-line text-xl cursor-pointer' onClick={() => setShowFilters(!showFilters)}></i>
// // // //       </div>
// // // //       <div className='flex flex-col gap-1 mt-5'>
// // // //         <h1 className='text-gray-600'>categories</h1>
// // // //         {categories.map((category) => {
// // // //           return <div className='flex item-center gap-2'>
// // // //             <input type="checkbox"/>

// // // //           </div>
// // // //         })}
// // // //         </div>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default Filters
// // // // // import React from "react";

// // // // // function Filters({ showFilters, setShowFilters, filters, setFilters }) {
// // // // //   const updateFilter = (key, value) => {
// // // // //     setFilters((prevFilters) => ({
// // // // //       ...prevFilters,
// // // // //       [key]: value,
// // // // //     }));
// // // // //   };

// // // // //   return (
// // // // //     <div className="w-72 border-r border-gray-300 p-5">
// // // // //       <div className="flex justify-between items-center">
// // // // //         <h1 className="text-orange-500 text-xl">Filters</h1>
// // // // //         <i
// // // // //           className="ri-close-line text-xl cursor-pointer"
// // // // //           onClick={() => setShowFilters(false)}
// // // // //         ></i>
// // // // //       </div>
// // // // //       <div className="mt-5">
// // // // //         {/* Example Filter: Price Range */}
// // // // //         <div className="mb-5">
// // // // //           <label className="text-sm font-semibold">Price Range</label>
// // // // //           <input
// // // // //             type="number"
// // // // //             placeholder="Min"
// // // // //             className="w-full border border-gray-300 rounded p-2 mb-2"
// // // // //             onChange={(e) => updateFilter("minPrice", e.target.value)}
// // // // //           />
// // // // //           <input
// // // // //             type="number"
// // // // //             placeholder="Max"
// // // // //             className="w-full border border-gray-300 rounded p-2"
// // // // //             onChange={(e) => updateFilter("maxPrice", e.target.value)}
// // // // //           />
// // // // //         </div>

// // // // //         {/* Example Filter: Category */}
// // // // //         <div className="mb-5">
// // // // //           <label className="text-sm font-semibold">Category</label>
// // // // //           <select
// // // // //             className="w-full border border-gray-300 rounded p-2"
// // // // //             onChange={(e) => updateFilter("category", e.target.value)}
// // // // //           >
// // // // //             <option value="">All</option>
// // // // //             <option value="honey">honey</option>
// // // // //             <option value="fashion">Fashion</option>
// // // // //             <option value="home">Home</option>
// // // // //           </select>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default Filters;
// // // import React from "react";

// // // function Filters({ showFilters, setShowFilters, filters, setFilters }) {
// // //   const categories = [
// // //     { name: "Oil", value: "oil" },
// // //     { name: "Honey", value: "honey" },
// // //     { name: "Dairy", value: "dairy" },
// // //     { name: "Jam", value: "jams" },
// // //   ];

// // //   const ages = [
// // //     { name: "0-2 years old", value: "0-2" },
// // //     { name: "3-5 years old", value: "3-5" },
// // //     { name: "6-8 years old", value: "6-8" },
// // //     { name: "9-12 years old", value: "9-12" },
// // //     { name: "13+ years old", value: "12-20" },
// // //   ];

// // //   const updateFilter = (key, value, checked = false) => {
// // //     if (checked) {
// // //       setFilters((prevFilters) => ({
// // //         ...prevFilters,
// // //         [key]: [...(prevFilters[key] || []), value],
// // //       }));
// // //     } else {
// // //       setFilters((prevFilters) => ({
// // //         ...prevFilters,
// // //         [key]: (prevFilters[key] || []).filter((item) => item !== value),
// // //       }));
// // //     }
// // //   };

// // //   return (
// // //     <div className="w-72 flex flex-col border-r border-gray-300 p-5">
// // //       <div className="flex justify-between items-center">
// // //         <h1 className="text-orange-500 text-xl">Filters</h1>
// // //         <i
// // //           className="ri-close-line text-xl cursor-pointer"
// // //           onClick={() => setShowFilters(!showFilters)}
// // //         ></i>
// // //       </div>
// // //       <div className="flex flex-col gap-5 mt-5">
// // //         {/* Categories */}
// // //         <div>
// // //           <h1 className="text-gray-600 font-semibold mb-2">Categories</h1>
// // //           {categories.map((category) => (
// // //             <div key={category.value} className="flex items-center gap-2">
// // //               <input
// // //                 type="checkbox"
// // //                 onChange={(e) =>
// // //                   updateFilter("categories", category.value, e.target.checked)
// // //                 }
// // //               />
// // //               <label>{category.name}</label>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* Age Groups */}
// // //         <div>
// // //           <h1 className="text-gray-600 font-semibold mb-2">Age Groups</h1>
// // //           {ages.map((age) => (
// // //             <div key={age.value} className="flex items-center gap-2">
// // //               <input
// // //                 type="checkbox"
// // //                 onChange={(e) =>
// // //                   updateFilter("ages", age.value, e.target.checked)
// // //                 }
// // //               />
// // //               <label>{age.name}</label>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* Price Range */}
// // //         <div>
// // //           <h1 className="text-gray-600 font-semibold mb-2">Price Range</h1>
// // //           <input
// // //             type="number"
// // //             placeholder="Min"
// // //             className="w-full border border-gray-300 rounded p-2 mb-2"
// // //             onChange={(e) =>
// // //               setFilters((prevFilters) => ({
// // //                 ...prevFilters,
// // //                 minPrice: e.target.value,
// // //               }))
// // //             }
// // //           />
// // //           <input
// // //             type="number"
// // //             placeholder="Max"
// // //             className="w-full border border-gray-300 rounded p-2"
// // //             onChange={(e) =>
// // //               setFilters((prevFilters) => ({
// // //                 ...prevFilters,
// // //                 maxPrice: e.target.value,
// // //               }))
// // //             }
// // //           />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Filters;

// // import React from "react";

// // function Filters({ showFilters, setShowFilters, filters, setFilters }) {
// //   const categories = [
// //     { name: "Oil", value: "oil" },
// //     { name: "Honey", value: "honey" },
// //     { name: "Dairy", value: "dairy" },
// //     { name: "Jam", value: "jams" },
// //   ];

// //   const ages = [
// //     { name: "0-2 years old", value: "0-2" },
// //     { name: "3-5 years old", value: "3-5" },
// //     { name: "6-8 years old", value: "6-8" },
// //     { name: "9-12 years old", value: "9-12" },
// //     { name: "13+ years old", value: "12-20" },
// //   ];

// //   const updateFilter = (key, value, checked = false) => {
// //     setFilters((prevFilters) => {
// //       const updatedKey = checked
// //         ? [...(prevFilters[key] || []), value]
// //         : prevFilters[key]?.filter((item) => item !== value);
// //       return { ...prevFilters, [key]: updatedKey };
// //     });
// //   };

// //   return (
// //     <div className="w-72 flex flex-col border-r border-gray-300 p-5">
// //       <div className="flex justify-between items-center">
// //         <h1 className="text-orange-500 text-xl">Filters</h1>
// //         <i
// //           className="ri-close-line text-xl cursor-pointer"
// //           onClick={() => setShowFilters(!showFilters)}
// //         ></i>
// //       </div>
// //       <div className="flex flex-col gap-5 mt-5">
// //         {/* Categories */}
// //         <div>
// //           <h1 className="text-gray-600 font-semibold mb-2">Categories</h1>
// //           {categories.map((category) => (
// //             <div key={category.value} className="flex items-center gap-2">
// //               <input
// //                 type="checkbox"
// //                 style={{ width: "30px", height: "30px" }}
// //                 checked={filters.categories.includes(category.value)}
// //                 onChange={(e) =>
// //                   updateFilter("categories", category.value, e.target.checked)
// //                 }
// //               />
// //               <label>{category.name}</label>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Age Groups */}
// //         <div>
// //           <h1 className="text-gray-600 font-semibold mb-2">Age Groups</h1>
// //           {ages.map((age) => (
// //             <div key={age.value} className="flex items-center gap-2">
// //               <input
// //                 type="checkbox"
// //                 style={{ width: "30px", height: "30px" }}
// //                 checked={filters.ages.includes(age.value)}
// //                 onChange={(e) =>
// //                   updateFilter("ages", age.value, e.target.checked)
// //                 }
// //               />
// //               <label>{age.name}</label>
// //             </div>
// //           ))}
// //         </div>


// //       </div>
// //     </div>
// //   );
// // }

// // export default Filters;
// import React from "react";

// function Filters({ showFilters, setShowFilters, filters, setFilters }) {
//   const categories = [
//     { name: "Oil", value: "oils" },
//     { name: "Honey", value: "honey" },
//     { name: "Dairy", value: "dairy" },
//     { name: "Jam", value: "jams" },
//   ];

//   const ages = [
//     { name: "0-2 years old", value: "0-2" },
//     { name: "3-5 years old", value: "3-5" },
//     { name: "6-8 years old", value: "6-8" },
//     { name: "9-12 years old", value: "9-12" },
//     { name: "13+ years old", value: "12-20" },
//   ];

//   const updateFilter = (key, value, checked) => {
//     setFilters((prevFilters) => {
//       const updatedKey = checked
//         ? [...prevFilters[key], value]
//         : prevFilters[key].filter((item) => item !== value);

//       return { ...prevFilters, [key]: updatedKey };
//     });
//   };

//   return (
//     <div className="w-72 flex flex-col border-r border-gray-300 p-5">
//       <div className="flex justify-between items-center">
//         <h1 className="text-orange-500 text-xl">Filters</h1>
//         <i
//           className="ri-close-line text-xl cursor-pointer"
//           onClick={() => setShowFilters(!showFilters)}
//         ></i>
//       </div>
//       <div className="flex flex-col gap-5 mt-5">
//         {/* Categories */}
//         <div>
//           <h1 className="text-gray-600 font-semibold mb-2">Categories</h1>
//           {categories.map((category) => (
//             <div key={category.value} className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 style={{ width: "30px", height: "30px" }}
//                 checked={filters.category.includes(category.value)}
//                 onChange={(e) =>
//                   updateFilter("category", category.value, e.target.checked)
//                 }
//               />
//               <label>{category.name}</label>
//             </div>
//           ))}
//         </div>

//         {/* Age Groups */}
//         <div>
//           <h1 className="text-gray-600 font-semibold mb-2">Age Groups</h1>
//           {ages.map((age) => (
//             <div key={age.value} className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 style={{ width: "30px", height: "30px" }}
//                 checked={filters.ages.includes(age.value)}
//                 onChange={(e) =>
//                   updateFilter("ages", age.value, e.target.checked)
//                 }
//               />
//               <label>{age.name}</label>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Filters;
import React from "react";
import { message } from "antd";
import './home.css'
function Filters({ showFilters, setShowFilters, filters, setFilters }) {
  const categories = [
    { name: "زيوت", value: "oils" },
    { name: "مربى", value: "jams" },
    { name: "ألبان", value: "dairy" },
    { name: "عسل", value: "honey" },
    { name: "مخللات", value: "pickles" },
    { name: "أعشاب وبهارات", value: "herbs-and-spices" },
    { name: "حبوب وبقوليات", value: "grains-and-legumes" },
    { name: "لحوم محفوظة", value: "preserved-meats" },
    { name: "أجبان", value: "cheeses" },
    { name: "شراب", value: "syrups" },
    { name: "مكسرات وفواكه مجففة", value: "nuts-and-dried-fruits" },
    { name: "معلبات", value: "canned-goods" },
    { name: "خبز", value: "breads" },
  ];

  // const ages = [
  //   { name: "من 0 إلى 2 سنوات", value: "0-2" },
  //   { name: "من 3 إلى 5 سنوات", value: "3-5" },
  //   { name: "من 6 إلى 8 سنوات", value: "6-8" },
  //   { name: "من 9 إلى 12 سنة", value: "9-12" },
  //   { name: "من 13 سنة فما فوق", value: "12-20" },
  // ];

  const updateFilter = (key, value, checked) => {
    try {
      setFilters((prevFilters) => {
        const updatedKey = checked
          ? [...prevFilters[key], value]
          : prevFilters[key].filter((item) => item !== value);

        return { ...prevFilters, [key]: updatedKey };
      });
    } catch (error) {
      message.error("حدث خطأ أثناء تحديث الفلاتر"); // Error message in case of failure
    }
  };

  return (
    <div className="w-72 flex flex-col border-r border-gray-300 p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-orange-500 text-xl">الفلاتر</h1>
        <i
          className="ri-close-line text-xl cursor-pointer"
          onClick={() => setShowFilters(!showFilters)}
        ></i>
      </div>
      <div className="flex flex-col gap-5 mt-5">
        {/* Categories */}
        <div>
          <h1 className="text-gray-600 font-semibold mb-2">الفئات</h1>
          {categories.map((category) => (
            <div key={category.value} className="flex items-center gap-2">
              <input
                class="A"
                type="checkbox"
                checked={filters.category.includes(category.value)}
                onChange={(e) =>
                  updateFilter("category", category.value, e.target.checked)
                }
              />
              <label>{category.name}</label>
            </div>
          ))}
        </div>

        {/* Age Groups */}
        {/* <div>
          <h1 className="text-gray-600 font-semibold mb-2">الفئات العمرية</h1>
          {ages.map((age) => (
            <div key={age.value} className="flex items-center gap-2">
              <input
                type="checkbox"
                style={{ width: "30px", height: "30px" }}
                checked={filters.ages.includes(age.value)}
                onChange={(e) =>
                  updateFilter("ages", age.value, e.target.checked)
                }
              />
              <label>{age.name}</label>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Filters;

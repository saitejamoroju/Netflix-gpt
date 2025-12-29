import { type } from "@testing-library/user-event/dist/type";
import React from "react";

const data = [
  {
    id: 201,
    name: "Arjun Mehta",
    role: "Full Stack Developer",
    department: { id: "ENG-01", name: "Engineering" },
    skills: ["React", "Node.js", "GraphQL", "Docker"],
    projects: [
      { name: "E-Commerce Platform", status: "Active", budget: 250000 },
      { name: "Internal Tools", status: "Completed", budget: 80000 },
    ],
    salary: 95000,
    dateOfJoining: "2019-08-14",
    remote: true,
  },
  {
    id: 202,
    name: "Sara Khan",
    role: "Project Manager",
    department: { id: "PM-01", name: "Product Management" },
    skills: ["Agile", "Scrum", "Leadership", "Communication"],
    projects: [{ name: "Mobile App Launch", status: "Active", budget: 180000 }],
    salary: 105000,
    dateOfJoining: "2018-03-01",
    remote: false,
  },
  {
    id: 203,
    name: "Miguel Alvarez",
    role: "Data Scientist",
    department: { id: "ANA-02", name: "Analytics" },
    skills: ["Python", "TensorFlow", "SQL", "Machine Learning"],
    projects: [
      { name: "Predictive Analytics", status: "Active", budget: 300000 },
      { name: "Customer Segmentation", status: "On Hold", budget: 120000 },
    ],
    salary: 115000,
    dateOfJoining: "2020-01-22",
    remote: true,
  },
  {
    id: 204,
    name: "Emily Brown",
    role: "UX Designer",
    department: { id: "DES-01", name: "Design" },
    skills: ["Figma", "Sketch", "User Research", "Prototyping"],
    projects: [
      { name: "Website Redesign", status: "Completed", budget: 95000 },
    ],
    salary: 78000,
    dateOfJoining: "2017-11-10",
    remote: false,
  },
  {
    id: 205,
    name: "Kenji Tanaka",
    role: "QA Engineer",
    department: { id: "ENG-02", name: "Engineering" },
    skills: ["Selenium", "Cypress", "Automation", "Jest"],
    projects: [
      { name: "Testing Framework Upgrade", status: "Active", budget: 100000 },
    ],
    salary: 72000,
    dateOfJoining: "2021-05-05",
    remote: true,
  },
];
const header = Object.keys(data[0]);
//console.log("logging header", header);
const isProject = false;


  // return (
  //   <>
  //     <table className="border border-gray-300 p-5 m-5">
  //       <thead className="bg-gray-400 h-5 text-left">
  //         <tr className="">
  //           {header.map((item, idx) => (
  //             <th className="px-3" key={idx}>
  //               {item}
  //             </th>
  //           ))}
  //         </tr>
  //       </thead>
  //       <tbody className="">
  //         {data.map((item, index) => {
  //           return (
  //             <tr key={index} className="p-3 border border-b-red-500">
  //               {Object.entries(item).map(([key, val], idx) => {
  //                 const isProject = key === "projects" ? true : false;
  //                 if (isProject && typeof val === "object") {
  //                   return (
  //                     <td className="p-2 border border-r-red-600">
  //                       {val.map((item, idx) => (
  //                         <div>
  //                           {item.name} ({item.status}, $ {item.budget})
  //                         </div>
  //                       ))}
  //                     </td>
  //                   );
  //                 } else if (Array.isArray(val)) {
  //                   return (
  //                   <>
  //                     <td key={idx} className="p-2 border border-r-red-600 ">
  //                       {val.map((inner, i) => (
  //                         <span key={i}>{ inner+", " }</span>
  //                       ))}
  //                     </td>
  //                   </>

  //                   );
  //                 } else if (typeof val === "object" && val !== null) {
  //                   return <td className="p-2 border border-r-red-600">{Object.values(val).join(", ")}</td>;
  //                 } else {
  //                   if(typeof val === "boolean"){
  //                     val = val ? "✅" : "❌";
  //                   }
  //                   return <td className="p-2 border border-r-red-600" key={idx}>{val}</td>;
  //                 }
  //               })}
  //             </tr>
  //           );
  //         })}
  //       </tbody>
  //     </table>
  //   </>
  // );
const Practice = () => {


  function renderCellContent(val) {
    if (typeof val === "object") {
      return (
        <div>
          {Object.entries(val).map(([key, val], i) => (
            <span>
              {renderCellContent(val)}
            </span>
          ))}
        </div>
      );
    } else if (Array.isArray(val)) {
      return (
        <div className="p-2 m-2">
          {val.map((inner, i) => (
            <div key={i}>{renderCellContent(inner)}</div>
          ))}
        </div>
      );
    }else{
      if(typeof val==="boolean"){
        return val?"yes":"no";
      }
      return val;
    }
  }

    return (
       <div>
       <table className="m-5 border-spacing-0">
         <thead className="bg-gray-400">
          <tr className="border border-red-900">
             {header.map((item, idx) => (
              <th className="px-3 border border-r-black" key={idx}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
      <tbody>
        {data.map((item, index) => {
         return(
           <tr key={index} className="">
            {Object.entries(item).map(([_key, val], colIdx) => (
              <td className="p-3 border border-red-400" key={colIdx}>{renderCellContent(val)}</td>
            ))}
          </tr>
         )
        })}
      </tbody>
       </table>
       </div>
    );
  };

export default Practice;

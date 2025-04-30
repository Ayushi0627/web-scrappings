// // import React from 'react';
// // import { useLocation } from 'react-router-dom';
// // import { jsPDF } from 'jspdf';
// // import 'jspdf-autotable';

// // const CVPages = () => {
// //   const location = useLocation();
// //   const { data } = location.state || { data: [] };

// //   const generatePDF = () => {
// //     const doc = new jsPDF('p', 'pt', 'a4');

// //     doc.setFontSize(22);
// //     doc.text('Faculty CV', 40, 40);

// //     data.forEach((faculty, index) => {
// //       doc.setFontSize(16);
// //       doc.text(`Name: ${faculty.name}`, 40, 70);
// //       doc.text(`Email: ${faculty.email}`, 40, 90);

// //       // Personal Info Section
// //       doc.setFontSize(14);
// //       doc.text('Personal Info:', 40, 110);
// //       doc.text(`Department: ${faculty.department}`, 40, 130);
// //       doc.text(`Research Interests: ${faculty.researchInterests}`, 40, 150);
      
// //       // Image Section
// //       const img = new Image();
// //       img.src = faculty.image; // Ensure the image URL is correct
// //       img.onload = () => {
// //         doc.addImage(img, 'JPEG', 400, 70, 100, 100); // Adjust the size as needed
// //         doc.text('Research Papers:', 40, 200);

// //         // Research Papers Section
// //         if (faculty.researchPapers) {
// //           const researchTitles = faculty.researchPapers.map(paper => paper.title);
// //           doc.autoTable({
// //             head: [['Title']],
// //             body: researchTitles.map(title => [title]),
// //             startY: 210,
// //             margin: { top: 10 },
// //           });
// //         }
        
// //         if (index < data.length - 1) {
// //           doc.addPage();
// //         } else {
// //           doc.save(`faculty_cv_${faculty.name}.pdf`);
// //         }
// //       };
// //     });
// //   };

// //   return (
// //     <div>
// //       {data.map((faculty, index) => (
// //         <div key={index} style={{ display: 'flex', marginBottom: '20px' }}>
// //           <div style={{ flex: 1 }}>
// //             <h2>{faculty.name}</h2>
// //             <p>Email: {faculty.email}</p>
// //             <h3>Personal Info:</h3>
// //             <p>Department: {faculty.department}</p>
// //             <p>Research Interests: {faculty.researchInterests}</p>
// //             <h3>Research Papers:</h3>
// //             <ul>
// //               {faculty.researchPapers && faculty.researchPapers.map((paper, i) => (
// //                 <li key={i}>{paper.title}</li>
// //               ))}
// //             </ul>
// //           </div>
// //           <div>
// //             <img src={faculty.image} alt={faculty.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
// //           </div>
// //         </div>
// //       ))}
// //       <button onClick={generatePDF}>Download CV</button>
// //     </div>
// //   );
// // };

// // export default CVPages;
// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { jsPDF } from 'jspdf';
// import 'jspdf-autotable';

// const CVPages = () => {
//     const facultyData = [
//   {
//     name: "Dr. John Doe", // This is where faculty.name is defined
//     email: "johndoe@example.com", // This is where faculty.email is defined
//     department: "Computer Science",
//     researchInterests: "AI, Machine Learning",
//     researchPapers: [{ title: "Paper 1" }, { title: "Paper 2" }],
//     image: "image-url.jpg" // Replace with the actual image URL
//   },
//   {
//     name: "Dr. Jane Smith", // Another faculty member
//     email: "janesmith@example.com",
//     department: "Mathematics",
//     researchInterests: "Algebra, Geometry",
//     researchPapers: [{ title: "Paper 3" }, { title: "Paper 4" }],
//     image: "image-url-2.jpg"
//   }
// ];

//   const location = useLocation();
//   const { data } = location.state || { data: [] }; // Ensure it safely defaults to an empty array

//   const generatePDF = () => {
//     const doc = new jsPDF('p', 'pt', 'a4');

//     data.forEach((faculty, index) => {
//       doc.setFontSize(22);
//       doc.text('Faculty CV', 40, 40);
//       doc.setFontSize(16);
//       doc.text(`Name: ${faculty.name}`, 40, 70);
//       doc.text(`Email: ${faculty.email}`, 40, 90);

//       // Personal Info Section
//       doc.setFontSize(14);
//       doc.text('Personal Info:', 40, 110);
//       doc.text(`Department: ${faculty.department}`, 40, 130);
//       doc.text(`Research Interests: ${faculty.researchInterests}`, 40, 150);
      
//       // Image Section
//       const img = new Image();
//       img.src = faculty.image; // Ensure the image URL is correct
//       img.onload = () => {
//         doc.addImage(img, 'JPEG', 400, 70, 100, 100); // Adjust the size as needed
//         doc.text('Research Papers:', 40, 200);

//         // Research Papers Section
//         if (faculty.researchPapers) {
//           const researchTitles = faculty.researchPapers.map(paper => paper.title);
//           doc.autoTable({
//             head: [['Title']],
//             body: researchTitles.map(title => [title]),
//             startY: 210,
//             margin: { top: 10 },
//           });
//         }
        
//         if (index < data.length - 1) {
//           doc.addPage();
//         } else {
//           doc.save(`faculty_cv_${faculty.name}.pdf`);
//         }
//       };
//     });
//   };

//   return (
//     <div>
//       {data.map((faculty, index) => (
//         <div key={index} style={{ display: 'flex', marginBottom: '20px' }}>
//           <div style={{ flex: 1 }}>
//             <h2>{faculty.name}</h2>
//             <p>Email: {faculty.email}</p>
//             <h3>Personal Info:hi i am ayushi</h3>
//             <p>Department: {faculty.department}</p>
//             <p>Research Interests: {faculty.researchInterests}</p>
//             <h3>Research Papers:</h3>
//             <ul>
//               {faculty.researchPapers && faculty.researchPapers.map((paper, i) => (
//                 <li key={i}>{paper.title}</li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <img src={faculty.image} alt={faculty.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
//           </div>
//         </div>
//       ))}
//       <button onClick={generatePDF}>Download CV</button>
//     </div>
//   );
// };

// export default CVPages;
// import React, { useState } from 'react';
// import { jsPDF } from 'jspdf';
// import 'jspdf-autotable';

// const CVPages = () => {
//   // Sample faculty data
//   const facultyData = [
//     {
//       name: "Dr. NP Singh",
//       email: "npsingh@example.com",
//       department: "Computer Science",
//       researchInterests: "Machine Learning, Data Science",
//       researchPapers: [{ title: "Paper A" }, { title: "Paper B" }],
//       image: "image-url-np.jpg" // Replace with actual image URL
//     },
   
//     // Add more faculty objects here if needed
//   ];

//   const [selectedFaculty, setSelectedFaculty] = useState(null); // State to track selected faculty

//   const handleSelectFaculty = (faculty) => {
//     setSelectedFaculty(faculty); // Set the selected faculty when a button is clicked
//   };

//   const generatePDF = () => {
//     if (!selectedFaculty) {
//       alert("Please select a faculty member.");
//       return;
//     }

//     const doc = new jsPDF('p', 'pt', 'a4');
//     doc.setFontSize(22);
//     doc.text('Faculty CV', 40, 40);
//     doc.setFontSize(16);
//     doc.text(`Name: ${selectedFaculty.name}`, 40, 70);
//     doc.text(`Email: ${selectedFaculty.email}`, 40, 90);

//     // Personal Info Section
//     doc.setFontSize(14);
//     doc.text('Personal Info:', 40, 110);
//     doc.text(`Department: ${selectedFaculty.department}`, 40, 130);
//     doc.text(`Research Interests: ${selectedFaculty.researchInterests}`, 40, 150);
    
//     // Image Section
//     const img = new Image();
//     img.src = selectedFaculty.image; // Ensure the image URL is correct
//     img.onload = () => {
//       doc.addImage(img, 'JPEG', 400, 70, 100, 100); // Adjust the size as needed
//       doc.text('Research Papers:', 40, 200);

//       // Research Papers Section
//       if (selectedFaculty.researchPapers) {
//         const researchTitles = selectedFaculty.researchPapers.map(paper => paper.title);
//         doc.autoTable({
//           head: [['Title']],
//           body: researchTitles.map(title => [title]),
//           startY: 210,
//           margin: { top: 10 },
//         });
//       }
      
//       doc.save(`faculty_cv_${selectedFaculty.name}.pdf`);
//     };
//   };

//   return (
//     <div>
//       <h1>Select a Faculty Member to Generate CV</h1>
//       {facultyData.map((faculty, index) => (
//         <div key={index} style={{ display: 'flex', marginBottom: '20px' }}>
//           <div style={{ flex: 1 }}>
//             <h2>{faculty.name}</h2>
//             <p>Email: {faculty.email}</p>
//             <h3>Personal Info:</h3>
//             <p>Department: {faculty.department}</p>
//             <p>Research Interests: {faculty.researchInterests}</p>
//             <h3>Research Papers:</h3>
//             <ul>
//               {faculty.researchPapers && faculty.researchPapers.map((paper, i) => (
//                 <li key={i}>{paper.title}</li>
//               ))}
//             </ul>
//             <button onClick={() => handleSelectFaculty(faculty)}>Select</button> {/* Button to select faculty */}
//           </div>
//           <div>
//             <img src={faculty.image} alt={faculty.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
//           </div>
//         </div>
//       ))}

//       {/* Display only the selected faculty member's CV */}
//       {selectedFaculty && (
//         <div style={{ marginTop: '40px', border: '1px solid #ccc', padding: '20px' }}>
//           <h2>Selected Faculty: {selectedFaculty.name}</h2>
//           <p>Email: {selectedFaculty.email}</p>
//           <h3>Personal Info:</h3>
//           <p>Department: {selectedFaculty.department}</p>
//           <p>Research Interests: {selectedFaculty.researchInterests}</p>
//           <h3>Research Papers:</h3>
//           <ul>
//             {selectedFaculty.researchPapers && selectedFaculty.researchPapers.map((paper, i) => (
//               <li key={i}>{paper.title}</li>
//             ))}
//           </ul>
//           <img src={selectedFaculty.image} alt={selectedFaculty.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
//         </div>
//       )}

//       <button onClick={generatePDF} style={{ marginTop: '20px' }}>Download Selected Faculty CV</button>
//     </div>
//   );
// };

// export default CVPages;

// import React, { useState } from 'react';
// import { jsPDF } from 'jspdf';
// import 'jspdf-autotable';

// const CVPages = () => {
//   const facultyLinks = {
//     CSE: {
//       'Dr Nagendra Pratap Singh': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447338bff038a7808e10',
//       'Dr Ajay Kr Sharma': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447338bff038a7808e10',
//         'Dr A L Sangal': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430445438bff038a78055b4',
//         'Dr Harsh K Verma': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430445438bff038a7805712',
//         'Dr Renu Dhir': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430445438bff038a78057a2',
//         'Mr D K Gupta': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447538bff038a780903f',
//         'Dr Geeta Sikka': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430445438bff038a7805647',
//         'Dr Rajneesh Rani': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430445538bff038a78057f8',
//         'Dr Amritpal Singh': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446d38bff038a78088fb',
//         'Dr Aruna Malik': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446c38bff038a780874c',
//         'Dr K P Sharma': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446838bff038a7807d43',
//         'Dr Samayveer Singh': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446b38bff038a78085b7',
//         'Dr Urvashi': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446c38bff038a780870c',
//         'Dr Avtar Singh': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446338bff038a7807694',
//         'Dr Prashant Kumar': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446d38bff038a78088bb',
//         'Dr Banalaxmi Brahma': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447438bff038a7808f65',
//         'Mr Rahul Aggarwal': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430445438bff038a78057f4',
//         'Dr Jagdeep Kaur': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446d38bff038a78088a2',
//         'Dr Kunwar Pal': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446e38bff038a7808a14',
//         'Dr Lalatendu Behera': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446e38bff038a7808a31',
//         'Dr Madhurima Buragohian': 'https://departments.nitj.ac.in/dept/cse/Faculty/66ed50e15beeaa89d07faca8',
//         'Dr Naina Yadav': 'https://departments.nitj.ac.in/dept/cse/Faculty/66ed51145beeaa89d07fbcb0',
//         'Dr Shefali Arora': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447138bff038a7808ce8',
//         'Dr Shweta Mahajan': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447038bff038a7808ccb',
//         'Dr Somesula Manoj Kumar': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447538bff038a7808fad',
//         'Dr Sumit Kumar': 'https://departments.nitj.ac.in/dept/cse/Faculty/66ed514d5beeaa89d07fd562',
//         'Dr Swarnima Singh Gautam': 'https://departments.nitj.ac.in/dept/cse/Faculty/652795ccb8c492ab73d26ad2',
//         'Dr Tanmay Kumar Behera': 'https://departments.nitj.ac.in/dept/cse/Faculty/66ed51815beeaa89d07fdf96',
//         },
      
//     ECE: {
//       'Dr Rakesh Kumar': 'https://departments.nitj.ac.in/dept/ece/Faculty/12345',
//       // Add other faculty members here...
//     },
//     // Add other departments...
//   };

//   const facultyData = Object.entries(facultyLinks).flatMap(([department, members]) =>
//     Object.entries(members).map(([name, link]) => ({
//       name,
//       link,
//       department,
//       image: "nps.jpg", // Placeholder for actual image URLs
//       email: `${name.split(' ').map(word => word[0].toLowerCase()).join('')}${name.split(' ').slice(-1)[0].toLowerCase()}@nitj.ac.in`, // Adjusted email format
//       researchInterests: "Research Interests", // Placeholder
//       researchPapers: [
//         { title: "Research Paper 1", authors: "Author A, Author B", year: 2020 },
//         { title: "Research Paper 2", authors: "Author C", year: 2021 }
//       ], // Updated with authors and year
//     }))
//   );

//   const [selectedFaculty, setSelectedFaculty] = useState(facultyData[0]); // Default to the first faculty member

//   const generatePDF = () => {
//     if (!selectedFaculty) {
//       alert("Please select a faculty member.");
//       return;
//     }

//     const doc = new jsPDF('p', 'pt', 'a4');
//     doc.setFontSize(22);
//     doc.text('Curriculum Vitae', 40, 40);
    
//     // Name and Email Section
//     doc.setFontSize(16);
//     doc.text(`Name: ${selectedFaculty.name}`, 40, 70);
//     doc.text(`Email: ${selectedFaculty.email}`, 40, 90);
    
//     // Personal Info Section
//     doc.setFontSize(14);
//     doc.text('Personal Information:', 40, 110);
//     doc.text(`Department: ${selectedFaculty.department}`, 40, 130);
//     doc.text(`Research Interests: ${selectedFaculty.researchInterests}`, 40, 150);
    
//     // Image Section
//     const img = new Image();
//     img.src = selectedFaculty.image; // Ensure the image URL is correct
//     img.onload = () => {
//       doc.addImage(img, 'JPEG', 400, 70, 100, 100); // Adjust the size as needed
      
//       // Research Papers Section
//       doc.setFontSize(16);
//       doc.text('Research Papers:', 40, 210);
      
//       // Adding a line to separate sections
//       doc.line(40, 220, 570, 220); 

//       // Create research papers table
//       if (selectedFaculty.researchPapers) {
//         const researchData = selectedFaculty.researchPapers.map((paper, index) => ({
//           sNo: index + 1,
//           title: paper.title,
//           authors: paper.authors,
//           year: paper.year,
//         }));
        
//         // Use autoTable to create a structured table
//         doc.autoTable({
//           head: [['S.No', 'Title', 'Authors', 'Year']],
//           body: researchData.map(paper => [paper.sNo, paper.title, paper.authors, paper.year]),
//           startY: 230,
//           margin: { top: 10 },
//         });
//       }

//       // Save the document
//       doc.save(`faculty_cv_${selectedFaculty.name}.pdf`);
//     };
//   };

//   return (
//     <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
//       <h1 style={{ textAlign: 'center' }}>Select a Faculty Member to Generate CV</h1>
      
//       <select
//         onChange={(e) => setSelectedFaculty(facultyData[e.target.value])}
//         value={facultyData.indexOf(selectedFaculty)}
//         style={{ display: 'block', margin: '20px auto' }}
//       >
//         {facultyData.map((faculty, index) => (
//           <option key={index} value={index}>
//             {faculty.name}
//           </option>
//         ))}
//       </select>

//       <div style={{ border: '1px solid #ccc', padding: '20px', position: 'relative', overflow: 'hidden' }}>
//         <img
//           src={selectedFaculty.image}
//           alt={selectedFaculty.name}
//           style={{ width: '100px', height: '100px', position: 'absolute', top: '20px', right: '20px', objectFit: 'cover', borderRadius: '50%' }} 
//         />
//         <h2 style={{ margin: '0 0 10px' }}>Selected Faculty: {selectedFaculty.name}</h2>
//         <p>Email: {selectedFaculty.email}</p>
//         <h3>Personal Info:</h3>
//         <p>Department: {selectedFaculty.department}</p>
//         <p>Research Interests: {selectedFaculty.researchInterests}</p>
//         <h3>Research Papers:</h3>
//         <ul>
//           {selectedFaculty.researchPapers && selectedFaculty.researchPapers.map((paper, i) => (
//             <li key={i}>{paper.title}</li>
//           ))}
//         </ul>
//       </div>

//       <button onClick={generatePDF} style={{ display: 'block', margin: '20px auto' }}>Download CV</button>
//     </div>
//   );
// };

// export default CVPages;
// import React, { useState } from 'react';
// import { jsPDF } from 'jspdf';
// import 'jspdf-autotable';

// const CVPages = () => {
//   const facultyLinks = {
//     CSE: {
//       'Dr Nagendra Pratap Singh': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447338bff038a7808e10',
//       'Dr Ajay Kr Sharma': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447338bff038a7808e10',
//     },
//   };

//   const facultyData = Object.entries(facultyLinks).flatMap(([department, members]) =>
//     Object.entries(members).map(([name, link]) => ({
//       name,
//       link,
//       department,
//       image: "nps.jpg",
//       email: `${name.split(' ').map(word => word[0].toLowerCase()).join('')}${name.split(' ').slice(-1)[0].toLowerCase()}@nitj.ac.in`,
//       researchInterests: "Research Interests",
//       researchPapers: [
//         { title: "Research Paper 1", authors: "Author A, Author B", year: 2020 },
//         { title: "Research Paper 2", authors: "Author C", year: 2021 }
//       ],
//     }))
//   );

//   const [selectedFaculty, setSelectedFaculty] = useState(facultyData[0]);

//   const generatePDF = () => {
//     if (!selectedFaculty) {
//       alert("Please select a faculty member.");
//       return;
//     }

//     const doc = new jsPDF('p', 'pt', 'a4');
//     doc.setFontSize(22);
//     doc.text('Curriculum Vitae', 40, 40);
//     doc.setFontSize(16);
//     doc.text(`Name: ${selectedFaculty.name}`, 40, 70);
//     doc.text(`Email: ${selectedFaculty.email}`, 40, 90);
//     doc.setFontSize(14);
//     doc.text('Personal Information:', 40, 110);
//     doc.text(`Department: ${selectedFaculty.department}`, 40, 130);
//     doc.text(`Research Interests: ${selectedFaculty.researchInterests}`, 40, 150);
//     doc.line(40, 220, 570, 220);
    
//     doc.autoTable({
//       head: [['S.No', 'Title', 'Authors', 'Year']],
//       body: selectedFaculty.researchPapers.map((paper, index) => [
//         index + 1, paper.title, paper.authors, paper.year
//       ]),
//       startY: 230,
//     });
//     doc.save(`faculty_cv_${selectedFaculty.name}.pdf`);
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen py-10 px-4">
//       <header className="bg-white shadow-md p-4 flex items-center justify-between">
//         <img src="nitj_logo.png" alt="NITJ Logo" className="h-12" />
//         <h1 className="text-2xl font-bold text-gray-800">Dr. B. R. Ambedkar National Institute of Technology Jalandhar</h1>
//       </header>

//       <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
//         <h2 className="text-xl font-semibold text-gray-700">Select a Faculty Member</h2>
//         <select
//           onChange={(e) => setSelectedFaculty(facultyData[e.target.value])}
//           value={facultyData.indexOf(selectedFaculty)}
//           className="block w-full mt-2 p-2 border border-gray-300 rounded"
//         >
//           {facultyData.map((faculty, index) => (
//             <option key={index} value={index}>{faculty.name}</option>
//           ))}
//         </select>
//       </div>

//       <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6 flex relative">
//         <img
//           src={selectedFaculty.image}
//           alt={selectedFaculty.name}
//           className="w-24 h-24 object-cover rounded-full border-2 border-gray-300 absolute right-6 top-6"
//         />
//         <div>
//           <h2 className="text-2xl font-bold text-gray-900">{selectedFaculty.name}</h2>
//           <p className="text-gray-600">Email: {selectedFaculty.email}</p>
//           <h3 className="text-lg font-semibold mt-4">Personal Info</h3>
//           <p className="text-gray-700">Department: {selectedFaculty.department}</p>
//           <p className="text-gray-700">Research Interests: {selectedFaculty.researchInterests}</p>
//           <h3 className="text-lg font-semibold mt-4">Research Papers</h3>
//           <ul className="list-disc pl-5">
//             {selectedFaculty.researchPapers.map((paper, i) => (
//               <li key={i} className="text-gray-700">{paper.title}</li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       <button
//         onClick={generatePDF}
//         className="block mx-auto mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//       >
//         Download CV
//       </button>
//     </div>
//   );
// };

// export default CVPages;
// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { jsPDF } from 'jspdf';

// const CVPages = () => {
//   const location = useLocation();
//   const { faculty, department, link } = location.state || {};

//   if (!faculty || !department || !link) {
//     return <div className="text-center text-red-500 text-lg mt-10">No faculty member selected. Please go back and select a faculty.</div>;
//   }

//   const downloadCV = () => {
//     const doc = new jsPDF();
    
//     // Add NIT Jalandhar Logo
//     const img = new Image();
//     img.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/NIT_Jalandhar_Logo.svg/1200px-NIT_Jalandhar_Logo.svg.png'; // NITJ logo URL
//     doc.addImage(img, 'PNG', 80, 10, 50, 20); // Adjust position & size

//     // Add header text
//     doc.setFontSize(16);
//     doc.text("National Institute of Technology Jalandhar", 40, 40);

//     // Faculty Name as Title
//     doc.setFontSize(18);
//     doc.text(`${faculty}'s CV`, 10, 60);

//     // Personal Info Section
//     doc.setFontSize(14);
//     doc.text("Personal Information:", 10, 80);
//     doc.setFontSize(12);
//     doc.text(`Name: ${faculty}`, 10, 90);
//     doc.text(`Department: ${department}`, 10, 100);
//     doc.text(`Email: ${faculty.replace(/\s+/g, '').toLowerCase()}.cs.21@nitj.ac.in`, 10, 110);
//     doc.text(`Profile Link: ${link}`, 10, 120);

//     // Research Papers Section
//     doc.setFontSize(14);
//     doc.text("Research Papers:", 10, 140);
//     doc.setFontSize(12);
//     doc.text(`Fetching research papers from: ${link}`, 10, 150);

//     // Save PDF
//     doc.save(`${faculty.replace(/\s+/g, '_')}_CV.pdf`);
//   };

//   return (
//     <div className="p-6">
//       {/* Header with NIT Jalandhar Logo */}
//       <div className="flex items-center justify-center mb-6">
//         <img 
//           src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/NIT_Jalandhar_Logo.svg/1200px-NIT_Jalandhar_Logo.svg.png" 
//           alt="NIT Jalandhar Logo" 
//           className="w-20 h-20"
//         />
//       </div>
//       <h1 className="text-3xl font-bold text-center mb-4">National Institute of Technology Jalandhar</h1>
//       <h2 className="text-2xl font-semibold mb-6 text-center">{faculty}'s CV</h2>

//       {/* CV Content */}
//       <div className="border p-6 rounded-lg shadow-lg bg-gray-100">
//         <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
//         <p><strong>Name:</strong> {faculty}</p>
//         <p><strong>Department:</strong> {department}</p>
//         <p><strong>Email:</strong> {faculty.replace(/\s+/g, '').toLowerCase()}.cs.21@nitj.ac.in</p>
//         <p><strong>Profile Link:</strong> <a href={link} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">View Profile</a></p>

//         <h2 className="text-xl font-semibold mt-6 mb-4">Research Papers</h2>
//         <p>Fetching research papers from: <span className="text-blue-500">{link}</span></p>
//       </div>

//       {/* Download CV Button */}
//       <button 
//         onClick={downloadCV} 
//         className="mt-6 px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
//       >
//         Download CV
//       </button>
//     </div>
//   );
// };

// export default CVPages;

// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const CVPages = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const facultyData = location.state;

//   if (!facultyData) {
//     return (
//       <div className="text-center text-red-500 text-lg mt-10">
//         No faculty member selected. Please <button className="text-blue-500 underline" onClick={() => navigate(-1)}>go back</button> and select a faculty.
//       </div>
//     );
//   }

//   const { faculty, designation, department, qualifications, address, email, phone, researchPapers } = facultyData;

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold text-center mb-4">{faculty}'s CV</h1>
//       <div className="border p-6 rounded-lg shadow-lg bg-gray-100">
//         <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
//         <p><strong>Name:</strong> {faculty}</p>
//         <p><strong>Designation:</strong> {designation}</p>
//         <p><strong>Department:</strong> {department}</p>
//         <p><strong>Email:</strong> {email}</p>
//         <p><strong>Phone:</strong> {phone}</p>
//         <p><strong>Address:</strong> {address}</p>

//         <h2 className="text-xl font-semibold mt-6 mb-4">Qualifications</h2>
//         <ul className="list-disc pl-5">
//           {qualifications.map((qual, index) => (
//             <li key={index} className="mb-2">{qual}</li>
//           ))}
//         </ul>

//         <h2 className="text-xl font-semibold mt-6 mb-4">Research Papers</h2>
//         <ul className="list-disc pl-5">
//           {researchPapers.length > 0 ? (
//             researchPapers.map((paper, index) => (
//               <li key={index} className="mb-2">
//                 <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                   {paper.title}
//                 </a>
//               </li>
//             ))
//           ) : (
//             <p className="text-gray-500">No research papers available.</p>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default CVPages;
// import React, { useRef } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { jsPDF } from 'jspdf';

// const CVPages = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const facultyData = location.state;
//   const cvRef = useRef();

//   if (!facultyData) {
//     return (
//       <div className="text-center text-red-500 text-lg mt-10">
//         No faculty member selected. Please <button className="text-blue-500 underline" onClick={() => navigate(-1)}>go back</button> and select a faculty.
//       </div>
//     );
//   }

//   const { faculty, designation, department, qualifications, address, email, phone, researchPapers, link } = facultyData;

//   // Function to generate and download the CV as a PDF
//   const handleDownloadPDF = () => {
//     const doc = new jsPDF();
//     doc.setFont("helvetica", "bold");
//     doc.text("National Institute of Technology Jalandhar", 20, 20);
//     doc.setFont("helvetica", "normal");

//     let y = 40;
//     doc.text(`Name: ${faculty}`, 20, y);
//     doc.text(`Designation: ${designation}`, 20, (y += 10));
//     doc.text(`Department: ${department}`, 20, (y += 10));
//     doc.text(`Email: ${email}`, 20, (y += 10));
//     doc.text(`Phone: ${phone}`, 20, (y += 10));
//     doc.text(`Address: ${address}`, 20, (y += 10));
//     doc.text(`Profile Link: ${link}`, 20, (y += 10), { maxWidth: 180 });

//     y += 20;
//     doc.setFont("helvetica", "bold");
//     doc.text("Qualifications", 20, y);
//     doc.setFont("helvetica", "normal");

//     qualifications.forEach((qual, index) => {
//       doc.text(`${index + 1}. ${qual}`, 20, (y += 10));
//     });

//     y += 20;
//     doc.setFont("helvetica", "bold");
//     doc.text("Research Papers", 20, y);
//     doc.setFont("helvetica", "normal");

//     if (researchPapers.length > 0) {
//       researchPapers.forEach((paper, index) => {
//         doc.text(`${index + 1}. ${paper.title}`, 20, (y += 10));
//       });
//     } else {
//       doc.text("No research papers available.", 20, (y += 10));
//     }

//     doc.save(`${faculty}_CV.pdf`);
//   };

//   return (
//     <div className="p-6">
//       {/* Header Section with Institute Name & Logo */}
//       <div className="flex items-center justify-between mb-6">
//         <h1 className="text-2xl font-bold">National Institute of Technology Jalandhar</h1>
//         <img src="/path-to-logo.png" alt="NITJ Logo" className="h-12" />
//       </div>

//       {/* Personal Information Section */}
//       <div className="border p-6 rounded-lg shadow-lg bg-gray-100">
//         <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
//         <p><strong>Name:</strong> {faculty}</p>
//         <p><strong>Designation:</strong> {designation}</p>
//         <p><strong>Department:</strong> {department}</p>
//         <p><strong>Email:</strong> {email}</p>
//         <p><strong>Phone:</strong> {phone}</p>
//         <p><strong>Address:</strong> {address}</p>
//         <p>
//           <strong>Profile Link:</strong>{" "}
//           <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//             {link}
//           </a>
//         </p>

//         {/* Qualifications Section */}
//         <h2 className="text-xl font-semibold mt-6 mb-4">Qualifications</h2>
//         <ul className="list-disc pl-5">
//           {qualifications.map((qual, index) => (
//             <li key={index} className="mb-2">{qual}</li>
//           ))}
//         </ul>

//         {/* Research Papers Section */}
//         <h2 className="text-xl font-semibold mt-6 mb-4">Research Papers</h2>
//         <ul className="list-disc pl-5">
//           {researchPapers.length > 0 ? (
//             researchPapers.map((paper, index) => (
//               <li key={index} className="mb-2">
//                 <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                   {paper.title}
//                 </a>
//               </li>
//             ))
//           ) : (
//             <p className="text-gray-500">No research papers available.</p>
//           )}
//         </ul>
//       </div>

//       {/* Download CV Button */}
//       <div className="mt-6 text-center">
//         <button 
//           onClick={handleDownloadPDF} 
//           className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
//           Download CV
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CVPages;
// import React, { useRef } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { jsPDF } from 'jspdf';

// const CVPages = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const facultyData = location.state;

//   if (!facultyData) {
//     return (
//       <div className="text-center text-red-500 text-lg mt-10">
//         No faculty member selected. Please{" "}
//         <button className="text-blue-500 underline" onClick={() => navigate(-1)}>
//           go back
//         </button>{" "}
//         and select a faculty.
//       </div>
//     );
//   }

//   // Ensure that qualifications and researchPapers are always arrays
//   const {
//     faculty,
//     designation,
//     department,
//     qualifications = [],  // Fallback to an empty array
//     address,
//     email,
//     phone,
//     researchPapers = [],  // Fallback to an empty array
//     link,
//   } = facultyData;

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold text-center mb-4">{faculty}'s CV</h1>
//       <div className="border p-6 rounded-lg shadow-lg bg-gray-100">
//         <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
//         <p><strong>Name:</strong> {faculty}</p>
//         <p><strong>Designation:</strong> {designation}</p>
//         <p><strong>Department:</strong> {department}</p>
//         <p><strong>Email:</strong> {email}</p>
//         <p><strong>Phone:</strong> {phone}</p>
//         <p><strong>Address:</strong> {address}</p>
//         <p>
//           <strong>Profile Link:</strong>{" "}
//           <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//             {link}
//           </a>
//         </p>

//         <h2 className="text-xl font-semibold mt-6 mb-4">Qualifications</h2>
//         {qualifications.length > 0 ? (
//           <ul className="list-disc pl-5">
//             {qualifications.map((qual, index) => (
//               <li key={index} className="mb-2">{qual}</li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500">No qualifications available.</p>
//         )}

//         <h2 className="text-xl font-semibold mt-6 mb-4">Research Papers</h2>
//         {researchPapers.length > 0 ? (
//           <ul className="list-disc pl-5">
//             {researchPapers.map((paper, index) => (
//               <li key={index} className="mb-2">
//                 <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                   {paper.title}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500">No research papers available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CVPages;
// import React, { useRef } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { jsPDF } from 'jspdf';

// const CVPages = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const facultyData = location.state;

//   if (!facultyData) {
//     return (
//       <div className="text-center text-red-500 text-lg mt-10">
//         No faculty member selected. Please{" "}
//         <button className="text-blue-500 underline" onClick={() => navigate(-1)}>
//           go back
//         </button>{" "}
//         and select a faculty.
//       </div>
//     );
//   }

//   // Ensure that qualifications and researchPapers are always arrays
//   const {
//     faculty,
//     designation,
//     department,
//     qualifications = [],  // Fallback to an empty array
//     address,
//     email,
//     phone,
//     researchPapers = [],  // Fallback to an empty array
//     link,
//   } = facultyData;

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold text-center mb-4">Dr. {faculty} Information</h1>
//       <div className="border p-6 rounded-lg shadow-lg bg-gray-100">
//         <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
//         <p><strong>Name:</strong> {faculty}</p>
//         <p><strong>Designation:</strong> {designation}</p>
//         <p><strong>Department:</strong> {department}</p>
//         <p><strong>Email:</strong> {email}</p>
//         <p><strong>Phone:</strong> {phone}</p>
//         <p><strong>Address:</strong> {address}</p>
//         <p>
//           <strong>Profile Link:</strong>{" "}
//           <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//             {link}
//           </a>
//         </p>

//         <h2 className="text-xl font-semibold mt-6 mb-4">Qualifications</h2>
//         {qualifications.length > 0 ? (
//           <ul className="list-disc pl-5">
//             {qualifications.map((qual, index) => (
//               <li key={index} className="mb-2">{qual}</li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500">No qualifications available.</p>
//         )}

//         <h2 className="text-xl font-semibold mt-6 mb-4">Research Papers</h2>
//         {researchPapers.length > 0 ? (
//           <ul className="list-disc pl-5">
//             {researchPapers.map((paper, index) => (
//               <li key={index} className="mb-2">
//                 <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                   {paper.title}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500">No research papers available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CVPages;
import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';

const CVPages = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const facultyData = location.state;
  const pdfRef = useRef();

  if (!facultyData) {
    return (
      <div className="text-center text-red-500 text-lg mt-10">
        No faculty member selected. Please{" "}
        <button className="text-blue-500 underline" onClick={() => navigate(-1)}>
          go back
        </button>{" "}
        and select a faculty.
      </div>
    );
  }

  // Ensure that qualifications and researchPapers are always arrays
  const {
    faculty,
    designation,
    department,
    qualifications = [],  // Fallback to an empty array
    address,
    email,
    phone,
    researchPapers = [],  // Fallback to an empty array
    link,
  } = facultyData;

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text(`${faculty}'s CV`, 10, 10);
    doc.text(`Name: ${faculty}`, 10, 20);
    doc.text(`Designation: ${designation}`, 10, 30);
    doc.text(`Department: ${department}`, 10, 40);
    doc.text(`Email: ${email}`, 10, 50);
    doc.text(`Phone: ${phone}`, 10, 60);
    doc.text(`Address: ${address}`, 10, 70);
    doc.text(`Profile Link: ${link}`, 10, 80);
    doc.text("Qualifications:", 10, 90);
    qualifications.forEach((qual, index) => {
      doc.text(`- ${qual}`, 10, 100 + index * 10);
    });
    doc.text("Research Papers:", 10, 120);
    researchPapers.forEach((paper, index) => {
      doc.text(`- ${paper.title} (${paper.link})`, 10, 130 + index * 10);
    });
    doc.save(`${faculty}_CV.pdf`);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Dr. {faculty} Information</h1>
      <div ref={pdfRef} className="border p-6 rounded-lg shadow-lg bg-gray-100">
        <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
        <p><strong>Name:</strong> {faculty}</p>
        <p><strong>Designation:</strong> {designation}</p>
        <p><strong>Department:</strong> {department}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Address:</strong> {address}</p>
        <p>
          <strong>Profile Link:</strong>{" "}
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            {link}
          </a>
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Qualifications</h2>
        {qualifications.length > 0 ? (
          <ul className="list-disc pl-5">
            {qualifications.map((qual, index) => (
              <li key={index} className="mb-2">{qual}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No qualifications available.</p>
        )}

        <h2 className="text-xl font-semibold mt-6 mb-4">Research Papers</h2>
        {researchPapers.length > 0 ? (
          <ul className="list-disc pl-5">
            {researchPapers.map((paper, index) => (
              <li key={index} className="mb-2">
                <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                  {paper.title}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No research papers available.</p>
        )}
      </div>
      <div className="flex justify-center mt-6">
        <button onClick={handleDownloadPDF} className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg">
          Download as PDF
        </button>
      </div>
    </div>
  );
};

export default CVPages;

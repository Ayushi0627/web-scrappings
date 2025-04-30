// import './App.css';
// import React, { useState } from 'react';
// import FacultySelect from './FacultySelect';
// import ScrapedDataGrid from './ScrapedDataGrid';
// import axios from 'axios';

// const App = () => {
//   const [department, setDepartment] = useState('');
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const facultyLinks = {
//     CSE: {
//     'Dr Nagendra Pratap Singh': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447338bff038a7808e10',
//     'Dr Ajay Kr Sharma': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447338bff038a7808e10',
//     'Dr A L Sangal': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430445438bff038a78055b4',
//     'Dr Harsh K Verma': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430445438bff038a7805712',
//     'Dr Renu Dhir': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430445438bff038a78057a2',
//     'Mr D K Gupta': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447538bff038a780903f',
//     'Dr Geeta Sikka': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430445438bff038a7805647',
//     'Dr Rajneesh Rani': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430445538bff038a78057f8',
//     'Dr Amritpal Singh': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446d38bff038a78088fb',
//     'Dr Aruna Malik': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446c38bff038a780874c',
//     'Dr K P Sharma': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446838bff038a7807d43',
//     'Dr Samayveer Singh': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446b38bff038a78085b7',
//     'Dr Urvashi': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446c38bff038a780870c',
//     'Dr Avtar Singh': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446338bff038a7807694',
//     'Dr Prashant Kumar': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446d38bff038a78088bb',
//     'Dr Banalaxmi Brahma': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447438bff038a7808f65',
//     'Mr Rahul Aggarwal': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430445438bff038a78057f4',
//     'Dr Jagdeep Kaur': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446d38bff038a78088a2',
//     'Dr Kunwar Pal': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446e38bff038a7808a14',
//     'Dr Lalatendu Behera': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446e38bff038a7808a31',
//     'Dr Madhurima Buragohian': 'https://departments.nitj.ac.in/dept/cse/Faculty/66ed50e15beeaa89d07faca8',
//     'Dr Naina Yadav': 'https://departments.nitj.ac.in/dept/cse/Faculty/66ed51145beeaa89d07fbcb0',
//     'Dr Shefali Arora': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447138bff038a7808ce8',
//     'Dr Shweta Mahajan': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447038bff038a7808ccb',
//     'Dr Somesula Manoj Kumar': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447538bff038a7808fad',
//     'Dr Sumit Kumar': 'https://departments.nitj.ac.in/dept/cse/Faculty/66ed514d5beeaa89d07fd562',
//     'Dr Swarnima Singh Gautam': 'https://departments.nitj.ac.in/dept/cse/Faculty/652795ccb8c492ab73d26ad2',
//     'Dr Tanmay Kumar Behera': 'https://departments.nitj.ac.in/dept/cse/Faculty/66ed51815beeaa89d07fdf96',
//     },
//     ECE: {
//       'Dr Rakesh Kumar': 'https://departments.nitj.ac.in/dept/ece/Faculty/12345',
//       'Dr Meera Reddy': 'https://departments.nitj.ac.in/dept/ece/Faculty/67890',
//     }
//     // Add other departments...
//   };


//   const generateCV = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/generate-cv', { data });
//       if (response.data.success) {
//         const fileURL = response.data.fileURL;
//         window.open(fileURL, '_blank');
//       } else {
//         setError('Failed to generate CV');
//       }
//     } catch (err) {
//       setError('Error generating CV');
//       console.error(err);
//     }
//   };

//   return (
//     <div className="App">
//       <div>
//         <label>Department:</label>
//         <select onChange={(e) => setDepartment(e.target.value)} value={department}>
//           <option value="">Select a Department</option>
//           {Object.keys(facultyLinks).map((dept) => (
//             <option key={dept} value={dept}>{dept}</option>
//           ))}
//         </select>
//       </div>

//       {department && (
//         <FacultySelect
//           department={department}
//           facultyLinks={facultyLinks}
//           setData={setData}
//           setLoading={setLoading}
//           setError={setError}
//         />
//       )}

//       <ScrapedDataGrid data={data} loading={loading} error={error} />

//       {/* Button to Generate CV */}
//       {data.length > 0 && (
//         <button onClick={generateCV} disabled={loading}>
//           {loading ? 'Generating CV...' : 'Generate CV'}
//         </button>
//       )}
//     </div>
//   );
// };

// export default App;
// import './App.css';
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
// import FacultySelect from './FacultySelect';
// import ScrapedDataGrid from './ScrapedDataGrid';
// import CVPages from './CVPages'; // Import your CVPages component

// import { jsPDF } from 'jspdf'; // Make sure jsPDF is imported


// const App = () => {
//   const [department, setDepartment] = useState('');
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const facultyLinks = {
//         CSE: {
//         'Dr Nagendra Pratap Singh': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447338bff038a7808e10',
//         'Dr Ajay Kr Sharma': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447338bff038a7808e10',
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
//         ECE: {
//           'Dr Rakesh Kumar': 'https://departments.nitj.ac.in/dept/ece/Faculty/12345',
//           'Dr Meera Reddy': 'https://departments.nitj.ac.in/dept/ece/Faculty/67890',
//         }
//         // Add other departments...
//       };

//       const generateCV = () => {
//         if (!data || data.length === 0) {
//           setError("No data available to generate CV.");
//           return;
//         }
    
//         // Generate PDF
//         const doc = new jsPDF();
//         doc.setFontSize(16);
//         doc.text("Faculty CV", 10, 10);
//         let yPosition = 20;
//         data.forEach((faculty, index) => {
//           doc.setFontSize(12);
//           doc.text(`Faculty ${index + 1}:`, 10, yPosition);
//           yPosition += 10;
//           doc.text(`Name: ${faculty.name || 'N/A'}`, 10, yPosition);
//           yPosition += 10;
//           doc.text(`Department: ${faculty.department || 'N/A'}`, 10, yPosition);
//           yPosition += 10;
//           doc.text(`Research Interests: ${faculty.researchInterests || 'N/A'}`, 10, yPosition);
//           yPosition += 20;
//         });
    
//         const fileURL = "faculty_cv.pdf";
//         doc.save(fileURL);
    
//         // Navigate to CVPages component
//         navigate('/cvpages', { state: { data: data, fileURL: fileURL } });
//       };
    
//       return (
        
//         <div className="App">
//           <div>
//             <label>Department:</label>
//             <select onChange={(e) => setDepartment(e.target.value)} value={department}>
//               <option value="">Select a Department</option>
//               {Object.keys(facultyLinks).map((dept) => (
//                 <option key={dept} value={dept}>{dept}</option>
//               ))}
//             </select>
//           </div>
    
//           {department && (
//             <FacultySelect
//               department={department}
//               facultyLinks={facultyLinks}
//               setData={setData}
//               setLoading={setLoading}
//               setError={setError}
//             />
//           )}
    
//           <ScrapedDataGrid data={data} loading={loading} error={error} />
    
//           {data.length > 0 && (
//             <button onClick={generateCV} disabled={loading}>
//               {loading ? 'Generating CV...' : 'Generate CV'}
//             </button>
//           )}
//         </div>
  
//       );
//     };

//     const MainApp = () => (
//       <Router>
//         <Routes>
//           <Route path="/" element={<App />} />
//           <Route path="/cvpages" element={<CVPages />} />
//         </Routes>
//       </Router>
//     );
//     export default MainApp;
// import './App.css';
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
// import FacultySelect from './FacultySelect';
// import ScrapedDataGrid from './ScrapedDataGrid';
// import CVPages from './CVPages';
// import { jsPDF } from 'jspdf';

// const App = () => {
//   const [department, setDepartment] = useState('');
//   const [selectedFaculty, setSelectedFaculty] = useState('');
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const facultyLinks = {
//     CSE: {
//       'Dr Nagendra Pratap Singh': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447338bff038a7808e10',
//       'Dr Ajay Kr Sharma': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447338bff038a7808e10',
//       'Dr A L Sangal': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430445438bff038a78055b4',
//       'Dr Harsh K Verma': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430445438bff038a7805712',
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
      
// //         
//     },
//     ECE: {
//       'Dr Rakesh Kumar': 'https://departments.nitj.ac.in/dept/ece/Faculty/12345',
//       'Dr Meera Reddy': 'https://departments.nitj.ac.in/dept/ece/Faculty/67890',
//     }
//   };
//   <Route path="/faculty-list" element={<FacultyList facultyData={facultyData} facultyLinks={facultyLinks} />} />
//   <Route path="/cvpages" element={<CVPages />} ></Route>

//   const handleGenerateCV = () => {
//     if (!selectedFaculty || !facultyLinks[department]?.[selectedFaculty]) {
//       setError("Please select a department and faculty member.");
//       return;
//     }

//     navigate('/cvpages', { state: { faculty: selectedFaculty, department, link: facultyLinks[department][selectedFaculty] } });
//   };

//   return (
//     <div className="App p-6">
//       <h1 className="text-2xl font-bold mb-4">FACULTY INFORMATION PORTALS</h1>

//       {/* Scraping Section (Unchanged) */}
//       <div>
//         <label>Department:</label>
//         <select onChange={(e) => setDepartment(e.target.value)} value={department}>
//           <option value="">Select a Department</option>
//           {Object.keys(facultyLinks).map((dept) => (
//             <option key={dept} value={dept}>{dept}</option>
//           ))}
//         </select>
//       </div>

//       {department && (
//         <FacultySelect
//           department={department}
//           facultyLinks={facultyLinks}
//           setData={setData}
//           setLoading={setLoading}
//           setError={setError}
//         />
//       )}

//       <ScrapedDataGrid data={data} loading={loading} error={error} />

//       {/* NEW SECTION BELOW SCRAPING */}
//       <div className="border p-4 rounded-lg shadow-md bg-gray-100 mt-6">
//         <h2 className="text-xl font-semibold mb-4">Generate CV of Desired Faculty Member</h2>

//         {/* Department Dropdown */}
//         <label className="block mb-2 font-medium">Select Department:</label>
//         <select
//           className="border p-2 rounded w-full mb-4"
//           value={department}
//           onChange={(e) => {
//             setDepartment(e.target.value);
//             setSelectedFaculty('');
//           }}
//         >
//           <option value="">Select a Department</option>
//           {Object.keys(facultyLinks).map((dept) => (
//             <option key={dept} value={dept}>{dept}</option>
//           ))}
//         </select>

//         {/* Faculty Dropdown */}
//         {department && (
//           <>
//             <label className="block mb-2 font-medium">Select Faculty Member:</label>
//             <select
//               className="border p-2 rounded w-full mb-4"
//               value={selectedFaculty}
//               onChange={(e) => setSelectedFaculty(e.target.value)}
//             >
//               <option value="">Select a Faculty Member</option>
//               {Object.keys(facultyLinks[department]).map((faculty) => (
//                 <option key={faculty} value={faculty}>{faculty}</option>
//               ))}
//             </select>
//           </>
//         )}

//         {/* Generate CV Button */}
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded w-full disabled:bg-gray-400"
//           onClick={handleGenerateCV}
//           disabled={!selectedFaculty}
//         >
//           Generate CV
//         </button>
//       </div>
//     </div>
//   );
// };

// const MainApp = () => (
//   <Router>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/cvpages" element={<CVPages />} />
//     </Routes>
//   </Router>
// );

// export default MainApp;
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import FacultySelect from './FacultySelect';
import ScrapedDataGrid from './ScrapedDataGrid';
import CVPages from './CVPages';

const App = () => {
  const [department, setDepartment] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const facultyLinks = {
    CSE: {
      'Dr Nagendra Pratap Singh': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447338bff038a7808e10',
      'Dr Ajay Kr Sharma': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447338bff038a7808e10',
      'Dr A L Sangal': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430445438bff038a78055b4',
      'Dr Harsh K Verma': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430445438bff038a7805712',
      'Dr Renu Dhir': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430445438bff038a78057a2',
      'Dr Geeta Sikka': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430445438bff038a7805647',
      'Dr Rajneesh Rani': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430445538bff038a78057f8',
        'Dr Amritpal Singh': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446d38bff038a78088fb',
        'Dr Aruna Malik': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446c38bff038a780874c',
        'Dr K P Sharma': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446838bff038a7807d43',
        'Dr Samayveer Singh': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446b38bff038a78085b7',
        'Dr Urvashi': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446c38bff038a780870c',
        'Dr Avtar Singh': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446338bff038a7807694',
        'Dr Prashant Kumar': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446d38bff038a78088bb',
        'Dr Banalaxmi Brahma': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447438bff038a7808f65',
        'Mr Rahul Aggarwal': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430445438bff038a78057f4',
        'Dr Jagdeep Kaur': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446d38bff038a78088a2',
        'Dr Kunwar Pal': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446e38bff038a7808a14',
        'Dr Lalatendu Behera': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430446e38bff038a7808a31',
        'Dr Madhurima Buragohian': 'https://departments.nitj.ac.in/dept/cse/Faculty/66ed50e15beeaa89d07faca8',
        'Dr Naina Yadav': 'https://departments.nitj.ac.in/dept/cse/Faculty/66ed51145beeaa89d07fbcb0',
        'Dr Shefali Arora': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447138bff038a7808ce8',
        'Dr Shweta Mahajan': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447038bff038a7808ccb',
        'Dr Somesula Manoj Kumar': 'https://departments.nitj.ac.in/dept/cse/Faculty/6430447538bff038a7808fad',
        'Dr Sumit Kumar': 'https://departments.nitj.ac.in/dept/cse/Faculty/66ed514d5beeaa89d07fd562',
        'Dr Swarnima Singh Gautam': 'https://departments.nitj.ac.in/dept/cse/Faculty/652795ccb8c492ab73d26ad2',
        'Dr Tanmay Kumar Behera': 'https://departments.nitj.ac.in/dept/cse/Faculty/66ed51815beeaa89d07fdf96',
    },
    ECE: {
      'Dr Rakesh Kumar': 'https://departments.nitj.ac.in/dept/ece/Faculty/12345',
      'Dr Meera Reddy': 'https://departments.nitj.ac.in/dept/ece/Faculty/67890',
    }
  };

  const handleGenerateCV = () => {
    if (!selectedFaculty || !facultyLinks[department]?.[selectedFaculty]) {
      setError("Please select a department and faculty member.");
      return;
    }

    navigate('/cvpages', { 
      state: { 
        faculty: selectedFaculty, 
        department, 
        link: facultyLinks[department][selectedFaculty] 
      } 
    });
  };

  return (
    <div className="App p-6">
      <h1 className="text-2xl font-bold mb-4">FACULTY INFORMATION PORTAL</h1>

      {/* Scraping Section */}
      <div>
        <label>Department:</label>
        <select onChange={(e) => setDepartment(e.target.value)} value={department}>
          <option value="">Select a Department</option>
          {Object.keys(facultyLinks).map((dept) => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>
      </div>

      {department && (
        <FacultySelect
          department={department}
          facultyLinks={facultyLinks}
          setData={setData}
          setLoading={setLoading}
          setError={setError}
        />
      )}

      <ScrapedDataGrid data={data} loading={loading} error={error} />

      {/* CV Generation Section */}
      <div className="border p-4 rounded-lg shadow-md bg-gray-100 mt-6">
        <h2 className="text-xl font-semibold mb-4">Generate CV of Faculty Member</h2>

        {/* Department Dropdown */}
        <label className="block mb-2 font-medium">Select Department:</label>
        <select
          className="border p-2 rounded w-full mb-4"
          value={department}
          onChange={(e) => {
            setDepartment(e.target.value);
            setSelectedFaculty('');
          }}
        >
          <option value="">Select a Department</option>
          {Object.keys(facultyLinks).map((dept) => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>

        {/* Faculty Dropdown */}
        {department && (
          <>
            <label className="block mb-2 font-medium">Select Faculty Member:</label>
            <select
              className="border p-2 rounded w-full mb-4"
              value={selectedFaculty}
              onChange={(e) => setSelectedFaculty(e.target.value)}
            >
              <option value="">Select a Faculty Member</option>
              {Object.keys(facultyLinks[department]).map((faculty) => (
                <option key={faculty} value={faculty}>{faculty}</option>
              ))}
            </select>
          </>
        )}

        {/* Generate CV Button */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded w-full disabled:bg-gray-400"
          onClick={handleGenerateCV}
          disabled={!selectedFaculty}
        >
          Generate CV
        </button>
      </div>
    </div>
  );
};

const MainApp = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cvpages" element={<CVPages />} />
    </Routes>
  </Router>
);

export default MainApp;

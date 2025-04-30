import React from "react";
import FacultyCVDownload from "../components/FacultyCV";

const FacultyPage = () => {
  const facultyData = {
    name: "Dr. Ayushi Yadav",
    department: "Computer Science",
    email: "ayushi@example.com",
    experience: 5,
    research: "Artificial Intelligence, Machine Learning",
  };

  return (
    <div>
      <h1>Faculty Details</h1>
      <p>Name: {facultyData.name}</p>
      <p>Department: {facultyData.department}</p>
      <p>Email: {facultyData.email}</p>
      <p>Experience: {facultyData.experience} years</p>
      <p>Research Interests: {facultyData.research}</p>

      {/* CV Download Button */}
      <FacultyCVDownload faculty={facultyData} />
    </div>
  );
};

export default FacultyPage;

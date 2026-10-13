import React from "react";
import { useEffect, useState } from "react";

const Use_Effect = () => {
  const [student, setStudent] = useState(() => {
    try {
      const savedStudent = localStorage.getItem("studentDetails");
      return savedStudent
        ? JSON.parse(savedStudent)
        : { name: "", email: "", course: "ReactJS" };
    } catch (err) {
      console.log("Not found student details:", err);
      return { name: "", email: "", course: "ReactJS" };
    }
  });

  const [saveStatus, setSaveStatus] = useState(
    "Your change will be saced automatically.",
  );

  useEffect(() => {
    try {
      localStorage.setItem("studentDetails", JSON.stringify(student));
      setSaveStatus("Saved sutomatically in localStorage.");
    } catch (err) {
      console.log("Not found student details:", err);
      setSaveStatus("Unable to save data in this browser.");
    }
  }, [student]);

  function handleChange(e) {
    const { name, value } = e.target;
    setStudent((previousStudent) => ({ ...previousStudent, [name]: value }));
  }

  function clearForm() {
    setStudent({ name: "", email: "", course: "ReactJS" });
  }

  return (
    <>
      <div className="bg-blue-200 p-6 container">
        <h1>Use_Effect</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>Student Name</label>
            <input
              id="name"
              name="name"
              value={student.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
           <div>
            <label>Student Name</label>
            <input
              id="name"
              name="name"
              value={student.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
           <div>
            <label>Student Name</label>
            <input
              id="name"
              name="name"
              value={student.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          
        </form>
        <p>{student}</p>
      </div>
    </>
  );
};

export default Use_Effect;

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
    "Your change will be saved automatically.",
  );

  useEffect(() => {
    try {
      localStorage.setItem("studentDetails", JSON.stringify(student));
      setSaveStatus("Saved automatically in localStorage.");
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
            <label className="block text-gray-700 text-sm font-bold mb-2">Student Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={student.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="border-2 border-gray-700"
            />
          </div>
           <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Student Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={student.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="border-2 border-gray-700"
            />
          </div>
           <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Student Course</label>
            <select
              id="course"
              name="course"
              value={student.course}
              onChange={handleChange}
              className="border-2 border-gray-700"
            >
              <option value="ReactJS">ReactJS</option>
              <option value="NodeJS">NodeJS</option>
              <option value="MongoDB">MongoDB</option>
            </select>
          </div>
          <div>
            <button className="bg-blue-600 px-4 py-2 text-white rounded-2xl!" type="button" onClick={clearForm}>
              Clear Form
            </button>
          </div>
          
        </form>
        <p>{saveStatus}</p>
      </div>
    </>
  );
};

export default Use_Effect;

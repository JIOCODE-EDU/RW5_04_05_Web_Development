import { useState } from "react";

const State_Object = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [name, setName] = useState("");

  const [student, setStudent] = useState({
    name: "",
    email: "",
    age: "",
    city: "",
  });

  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript"]);

  const [newSkill, setNewSkill] = useState("");

  // array : add skill

  const addSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  // array : delete skill

  const deleteSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  // Object : Update Properties

  const handleStudentChange = (e) => {
    const { name, value } = e.target;

    setStudent({
      ...student,
      [name]: value,
    });
  };

  // Object : Reset Properties

  const resetStudent = () => {
    setStudent({
      name: "",
      email: "",
      age: "",
      city: "",
    });
  };

  return (
    <>
      <div className="container mx-auto">

        {/* Boolean State */}

        <div className="bg-blue-200 p-6">
          <h1>ReactJs Hooks - useState()</h1>

          <h2>1. Boolean State</h2>

          <button
            className="bg-blue-600 p-4 text-white rounded-2xl!"
            onClick={() => setIsVisible((prev) => !prev)}
          >
            {isVisible ? "Hide Message" : "Show Message"}
          </button>

          {isVisible && <p className="text-green-700">Welcome to React JS!</p>}
        </div>

        {/* String State */}

        <div className="bg-blue-100 p-6">
          <h2>2. String State</h2>

          <input
            className="border-2 border-gray-700"
            type="text"
            name=""
            id=""
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <p>Hello {name || "Student"}!</p>
          <p>Characters: {name.length}</p>

          <button
            className="bg-blue-600 p-4 text-white rounded-2xl!"
            onClick={() => setName("")}
          >
            Clear Name
          </button>
        </div>

        {/* Array State */}

        <div className="bg-blue-200 p-6">
          <h2>3. Array State</h2>

          <input
            type="text"
            name=""
            id=""
            value={newSkill}
            placeholder="Enter a skill"
            onChange={(e) => setNewSkill(e.target.value)}
          />

          <button onClick={addSkill}>Add Skill</button>

          <h3>My Skills</h3>

          {skills.length === 0 ? (
            <p>No skills available.</p>
          ) : (
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>
                  {skill}{" "}
                  <button onClick={() => deleteSkill(index)}>Delete</button>
                </li>
              ))}
            </ul>
          )}
          <p>Total Skills:{skills.length}</p>
        </div>
      </div>
    </>
  );
};

export default State_Object;

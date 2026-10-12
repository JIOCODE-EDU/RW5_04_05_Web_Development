import Card_Component from "./components/Card_Component";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // spread operator with array

  const fruits = ["Apple", "Banana", "Mango", "Orange"];

  const newFruits = [...fruits, "Grapes"];

  // spread operator with two arrays

  const vegetables = ["Potato", "Tomato", "Onion", "Garlic"];

  const foodItems = [...fruits, ...vegetables];

  // spread operator with object

  const student = {
    name: "Vivek",
    age: 25,
    city: "Surat",
  };

  const updatedStudent = {
    ...student,
    course: "ReactJS",
    age: 30,
  };

  // Rest Parameter in function

  function calculateTotal(...numbers) {
    let total = 0;

    for (let num of numbers) {
      total = total + num;
    }

    return total;
  }

  const total = calculateTotal(10, 20, 30, 40, 50);

  // Rest Parameter with first Parameter

  function showStudent(name, ...subjects) {
    return (
      <div>
        <p>
          <b>Student :</b>
          {name}
        </p>
        <p>
          <b>Subjects:</b>
        </p>
        <ul>
          {subjects.map((subject, index) => (
            <li key={index}>{subject}</li>
          ))}
        </ul>
      </div>
    );
  }

  let data = showStudent("Rahul", "Math", "Physics", "Chemistry");

  // Reduce

  const marks = [70, 80, 90, 60];

  //  let total_marks = 0
  //   for(let num of marks){
  //     total_marks = total_marks + num
  //   }

  const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);

  

  return (
    <>
      <ul>
        {foodItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <div>Name:{updatedStudent.name}</div>
        <div>Age:{updatedStudent.age}</div>
        <div>City:{updatedStudent.city}</div>
        <div>Course:{updatedStudent.course}</div>
      </div>
      <div>Total: {total}</div>
      <div>{data}</div>
      <div>Total_Marks : {totalMarks}</div>
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Employees from "../Employee/Employees";
import { Button, Form } from "react-bootstrap";
import "./Edit.css";

const Edit = () => {
  const [Id, setId] = useState("");
  const [Named, setName] = useState("");
  const [Aged, setAge] = useState("");
  const [Mark, setMarks] = useState("");

  let Nav = useNavigate();
  var index = Employees.map(function (e) {
    return e.Id;
  }).indexOf(Id); //indexOf(Id) is used to get that particular employee Id

  const handleSubmit = (e) => {
    e.preventDefault();

    var employee = Employees[index];
    employee.Id = Id;
    employee.Name = Named;
    employee.Age = Aged;
    employee.Marks = `${Mark}%`;
    // below code is using by if condition and const
    // const index = Employees.findIndex((e) => e.Id === Id);
    // if (index !== -1) {
    //   const updatedEmployee = {
    //     Id: Id,
    //     Name: Named,
    //     Age: Aged,
    //     Marks: `${Mark}%`,
    //   };

    //   Employees[index] = updatedEmployee; // Updating the particular employee
    // }

    Nav("/");
  };

  useEffect(() => {
    setId(localStorage.getItem("Id"));
    setName(localStorage.getItem("Name"));
    setAge(localStorage.getItem("Age"));
    setMarks(localStorage.getItem("Marks").replace("%", ""));
  }, []);
  // below code is using tanking the const to store the value withgiven id
  // useEffect(() => {
  //   const storedId = localStorage.getItem('Id') || '';
  //   const storedName = localStorage.getItem('Name') || '';
  //   const storedAge = localStorage.getItem('Age') || '';
  //   const storedMarks = localStorage.getItem('Marks') || '';

  //   // Remove the percentage sign before setting the state
  //   setId(storedId);
  //   setName(storedName);
  //   setAge(storedAge);
  //   setMarks(storedMarks.replace('%', ''));
  // }, []);
  return (
    <div>
      <Form className="Add" onSubmit={(e) => handleSubmit(e)}>
        <div className="GroupId" id="formid">
          <Form.Control
            type="number"
            placeholder="Enter the Employee Id"
            value={Id}
            onChange={(e) => setId(e.target.value)}
            required
            // ref={idRef} // Attach the ref to the input
          />
        </div>
        <div className="GroupName" id="formName">
          <Form.Control
            type="text"
            placeholder="Enter the Employee Name"
            value={Named}
            onChange={(e) => setName(e.target.value)}
            required
            // ref={nameRef}
          />
        </div>
        <div className="GroupAge" id="formAge">
          <Form.Control
            type="Number"
            placeholder="Enter the Employee Age"
            value={Aged}
            onChange={(e) => setAge(e.target.value)}
            required
            // ref={ageRef}
          />
        </div>
        <div className="GroupMarks" id="formMarks">
          <Form.Control
            type="Number"
            placeholder="Enter the Employee Marks"
            value={Mark}
            onChange={(e) => setMarks(e.target.value)}
            required
            // ref={marksRef}
          />
        </div>
        <Button type="submit">Update</Button>
      </Form>
    </div>
  );
};
export default Edit;
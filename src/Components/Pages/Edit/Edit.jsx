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
  const [Attendance, setAttendance] = useState("");

  let Nav = useNavigate();
  // var index = Employees.map(function (e) {
  //   return e.Id;
  // }).indexOf(Id); //indexOf(Id) is used to get that particular employee Id

  const handleSubmit = (e) => {
    e.preventDefault();

    // var employee = Employees[index];
    // employee.Id = Id;
    // employee.Name = Named;
    // employee.Age = Aged;
    // employee.Attendance = `${Attendance}%`;
    // below code is using by if condition and const
    const index = Employees.findIndex((e) => e.Id === Id);
    if (index !== -1) {
      const updatedEmployee = {
        Id: Id,
        Name: Named,
        Age: Aged,
        Attendance: `${Attendance}%`,
      };

      Employees[index] = updatedEmployee; // Updating the particular employee
    }

    Nav("/");
  };

  useEffect(() => {
    setId(localStorage.getItem("Id"));
    setName(localStorage.getItem("Name"));
    setAge(localStorage.getItem("Age"));
    setAttendance(localStorage.getItem("Attendance").replace("%", ""));
  }, []);
  // below code is using tanking the const to store the value withgiven id
  // useEffect(() => {
  //   const storedId = localStorage.getItem('Id') || '';
  //   const storedName = localStorage.getItem('Name') || '';
  //   const storedAge = localStorage.getItem('Age') || '';
  //   const storedAttendance = localStorage.getItem('Attendance') || '';

  //   // Remove the percentage sign before setting the state
  //   setId(storedId);
  //   setName(storedName);
  //   setAge(storedAge);
  //   setAttendance(storedAttendance.replace('%', ''));
  // }, []);
  return (
    <div>
      <Form className="Add" onSubmit={(e) => handleSubmit(e)}>
        <div className="GroupId" id="formid">
          <Form.Control
            type="number"
            placeholder="Enter the Employee Id"
            value={Id}
            onChange={(e) => setId(e.target.value)} //to change the old data to new data
            required
            // ref={idRef} // Attach the ref to the input
          />
        </div>
        <div className="GroupName" id="formName">
          <Form.Control
            type="text"
            placeholder="Enter the Employee Name"
            value={Named}
            onChange={(e) => setName(e.target.value)} //to change the old data to new data
            required
            // ref={nameRef}
          />
        </div>
        <div className="GroupAge" id="formAge">
          <Form.Control
            type="Number"
            placeholder="Enter the Employee Age"
            value={Aged}
            onChange={(e) => setAge(e.target.value)} //to change the old data to new data
            required
            // ref={ageRef}
          />
        </div>
        <div className="GroupMarks" id="formMarks">
          <Form.Control
            type="Number"
            placeholder="Enter the Employee Marks"
            value={Attendance}
            onChange={(e) => setAttendance(e.target.value)} //to change the old data to new data
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
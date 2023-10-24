import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import Employees from "../Employee/Employees";
import { Button, Form } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import './Add.css';

const Add = () => {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Marks, setMarks] = useState("");

  let Nav = useNavigate();

  // Create refs for the input fields
  const idRef = useRef(null);
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const marksRef = useRef(null);

  useEffect(() => {
    // Clear input fields after navigation
    idRef.current.value = "";
    nameRef.current.value = "";
    ageRef.current.value = "";
    marksRef.current.value = "";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const Ids = uuid();
    const uniqueId = Ids.slice(0, 8);
    const ids = idRef.current.value;
    const Named = nameRef.current.value;
    const Aged = ageRef.current.value;
    const Mark = marksRef.current.value;
    const MarkWithPercentage = `${Mark}%`;

    Employees.push({ id: uniqueId, Id: ids, Name: Named, Age: Aged, Marks: MarkWithPercentage });

    Nav("/");
  };

  return (
    <div>
      <Form className="Edit" onSubmit={handleSubmit}>
        <div className="GroupId" id="formName">
          <Form.Control
            type="Id"
            placeholder="Enter the Employee Id"
            required
            ref={idRef} // Attach the ref to the input
          />
        </div>
        <div className="GroupName" id="formName">
          <Form.Control
            type="text"
            placeholder="Enter the Employee Name"
            required
            ref={nameRef}
          />
        </div>
        <div className="GroupAge" id="formAge">
          <Form.Control
            type="Number"
            placeholder="Enter the Employee Age"
            required
            ref={ageRef}
          />
        </div>
        <div className="GroupMarks" id="formMarks">
          <Form.Control
            type="Number"
            placeholder="Enter the Employee Marks"
            required
            ref={marksRef}
          />
        </div>
        <Button type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Add;

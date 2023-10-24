import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "../Employee/Employees";
// import Buttons from "../../Assests/Component";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
const Home = () => {
  let Nav = useNavigate();

  const handleEdit = (Id, Named, Aged, Mark) => {
    localStorage.setItem("Id", Id);
    localStorage.setItem("Name", Named);
    localStorage.setItem("Age", Aged);
    localStorage.setItem("Marks", Mark);
  };

  const handleDelete = (Id) => {
    var index = Employees.map(function (e) {
      return e.Id;
    }).indexOf(Id); //indexOf(Id) is used to get that particular employee Id

    Employees.splice(index, 1);

    Nav("/");
  };

  return (
    // <Fragment><div style={{margin:"10rem"}}> inbetween we want to write below html code</div></Fragment>
    <div>
      <div className="DashBoard">
        <h3>Crud DashBoard</h3>
      </div>
      <div class="AddDeleteButtons">
        <Link to="Add ">
          <Button className="AddNewEmp"> Add A New Employee</Button>
        </Link>
      </div>
      <div className="Table">
        {/* below lines from 38 to 84 is using by react bootstrap */}
        {/* <Table striped bordered hover size="sm">
            <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Subject</th>
              <th>Marks</th>
              below action line is used to combined both edit and delete
              <th>Action</th>
              below edit and delete individual
              // <th>Edit</th>
              // <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              Employees && Employees.length > 0
              ?
              Employees.map((item)=>{
                return(
                  <tr>
                    <td>
                      {item.id}
                    </td>
                    <td>
                      {item.Name}
                    </td>
                    <td>
                      {item.Age}
                    </td>
                    <td>
                      {item.Marks}
                    </td>
                    // below two lines are combined lines using React BootStrap
                    <td>
                    <Button onClick={()=>alert(item.Id)}>Edit</Button>
                    &nbsp;
                    <Button onClick={()=>alert(item.Id)}>Delete</Button>
                    </td>
                    // below two lines are individual lines using React BootStrap
                    // <td><Button onClick={()=>alert(item.Id)}>Edit</Button></td>
                    // <td><Button onClick={()=>alert(item.Id)}>Delete</Button></td>
                  </tr>
                )
              })
              :
              "No Data Is Avaliable"
            }
          </tbody>
        </Table> */}
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Marks</th>
              {/* below action line is used to combined both edit and delete */}
              {/* <th>Action</th> */}
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0
              ? Employees.map((item) => {
                  return (
                    <tr>
                      <td>{item.Id}</td>
                      <td>{item.Name}</td>
                      <td>{item.Age}</td>
                      <td>{item.Marks}</td>
                      {/* Below two lines are indiviual columns using React BootStrap */}
                      <td>
                        <Link to="Edit">
                          <Button
                            onClick={() =>
                              handleEdit(
                                item.Id,
                                item.Name,
                                item.Age,
                                item.Marks
                              )
                            }
                          >
                            Edit
                          </Button>
                        </Link>
                      </td>

                      <td>
                        <Button
                          className="Delete"
                          onClick={() => handleDelete(item.Id)}
                        >
                          Delete
                        </Button>
                      </td>
                      {/* Below two lines are occured and combined using React BootStrap*/}
                      {/* <td>
                        <Button onClick={() => alert(item.Id)}>Edit</Button>
                        &nbsp;
                        <Button onClick={() => alert(item.Id)}>Delete</Button>
                      </td> */}
                    </tr>
                  );
                })
              : "No Data Is Avaliable"}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Home;
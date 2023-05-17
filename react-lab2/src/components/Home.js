import Form from "./form/Form";
import Table from "./table/Table";
import { Component } from "react";

class Home extends Component {
  StudentsList = [
    {
      id: 1,
      name: "Ahmed",
      age: 20,
    },
    {
      id: 2,
      name: "Aly",
      age: 22,
    },
    {
      id: 3,
      name: "omar",
      age: 24,
    },
  ];
  constructor() {
    super();
    this.state = {
      AllStudets: this.StudentsList,
    };
  }

  ReciveStudent = (data) => {
    console.log(data);
    this.StudentsList.push(data)
    // let FilterdStudents = this.state.AllStudets.filter((student)=>student.name.toLowerCase().startsWith(data.toLowerCase()))
    this.setState({ AllStudents: this.StudentsList });
  };

  render() {
    console.log(this.state.AllStudents);

    return (
      <div>
        <Form onSubmit={this.ReciveStudent} />
        <Table list={this.StudentsList} />
      </div>
    );
  }
}
export default Home;

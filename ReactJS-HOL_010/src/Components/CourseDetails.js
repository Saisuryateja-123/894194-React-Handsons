import React from 'react';

class CourseDetails extends React.Component {
  state={
     courses : [
      { id: 1001, name: "Angular", date: "4/5/2021" },
      { id: 1002, name: "React", date: "6/3/2020" }
    ]
  }
    render(){
      return (
        <div>
          <h1>Course Details</h1>
          <Course courses={this.state.courses} />
        </div>
      );
    }
  }

  function Course(props) {
    return props.courses.map((course) => {
      return (
        <div>
          <h2>{course.name}</h2>
          <p>{course.date}</p>
        </div>
      );
    });
  }
export default CourseDetails;
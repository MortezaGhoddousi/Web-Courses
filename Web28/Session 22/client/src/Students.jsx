// import React from "react";
// export default class Students extends React.Component {
//     render() {
//         // const {name, age, level} = this.props

//         const students = this.props.students

//         const studentList = students.map((s, i) => {
//             return (
//                 <div className="students">
//                     <div>Name: {s.name}</div>
//                     <div>Age: {s.age}</div>
//                     <div>Level: {s.level}</div>
//                 </div>
//             )
//         })

//         return (
//             <div className="students-list">
//                 {studentList}
//             </div>
//         );
//     }
// }

export default function Students(props) {
    const students = props.students;

    const studentList = students.map((s, i) => (
        <div className="students" key={i}>
            <div>Name: {s.name}</div>
            <div>Age: {s.age}</div>
            <div>Level: {s.level}</div>
        </div>
    ));

    return <div className="students-list">{studentList}</div>;
}

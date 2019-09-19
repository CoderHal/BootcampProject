const getEmployeeDetails = () => {
    let employeeDetails = [];
    for( let i = 0; i < employeeDetails.length; i++){
        let row = {};
        let id = employee[i].id;
        let details = employee.filter((elem)=> elem.employeeId == id)[0];
        row.id = employee.id;
        row.name = employee[i].firstName + employee[i].lastName;
        row.department = employee.department;
        row.timeIn = attendance.timeIn;
        row.timeOut = attendance.timeOut;
        employeeDetails.push(row)
    }
    
}

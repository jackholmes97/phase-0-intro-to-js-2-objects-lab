const employee = {
    name : "Jack",
    streetAddress : {
        street : {
            line1 : "8 East 30 Street",
            line2 : "Apt 20"
        },
        city : "Brooklyn",
        state : "New York",
        zipCode : "10012"
    }

}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee };
    updatedEmployee[key] = value;
    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const pastEmployee = { ...employee };
    delete pastEmployee[key];
    return pastEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

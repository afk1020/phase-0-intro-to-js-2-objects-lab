// Write your solution in this file!
const employee = {
    name: 'Sam', 
    streetAddress: '11 Broadway'
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({}, {name:'Sam'}, {streetAddress: '11 Broadway'})
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee 
}
 function deleteFromEmployeeByKey(employee, key){
    const newObject = Object.assign({}, employee)
    delete newObject[key]
    return newObject
 }
function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    employee[key]=value;
    return employee
}
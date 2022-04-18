import {EmployeeService} from "../../services/EmployeeService"

export default{
    namespaced: true,
    state: {
        employeeList:{
            employees: EmployeeService.getAllEmployees()
        }
    },
    mutations: {
        UPDATE_SELECTED(state,payload){
            state.employeeList.employees=state.employeeList.employees.map(employee=>{
                if (employee.id===payload.empId){
                    console.log(payload.empId)
                    return {
                      ...employee,
                      isSelected: !employee.isSelected
                    }
                }else return employee
            })
        }
    },
    actions:{
        changeSelected({commit},payload) {
            console.log('change selected');
            return commit("UPDATE_SELECTED",payload)
        }
    },
}
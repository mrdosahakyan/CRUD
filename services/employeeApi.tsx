import { EmployeeEndPoints } from "./endPointsUrl";
import axios from 'axios'
import { IEmployee, IEmployeeToSend } from "../models/employee";

export const getEmployees = async (): Promise<IEmployee[]> => {
      const res = await axios.get(EmployeeEndPoints.Get_All_Employees)
      return res.data
}

export const getEmployeeById = async (id: string ): Promise<IEmployee> => {
      const res = await axios.get(`${EmployeeEndPoints.Get_Employee_By_Id}${id}`)
      return res.data
}

export const createEmployee = async (newEmployee: IEmployeeToSend )  => {
      await axios.post(EmployeeEndPoints.Post_Employee, newEmployee)
}

export const editEmployee = async (id: string, editedData: IEmployeeToSend ) => {
      await axios.put(`${EmployeeEndPoints.Put_Employee_By_Id}${id}`, editedData )
}

export const deleteEmployee = async (id: string ) => {
      await axios.delete(`${EmployeeEndPoints.Delete_Employee_By_Id}${id}`)
}


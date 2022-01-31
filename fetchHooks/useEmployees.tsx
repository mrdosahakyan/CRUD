import { useQuery, UseQueryResult } from "react-query";
import { IEmployee } from "../models/employee";
import { getEmployeeById, getEmployees } from "../services/employeeApi";

const useEmployees = (): UseQueryResult<IEmployee[]> => {
  return useQuery("employees",getEmployees);
};

const useEmployeesById = (id: string): UseQueryResult<IEmployee> => {
  return useQuery(['employees', id],()=>getEmployeeById(id));
};

export { useEmployees, useEmployeesById};

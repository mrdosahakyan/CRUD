import { useRouter } from "next/router";
import { useEmployees } from "../fetchHooks/useEmployees";
import { IEmployee, IEmployeeToSend } from "../models/employee";
import { deleteEmployee, editEmployee, createEmployee } from "../services/employeeApi";

const Table = () => {
  const router = useRouter();
  const { data, isFetching } = useEmployees();

  const handleDeleteEmployee = async (id: string) => {
    try {
      await deleteEmployee(id);
    } catch (e) {
      console.log(e);
    }
  };
  const editedData = { fullName: "Mrdo", salary: 200000 };
  const handleEditEmployee = async (id: string) => {
    try {
      await editEmployee(id, editedData);
    } catch (e) {
      console.log(e);
    }
  };
const newEmployee = {fullName: 'Hayk', salary: 100000}
  const handleAddEployee = async (newEmployee: IEmployeeToSend) => {
    try {
      await createEmployee(newEmployee);
    } catch (e) {
      console.log(e);
    }
  };

  if (isFetching) return <p>Fetching.....</p>;

  return (
    <>
      <button onClick={()=>handleAddEployee(newEmployee)}>Add employee</button>
      <table>
        <thead>
          <tr>
            <th>N</th>
            <th>Name</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((el) => (
            <tr style={{cursor: 'pointer'}} key={el.id}>
              <th>{el.id}</th>
              <th onClick={() => router.push(`employee/${el.id}`)}>
                {el.fullName}
              </th>
              <th>{el.salary}</th>
              <th>
                <button onClick={() => handleDeleteEmployee(el.id)}>
                  Delete
                </button>{" "}
                <button onClick={() => handleEditEmployee(el.id)}>Edit</button>{" "}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;

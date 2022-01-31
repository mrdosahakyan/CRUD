import { useRouter } from "next/router"
import { useEmployeesById } from "../../fetchHooks/useEmployees"

const EmployeeDetails = () =>{
    const router = useRouter()
    const employeeId = router?.query?.id
const {data} = useEmployeesById(String(employeeId))    
    
    return(
        <div>
            <p>Full Name ::: {data?.fullName}</p>
        </div>
    )
}

export default EmployeeDetails
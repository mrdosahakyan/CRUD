
export interface IEmployeeToSend {
    fullName: string;
    salary: number;
}

export interface IEmployee extends IEmployeeToSend {
    id: string;
}
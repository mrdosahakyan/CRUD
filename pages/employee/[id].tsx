import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { getEmployeeById } from "../../services/employeeApi";

  const EmployeeDetails = ({ data } : InferGetServerSidePropsType<typeof getServerSideProps>) => {

  return (
    <div>
      <p>Full Name ::: {data?.fullName}</p>
      <button onClick={useRouter().back}>go back</button>
    </div>
  );
};

export default EmployeeDetails;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const employeeId = context.params?.id;
  const data = await getEmployeeById(String(employeeId));
  return {
    props: { data }, // will be passed to the page component as props
  };
}

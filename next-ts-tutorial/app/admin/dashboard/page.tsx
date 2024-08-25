import Link from "next/link";

const Dashboard = () => {
  return <>
    <h1>Dashboard without Grouping</h1>
      <p>/admin/dashboard</p>
      <Link href={"/dashboard"}>Go to Dashboard.</Link>
  </>
}

export default Dashboard;
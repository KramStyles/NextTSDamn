import Link from "next/link";

const Dashboard = () => {
    return <>
        <h1>Dashboard Page from Grouping.</h1>
        <pre>/dashboard</pre>
        <Link href={"/admin/dashboard"} className="text-balance">Go to Admin/Dashboard</Link>
    </>;
};

export default Dashboard;

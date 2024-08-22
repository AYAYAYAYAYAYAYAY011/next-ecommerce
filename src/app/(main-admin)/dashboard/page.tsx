import Link from "next/link";

export default function DashboardPage() {
  return (
    <main>
      <h1>Admin Dashboard Page</h1>
      <Link href="../content/resume">Resume</Link><br/>
        <Link href="../">Main Page</Link><br/>
        <Link href="../abount">Go to About</Link>
    </main>
  );
}
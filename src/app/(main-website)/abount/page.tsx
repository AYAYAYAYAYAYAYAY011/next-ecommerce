import Link from "next/link";

export default function Page() {
    return (
      <>
        <h1>Abount page</h1>
        <Link href="../content/resume">Resume</Link><br/>
        <Link href="../">Main Page</Link>
      </>
    )
  }
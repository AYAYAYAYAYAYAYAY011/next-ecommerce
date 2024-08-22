import Link from "next/link";
import AppLogo from "./components/AppLogo";

export default function Home(){
  return(
    <main>
      <h1>Home page</h1>
    <AppLogo title="Logo One" c="red"/>
    <AppLogo title="Logo Two" c="blue"/><br/>
    <Link href="../content/resume">Resume</Link><br/>
    <Link href="../abount">Go to About</Link><br/>
    <Link href="../dashboard">Dashboard</Link>
    </main>
  );
}
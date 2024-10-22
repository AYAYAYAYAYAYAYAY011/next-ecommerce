import Link from "next/link";
import AppLogo from "./components/AppLogo";
import { Container } from "@mui/material";

async function getData(){
  const response = await fetch('https://dummyjson.com/users');
  if(!response.ok){
    throw new Error("ไม่สามารถ Fetch Data ได้");

  }
  return await response.json();
}
export default async function Home(){
  const response = await getData();
  return(
    <Container>
      <h1>{JSON.stringify(response.users)}</h1>
    <AppLogo title="Logo One" c="red"/>
    <AppLogo title="Logo Two" c="blue"/><br/>
    <Link href="../content/resume">Resume</Link><br/>
    <Link href="../abount">Go to About</Link><br/>
    <Link href="../dashboard">Dashboard</Link>
    </Container>
  );
}

import Link from "next/link";
import AppLogo from "./components/AppLogo";
import { Container, Divider, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";

export default async function Home(){
  return(
<Container>
<AppLogo title="Logo One" c="red"/>
    <AppLogo title="Logo Two" c="blue"/><br/>
    <Link href="../content/resume">Resume</Link><br/>
    <Link href="../abount">Go to About</Link><br/>
    <Link href="../dashboard">Dashboard</Link>
</Container>
 )
};

import { Container } from "@mui/material";
import Link from "next/link";

export default function Page() {
  return  (
  <Container>
  
    <h1 style={{color: "green"}}>RESUME</h1>
    <h2>Name:Weerachai Nonsiri<br /> 
    Age: 20<br /> 
    Address: U-thong, Suphanburi<br />
    Email:  weerachai91148@gmail.com<br />
    Phone: 0615769546<br />
    Job: Software Engineer<br />
    Education: Bachelor of Computer Science, Suphanburi University<br />
    Skill: JavaScript, React, Next.js,CSS,Git,HTML<br />
    laguage:english litle bits<br />
    </h2> 
    <Link href="../">Main Page</Link>
    {' '}<br></br>
    <Link href="../abount">Go to About</Link><br/>
    <Link href="../dashboard">Dashboard</Link>
    </Container>
    );
}
import Link from "next/link";
import AppLogo from "./components/AppLogo";
import { Container, Divider, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";

async function getData(){
  const response = await fetch('https://dummyjson.com/products',{cache: `no-store`});
  if(!response.ok){
    throw new Error("ไม่สามารถ Fetch Data ได้");

  }
  return await response.json();
}
export default async function Home(){
  const response = await getData();
  return(
    <Container>
      <h1>Products</h1>
      {
        response.products &&(
          <>
          <Grid>
            {
              response.products.map((item: any) =>{
              return(<Grid item key={item.id} lg={3} xs={6}>
              <Paper>
                <Image src={item.thumbnail} alt={item.detail} />
                <Divider></Divider>
                <Typography>{item.detail}</Typography>
              </Paper>
              </Grid>)

            })
          }
          </Grid>
          </>
        )
      }
      <h1>{JSON.stringify(response.products)}</h1>
    <AppLogo title="Logo One" c="red"/>
    <AppLogo title="Logo Two" c="blue"/><br/>
    <Link href="../content/resume">Resume</Link><br/>
    <Link href="../abount">Go to About</Link><br/>
    <Link href="../dashboard">Dashboard</Link>
    </Container>
  );
}

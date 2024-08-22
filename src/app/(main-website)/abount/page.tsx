import Link from "next/link";
import { Button,colors, Typography } from "@mui/material";


export default function Page() {
    return (
      <>
        <Typography variant="h5" sx={{color: 'red' , bgcolor: 'black'}}>เกี่ยวกับเรา</Typography>
        <div>
          <Button component={Link} href="../" replace={true} variant="contained" color="success">กลับหน้าหลัก</Button>
        </div>
        <Link href="../content/resume">Resume</Link><br/>
        <Link href="../">Main Page</Link><br/>
        <Link href="../dashboard">Dashboard</Link>
      </>
    )
  }
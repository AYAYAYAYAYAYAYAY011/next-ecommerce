'use client'

import React from "react";
import  AppBar  from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import NextLink from "next/link";
import theme from "@/app/theme";
//import { BorderBottom } from "@mui/icons-material";

export default function AppHeader() {
  return (
    <main>
      <AppBar position="static" elevation={0} sx={{ borderBottom: (theme)=>`1px solid ${theme.palette.divider}` }}
      >

      </AppBar>
    </main>
  );
}
import React from "react";
import { Container, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import Badge from "@mui/material/Badge";


export default function Navigation(props) {

  


  return (
    <Container fixed sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Button disabled={props.page<=1? true: false} onClick={()=>props.setPage(props.page-1)} variant='contained' startIcon={<NavigateBeforeIcon />}>
            Previous
          </Button>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex" }}>
          <Badge badgeContent={props.page} sx={{ mx: "auto" }} color='primary'>
            <InsertDriveFileIcon color='action' />
          </Badge>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex" }}>
          <Button disabled={props.page>=34? true: false} onClick={()=>props.setPage(props.page+1)}
            variant='contained'
            endIcon={<NavigateNextIcon />}
            sx={{ ml: "auto" }}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//   root: {
//     backgroundColor: "red",
//   },
// });

export default function LoadingSkeleton() {
  // const classes = useStyles();

  return (
    <Stack spacing={1}>
      {/* <Skeleton variant="circular" width={40} height={40} /> */}
      <Skeleton
        // className={classes.root}
        variant="rectangular"
        width={210}
        height={118}
      />
      <Skeleton variant="text" width={210} />
    </Stack>
  );
}

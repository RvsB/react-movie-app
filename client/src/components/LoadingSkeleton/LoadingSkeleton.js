import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import "./LoadingSkeleton.scss";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//   root: {
//     backgroundColor: "red",
//   },
// });

export default function LoadingSkeleton() {
  // const classes = useStyles();

  return (
    <div className="skeleton-container">
      <div>
        <Stack spacing={1}>
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width={210}
            height={118}
          />
          <Skeleton sx={{ bgcolor: "grey.900" }} variant="text" width={210} />
        </Stack>
      </div>

      <div>
        <Stack spacing={1}>
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width={210}
            height={118}
          />
          <Skeleton sx={{ bgcolor: "grey.900" }} variant="text" width={210} />
        </Stack>
      </div>

      <div>
        <Stack spacing={1}>
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width={210}
            height={118}
          />
          <Skeleton sx={{ bgcolor: "grey.900" }} variant="text" width={210} />
        </Stack>
      </div>

      <div>
        <Stack spacing={1}>
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width={210}
            height={118}
          />
          <Skeleton sx={{ bgcolor: "grey.900" }} variant="text" width={210} />
        </Stack>
      </div>
    </div>
  );
}

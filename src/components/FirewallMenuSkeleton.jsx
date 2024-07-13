import { Fullscreen } from "@mui/icons-material";
import { Box, Skeleton } from "@mui/material";

const FireWallMenuSkeleton = () => {
  return (
    <div dir="rtl">
      <Skeleton variant="rounded" width={250} height={50} />
      <Box mt={2}>
        <Skeleton variant="rounded" width={Fullscreen} height={270} />
      </Box>
      <Box mt={2}>
        <Skeleton variant="rounded" width={Fullscreen} height={270} />
      </Box>
    </div>
  );
};

export default FireWallMenuSkeleton;

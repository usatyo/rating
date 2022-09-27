import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import { Box, Stack, SxProps, Typography } from "@mui/material";
import Link from "next/link";
import { ReactElement } from "react";

const tiltleSx: SxProps = {
  display: "inline-block",
  fontFamily: "serif",
}

const Header = (): ReactElement => {
  return (
    <Stack
      sx={{
        position: "fixed",
        left: "0",
        top: "0",
        width: "100vw",
        zIndex: "1",
        padding: "20px 40px",
        backgroundColor: "white",
        boxShadow: "0 3px 5px #CCC",
      }}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Typography variant="h4" sx={tiltleSx}>北大囲碁部</Typography>
        <Typography variant="h4" sx={tiltleSx}>レーティング</Typography>
      </Box>
      <Link href="/home">
        <HomeOutlinedIcon 
          sx={{ 
            width: '40px', 
            height: '40px', 
            "&:hover": {
              color: '#666'
            }
          }} 
        />
      </Link>
    </Stack>
  )
}

export default Header
import { Stack, SxProps, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { ReactElement } from "react";
import { BORDER } from "../constants/constants";

const Footer = (): ReactElement => {
  const lg: boolean = useMediaQuery(BORDER)

  const text: SxProps = {
    "&:hover": {
      color: "#999"
    }
  }

  return (
    <Stack
      sx={{
        position: "absolute",
        left: "0",
        marginTop: "100px",
        width: "100vw",
        height: "200px",
        paddingY: "40px",
        paddingX: "40px",
        backgroundColor: "#445",
        color: "white",
        zIndex: "1",
      }}
      direction={lg ? "row" : "column"}
      alignItems={lg ? "center" : "left"}
      justifyContent="space-evenly"
    >
      <Link href="/home">
        <Typography variant="body1" sx={text}>ホーム</Typography>
      </Link>
      <Link href="/ranking">
        <Typography variant="body1" sx={text}>ランキング</Typography>
      </Link>
      <Link href="/history">
        <Typography variant="body1" sx={text}>対局履歴</Typography>
      </Link>
      <Link href="/post/result">
        <Typography variant="body1" sx={text}>結果入力</Typography>
      </Link>
      <Link href="/post/user">
        <Typography variant="body1" sx={text}>部員登録</Typography>
      </Link>
    </Stack>
  )
}

export default Footer
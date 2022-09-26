import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useMediaQuery } from "@mui/material"
import { BORDER } from "../constants/constants"

type Props = {
  header: string[]
  body: string[][]
}

const MyTable = (props: Props) => {
  const lg: boolean = useMediaQuery(BORDER)

  return (
    <TableContainer
      sx={{
        maxWidth: "800px",
        width: "100%",
      }}
      component={Paper}
    >
      <Table>
        <TableHead sx={{ display: lg ? "" : "none" }}>
          <TableRow>
            {props.header.map((info, idx) => (
              <TableCell
                sx={{ textAlign: "center" }}
                key={idx}
              >{info}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.body.map((infos, idx1) => {
            return (lg ? (
              <TableRow key={idx1}>
                {infos.map((info, idx2) => (
                  <TableCell
                    sx={{ textAlign: "center" }}
                    key={idx2}
                  >{info}</TableCell>
                ))}
              </TableRow>
            ) : (<>
              <TableRow sx={{ backgroundColor: "#F3F3F3" }}>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
              {infos.map((val, idx) => (
                <TableRow>
                  <TableCell>{props.header[idx]}</TableCell>
                  <TableCell>{val}</TableCell>
                </TableRow>
              ))}
            </>
            ))
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MyTable
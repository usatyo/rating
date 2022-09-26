import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useMediaQuery } from "@mui/material"
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
        marginX: "auto",
        marginTop: "40px",
      }}
      component={Paper}
    >
      <Table>
        <TableHead>
          <TableRow>
            {props.header.map((info, idx) => (
              <TableCell
                sx={{
                  textAlign: "center",
                }}
                key={idx}
                >{info}</TableCell>
                ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.body.map((infos, idx1) => (
            <TableRow key={idx1}>
              {infos.map((info, idx2) => (
                <TableCell 
                  sx={{
                    textAlign: "center",
                  }}
                  key={idx2}
                >{info}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MyTable
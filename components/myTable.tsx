import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

type Props = {
  header: string[]
  body: string[][]
}

const MyTable = (props: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {props.header.map((info, idx) => (
              <TableCell key={idx}>{info}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.body.map((infos, idx1) => (
            <TableRow key={idx1}>
              {infos.map((info, idx2) => (
                <TableCell key={idx2}>{info}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MyTable
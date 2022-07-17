import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

import { Client as ClientTableRowProps } from "../types";

export const ClientTableRow = ({
  firstName,
  lastName,
  phoneNumber,
  email,
}: ClientTableRowProps) => {
  return (
    <TableRow hover>
      <TableCell component="th" scope="row">
        <Typography color="primary" fontWeight="bold">
          {`${firstName} ${lastName}`}
        </Typography>
      </TableCell>
      <TableCell>{phoneNumber}</TableCell>
      <TableCell>{email}</TableCell>
    </TableRow>
  );
};

import React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Alert from "@mui/material/Alert";

import { ClientTableRow } from "../components/ClientTableRow";
import { Client } from "../types";

type CreateClientFormProps = {
  onSubmit: (props: Client) => void;
};

const CreateClientForm = ({ onSubmit }: CreateClientFormProps) => {
  const [client, setClient] = React.useState<Client>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });

  const handleSubmit = () => {
    onSubmit(client);
  };

  const handleUpdate = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setClient((oldClient) => ({
      ...oldClient,
      [e.target.name]: e.target.value,
    }));
  };

  const isDisabled = Object.values(client).some((el) => !el);

  return (
    <Grid container component="form" spacing={3} sx={{ paddingTop: 1 }}>
      <Grid item xs={6}>
        <TextField
          label="First Name"
          size="small"
          fullWidth
          required
          name="firstName"
          onChange={handleUpdate}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Last Name"
          size="small"
          fullWidth
          required
          name="lastName"
          onChange={handleUpdate}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Phone Number"
          size="small"
          fullWidth
          required
          name="phoneNumber"
          onChange={handleUpdate}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Email"
          size="small"
          fullWidth
          required
          name="email"
          onChange={handleUpdate}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          sx={{ float: "right" }}
          disabled={isDisabled}
          onClick={handleSubmit}
        >
          Create Client
        </Button>
      </Grid>
    </Grid>
  );
};

export const Clients = () => {
  const [clients, setClients] = React.useState<Client[]>([]);
  const [openCreateClientModal, setOpenCreateClientModal] =
    React.useState<boolean>(false);

  const handleOpenCreateClientModal = () => {
    setOpenCreateClientModal(true);
  };

  const handleCloseCreateClientModal = () => {
    setOpenCreateClientModal(false);
  };

  const handleSubmit = (newClient: Client) => {
    setClients((oldClients) => [
      ...oldClients,
      { id: oldClients.length + 1, ...newClient },
    ]);

    handleCloseCreateClientModal();
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 4,
        }}
      >
        <Typography variant="h5">Clients</Typography>
        <Button variant="contained" onClick={handleOpenCreateClientModal}>
          Create New Client
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map((client) => (
              <ClientTableRow
                key={client.id}
                firstName={client.firstName}
                lastName={client.lastName}
                phoneNumber={client.phoneNumber}
                email={client.email}
              />
            ))}

            {clients.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  No Data
                </TableCell>
              </TableRow>
            ) : null}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        open={openCreateClientModal}
        onClose={handleCloseCreateClientModal}
      >
        <DialogTitle>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Create New Client
            <IconButton onClick={handleCloseCreateClientModal}>
              <CloseIcon sx={{ cursor: "pointer" }} />
            </IconButton>
          </Box>
        </DialogTitle>

        <DialogContent>
          <CreateClientForm onSubmit={handleSubmit} />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

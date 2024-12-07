import { Box, Button, Container, Typography } from "@mui/material";

export const App = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          my: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Real Time Chat
        </Typography>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
      </Box>
    </Container>
  );
};

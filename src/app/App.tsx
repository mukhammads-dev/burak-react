import { Box, Button, Pagination, Stack, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import "../css/app.css";

function App() {
  return <Container maxWidth='sm'>
    <Stack flex-direction={'column'}>
      <Box sx={{ my: 4 }}>
        <Typography variant='h4' component={'h4'}>
          Create React App on TypeScript with REDUX
        </Typography>
      </Box>
      <Button variant="outlined" color="error">
        Error
</Button>

    </Stack>
  </Container>;
}

export default App;






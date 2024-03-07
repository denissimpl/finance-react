import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex', position:'fixed', bottom: 0, right:0, margin:8 , zIndex:100 }}>
      <CircularProgress />
    </Box>
  );
}
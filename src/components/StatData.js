import React, { useEffect } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



const StatData = (props) => {
    const { children, value, index } = props;

    
    return (
        <div
            hidden={value !== index}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                 <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

export default StatData

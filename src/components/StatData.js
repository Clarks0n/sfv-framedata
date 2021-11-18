import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

const cellStyles = {
    color: '#ffff33',
    // borderBottom: 'none'
};

const StatData = (props) => {
    const { value, index, data } = props;

    const rows = [
        'health' , 'stun', 'fastestNormal','bWalk','fWalk','bDash','fDash','bDashDist',
        'fDashDist','bJump','nJump','fJump','bJumpDist','fJumpDist','throwHurt','throwRange'
    ];

    const label = [
        'Health', 'Stun', 'Fastest Normal', 'Back Walk', 'Forward Walk', 'Back Dash','Forward Dash', 'Back Dash Distance', 'Forward Dash Distance', 'Back Jump', 'Neutral Jump', 'Forward Jump', 'Back Jump Distance', 'Forward Jump Distance', 'Throw HurtBox', 'Throw Range'
    ];

    return (
        <div
            hidden={value !== index}
        >
            <TableContainer>
                <Table>
                    <TableBody>
                        {rows.map((item,i) => {
                            return (
                                <TableRow key={i}>
                                    <TableCell sx={cellStyles}>
                                        {label[i]}
                                    </TableCell>
                                    <TableCell sx={cellStyles}>
                                        {data[item]}
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default StatData

import React , { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const FrameData = (props) => {
    const { value, index, data } = props;
    const [rows, setRows] = useState([]);

    const header = ["Move", "S" ,"A" ,"R" ,"oH" ,"oB"];


    function createData(Move, S, A, R, OH, OB) {
        return { Move, S, A, R, OH,OB };
    };

    function createRow() {
        // console.log(data)
        // console.log(data.normal["Abi Blaster"].moveName)
        // console.log(Object.keys(data.normal).length)
     
        let keysNormal = Object.keys(data.normal);
        // console.log(data.normal[keysNormal[0]].moveName)
        let rows = [];

        for (let i = 0; i < Object.keys(data.normal).length; i++) {
            rows.push(
                createData(
                    data.normal[keysNormal[i]].moveName,
                    data.normal[keysNormal[i]].startup,
                    data.normal[keysNormal[i]].active,
                    data.normal[keysNormal[i]].recovery,
                    data.normal[keysNormal[i]].onHit,
                    data.normal[keysNormal[i]].onBlock,
                )
            )
        }

        return rows;
    };

    useEffect(() => {
        setRows(createRow());
    }, []);

    return (
        <div
            hidden={value !== index}
        >
            <TableContainer component={Paper}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {header.map((item,i) => {
                                return (
                                    <TableCell align="center" key={i}>
                                        {item}
                                    </TableCell>
                                )
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.Move}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center" sx={{ maxWidth: '30%' }}>
                                    {row.Move}
                                </TableCell>
                                <TableCell align="center" sx={{ maxWidth: '20%', wordWrap: 'break-word' }}>
                                    {row.S}
                                </TableCell>
                                <TableCell align="center" sx={{ maxWidth: '20%' ,wordWrap: 'break-word'}}>
                                    {row.A}
                                </TableCell>
                                <TableCell align="center" sx={{ maxWidth: '10%' }}>
                                    {row.R}
                                </TableCell>
                                <TableCell align="center" sx={{ maxWidth: '10%' }}>
                                    {row.OH}
                                </TableCell>
                                <TableCell align="center" sx={{ maxWidth: '10%' }}>
                                    {row.OB}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default FrameData


// var myObject = { 'a': 1, 'b': 2, 'c': 3 };

// Object.keys(myObject).map(function(key, index) {
//   myObject[key] *= 2;
// });

// console.log(myObject);
// => { 'a': 2, 'b': 4, 'c': 6 }

// const objectMap = (obj, fn) =>
//   Object.fromEntries(
//     Object.entries(obj).map(
//       ([k, v], i) => [k, fn(v, k, i)]
//     )
//   )
  
// const myObject = { a: 1, b: 2, c: 3 }

// console.log(objectMap(myObject, v => 2 * v)) 
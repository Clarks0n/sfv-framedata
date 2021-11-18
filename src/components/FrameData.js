import React , { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const cellStyles = {
    color: '#ffff33',
    wordBreak: 'break-word',
    padding: 0.5
};

const FrameData = (props) => {
    const { value, index, data } = props;
    const [rows, setRows] = useState([]);

    const header = ["Move", "S" ,"A" ,"R" ,"oH" ,"oB"];

    function createData(Move, S, A, R, OH, OB) {
        return { Move, S, A, R, OH,OB };
    };

    function createRow() {
        let keysNormal = Object.keys(data.normal);
        let rows = [];

        for (let i = 0; i < Object.keys(data.normal).length; i++) {
            rows.push(
                createData(
                    data.normal[keysNormal[i]].cmnName !== undefined ? data.normal[keysNormal[i]].cmnName : data.normal[keysNormal[i]].moveName,
                    data.normal[keysNormal[i]].startup,
                    data.normal[keysNormal[i]].active,
                    data.normal[keysNormal[i]].recovery,
                    data.normal[keysNormal[i]].onHit,
                    data.normal[keysNormal[i]].onBlock,
                )
            )
        };

        return rows;
    };

    useEffect(() => {
        setRows(createRow());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            hidden={value !== index}
        >
            <TableContainer sx={{ maxHeight: window.innerHeight}} >
                <Table stickyHeader padding="none" >
                    <TableHead  >
                        <TableRow>
                            {header.map((item,i) => {
                                return (
                                    <TableCell sx={{backgroundColor:'#303030', color: '#ffff33'}} align="center" key={i}>
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
                                <TableCell align="center" sx={cellStyles} >
                                    {row.Move}
                                </TableCell>
                                <TableCell align="center" sx={cellStyles} >
                                    {row.S}
                                </TableCell>
                                <TableCell align="center" sx={cellStyles}  >
                                    {row.A}
                                </TableCell>
                                <TableCell align="center" sx={cellStyles}  >
                                    {row.R}
                                </TableCell>
                                <TableCell align="center" sx={cellStyles}  >
                                    {row.OH}
                                </TableCell>
                                <TableCell align="center" sx={cellStyles}  >
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
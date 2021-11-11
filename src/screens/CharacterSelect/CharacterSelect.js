import React, { useEffect } from 'react';
import './CharacterSelect.css';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { getCharacterList } from '../../store/actions/characterList';
import { Link } from "react-router-dom";

const Item = styled(Button)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: 'yellow',
  backgroundColor: '#212121',
}));

const CharacterSelect = () => {
    const dispatch = useDispatch();
    // const characterList = useSelector((state) => state.characterList.characterList)

    const [characterList] = useSelector((state) => [
        state.characterList.characterList
    ]);

    // const { characterList } = useSelector(state => ({
    //     characterList: state.characterList.characterList,
    // }));
 
    useEffect(() => {
        dispatch(getCharacterList());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <Box sx={{ width: '100%' }}>
            <Typography 
                align='center'
                variant="h4" 
                className="textColor"
            >
                Character List
            </Typography>
            <Grid 
                container 
                rowSpacing={1} 
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                {characterList.map((item,i) => {
                    return (
                        <Grid item xs={6} key={i}>
                            <Link 
                                to={`${item}`}
                                state={{
                                    name: item
                                }}
                            >
                                <Item 
                                    fullWidth={true}
                                    // onClick={()=> {gege()}}
                                >    
                                    <code>{item}</code>
                                </Item>
                            </Link>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}

export default CharacterSelect

import React , {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { useNavigate } from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { getCharacterData, resetCharacterData } from '../store/actions/characterList';
import FrameData from '../components/FrameData';
import StatData from '../components/StatData';

const Typho = styled(Typography)(({ theme }) => ({
    color: '#ffdf00',
    margin: 10
}));

const ArrowIcon = styled(ArrowBackSharpIcon)(({ theme }) => ({
    color: '#ffdf00',
    margin: 10
}));

const AntTabs = styled(Tabs)({
    '& .MuiTab-root': {
        color: '#fff',
        backgroundColor:'#607d8a',
    },
    '& .MuiTab-root.Mui-selected': {
        color: '#FFD700'
    },
    '& .MuiTabs-indicator': {
        backgroundColor: '#FFD700',
    },
});

const FrameDetails = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const pathName = location.pathname;
    const name = pathName.substring(1);

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [characterData] = useSelector((state) => [
        state.characterList.characterData
    ]);

    useEffect(() => {
        dispatch(getCharacterData(name));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const goBackToHome = () => {
        dispatch(resetCharacterData());
        navigate("/");
    };
    
    if(characterData.length === 0) return (<p>Loading....</p>)
    return (
        <Box sx={{ width: '100%' }}>
            <Grid 
                container
            >   
                <Grid item xs={2} md={2}>
                    <Button 
                        onClick={goBackToHome}
                    >
                        <ArrowIcon 
                            fontSize = "large" 
                        />
                    </Button>
                </Grid>
                <Grid item xs={8} md={8}>
                    <Typho 
                        align='center'
                        variant="h4"
                    >
                        {name}
                    </Typho>
                </Grid>   
            </Grid>
            <AntTabs value={value} variant="fullWidth" onChange={handleChange} >
                 <Tab label="Stat Data" />
                <Tab label="Frame Data" />
               
            </AntTabs>
            <FrameData value={value} index={0} data={characterData.moves} />
            <StatData value={value} index={1} data={characterData.stats} />
        </Box>
    )
};

export default FrameDetails

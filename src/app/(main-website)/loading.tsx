
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading(){
    
    return(
        <>
        <Box sx={{
            display: "flex",
            mt: 10,
            justifyContent: "center",
            alignItems: "center"
        }}>
        <CircularProgress size="10rem" />
        </Box>
        </>
    );
}
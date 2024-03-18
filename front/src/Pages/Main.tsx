import { useSelector } from "react-redux";
import { RootState } from "../redux";
import timeGreet from "../components/Main/timeGreet";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Typography from '@mui/material/Typography';


const Main = () => {
    
    const login = useSelector((state: RootState) => state.userData.user.login)
    const greet = timeGreet()
    return (
        <Card sx={{ maxWidth: 345 , margin: "100px auto"}}>
        <EmojiEmotionsIcon fontSize='large' sx={{margin:"auto", display: "block", mt: "20px"}}/>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {`${greet}, ${login}!`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Используйте меню для управления приложением.
            </Typography>
        </CardContent>
        </Card>
    );
}

export default Main;
import WavingHandIcon from '@mui/icons-material/WavingHand';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Guest = () => {

  const navigate = useNavigate()

  return (
    <Card sx={{ maxWidth: 345 , margin: "100px auto"}}>
      <CardActionArea onClick={() => navigate("/login")}>
        <WavingHandIcon sx={{margin:"auto", display: "block", mt: "20px"}} fontSize='large' />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Приветствуем
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Авторизуйтесь, чтобы использовать приложение
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Guest

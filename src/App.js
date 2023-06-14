import React, { useEffect ,useState} from 'react'
import { Box, Button, Typography ,Link} from '@mui/material'
import './App.css';
import Main from './components/Main';

import TwitterIcon from '@mui/icons-material/Twitter';


const App = () => {
  const [quoteInfo, setQuoteInfo] = useState({})
  const url = 'https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes';
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5eca30cc99mshefad46e9a90b85cp1cbf46jsn7d6828c30011',
		'X-RapidAPI-Host': 'quotes-by-api-ninjas.p.rapidapi.com'
	}
};
  useEffect(() =>{
    handleRandom();
  },[]);
  const handleRandom = async () => {
    const response = await fetch(url, options);
    const result = await response.json();
    setQuoteInfo({
      text : result[0].quote,
      autor : result[0].author
    })
    };
 
  return (
    <div>  <Main> </Main>
    
      <div id="quote-box" > 
        <Typography  id="text" sx={{fontFamily:"cursive" , color: "whitesmoke"}}>{quoteInfo.text}</Typography>
        <Typography id="author" sx={{fontFamily:"monospace", color:"#F0F3D0" }}>{quoteInfo.autor }</Typography>
        <Box sx={{flexDirection:"row" , alignItems:"flex-end"}} >
        <Link href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22A%20person%20who%20never%20made%20a%20mistake%20never%20tried%20anything%20new.%22%20%20Albert%20Einstein" id="tweet-quote"sx={{width:"40px"}}>
          <TwitterIcon />
        </Link>
        <Button id="new-quote" variant='contained'  size='small' sx={{width:"40px" , marginLeft:"390px"}} onClick={handleRandom}>Get </Button>
        
        <Typography sx={{fontFamily:"-moz-initial" , width:"80px", color:"white" ,marginLeft : "430px"}}>by Mati</Typography>
       </Box>
        </div>
        
       
  </div>)
}

export default App
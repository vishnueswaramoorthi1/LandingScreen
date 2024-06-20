import React, { useEffect, useState } from 'react';
import Right from "../src/assorts/nutzimage10.svg"
import Left from "../src/assorts/nutzimage9.svg"
import bell from "../src/assorts/nutzimage2.jpg"
import imag from "../src/assorts/nutzimage8.svg"
import commingSoon from "../src/assorts/nutzimage5.svg"
import Birthday from "../src/assorts/nutzimage6.svg"
import locater from "../src/assorts/nutzimage7.svg"
import Buttha from "../src/assorts/nutzImage1.jpg"
import students from "../src/assorts/nutzimage3.svg"
import Medel from "../src/assorts/nutzimage4.svg"
import human from "../src/assorts/nutzimage11.svg"
import plus from "../src/assorts/nutzimage12.svg"
import "../src/Home.css"
import {
    Routes,
     Route,
     Link,
     
   } from "react-router-dom";
import MyDossier from './MyDossier';
import Enquiries from './Enquiries';
import Applications from './Applications';
import { Button, Card, CardActions, CardContent, Grid, LinearProgress, Typography } from '@mui/material';



const Home = () => {

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const[cardName,setCardName]=useState(['Learners','Courses','Events'])
    const[cardCount,setCardCount]=useState([0,4,"  "])
    const[cardApply,setCardApply]=useState([human,plus,commingSoon])
    const[cardContent,setCardContent]=useState([students,Medel,Birthday])
    const[cardColor,setCardColor]=useState(['rgb(14, 85, 82)','rgb(135, 25, 59)','rgb(5, 12, 77)'])
    const[batchName,setBatchName]=useState(["Node Js batch June","Test batch","Feature batch","Summer batch","RP24"])
    const[place,setPlace]=useState([" ","salem","salem","salem"," "])
    const[mode,setMode]=useState(["online","offline","offline","offline","online"])
    const[startDate,setStartDate]=useState(["13 Jun 2024","10 Jun 2024"," ","01 Jun 2024","14 Jun 2024"])
    const[endDate,setEndDate]=useState(["18 Jun 2024","27 Jun 2024"," ","30 Jun 2024","20 Jun 2024"])
    const [progress, setProgress] = React.useState([10,28,7,95,45]);
const getDay=()=>{
    let days=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    let dayInNunber=(new Date().getDay())-1
    let dayName=days[dayInNunber]
    setDay(dayName)
}
const getMonth = () => {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthInNumber = new Date().getMonth();
    const monthName = monthNames[monthInNumber];
    setMonth(monthName);
};
useEffect(()=>{
    getDay()
    getMonth()
},[])
    return (
        <>
        <div className='first_layer'>
            <div className='first_layer_one'>
          <img src={Right} alt='left_arrow' style={{ width: '20px', height: 'auto',color:"black"}}/>
          <img src={Left} alt='left_arrow' style={{ width: '20px', height: 'auto',color:"black"}}/>
            </div>
            <div className='second_layer'>
         <div className='second_layer_one'>
       
       <img src={imag} alt='image' style={{ width: '15px', height: 'auto',color:"black"}}/>
       <img src={bell} alt='bell' style={{ width: '40px', height: 'auto',color:"black",borderRadius:"50%"}}/>
       
      </div>
    </div>
        </div>
        <hr style={{ height: '2px', width: '100%',backgroundColor: "rgb(111, 240, 240)", border: 'none' }} />
        <div className='second_layer_base'>
    <ul className='horizontal-list'>
        <li><Link to="/">Overview</Link></li>
        <li><Link to="/MyDossier">My Dossier</Link></li>
        <li><Link to="/Enquiries">Enquiries</Link></li>
        <li><Link to="/Applications">Applications</Link></li>
        <li><Link to="/TextCreation">TextCreation</Link></li>
    </ul>
</div>
<hr style={{ height: '2px', width: '100%',backgroundColor: "rgb(111, 240, 240)", border: 'none' }} />
        <div className='Date'>
            {day},{month} {new Date().getDate()}
            </div>  
            <div style={{fontWeight:'800',color:'black',fontSize:'30px', marginTop: "32px",
    marginLeft: "40px"}}>Welcome, Vishnu</div>
         <div style={{display:'flex', flexWrap:'wrap'}}>
            <Grid lg={4} xl={6} style={{display:'flex',flexWrap:'wrap',flexShrink:'inherit'}}>
         {Array(3)
      .fill(null)
      .map((_, i) => (
        <Grid
          key={i}
          style={{
            flex: '0 0 300px',
            height: "160px",
            backgroundColor: cardColor[i],
            margin: "10px",
            borderRadius: '20px',
            display: 'flex',
            padding:"10px"
          }}
        >
       <Grid className='left' xl={6} sm={6} style={{display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
        <div style={{color:'white'}}>{cardName[i]}</div>
        <div style={{color:'white'}}>{cardCount[i]}</div>
        {i === 0 || i === 1 ? (
                                   (i===0? <Button variant="text" style={{width:'150px',height:'40px',backgroundColor:"white",borderRadius:'20px',fontSize:"12px"}}>
                                   <img src={cardApply[i]} alt="img" width="30px" height="30px" /> Add Learners
                               </Button>: <Button variant="text" style={{width:'150px',height:'40px',backgroundColor:"white",borderRadius:'20px',fontSize:"12px",whiteSpace:"nowrap"}}>
                                        <img src={cardApply[i]} alt="img" width="30px" height="30px"/> Create Courses
                                    </Button>)
                                ) : (
                                    <img src={cardApply[i]} alt="img" width="150px" height="40px" />
                                )}
       </Grid>
       <Grid className='right'  xl={6} sm={6}>
        <img src={cardContent[i]} alt='Img' width="130px" height="130px" style={{paddingBottom:'1%'}}/>
        
       </Grid>
        </Grid>
      ))}
      </Grid>
         </div>
         <Grid lg={12} sm={12}>
            <p style={{fontSize:'20px',fontWeight:'500',marginLeft:'40px'}}>Current Batches</p>
         </Grid>
         <Grid lg={3} sm={6}>
         <Grid lg={4} xl={6} style={{display:'flex',flexWrap:'wrap'}}>
         {Array(5)
      .fill(null)
      .map((_, i) => (
        <Grid style={{padding:'2%',display:'flex',flexWrap:'wrap'}}>
        <Card sx={{ minWidth: 275,borderTop: "8px solid rgb(32, 143, 138)",borderRadius:'10px' }}>
        <CardContent>
        <div style={{display:'flex',flexDirection:'column',gap:'29px'}}>
            <div>
          <Typography
           sx={{ fontSize: "20px",fontWeight:'700',color:'black' }} color="text.secondary" gutterBottom>
           {batchName[i]}
          </Typography>
          {place[i]!==" " ?<Typography  component="div" style={{fontsize:'10px',display:'flex',gap:'10px'}}>
          <img src={locater} alt='Img' width="10px" height="20px" style={{paddingBottom:'1%'}}/>{place[i]}
          </Typography>:"" }
          
          <Typography sx={{ mb: 1.5 }} >
            <div style={{display:'flex',gap:'10px'}}>
                <div style={{ width: '90px', height: '20px', borderRadius: '10px', border: '2px solid rgb(32, 143, 138)',color:'black',textAlign:'center'}}>
                {mode[i]}</div>
                <div style={{fontsize:'70px',fontWeight:'500'}}>
                .</div>
                <div style={{color:'black',textAlign:'center'}}>
                0 Learners</div>
                </div>
           </Typography>
           </div>
           <div>
          <Typography variant="body2">
           <div style={{display:'flex',flexDirection:'row',gap:'20px'}}>
            <div>{startDate[i]}</div>
            <div>{endDate[i]}</div>
           </div>
           <div style={{margin:"10%"}}>
           <LinearProgress variant="determinate" value={progress[i]} />
           </div>
           <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:'10%'}}>
            <div><img src={Buttha} alt="img" width="30px" height="30px" style={{borderRadius:'50%'}}/></div>
            <div style={{borderLeft:"2px solid rgb(32, 143, 138)",borderRadius:'10%'}}>Revenue<br/>Comming Soon</div>
           </div>
          </Typography>
          </div>
          </div>
        </CardContent>
       
      </Card>
      </Grid>
      ))}  
      </Grid>
      </Grid>

     </>
    );
};

export default Home;

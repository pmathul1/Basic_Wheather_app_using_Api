import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Wheathercard from './Wheathercard';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

 let Wheatherinput=({dataaa,setDataaa,keypassword,apiurl,query,setQuery})=>{

    let data;
    let  onInputFun=(e)=>{
        setQuery(e.target.value)
    }

    let passData=async (e)=>
    {
        e.preventDefault();
        apiCall();
        setQuery("");
    }
    async function apiCall()
    {
      let jsondata=await fetch(`${apiurl}?access_key=${keypassword}8&query=${query}`)
       data=await jsondata.json()
       setDataaa(data)
    }
    const classes = useStyles();
    return (
        <div>
            <form className={classes.root}  onSubmit={passData}>
                <TextField placeholder="enter city name" value={query} id="outlined-basic"  variant="outlined" onChange={onInputFun} />
                <Button type="submit" variant="contained" color="secondary">Get Weather</Button>
            </form>
            <br/>
            <br/>
            <br/>
            {dataaa.location?<Wheathercard data={dataaa}/>:<h1>No Data Found</h1>}
        </div>
    )
}

export default Wheatherinput;
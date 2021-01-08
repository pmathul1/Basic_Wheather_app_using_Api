import React,{useState} from 'react'
import Wheatherinput from './Wheatherinput'
import Container from '@material-ui/core/Container';

const Wheather= () =>
{
    let keypassword=`f6a135fd33b8564161abb2e569697b2`
    let apiurl=`http://api.weatherstack.com/current`
    let [query,setQuery]=useState("")
    let [dataaa,setDataaa]=useState("")
    return (
        <Container  maxWidth="sm">
            <Wheatherinput dataaa={dataaa} setDataaa={setDataaa} keypassword={keypassword} apiurl={apiurl} query={query} setQuery={setQuery} />
        </Container>
    )
}

export default Wheather;
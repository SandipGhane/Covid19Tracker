import React,{useState,useEffect} from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './CountryPicker.module.css'

import { fetchCountries } from '../../api/index'

const CountryPicker =({ countypicker })=>{
    const [fetchedCountries,setFetchedCountries] = useState([])
    useEffect(()=>{
        const fetchAPI = async()=>{
            setFetchedCountries(await fetchCountries())
        }
        fetchAPI()
    },[setFetchedCountries]);

    //console.log(fetchedCountries)

    return(
        <FormControl className={styles.formControl}>
            <NativeSelect style={{marginTop:30}} default="" onChange={(e)=>countypicker(e.target.value)}>
                <option value="global">Global</option>
                    {fetchedCountries.map((country,i)=>
                        <option
                            key={i}
                            value={country}
                        >{country}</option>
                    )}
            </NativeSelect>
        </FormControl>
    )
}
export default CountryPicker
import React, { Component } from 'react'
import { Cards,Charts,CountryPicker } from './components/index'
import styles from './App.module.css'

//api
import { fetchData } from './api/index'
import corona from './images/corona.png'


class App extends Component {
    state={
        data:{},
        country:''
    }
    async componentDidMount() {
        const data = await fetchData();
        this.setState({ data });
      }
    handleCountyChange=async(country)=>{
        const fetchedData = await fetchData(country);
        //console.log(fetchedData)
       // console.log(country);
        this.setState({data:fetchedData,country:country})
    }
    render() {
        const { data,country }=this.state
        return (
            <div className={styles.container}>
                <img className={styles.image} src={corona} />
                <hr/>
                <Cards data={data} />
                <CountryPicker countypicker={this.handleCountyChange}/>
                <Charts data={data} country={country}/>
            </div>
        )
    }
}

export default App

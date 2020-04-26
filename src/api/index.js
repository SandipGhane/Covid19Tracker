import axios from 'axios'
const url = 'https://covid19.mathdro.id/api'

export const fetchData = async(country)=>{
    let changeableUrl = url;
    //console.log('hello')
    if (country && country != 'global') {
      changeableUrl = `${url}/countries/${country}`;
    }
  
    try {

      const { 
              data: 
              { 
                confirmed, 
                recovered, 
                deaths, 
                lastUpdate 
              } 
            } = await axios.get(changeableUrl);
  
      return { confirmed, recovered, deaths, lastUpdate };

    } catch (error) {
      return error;
    }
  };

export const fetchDailyData = async()=>{
    try{
        //console.log(`{u`);
        const { data } = await axios.get('https://covid19.mathdro.id/api/daily');
        //console.log('data'+data);
        const modifiedData = data.map((dailyData)=>({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))
       // console.log('modified Data'+modifiedData);
        return modifiedData
    }catch(error){
        console.log(error);
    }
}

export const fetchCountries = async()=>{
    try{
        const {data:{ countries }} = await axios.get('https://covid19.mathdro.id/api/countries')
       //console.log(countries.name);

        return countries.map((country)=>country.name)
    }catch(error){
        console.log(error)
    }
}

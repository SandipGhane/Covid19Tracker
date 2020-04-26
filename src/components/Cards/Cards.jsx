import React from 'react'
import { Card, CardContent, Typography, Grid} from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'

const Cards =({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
      return 'Loading...';
    }
    return(
        //const grid = 
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="primary"variant="h5" gutterBottom>Infected</Typography>
                        <Typography variant="h5" style={{color:'blue'}}>
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={5}
                                separator=","
                            />
                        </Typography>
                        <hr/>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number Of Active Cases Of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recoverd)}>
                    <CardContent>
                        <Typography style={{color:'green'}} variant="h5" gutterBottom>Recovered</Typography>
                        <Typography variant="h5" style={{color:'green'}}>
                        <CountUp
                                start={0}
                                end={recovered.value}
                                duration={5}
                                separator=","
                            />
                        </Typography>
                        <hr/>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number Of Recoveries Cases Of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography style={{color:'red'}} variant="h5" gutterBottom>Deaths</Typography>
                        <Typography variant="h5" style={{color:'red'}}>
                        <CountUp
                                start={0}
                                end={deaths.value}
                                duration={5}
                                separator=","
                            />
                        </Typography>
                        <hr/>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number Of Death Cases Of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
export default Cards
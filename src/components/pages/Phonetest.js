import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

export default function Phone() {
  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
       Verify phone number
      </Typography>
      <Grid container spacing={3}>
        <Grid item sm={12} >
          <TextField fullWidth required id='cardName' label='Verify' fullWidth autoComplete='cc-name' />
        </Grid>
        
      </Grid>
    </React.Fragment>
  )
}

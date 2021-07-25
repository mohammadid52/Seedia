import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

export default function Test() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Human Verification
      </Typography>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <TextField
            fullWidth
            required
            id="cardName"
            label="Verify"
            autoComplete="cc-name"
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Checking this will verify you as a human in next process"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

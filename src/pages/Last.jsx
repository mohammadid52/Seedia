import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

export default function Last() {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  })
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Your contact details
      </Typography>
      <Typography variant="h6" gutterBottom>
        We use this information to message you about account activity on other
        matter
      </Typography>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <InputLabel id="demo-simple-select-label">
            Relation to company
          </InputLabel>
          <Select
            fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={handleChange}
          >
            <MenuItem value={1}>Employee</MenuItem>
            <MenuItem value={2}>MD</MenuItem>
            <MenuItem value={3}>CEO</MenuItem>
            <MenuItem value={4}>Worker</MenuItem>
          </Select>
        </Grid>
        <Grid item sm={6}>
          <TextField
            required
            fullWidth
            id="company email"
            label="First name"
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            required
            fullWidth
            id="company email"
            label="Last name"
            autoComplete="cc-number"
          />
        </Grid>

        <Grid item sm={12}>
          <TextField
            required
            fullWidth
            id="company email"
            label="Job title"
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            type="number"
            id="company email"
            label="Mobile phone"
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            type="number"
            id="company email"
            label="phone"
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            required
            fullWidth
            type="number"
            id="company email"
            label="Email"
            autoComplete="cc-number"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

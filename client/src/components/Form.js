import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

const parking_type = [
  {
    value: "2 HOUR",
    label: "2 HOUR"
  },
  {
    value: "24 HOUR",
    label: "24 HOUR"
  }
];

export default function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="standard-full-width"
        label="Location"
        style={{ margin: 8 }}
        placeholder="Location"
        fullWidth
        margin="normal"
        helperText="Please input Location"
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        id="standard-select-currency"
        select
        label="Select"
        className={classes.textField}
        value={values.currency}
        onChange={handleChange("currency")}
        SelectProps={{
          MenuProps: {
            className: classes.menu
          }
        }}
        helperText="Please select type of parking"
        margin="normal"
      >
        {parking_type.map(option => (
          <MenuItem value={option.value}>{option.label}</MenuItem>
        ))}
      </TextField>
      <TextField
        id="standard-multiline-static"
        label="Description"
        type="Description"
        className={classes.textField}
        helperText="Description of parking spaces"
        margin="normal"
        multiline
      />
      <Fab color="primary" aria-label="add" className={classes.fab}>
        <AddIcon />
      </Fab>
    </form>
  );
}

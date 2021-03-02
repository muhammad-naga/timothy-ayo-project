// Components
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const RegisterForm = () => {
  return (
    <form noValidate autoComplete="off" className="my-5">
      <div>
        <TextField id="standard-basic" label="First Name" fullWidth />
      </div>
      <div>
        <TextField id="standard-basic" label="Last Name" fullWidth />
      </div>
      <div>
        <TextField id="standard-basic" label="Email Address" fullWidth />
      </div>
      <div className="my-3">
        <TextField id="standard-basic" label="Password" fullWidth />
      </div>
      <Button variant="contained" color="primary" type="submit">
        Login
      </Button>
    </form>
  );
};

export default RegisterForm;

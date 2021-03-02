// Component
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { signInWithGoogle } from "../firebase/firebase.utils";

const LoginForm = () => {
  return (
    <form noValidate autoComplete="off" className="my-5">
      <div>
        <TextField id="standard-basic" label="Email Address" fullWidth />
      </div>
      <div className="my-3">
        <TextField id="standard-basic" label="Password" fullWidth />
      </div>
      <Button variant="contained" color="primary" type="submit">
        Login
      </Button>

      <div className="sign-in-with-google" onClick={signInWithGoogle}>
        Or Sign in with Google
      </div>
    </form>
  );
};

export default LoginForm;

import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import routes from "../../routes";
import styled from "styled-components";
import { authenticate } from '../../authentication/StupidAuth';
import { useHistory } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#fff",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const [phone, setPhone] = useState();
  const [errorFlag, setErrorFlag] = useState(false);

  const onSubmit = () => {
    if (authenticate(phone) !== null) {
      history.push("/");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img
          alt="logo"
          style={{
            height: `4rem`,
            width: `4rem`,
          }}
          src={require("../../assets/logo.svg")}
        />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Phone number"
            name="email"
            autoComplete="tel"
            autoFocus
            onChange={(e) => setPhone(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => onSubmit()}
          >
            Sign In
          </Button>
          <DontBox>
            <Link href={routes.pages.signup} variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </DontBox>
        </form>
      </div>
      {errorFlag && (
        <AlertBox>
          <Alert severity="error">
            Failed to login - please recheck your credentials!
          </Alert>
        </AlertBox>
      )}
    </Container>
  );
};

const DontBox = styled(Box)`
  display: flex;
  justify-content: center;
`;

const AlertBox = styled(Box)`
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  margin-top: 22rem;
`;
export default Login;

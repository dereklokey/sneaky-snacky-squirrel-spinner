import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import one from './images/1.jpg';
import two from './images/2.jpg';
import sneaky from './images/burglar.png';
import sad from './images/sad eyes.svg';
import storm from './images/wind.png';
import green from './images/solid green.png';
import purple from './images/solid purple.png';
import red from './images/solid red.png';
import blue from './images/solid teal.png';
import yellow from './images/solid yellow.jpg';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  spinBar: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center'
  },
  spinner: {
    padding: theme.spacing.unit * 4,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  spinnerResult: {
    height: 400,
    width: 400
  },
  spinButton: {
    margin: theme.spacing.unit * 2
  }
});

const EASY_SPINNER = [one, two, red, purple, yellow, green, blue, sneaky];
const NORMAL_SPINNER = [one, two, red, purple, yellow, green, blue, sneaky, storm, sad];
const HARD_SPINNER = [one, red, purple, yellow, green, blue, storm, sad];

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      spinResult: EASY_SPINNER[0],
      isSpinning: false
    };

    this.onSpin = this.onSpin.bind(this);
  }
  
  onSpin(spinner){
    this.setState({isSpinning: true});
    setTimeout(() => {
      this.setState({isSpinning: false});
    }, 500);
    this.setState({spinResult: spinner[Math.floor(Math.random() * spinner.length)]});
  }

  render(){
    const { classes } = this.props;

    return (
      <div>
        <CssBaseline />
        <Grid container className={classes.root} spacing={16}>
          <Grid item xs={12}>
            <div className={classes.spinBar}>
              <SpinButton className={classes.spinButton} onClick={() => this.onSpin(EASY_SPINNER)}>Easy Spin</SpinButton>
              <SpinButton className={classes.spinButton} onClick={() => this.onSpin(NORMAL_SPINNER)}>Normal Spin</SpinButton>
              <SpinButton className={classes.spinButton} onClick={() => this.onSpin(HARD_SPINNER)}>Hard Spin</SpinButton>
            </div>
            <Paper className={classes.spinner} elevation={0}>
              {this.state.isSpinning && <LinearProgress />}
              {!this.state.isSpinning && <img src={this.state.spinResult} className={classes.spinnerResult} />}
            </Paper>
        </Grid>
      </Grid>
    </div>
    );
  }
}

const SpinButton = ({onClick, className, children}) =>
  <Button
    variant="contained"
    color="primary"
    size="large"
    className={className}
    onClick={onClick}
    type='button'>{children}</Button>

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

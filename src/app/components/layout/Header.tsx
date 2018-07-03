import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import * as PropTypes from 'prop-types';
import * as React from 'react';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function HeaderComponent(props: any) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Title
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

/*
SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
*/

export default withStyles(styles)(HeaderComponent);
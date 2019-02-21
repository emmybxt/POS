import React, { Component } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/PersonPin';
import ExitIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import { MuiThemeProvider } from '@material-ui/core/styles';
// import themes from "./ColorTheme"

import './App.css'


class Header extends Component {

	state = { open: false };

  	handleAlertOpen = () => {
    	this.setState({ open: true });
  	};

	handleAlertClose = () => {
		this.setState({ open: false });
	};

 	handleLogout = () => (event) => {
    	this.props.logout();
  	};

  	loadLogoutAlert() {
  		return (
  			<Dialog
	          open={this.state.open}
	          onClose={this.handleAlertClose}
	          aria-labelledby="alert-dialog-title"
	          aria-describedby="alert-dialog-description"
	        >
	          <DialogTitle id="logout-dialog-title">{"Logout"}</DialogTitle>
	          <DialogContent className="logout-alert">
	            <DialogContentText id="alert-dialog-description">
	              Are you sure want to logout?
	            </DialogContentText>
	          </DialogContent>
	          <DialogActions>
	            <Button onClick={this.handleAlertClose} color="inherit" className="logout-cancel">
	              <b>Cancel</b>
	            </Button>
	            <Button onClick={this.handleLogout()} color="inherit" className="logout-logout">
	              <b>Logout</b>
	            </Button>
	          </DialogActions>
	        </Dialog>
  		);
  	}

  	loadHeader() {
		return(
			<div>
				<span className="menu-icon">
					<MenuIcon />
				</span>
				<span className="exit-icon" onClick = {this.handleAlertOpen}>
					<ExitIcon/>
				</span>
				<span className="nameUser">
					{this.props.firstName} {this.props.lastName}
				</span>
				<span className="person-icon">
					<PersonIcon />
				</span>
				{this.loadLogoutAlert()}
			</div>	
		);
	};

	render() {
	    return (
	    	<div>
	      		{this.loadHeader()}
	    	</div>
	    );
	}
}


export default Header;
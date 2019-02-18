import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import './App.css'



class AddItem extends Component {

	state = {
		value:"",
    	itemName: "",
    	price:"",
    	open: false
	};

  	handleSelectNewItem = () => (event) => {
	    this.setState({ 
	    	value: event.target.value,
	    	itemName: event.target.value.split(',')[0],
	    	price: event.target.value.split(',')[1]
	    });
	};

	handleAddNewItem = () => {
	    console.log(this.state);
	    this.props.addItem(this.props.orderId, this.state.itemName, this.state.price);
	    this.handleAlertClose();
	    this.setState({ 
	    	value: '',
	    	itemName: '',
	    	price: ''
	    });
	};

	handleAlertOpen = () => {
		if (this.state.itemName != '')
	    	this.setState({ open: true });	
  	};

	handleAlertClose = () => {
		this.setState({ open: false });
	};

	loadAddAlert() {
  		return (
  			<Dialog
	          open={this.state.open}
	          onClose={this.handleAlertClose}
	          aria-labelledby="alert-dialog-title"
	          aria-describedby="alert-dialog-description"
	        >
	          <DialogTitle id="logout-dialog-title">{"Logout?"}</DialogTitle>
	          <DialogContent>
	            <DialogContentText id="alert-dialog-description">
	              Are you sure want to add <b>{this.state.itemName}</b> to the order
	            </DialogContentText>
	          </DialogContent>
	          <DialogActions>
	            <Button onClick={this.handleAlertClose} color="inherit" >
	              Cancel
	            </Button>
	            <Button onClick={this.handleAddNewItem} color="inherit" autoFocus>
	              Add
	            </Button>
	          </DialogActions>
	        </Dialog>
  		);
  	};

	loadAllAvailableItems = () => {
		return (
			this.props.availableItems.map((item) => {
				return( 
					<MenuItem className='menuItem' key={item._id} value={item.itemName+','+item.price}>
						{item.itemName}: $ {item.price}
					</MenuItem>
				);			            	
            })
		);
	};

  	loadAddItem = () => {
		return(
			<div className="add-item-inner-container">
	            <FormControl className="add-item-input">
		          	<Select 
			          	value={this.state.value} 
			            onChange={this.handleSelectNewItem()}
			            displayEmpty 
			            name="itemName"
		          	>
		            	<MenuItem value=''><em>None</em></MenuItem>
		            	{this.loadAllAvailableItems()}
		          	</Select>
		          	<FormHelperText>Add New</FormHelperText>
		        </FormControl>
		        <div className="add-item-button-container">
		          	<Button 
		          		variant="outlined" 
		          		size="large" 
		          		color="inherit" 
		          		className=""
		          		onClick = {this.handleAlertOpen}
		          	>
			        	<AddIcon/> 
			        </Button>
		        </div>
		        {this.loadAddAlert()}
		    </div>    
		);
		
  	}

	render() {
	    return ( this.loadAddItem() );
	}
}


export default AddItem;
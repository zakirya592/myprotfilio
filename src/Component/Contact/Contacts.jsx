import React, { useState,useContext } from 'react';
import './Contacts.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { themeContext } from "../../Context";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


function Contacts() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const [user,setuser]=useState({
        name:"",
        email:"",
        numbers:"",
        message:''
    })
    let name ,value;
    const getuserdata=(event)=>{
        name=event.target.name;
        value=event.target.value;
        setuser({...user,[name]:value})
    }
    const submiteddata=(e)=>{
      e.preventDefault();
      console.log("from submited ");
      const {name,email,numbers,message}=user;
      if(name&&email&&numbers&&message){
        const result= fetch(
            "https://react-8a2ff-default-rtdb.firebaseio.com/zakirya.json",
            {
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({
                    name,
                    email,
                    numbers,
                    message,        
                    })
            }
            )
            if(result){
                setuser({
                    name:"",
                    email:"",
                    numbers:"",
                    message:''
                });
                toast.success('You hava successful submited the from', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
            else{
                toast.error('You will not submited the from ', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
      }
      else{
        toast.error('You will not submited the from ', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    }
  return (
    <>
      <Button type="button" className='btn btn-outline-light text-white me-2 ' onClick={handleClickOpen}>
       Contact US
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
         <div className="main-block w-100"  style={{backgroundColor: darkMode?'black':'#9b5b18'}}>
{/* <div className="left-part">
<h1 style={{ color: darkMode ? "orange" : "white" }} >Contact us</h1>
</div> */}
<form method='post' className='contactfromed' style={{ backgroundColor: darkMode ? "#504c4c" : "white" }} >
<h1>Contact Us</h1>
<div className="info" >
<input  className="name" value={user.name}  onChange={getuserdata}  type="text" name="name" placeholder="Full name" required/>
<input  className="name" type="email" value={user.email} onChange={getuserdata} name="email" placeholder="Email" required/>
<input  className="name" type="number" value={user.numbers} onChange={getuserdata} name="numbers" placeholder="Phone number" required/>
<textarea  className="name" rows="4" value={user.message} onChange={getuserdata} name='message' placeholder='Enter your Message' required></textarea>
</div>
<button type="submit" className='submitefromed' onClick={submiteddata}>Submit</button>
</form>
<ToastContainer />
</div>

      </Dialog>



   

    </>
  )
}

export default Contacts;
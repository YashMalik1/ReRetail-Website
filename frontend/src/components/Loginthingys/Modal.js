import classes from './Modal.module.css';
import Card from '../UserInterface/Card';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Modal(props){
    const SignInviaMicro = () => {
        // <Navigate to="/microsoft" />
        // sign up via microsoft
    }
    return (
        <Card>
            <div className={classes.modal}>
                <button onClick={SignInviaMicro}>Login using your IITG outlook account</button>
                <Link to="/signup">
                    <button>Create your Account</button>
                </Link>
            </div>
        </Card>
    );
}
 
export default Modal;


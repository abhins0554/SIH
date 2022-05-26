import { auth } from "../configs/firebase";
import { toast } from "react-toastify";
import {signInWithEmailAndPassword} from 'firebase/auth';
import axios from 'axios';
import { BASE_URL } from "../constant/constant";

export const _userLogin = async (email,password,navigate) => {
    signInWithEmailAndPassword(auth,email,password)
    .then(response=>{
        console.log(response);
        _send_data_to_node_server(response?.user?.accessToken,email,navigate);
    })
    .catch(error=>{
        let err = error?.message.match('(auth/invalid-email)'); // invalid email
        let err1 = error?.message.match('(auth/internal-error)');  // no data send to firebase
        let err2 = error?.message.match('(auth/weak-password)');  // no data send to firebase
        let err3 = error?.message.match('(auth/wrong-password)');  // no data send to firebase
        let err4 = error?.message.match('(auth/user-not-found)');  // no data send to firebase
        if(err){
            toast.error("Invalid Email Address");
        }
        else if (err2) {
            toast.error("Password should be at least 6 characters");
        }
        else if (err1){
            toast.error("Enter Email & Password");
        }
        else if (err3){
            toast.error("Wrong Password");
        }
        else if(err4) {
            toast.error("User not Register");
        }
    })
}






const _send_data_to_node_server = async (t, email, navigate) => {
    await axios.post(`${BASE_URL}/user/login`, {
        email:email,
    } , {
        headers: {
            authorization: `Bearer ${t}`
        }
    })
        .then(response => {
            console.log(response.data);
            if (response?.data?.code === 200) {
                localStorage.setItem("token",t);
                toast.success("Login Successful, Welcome User");
                setTimeout(() => {
                    navigate('/home');
                }, 700);
            }
            else if (response?.data?.code === 400) {
                toast.error('400 Database Error');
            }
        })
        .catch(error => {
            if (error?.response?.status === 401) {
                toast.error(error?.response?.statusText);
            }
            else {
                toast.error(error?.response?.statusText);
            }
        })
}
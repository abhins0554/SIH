import { auth } from "../configs/firebase";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import axios from "axios";
import { BASE_URL } from "../constant/constant";

export const _User_signUp = async (email, password, rpassword, phone, address, city, state, pincode, country, gender, profileI, profileCover, name, navigate) => {
    if (email && password && rpassword && phone && address && city && state && pincode && country && gender && profileI && profileCover && name && password === rpassword && password.length >= 6) {
        createUserWithEmailAndPassword(auth, email, password)
            .then(response => {
                _send_data_to_node_server(response?.user?.accessToken, email, password, rpassword, phone, address, city, state, pincode, country, gender, profileI, profileCover, name, navigate);
            })
            .catch(error => {
                let err = error?.message.match('(auth/invalid-email)'); // invalid email
                let err1 = error?.message.match('(auth/internal-error)');  // no data send to firebase
                let err2 = error?.message.match('(auth/weak-password)');  // no data send to firebase
                if (err) {
                    toast.error("Invalid Email Address");
                }
                else if (err2) {
                    toast.error("Password should be at least 6 characters");
                }
                else if (err1) {
                    toast.error("Enter Email & Password");
                }
            })
    }
    else if (password.length !== rpassword) {
        toast.error("Password & Repeat Password not match");
    }
    else {
        toast.error('Fill every details');
    }
}


const _send_data_to_node_server = async (t, email, password, rpassword, phone, address, city, state, pincode, country, gender, profileI, profileCover, name, navigate) => {
    let data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('mobile', phone);
    data.append('address', address);
    data.append('pincode', pincode);
    data.append('city', city);
    data.append('state', state);
    data.append('country', country);
    data.append('longitude', '80.21');
    data.append('latitude', '21.55');
    data.append('userImage',profileI);
    data.append('coverImage',profileCover);
    await axios.post(`${BASE_URL}/user/signup`, data , {
        headers: {
            authorization: `Bearer ${t}`
        }
    })
        .then(response => {
            console.log(response.data);
            if (response?.data?.code === 200) {
                toast.success("SignUp Successful, Welcome User");
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

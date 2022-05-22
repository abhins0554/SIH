import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import $ from 'jquery';

import { _User_signUp } from "../services/signupServices";
import "../css/signup.css"

function Signup(props) {
    const navigate = useNavigate();
    const [name, set_name] = useState("");
    const [email, set_email] = useState("");
    const [password, set_password] = useState("");
    const [rpassword, set_rpassword] = useState("");
    const [phone, set_phone] = useState("");
    const [address, set_address] = useState("");
    const [city, set_city] = useState("");
    const [state, set_state] = useState("");
    const [pincode, set_pincode] = useState("");
    const [country, set_country] = useState("");
    const [gender, set_gender] = useState("");
    const [profileI, set_profileI] = useState("");
    const [profileCover, set_profileCover] = useState("");

    const _SIGNUP = async (e) => {
        e.preventDefault();
		console.log(profileI)
		console.log(profileCover)
        _User_signUp(email, password,rpassword,phone,address,city,state,pincode,country,gender,profileI,profileCover, name, navigate);
    }


	function profileImage(e) {
		set_profileI(e.target.files[0]);
		var filename = $("#profileImage").val();
		if (/^\s*$/.test(filename)) {
		  $("#profileUpload").removeClass('active');
		  $("#noFilePro").text("No file chosen..."); 
		}
		else {
		  $("#profileUpload").addClass('active');
		  $("#noFilePro").text(filename.replace("C:\\fakepath\\", "")); 
		}
	}

	function coverImage(e) {
		set_profileCover(e.target.files[0])
		var filename = $("#coverImage").val();
		if (/^\s*$/.test(filename)) {
		  $("#coverUpload").removeClass('active');
		  $("#noFileCov").text("No file chosen..."); 
		}
		else {
		  $("#coverUpload").addClass('active');
		  $("#noFileCov").text(filename.replace("C:\\fakepath\\", "")); 
		}
	}



    return (
		<div className="wrapper">
			<div className="inner">
				<form action="" onSubmit={_SIGNUP}>
					<h3>Registration Form</h3>
					<div className="form-group">
						<div className="form-wrapper">
							<label htmlFor="">Name:</label>
							<div className="form-holder">
								<i className="zmdi zmdi-account-o"></i>
								<input type="text" className="form-control" onChange={e=>set_name(e.target.value)} />
							</div>
						</div>
						<div className="form-wrapper">
							<label htmlFor="">Email:</label>
							<div className="form-holder">
								<i style={{fontStyle:"normal",fontSize:'15px'}}
								// style="font-style: normal; font-size: 15px;"
								>@</i>
								<input type="text" className="form-control" value={email} onChange={e=>set_email(e.target.value)} />
							</div>
						</div>
					</div>
					<div className="form-group">
						<div className="form-wrapper">
							<label htmlFor="">Password:</label>
							<div className="form-holder">
								<i className="zmdi zmdi-lock-outline"></i>
								<input type="password" className="form-control" value={password} placeholder="********" onChange={e=>set_password(e.target.value)} />
							</div>
						</div>
						<div className="form-wrapper">
							<label htmlFor="">Repeat Password:</label>
							<div className="form-holder">
								<i className="zmdi zmdi-lock-outline"></i>
								<input type="password" className="form-control" value={rpassword} placeholder="********" onChange={e=>set_rpassword(e.target.value)} />
							</div>
						</div>
					</div>
					{/* <div className="form-group"> */}
						<div className="form-wrapper">
							<label htmlFor="">Phone Number:</label>
							<div className="form-holder">
								<i className="zmdi zmdi-lock-outline"></i>
								<input type="number" className="form-control" placeholder="" value={phone} onChange={e=>set_phone(e.target.value)} />
							</div>
						</div>
					{/* </div> */}
					<div className="form-group">
						<div className="form-wrapper">
							<label htmlFor="">Address:</label>
							<div className="form-holder">
								<i className="zmdi zmdi-lock-outline"></i>
								<input type="text" className="form-control" placeholder="" value={address} onChange={e=>set_address(e.target.value)} />
							</div>
						</div>
						<div className="form-wrapper">
							<label htmlFor="">City:</label>
							<div className="form-holder">
								<i className="zmdi zmdi-lock-outline"></i>
								<input type="text" className="form-control" placeholder="" value={city} onChange={e=>set_city(e.target.value)} />
							</div>
						</div>
					</div>
					<div className="form-group">
						<div className="form-wrapper">
							<label htmlFor="">State:</label>
							<div className="form-holder">
								<i className="zmdi zmdi-lock-outline"></i>
								<input type="text" className="form-control" placeholder="" value={state} onChange={e=>set_state(e.target.value)} />
							</div>
						</div>
						<div className="form-wrapper">
							<label htmlFor="">Pincode:</label>
							<div className="form-holder">
								<i className="zmdi zmdi-lock-outline"></i>
								<input type="text" className="form-control" placeholder="" value={pincode} onChange={e=>set_pincode(e.target.value)} />
							</div>
						</div>
					</div>
					<div className="form-group">
						<div className="form-wrapper">
							<label htmlFor="">Country:</label>
							<div className="form-holder select">
								<select name="" id="" className="form-control" value={country}  onChange={e=>set_country(e.target.value)} >
									<option value="">Select Country</option>
									<option value="in">India</option>
									<option value="us">United States</option>
									<option value="uk">United Kingdom</option>
								</select>
								<i className="zmdi zmdi-pin"></i>
							</div>
						</div>
						<div className="form-wrapper">
							<label htmlFor="">Gender:</label>
							<div className="form-holder select">
								<select name="" id="" className="form-control" value={gender}  onChange={e=>set_gender(e.target.value)} >
									<option value="">Select Gender</option>
									<option value="m">Male</option>
									<option value="f">Female</option>
									<option value="o">Other</option>
								</select>
								<i className="zmdi zmdi-face"></i>
							</div>
						</div>
					</div>
					<div className="form-group">
						<div className="form-wrapper">
							<div className="file-upload"  id="profileUpload">
							  <div className="file-select">
							    <div className="file-select-button" id="fileName">Choose Profile Photo</div>
							    <div className="file-select-name" id="noFilePro">No file chosen...</div> 
							    <input type="file" name="chooseFile" id="profileImage" onChange={profileImage} />
							  </div>
							</div>
						</div>
						<div className="form-wrapper">
							<div className="file-upload"   id="coverUpload">
							  <div className="file-select">
							    <div className="file-select-button" id="fileName">Choose Cover Image</div>
							    <div className="file-select-name" id="noFileCov">No file chosen...</div> 
							    <input type="file" name="chooseFile" id="coverImage" onChange={coverImage} />
							  </div>
							</div>
						</div>
					</div>
					<div className="form-end">
						<div className="checkbox">
							<label>
								<input type="checkbox"/> Accept <Link to="/">Terms & Condition</Link>.
								<span className="checkmark"></span>
							</label>
						</div>
						<div className="button-holder">
							<button>Register Now</button>
						</div>
						
					</div>
				</form>
			</div>
		</div>
    );
}

export default Signup;

import React, {useState} from 'react';
import Logo from '../../components/Logo/Logo';
import "../../pages/OTP/Otp.css";
import { useNavigate } from 'react-router-dom';

const Otp = () => {
  const navigate = useNavigate();

const [box, setBox] = useState(true);
const [btn, setBtn] = useState(true);
const [credentials,setcredentials]=useState({otp:""})

// ********************************************* - Verifiation OTP API- *******************************************************
const handlesubmit=async(e)=>{
  e.preventDefault();
  const response = await fetch(`http://localhost:5000/api/auth/votp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }, 
  body: JSON.stringify({otp:credentials.otp}) 
});

const json=await response.json();
if(json.veri)
{
  navigate('/AdminDashboard');
  console.log('OTP Successed')
}
else
{   
  console.log('OTP Failed')
}
}

// ********************************************* - Resend OTP API - ******************************************************

const handlesubmit2=async(e)=>{
  e.preventDefault();
  const response = await fetch(`http://localhost:5000/api/auth/rotp`, {
    method: 'POST', 
    // body: JSON.stringify({otp:credentials.otp}) 
  });
  const json=await response.json();
}

// ********************************************* - OnChange Function - ******************************************************
const onChange=(e)=>{
  setcredentials({...credentials,[e.target.name]:e.target.value})
}






  return (
    <>

{/* Section starts here */}

{/* Heading stuff starts here */}

<div className="container-fluid">
<div className="row min-vh-100">
{box && <Logo/>} 



{/* Heading stuff ends here */}


{/* To bottom button starts here */}
{btn && <div class="scroll-down d-lg-none d-block"  onClick={() => {setBox(false); setBtn(false);}} id="scroll">
</div>}
{/* To bottom button ends here */}

{/* Form container starts here */}

<div className="col-lg-7 major-box">
<div className="row">
<div className="col-lg-12 heading-set">
<h3 className='phone-text-heading'>Authentication code</h3>
<p className='phone-p-heading'>Code has been sent to your Email</p>
</div>
<div className="col-lg-12 form-set">
<form>
<div className="form-box">
<div className="col-lg-4 input-box form-floating">
<input value={credentials.otp} onChange={onChange}  id="otp" name='otp' placeholder="otp" type="number" class="form-control"   required />
<label htmlFor="signEmail">Number</label>
</div>
<div className="form-text">
<p className="form-text-set" onClick={handlesubmit2}><span id="signUp">Resend Code?</span></p>

</div>
<div className="btn-box">
<button type="submit" className="btn" onClick={handlesubmit}>verify code</button>
</div>
</div>
</form>
</div>

{/* Form container ends here */}

</div>
</div>





</div>    
</div>














{/* Section ends here */}













    </>
  )
}

export default Otp
import { useState } from "react";
import "./App.css";

function App() {

  const [formData,setFormData] = useState( {firstName:"",lastName:"",email:"",country:"India",
    streetaddress:"",city:"",state:"",postalcode:"",comments:false,candidate:false,offers:false,
    pushNotification:""
   })

  function changeHandler(event){
    const {name,value,checked,type} = event.target;
    setFormData( (prev)=>({...prev , [name]:type==="checkbox" ? checked:value}) );

  }
  function submitHandeler(event){
    event.preventDefault();

    console.log("finally printing the vlaue of form data: ");
    console.log(formData)
  }

return(
  <div className="flex flex-col items-center mt-2">   
  <form onSubmit={submitHandeler}>

    <label htmlFor="firstName">First Name</label>
    <br/>
  <input
    type="text"
    name="firstName"
    id="firstName"
    placeholder="Love"
    value={formData.firstName}
    onChange= {changeHandler}
    className="outline rounded-md"
  />


<br/>
   <label htmlFor="lastName">Last Name</label>
    <br/>
  <input
    type="text"
    name="lastName"
    id="lastName"
    placeholder="Babbar"
    value={formData.lastName}
    onChange= {changeHandler}
    className="outline rounded-md"
  />

<br/>
   <label htmlFor="email">Email</label>
    <br/>
  <input
    type="text"
    name="email"
    id="email"
    placeholder="Email"
    value={formData.email}
    onChange= {changeHandler}
    className="outline rounded-md"
  />

    <br/>
    
    <label htmlFor="country">Country</label>
     <br/>
    <select 
    id="country"
    name="country"
    value={formData.country}
    onChange= {changeHandler}
     className="outline rounded-md"
> 
    <option>India</option>
    <option>US</option>
    <option>Canada</option>
    <option>Mexico</option>
    <option>Monaco</option>
    </select>



<br/>
   <label htmlFor="streetaddress">Street Address</label>
    <br/>
  <input
    type="text"
    name="streetaddress"
    id="streetaddress"
    placeholder="B-25C"
    value={formData.streetaddress}
    onChange= {changeHandler}
    className="outline rounded-md"
  />
  <br/>
   <label htmlFor="city">city </label>
    <br/>
  <input
    type="text"
    name="city"
    id="city"
    placeholder="B-25C"
    value={formData.city}
    onChange= {changeHandler}
    className="outline rounded-md"
  />
  <br/>
   <label htmlFor="state">State / Province</label>
    <br/>
  <input
    type="text"
    name="state"
    id="state"
    placeholder="Bihar"
    value={formData.state}
    onChange= {changeHandler}
    className="outline rounded-md"
  />
  <br/>
   <label htmlFor="postalcode"> Postal Code </label>
    <br/>
  <input
    type="text"
    name="postalcode"
    id="postalcode"
    placeholder="110077"
    value={formData.postalcode}
    onChange= {changeHandler}
    className="outline rounded-md"
  />

<br/>
<br/>

  <fieldset>
    <legend>By Email</legend>

    <div className="flex flex-row">
    <input 
      id="comments"
      name="comments"
      type="checkbox"
      checked={formData.comments}
      onChange={changeHandler}
    />

    <div>
    <label htmlFor="comments">Comments</label>
    <p>Get notified when someone posts a comment on a posting</p>
    </div>
    </div>



      <div className="flex flex-row">
    <input 
      id="candidate"
      name="candidate"
      type="checkbox"
      checked={formData.candidate}
      onChange={changeHandler}
    />

    <div>
    <label htmlFor="comments">candidate</label>
    <p>Get notified when candidate applies for a job</p>
    </div>
    </div>



      <div className="flex flex-row">
    <input 
      id="offers"
      name="offers"
      type="checkbox"
      checked={formData.offers}
      onChange={changeHandler}
    />

    <div>
    <label htmlFor="comments">offers</label>
    <p>Get notified when a candidate accepts or rejects an offer</p>
    </div>
    </div>

  </fieldset>


<br/>

<fieldset> 
<legend>Push Notifications </legend>
<p>These are delivered via SMS to your mobile phone.</p>

<input
type="radio"
id="pushEverything"
name="pushNotification"
value="Everything"
onChange={changeHandler}
 />

 <label htmlFor="pushEverything">Everything</label>


<br/>
<input
type="radio"
id="pushEmail"
name="pushNotification"
value="Same as Email"
onChange={changeHandler}
 />

 <label htmlFor="pushEmail">Same as Email</label>

 <br/>

<input
type="radio"
id="pushNothing"
name="pushNotification"
value="No Push Notifications"
onChange={changeHandler}
 />

 <label htmlFor="pushEverything">Nothing</label>

</fieldset>

<button className="bg-blue-500 text-white font-bold rounded py-2 px-4">Save</button>


  </form>
  
  </div>
);
}

export default App;

import React, { Component } from "react";
import "../Styles/FormData.css";

//change 

   



export default class FormData extends Component {
    render() {


        // const [user, serUser] = useState({
        //     name:"", location:"", landmark : "", distance : ""
        //  });
        //  let name , value;
        //  const handleInputs = (e) =>{
        //      console.log(e);
        //      name = e.target.name;
        //      value = e.target.vaue;
     
        //   serUser({...user, [name]: value});
        //  }


        return (
          
               <div className="container">
                <div className=" formBox ">
                <div className="heading">Add Details</div>
                <div className="card my-5">
                    <form className="card-body">
                        <div className=" mb-3 mx-5">
                            <label className="mb-2 "><strong>Name of the Hospital</strong></label>
                            <input type="text" name="name" className="form-control px-5" />                
                        </div>

                        <div className=" mb-3 mx-5">
                            <label className="mb-2"><strong>Location</strong></label>
                            <input type="text" name="location" className="form-control px-5" />
                        </div>

                        <div className="mb-3 mx-5">
                            <label className="mb-2"><strong>LandMark</strong></label>
                            <input type="text" name="landmark" className="form-control px-5" />
                        </div>
                        <div className=" mb-3 mx-5">
                            <label className="mb-2"><strong>Distance from ABC</strong></label>
                            <input type="text" name="distance" className="form-control px-5" />
                        </div>

                        <div className="d-grid mt-3 mx-5"><div className=" text-center">
                            <button type="submit" className="btn add"> +Add </button>
                        </div></div>
                    </form>
                </div>
            </div>
            </div>
       
        );
    }
}
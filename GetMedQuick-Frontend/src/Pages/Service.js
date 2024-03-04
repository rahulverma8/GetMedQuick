import React from 'react'

const Service = () => {
  return (

         <div id='Service'className="ps-5 pe-5">        
      <div className='text-center mt-5 p-4, ser'><h1 className='mt-5'>Available Services</h1></div>
      <table className="table text-center my-3">
        <tbody className=''>
        {/* <tr  className="text-center m-auto"><td></td></tr> */}
          <tr>
            <td> <div><img src='https://clipground.com/images/clipart-time-3.jpg' alt='24/7 available' width='150px' height='150px' /></div>
             <h3>24/7 availability</h3>
           <p>Full time service available</p></td>
          
            <td> <div><img src='https://image.freepik.com/free-vector/two-doctors-and-patient_23-2147797223.jpg' alt='variety of amanities' width='150px' height='150px' /></div>
             <h3>varity of amenities</h3>
            <p>wide varities of amenities available</p></td>
         
            <td> <div><img src='https://media.istockphoto.com/vectors/people-network-icon-vector-id652925996' alt='easy connection' width='150px' height='150px' /></div>
             <h3>easy connection</h3>
            <p>we do not have any complex connection process</p></td>

            <td> <div><img src='https://cdn3.iconfinder.com/data/icons/human-resources-flat-6/48/251-512.png' alt='scalable' width='150px' height='150px' /></div>
             <h3>scalable</h3>
            <p>easy to scale process</p></td>
          
          </tr>
      
        </tbody>
        </table>
      </div>

  )
}

export default Service
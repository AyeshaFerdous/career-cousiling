import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const UpdateProfile = () => {
    const {updateUserProfile, user, setUser} = useContext(AuthContext)
    const navigate = useNavigate();
    const handleSubmit = e =>{
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;

        updateUserProfile({
            displayName: name,
            photoURL : photo,
        }).then(()=>{
            setUser((previousUser) =>{
                return{...previousUser, displayName: name, photoURL : photo};
            })
            toast('Update profile successfully!')
            navigate('/myprofile');
        }).catch(()=>{
            toast.error('Profile cannot be updated!')
        })
    }
    return (
        <div>
          <Helmet>
      <title>Update Profile | Career Counseling</title>
    </Helmet>
          <div className=' my-10'>
         <div className="card bg-base-100  max-w-lg shrink-0 rounded-2xl p-10 border w-11/12 mx-auto">
         <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user.displayName}
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
            
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={user.photoURL}
                  placeholder="Enter your Photo"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
            <button to="/updateprofile" className="btn bg-gradient-to-r from-orange-400 to-orange-200">Update Profile</button>
          </div>
            </form> 
        </div> 
        </div>
        </div>
    );
};

export default UpdateProfile;
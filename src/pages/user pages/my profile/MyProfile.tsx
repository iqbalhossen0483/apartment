import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

const MyProfile = () => {
  const firebase = useFirebase();
  return (
    <div className="m-5 mt-10 border rounded p-5">
      <div className='w-fit mx-auto'>
        {
          firebase?.userFromDb?.email &&
          <img
            className="h-16 w-16 rounded-full"
            src={firebase?.user?.photoURL ||
              "https://res.cloudinary.com/dpphyosn4/image/upload/v1642742699/cycle-mart/users/nophoto_elhi6z.png"
            }
            alt=""
          />
        }
      </div>

      <div className="profile-container mt-10 relative">
        {/* edit button */}
        <div style={{ position: "absolute" }} className="text-center top-0 right-2 z-0">
          <Link
            to="/my-account/update-profile"
            className="text-primary text-xl"
          >
            <i className="fas fa-edit"/>
          </Link>
        </div>

        <div className='item'>
          <span className='font-semibold'>Name: </span>
          <p>
            {firebase?.userFromDb?.displayName}
          </p>
        </div>

        <div className='item'>
          <span className='font-semibold'>Email: </span>
          <p>
            {firebase?.userFromDb?.email}
          </p>
        </div>

        <div className='item'>
          <span className='font-semibold'>Phone Number: </span>
          <p>
            {firebase?.userFromDb?.phone || "N/A"}
          </p>
        </div>

        <div className='item'>
          <span className='font-semibold'>Current Address: </span>
          <p>
            {firebase?.userFromDb?.currentAddress || "N/A"}
          </p>
        </div>
        
        <div className='item'>
          <span className='font-semibold'>Permanent Address: </span>
          <p>
            {firebase?.userFromDb?.permanentAddress || "N/A"}
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default MyProfile
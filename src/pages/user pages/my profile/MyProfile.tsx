/* eslint-disable jsx-a11y/anchor-is-valid */
import useFirebase from "../../../Hooks/useFirebase";

const MyProfile = () => {
  const firebase = useFirebase();
  return (
    <div className='m-5 mt-10 border rounded p-5'>
      <div className='w-fit mx-auto'>
        {firebase?.userFromDb?.email && (
          <img
            className='h-16 w-16 rounded-full'
            src={firebase?.user?.photoURL || "/no-photo.png"}
            alt=''
          />
        )}
      </div>

      <div className='profile-container mt-10 relative'>
        {/* edit button */}
        <div className='text-center top-0 right-2 z-0 absolute'>
          <a href='#' className='text-primary text-xl'>
            <i className='fas fa-edit' />
          </a>
        </div>

        <div className='item'>
          <span className='font-semibold'>Name: </span>
          <p>{firebase?.userFromDb?.displayName}</p>
        </div>

        <div className='item'>
          <span className='font-semibold'>Email: </span>
          <p>{firebase?.userFromDb?.email}</p>
        </div>

        <div className='item'>
          <span className='font-semibold'>Phone Number: </span>
          <p>{firebase?.userFromDb?.phone || "N/A"}</p>
        </div>

        <div className='item'>
          <span className='font-semibold'>Current Address: </span>
          <p>{firebase?.userFromDb?.currentAddress || "N/A"}</p>
        </div>

        <div className='item'>
          <span className='font-semibold'>Permanent Address: </span>
          <p>{firebase?.userFromDb?.permanentAddress || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

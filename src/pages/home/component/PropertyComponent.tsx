import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  header?: string;
  data: Property[] | null;
}

const PropertyComponent: FC<Props> = ({ header, data }) => {
  const navigate = useNavigate();
  return (
    <div>
      {header && <h1 className='mt-16 md:mt-32 mb-7 md:mb-14'>{header}</h1>}
      <div className='md:grid grid-cols-3 gap-5'>
        {data &&
          data.map((item, index) => {
            return (
              <div className='property' key={index}>
                <div className='overflow-hidden'>
                  <img
                    className='property-img w-full object-cover'
                    src={item.imgUrl}
                    alt=''
                  />
                </div>
                <div className='px-3 pb-2'>
                  <p className='price'>{item.price}</p>
                  <p className='text-gray-400'>
                    <i
                      className='fa fa-map-marker text-primary mr-2'
                      aria-hidden='true'
                    />
                    {item.location}
                  </p>
                  <div className='grid grid-cols-2 items-center'>
                    <p className='font-medium text-lg my-3'>{item.name}</p>
                    <div>
                      <button
                        onClick={() => navigate(`/property/${item._id}`)}
                        className='see-more-btn'
                      >
                        <span>see more</span>
                        <span className='arrow'>&#8594;</span>
                      </button>
                    </div>
                  </div>
                  <div className='grid grid-cols-3 text-gray'>
                    <p>{item.room} Rooms</p>
                    <p>
                      <i className='fa fa-bed mr-2 text-gray-600' />
                      {item.bed} beds
                    </p>
                    <p>
                      <i
                        className='mr-1 fa fa-square text-gray-600'
                        aria-hidden='true'
                      />
                      {item.area}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PropertyComponent;

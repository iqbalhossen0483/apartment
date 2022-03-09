import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props{
    header?: string;
    data: Property[] | null;
}

const PropertyComponent: FC<Props> = ({ header, data }) => {
    const navigate = useNavigate();
    return (
        <div className='mx-16'>
            {header &&
                <h1 className='mt-32 mb-14'>
                    {header}
                </h1>
            }
            <div className='grid grid-cols-3 gap-10'>
                {data &&
                    data.map((item, index) => {
                        return (
                            <div key={index}>
                                <img
                                    className='property-img object-cover'
                                    src={item.imgUrl}
                                    alt=""
                                />
                                <p className='price'>{ item.price }</p>
                                <p className='text-xl text-gray'>
                                    <i
                                        className="fa fa-map-marker text-primary mr-2"
                                        aria-hidden="true"
                                    />
                                    {item.location}
                                </p>
                                <div className='grid grid-cols-2 items-center'>
                                    <p className='text-2xl font-semibold my-3'>
                                        {item.name}
                                    </p>
                                    <div>
                                        <button
                                            onClick={()=>navigate(`/property/${item._id}`)}
                                            className='see-more-btn'>
                                            <span>see more</span>
                                            <span className='arrow'>&#8594;</span>
                                        </button>
                                    </div>
                                </div>
                                <div className='grid grid-cols-3 text-gray'>
                                    <p>{ item.room } Rooms</p>
                                    <p>
                                        <i className="fa fa-bed mr-2"/>
                                        {item.bed} beds
                                    </p>
                                    <p>
                                        <i className="fa-regular mr-1 fa-square"
                                        aria-hidden="true"/>
                                        {item.area}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default PropertyComponent
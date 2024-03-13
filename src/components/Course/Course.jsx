import PropTypes from 'prop-types';
import { FiDollarSign } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";

const Course = ({course,handleAddToCart}) => {
    // console.log(course);
    const {name,description,photo,price,credit} = course;

    return (
        <div>
        <div className="card  bg-base-100 shadow-xl p-5">
        <figure><img className="rounded-xl w-full" src={photo} alt="photo" /></figure>
        <div >
        <h2 className="text-lg font-semibold pt-4">{name}</h2>
        <p className="text-[#1C1B1B99] text-sm py-3">{description}</p>

        <div className='flex justify-between pb-5'>
            <p className='flex items-center gap-4'><FiDollarSign></FiDollarSign><span>Price : {price}</span></p>
            <p className='flex items-center gap-4'><IoBookOutline></IoBookOutline> <span className='pr-4'>Credit : {credit}</span></p>

        </div>
        <div >
        <button onClick={()=>handleAddToCart(course)} className="btn text-white text-lg w-full bg-[#2F80ED]">Select</button>
        </div>
       </div>
       </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object,
    handleAddToCart: PropTypes.func
}

export default Course;
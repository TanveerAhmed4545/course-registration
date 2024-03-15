import PropTypes from 'prop-types';
import { totalCredit } from '../../App';

const Cart = ({carts}) => {
    // console.log(carts);
    const credits = carts.reduce((p,c)=>p+c.credit,0) 
    return (
        <div className="p-5 bg-white rounded-xl">
            <h3 className="text-[#2F80ED] text-lg font-bold border-b-2 pb-5">Credit Hour Remaining {totalCredit - credits} hr</h3>
            <div className="border-b-2 py-4">
                <h2 className="font-bold text-xl">Course Name</h2>
                <div>
                    {
                        carts.map((course,idx)=> <p  key={idx}><span className='pr-1'>{idx+1}</span>{course.name}</p>)
                    }
                </div>

            </div>
            <div className="border-b-2 py-3">
                <p className="text-[#1C1B1BCC] font-medium">Total Credit Hour : <span>{credits}</span></p>

            </div>
            <div className="pt-4">
                <p className="text-[#1C1B1BCC] font-semibold">Total Price : <span>{carts.reduce((p,c)=>p+c.price,0)}</span> USD</p>

            </div>
            
        </div>
    );
};

Cart.propTypes = {
    carts: PropTypes.array
}

export default Cart;
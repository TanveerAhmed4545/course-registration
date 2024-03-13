
import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const totalCredit = 15;

function App() {

  const [carts,setCarts] = useState([]);

  const handleAddToCart = (course) =>{
    // console.log("handle",course);
    

    const credits = carts.reduce((p,c)=>p+c.credit,0);
    if(credits + course.credit > totalCredit){
      return toast.error("Only 15 credits allow");
    }

    const alreadyExists = carts.find(c=>c.id===course.id)

    const newCarts = [...carts,course];
   if(!alreadyExists){
    setCarts(newCarts);
    toast.success("Course Added");
   }else{
    toast.warn("Course already selected");
   }


  }
  

  return (
    <>
      
      <div className='bg-slate-200 pb-5'>
      <header className='container mx-auto  px-5 md:px-14'>
        <h1 className='text-4xl font-bold text-center py-8'>Course Registration</h1>

      </header>
      <main className='container mx-auto flex flex-col md:flex-row gap-5 px-5 md:px-14'>
        <div className='w-full md:w-3/4'>
          <Courses handleAddToCart={handleAddToCart}></Courses>
        </div>
        <div className='w-full md:w-1/4 '>
          <Cart carts={carts}></Cart>
        </div>
      </main>

      <ToastContainer />
      
      </div>
    </>
  )
}

export default App

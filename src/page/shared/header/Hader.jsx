import logo from '../../../assets/logo.png'
import moment from 'moment'

const Hader = () => {
    return (
        <div className='text-center space-y-5 mt-12 mb-7'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-lg'>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Hader;
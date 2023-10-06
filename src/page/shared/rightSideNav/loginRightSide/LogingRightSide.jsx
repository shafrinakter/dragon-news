import { FcGoogle} from 'react-icons/fc';
import { DiGithubBadge} from 'react-icons/di';

const LogingRightSide = () => {
    return (
        <div className="space-y-4 mb-10 p-2">
            <h1 className="font-bold text-[#403F3F] text-2xl">Login With</h1>
            <button className="btn btn-outline w-full"><FcGoogle className='text-2xl capitalize'></FcGoogle> Login With Google</button>
            <button className="btn btn-outline w-full"><DiGithubBadge className='text-2xl capitalize'></DiGithubBadge> Login With Github</button>
        </div>
    );
};

export default LogingRightSide;
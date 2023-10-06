import { BiLogoFacebook} from 'react-icons/bi';
import { TiSocialTwitter} from 'react-icons/ti';
import { AiOutlineInstagram} from 'react-icons/ai';
const FindUsON = () => {
    return (
        <div className="mb-10 p-2">
            <h1 className="font-bold text-2xl">Find Us On</h1>
            <a className='flex p-2 rounded-t-lg items-center gap-3 border mt-5' href=""><BiLogoFacebook className='text-4xl text-blue-500 bg-[#F3F3F3] rounded-full p-2'></BiLogoFacebook>Facebook</a>
            <a className='flex p-2 border-x items-center gap-3' href=""><TiSocialTwitter className='text-blue-500 text-4xl bg-[#F3F3F3] rounded-full p-2'></TiSocialTwitter>Twitter</a>
            <a className='flex rounded-b-lg border p-2 items-center gap-3' href=""><AiOutlineInstagram className='text-[#D82D7E] text-4xl bg-[#F3F3F3] rounded-full p-2'></AiOutlineInstagram>Instagram</a>
        </div>
    );
};

export default FindUsON;
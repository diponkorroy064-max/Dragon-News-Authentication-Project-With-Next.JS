import logo from '@/assets/logo.png';
import { format } from 'date-fns';
import Image from 'next/image';

const Header = () => {
    return (
        <div className='mx-auto text-center my-7 space-y-3 px-10'>
            <Image src={logo} alt="Logo" width={300} height={300}/>
            <h1>Journalism Without Fear or Favour</h1>
            <h1>{format(new Date(), 'EEEE, MMMM dd, yyyy')}</h1>
        </div>
    );
};

export default Header;

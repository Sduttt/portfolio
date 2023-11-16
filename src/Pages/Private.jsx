// import { TbError404 } from 'react-icons/tb';
import { MdError } from 'react-icons/md';
import Button from '../Components/Button/Button';

const Private = () => {
    return (
        <>
            <h1 className="text-6xl font-bold py-12 text-center mx-auto dark:text-white">Sorry!</h1>
            <div className="">
                <div className='text-center text-4xl font-bold dark:text-white flex items-center justify-center ml-12'>
                    <p className="">Source code of this project is private</p>
                    <MdError className="mx-2 text-yellow-500" />
                </div>
                <div className="dark:text-white flex items-center justify-center m-4 ml-12 flex-wrap">
                    <p className="text-4xl font-bold mr-4 my-2">Go back to </p>
                    <Button text="Projects" url="/projects" target='_self' />
                </div>
            </div>
        </>
    );
}
export default Private;
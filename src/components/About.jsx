import Photo from './assets/dp.png'
import Button from './Buttons';

function About(){
    return(
        <div className="flex justify-around my-6 items-center flex-col sm:flex-row ">
            <img src={Photo} alt='dp' className='w-80'/>
            <section className='py-12 sm:mr-14 text-center'>
                <h1 className='font-zen text-3xl bold my-4'>SUBHAM DUTTA</h1>
                <h2 className='font-zen text-base text-center semibold'>FRONTEND &nbsp; DEVELOPER</h2>
                <h5 className='text-base text-center my-2 font-nav'>I 🖤 to code beautiful websites.</h5>
                <div className='flex justify-around my-6'>
                    <Button text= "Resume" url="https://drive.google.com/file/d/1PNo88DEgvupf_GuNkbFVc1bmsjz42FHg/view?usp=sharing"  className="mx-4"/>
                    <Button text= "Hire Me" url="mailto:subhamdutta588@gmail.com" className="mx-4"/>
                </div>
            </section>
        </div>
    )
}
export default About;
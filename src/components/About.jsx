import Photo from './assets/dp.png'

function About(){
    return(
        <div className="flex justify-around my-6 ">
            <img src={Photo} alt='dp' className='w-80'/>
            <div className=' border-l-4 border-black'></div>
            <section className='py-12 mr-14 '>
                <h1 className='font-zen text-3xl bold my-4'>SUBHAM DUTTA</h1>
                <h2 className='font-zen text-base text-center semibold'>FRONTEND &nbsp; &nbsp; DEVELOPER</h2>
                <h5 className='text-base text-center my-2 font-nav'>I love to code beautiful websites.</h5>
            </section>
        </div>
    )
}
export default About;
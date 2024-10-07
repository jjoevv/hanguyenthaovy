
import { Link, useLocation } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

export const Footer = () => {
    const location = useLocation()

    return (
        <footer className="bg-night opacity-90 text-white  lg:pt-40 p-20 flex flex-col items-start justify-center h-[60vh]">
            <div className="lg:text-4xl md:text-4xl text-2xl lg:w-1/2 md:w-1/2 w-full text-start">
                I'm now available for selective collaborations and open to opportunities that suit my skills.
            </div>
            <div className='w-full grid md:grid-cols-2 grid-cols-1 w-2/3 md '>


                <div className='flex lg:mt-20 md:mt-20 mt-10 '>
                    Ha Nguyen Thao Vy. All rights reserved.

                </div>

                <div className='w-full lg:flex md:flex justify-end mt-20'>
                    {
                        location.pathname === '/'
                            ?
                            <>
                                <ScrollLink to='welcome' className=' mr-4 cursor-pointer hover:text-spring-green'>

                                    Home
                                </ScrollLink>
                                <ScrollLink to='project' className='mx-4 cursor-pointer hover:text-spring-green'>
                                    Projects
                                </ScrollLink>
                                <ScrollLink to='information' className='mx-4 cursor-pointer hover:text-spring-green'>
                                    Contact
                                </ScrollLink>
                            </>
                            :
                            <>
                                <Link to='/' className='mx-4 cursor-pointer hover:text-spring-green'>
                                    Home
                                </Link>
                                <Link to='/projects' className='mx-4 cursor-pointer hover:text-spring-green'>
                                    Projects
                                </Link>
                                <Link to='/contact' className='mx-4 cursor-pointer hover:text-spring-green'>
                                    Projects
                                </Link>
                            </>
                    }
                </div>
            </div>
        </footer>

    )
}

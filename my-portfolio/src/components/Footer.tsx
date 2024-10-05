
import { Link, useLocation } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

export const Footer = () => {
    const location = useLocation()

    return (
        <footer className="bg-night opacity-90 text-white py-10 md:mt-20 flex items-center justify-center h-[60vh]">

            <div className='grid md:grid-cols-2 grid-cols-1 w-2/3'>
                <div className="text-4xl col-span-2">
                    I'm now available for selective collaborations and open to opportunities that suit my skills.
                </div>

                    <div className='flex mt-20'>
                    Ha Nguyen Thao Vy. All rights reserved.
                        
                    </div>

                    <div className='w-full flex justify-end mt-20'>
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

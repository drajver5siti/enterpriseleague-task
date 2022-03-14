import { FaFacebook,FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
    return(
        <>
            <div className="bg-white w-full flex flex-col items-center justify-center mx-auto gap-y-8 md:flex-row pb-10 pl-10 pt-10 ">
                <div className="flex items-center w-auto">
                    <img src="https://enterpriseleague.com/public/img/featured/news/media.svg" alt="media" className="scale-[85%]"/>
                    <span className="flex flex-col gap-2">
                        <h3 className="text-3xl font-semibold text-gray-700">Media</h3>
                        <p className="w-8/12 text-[0.9rem]"><span className="text-accent hover:cursor-pointer">Download</span> our logos and brand photography for media use.</p>
                    </span>
                </div>

                <div className="flex items-center w-auto">
                    <img src="https://enterpriseleague.com/public/img/featured/news/contact.svg" alt="contact" className="scale-[85%]"/>
                    <span className="flex flex-col gap-2">
                        <h3 className="text-5xl font-semibold text-gray-700">Contact</h3>
                        <p className="w-8/12 text-center md:text-left">For additional information contact us on <span className=" text-accent hover:cursor-pointer">info@enterpriseleague.com</span></p>
                    </span>
                </div>
            </div>


                <div className="bg-white flex flex-col md:flex-row bg-opacity-10 pb-20">
                    <div className="flex flex-col items-center justify-center gap-0 md:w-[48%]">
                        <img src="https://enterpriseleague.com/public/img/logo-transparent.webp" alt="company logo" className="scale-[30%]"/>
                        <div className="relative flex items-center text-primary">
                            <span>Discover a </span>
                            <span className="absolute left-[37%]">world</span>
                            <img src="https://enterpriseleague.com/public/img/icons/world_image.png" alt="stars" className="block scale-60 "/>
                            <span>of opportunities</span>
                        </div>
                        <div className='flex w-full justify-center gap-x-10 mt-16'>
                            <FaFacebook  className='text-gray-700 scale-150 hover:cursor-pointer'/>
                            <FaInstagram className='text-gray-700 scale-150 hover:cursor-pointer'/>
                            <FaTwitter  className='text-gray-700 scale-150 hover:cursor-pointer'/>
                            <FaLinkedin  className='text-gray-700 scale-150 hover:cursor-pointer'/>
                        </div>
                    </div>



                    <ul className='flex flex-wrap text-primary gap-x-24 justify-center gap-y-6 pt-10 pb-10  md:w-[70%] h-full'>
                        <li className=''>
                            <h4 className='text-xl underline underline-offset-2 decoration-accent mb-6'>COMPANY</h4>
                            <ul className='flex flex-col gap-y-2'>
                                <li>About</li>
                                <li>Team</li>
                                <li>Write for us</li>
                                <li>Advertise</li>
                                <li>Newsroom</li>
                                <li>Careers</li>
                                <li>Contact us</li>
                            </ul>
                        </li>
                        <li>
                            <h4 className='text-xl underline underline-offset-2 decoration-accent  mb-6'>PRODUCT</h4>
                            <ul className='flex flex-col gap-y-2'>
                                <li>Platform</li>
                                <li>Dealzone</li>
                                <li>Directory</li>
                                <li>Pricing</li>
                                <li>All categories</li>
                                <li>Solutions</li>
                                <li>Get listed</li>
                            </ul>
                        </li>
                        <li className=''>
                            <h4 className='text-xl underline underline-offset-2 decoration-accent mb-6'>RESOURCES</h4>
                            <ul className='flex flex-col gap-y-2'>
                                <li>Blog</li>
                                <li>Support</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <hr className='w-10/12 h-1 bg-primary mx-auto my-4'/>
                <p className='text-primary text-[0.8rem] pb-8 pt-2 text-center'>&copy; Copyright 2021 Enterprise League. All right reserved.</p>

        </>
    )
}
export default Footer;
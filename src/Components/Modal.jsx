import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
const Modal = () => {

    const [visible, setVisible] = useState(false);
    const handleModalClick = (e) => {
        localStorage.setItem('modal-value', e.target.value);
        setVisible(false);
        document.body.style.overflow = 'visible'
    }

    useEffect(() => {
        if (!localStorage.getItem('modal-value')) {
            setTimeout(() => {
                setVisible(true)
                document.body.style.overflow = 'hidden';
            }, 10000)
        }
    }, [])

    return createPortal(
        <div className={`${visible ? 'flex' : 'hidden'} z-40 fixed inset-0 justify-center items-center transition-all ${visible ? 'bg-black bg-opacity-25' : 'bg-transparent'} `}>
            <div className=" shadow-md w-11/12 sm:w-max h-max bg-white flex flex-col items-center gap-y-4 pt-6 py-12 px-14 rounded-md">
                <h3 className="font-semibold text-2xl text-gray-700">Do you need micro business loans?</h3>
                <p className="text-primary font-medium">Quick loans for businesses, invoice financing and flexible loans</p>
                <div className="flex flex-row w-full justify-center gap-x-2 md:gap-x-20 mt-8">
                    <div className="flex flex-col items-center">
                        <img src="https://test.enterpriseleague.com/static/media/violet.9459dd7e.svg" alt="" className="w-5/12 md:w-7/12"/>
                        <button className="block bg-[#85589F] w-48 md:w-60 py-2 text-white font-semibold rounded-md mt-6" value={"no"} onClick={handleModalClick}>NOT REALLY</button>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://test.enterpriseleague.com/static/media/green.f01efa95.svg" alt="" className="w-5/12 md:w-7/12"/>
                        <button className="block bg-[#41A7A3] w-48 md:w-60 py-2 text-white font-semibold rounded-md mt-6" value={"yes"} onClick={handleModalClick}>YES! EXTRA MONEY</button>
                    </div>
                </div>
            </div>
        </div>
        , document.getElementById('modal'))
}

export default Modal;
const PressArticle = ({data}) => {
    return(
        <div className="bg-white px-4 shadow-box rounded-md mx-4 py-4 max-w-[70rem] sm:mx-16">
            <img src={data.image} alt="" className="block w-[40%] m-2 mr-4 rounded-md float-left max-w-[20rem]"/>
            <h4 className="text-gray-700 font-semibold text-xl md:text-3xl   leading-relaxed text-center w-10/12 mx-auto">{data.title}</h4>
            <p className="text-xl text-primary mb-6 mt-2">{data.location}</p>
            <p className="text-sm sm:text-lg text-primary overflow-hidden">{data.description}</p>
        </div>
    )
}

export default PressArticle;
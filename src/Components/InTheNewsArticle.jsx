const InTheNewsArticle = ({data}) => {
    // image
    // title
    // description
    return(
        <div className="bg-white w-10/12 text-primary px-8 shadow-box rounded-xl flex flex-col h-[300px] sm:h-[400px] max-w-max pb-5 ">
            <img src={`${data.image}`} alt="title" className="block w-[200px] h-[60px] object-contain mx-auto mt-4 mb-9"/>
            <h2 className="font-medium text-sm sm:text-base xl:text-lg text-gray-700 mb-9 text-left">{data.title}</h2>
            <p className=" font-light w-full text-left pb-2 text-base xl:text-lg h-full overflow-hidden">{data.description}</p>
        </div>
    )
}
export default InTheNewsArticle;    
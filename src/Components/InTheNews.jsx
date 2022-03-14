import data from '../data/inthenews.json'
import InTheNewsArticle from './InTheNewsArticle';
const InTheNews = () => {

    return(
            <div className="relative grid grid-cols-1 justify-items-center gap-y-8 sm:grid-cols-2 xl:grid-cols-3 px-8 sm:px-16 xl:px-20">
                {data.map((article, index) => <InTheNewsArticle key={index} data={article}/>)}
            </div>
    )
}
export default InTheNews; 
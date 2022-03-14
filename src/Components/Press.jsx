import data from '../data/press.json'
import PressArticle from './PressArticle';

const Press = () => {
    return(
        <div className='flex flex-col items-center gap-y-8'>
            {data.map((article, index) => <PressArticle key={index} data={article}/>)}
        </div>
    )
}
export default Press;
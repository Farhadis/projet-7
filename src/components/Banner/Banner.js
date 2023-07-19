
import './Banner.css'

function Banner({slide, title, size}) {
 
    
    return (            

        <div className='banner'>
           
            <img className={size} src={slide} alt='Banner' /> 
            <div>
            <h2>{title}</h2> 
            </div>   

        </div>
    )
}

export default Banner


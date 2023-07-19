
import './logements.css'
import Cart from "../Cart/Cart"



const Logements = ({logements}) =>{
    
    return (
        <div className="loge-list">
            {logements.map((item) => {
                return <Cart key={item.id} title={item.title} cover={item.cover}/>               
            })}
        </div>
    )
} 

export default Logements




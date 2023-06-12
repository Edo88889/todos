import _ from "lodash";
import {text, arr} from "../../features/slices/TuduSlices";
import {useDispatch, useSelector} from "react-redux";
const Tudus = () => {
    const {search, todos} = useSelector(state => state.todo)
    const dispatch = useDispatch()

   const handleDone = (e) => {
        dispatch(arr(todos?.map((items) => {
            if (items.id === e.id){
                return {...items, boll:!items.boll}
            }
            return items
        })))
    }
    return(
        <>
        <input type="text" value={search} onChange={(e) => {
            dispatch(text(e.target.value))
        }}/>
        <button onClick={() => {
            dispatch(arr([...todos,{text: search, boll:false, id:_.uniqueId()}]))
            text('')
            if (text() === ''){
                text(null)
            }
        }}>Click</button>
            {todos?.map((e) => (
                <div key={e.id}>
                    <span className={`${e.boll === true ? 'text' : e.text}`}>{e.text}</span>
                    <button onClick={() => {
                        dispatch(arr(todos.filter(el => el.id !== e.id)))
                    }}>delete</button>
                    <button onClick={() => handleDone(e)}>Done</button>
                </div>
            ))}
            </>
    )
};
export default Tudus;
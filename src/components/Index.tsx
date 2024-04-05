import { useDispatch,useSelector } from "react-redux"
import { incCount, decCount } from "../slicer/counterSlice"

const Index = () => {
    const dispatch = useDispatch()
    const counter = useSelector((state:any)=> state.count)
    
    return (
        <div className="container d-flex justify-content-center w-full mt-5">
                <button className="btn btn-dark" onClick={()=>dispatch(decCount(1))}>-</button>
                <button className="btn col-1 active mx-3">{counter}</button>
                <button className="btn btn-dark" onClick={()=>dispatch(incCount(1))}>+</button>
        </div>
    )
}

export default Index

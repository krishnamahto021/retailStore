import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Protected(props){
    const {Comp,isLogin} = props;
    const navigate = useNavigate();

    useEffect(()=>{
        if(!isLogin){
            navigate('/');
        }
    },[isLogin,navigate])

    return(
        <>
            <div>
                <Comp/>
            </div>
        </>
    )
}
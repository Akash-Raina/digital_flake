import { Loading } from "./Loading"

export const Button = ({type, onClick, className, state}: {type : string, onClick: ()=>void, className: string, state?:boolean | 'false'})=>{
    return <>
        <button onClick = {onClick} className={className}>{state? <Loading/> :type}</button>
    </>
}
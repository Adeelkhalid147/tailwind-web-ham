import { FC } from "react"

// FC functional component
// React.ReactNode ka mtlb h k koi b data type rakh skte
const Wrapper:FC<{children:React.ReactNode}> = ({children})=>{
    return(
        <div className="max-w-screen-2xl mx-auto px-4">
            {children}
        </div>

    )
}
export default Wrapper
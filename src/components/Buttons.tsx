import React from "react"

type buttonProps = {
    title: string,
    className: string,
    type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'],
    btnClick: () => void
}


function Buttons({ title, className, type, btnClick }: buttonProps) {
    return (
        <button type={type} className={` bg-blue-500 p-2 m-auto rounded-lg ${className}`} onClick={btnClick} >
            {title}
        </button>
    )
}

export default Buttons
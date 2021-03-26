import React from 'react'
import SemiCircleProgressBar from "react-progressbar-semicircle";


const Progress = () => {

    const options = {
        strokeWidth: 25,
        background: '#ABB8C3',
        stroke:'#4e89ae',
        showPercentValue:true,
    }

    const [progress,setProgress] = React.useState(100)


    return (
        <SemiCircleProgressBar percentage={progress} {...options}  />
    )
}

export default Progress

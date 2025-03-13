const StepLine = ({ active }) => {
    return (<div className={`w-full h-[5px] rounded-full ${active ? 'bg-primary' : 'bg-bluePeriwinkle'}`}></div>);
}

export default StepLine;
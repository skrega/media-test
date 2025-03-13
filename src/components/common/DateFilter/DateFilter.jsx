import CalendarIcon from "../../icons/CalendarIcon";
import SwapRightIcon from "../../icons/SwapRightIcon";
import DateInput from "./DateInput";

const DateFilter = () => {
    return (
        <div className="flex items-center bg-bluePup rounded-md  border border-blueLightPup overflow-hidden">
            <div className="md:px-4 px-2 pt-[6px] pb-[6px] bg-blueLightPup h-full flex items-center">Период</div>
            <div className="flex items-center px-4 pt-[6px] pb-[6px] gap-2">
                <DateInput placeholder="Дата с" />
                <SwapRightIcon />
                <DateInput placeholder="Дата по" />
                <CalendarIcon />
            </div>
        </div>
    );
}

export default DateFilter;
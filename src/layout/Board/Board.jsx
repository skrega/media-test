import CardItems from "../../components/CardItems/CardItems";
import FilterPanel from "../../components/FilterPanel/FilterPanel";

const Board = () => {
    return (
        <div className="lg:p-6 py-6 px-4 max-w-[1700px] w-full">
            <FilterPanel />
            <CardItems />
        </div>
    );
}

export default Board;
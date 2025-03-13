import Card from "../Card/Card";

const CardItems = () => {
    return (
        <div className="grid min-[1750px]:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 lg:gap-6 gap-4 mt-6 max-w-[1700px] w-full">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default CardItems;
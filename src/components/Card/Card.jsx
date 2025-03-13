import PhotoFilmIcon from "../icons/PhotoFilmIcon";
import img1 from "../../images/img.jpeg"
import PhotoIcon from "../icons/PhotoIcon";
import Tag from "./Tag/Tag";
import CopyIcon from "../icons/CopyIcon";
import CardButton from "./CardButton/CardButton";
import EyeIcon from "../icons/EyeIcon";
import SettingIcon from "../icons/SettingIcon";
import CartNetworkIcon from "../icons/CartNetworkIcon";
import SquareCaretDownIcon from "../icons/SquareCaretDownIcon";
import TrashIcon from "../icons/TrashIcon";
import SeatBeltIcon from "../icons/SeatBeltIcon";
import SmartPhoneIcon from "../icons/SmartPhoneIcon";
import BoringIcon from "../icons/BoringIcon";
const Card = () => {
    return (
        <div className="rounded-lg shadow-card bg-bluePup overflow-hidden">
            <div className="bg-blueLightPup rounded-b-lg">
                <div className="flex gap-2 items-center px-4 py-2 ">
                    <PhotoFilmIcon />
                    <span className="font-bold">Пролет №1</span>
                </div>
                <div className="rounded-lg w-full h-[175px] overflow-hidden">
                    <img className="w-full h-full object-cover" src={img1} alt="Пролет №1" />
                </div>
            </div>
            <div className="p-4 grid gap-2 text-xs/[140%]">
                <div className="flex justify-between items-center">
                    <div className="text-textColor">ID</div>
                    <div className="flex gap-2 items-center">
                        <span>663с7…a2d1</span>
                        <button><CopyIcon /></button>
                    </div>
                </div>
                <div className="flex justify-between items-center flex-wrap gap-2">
                    <div className="flex justify-between items-center gap-2">
                        <div className="text-textColor">Тип файлов</div>
                        <div className="flex items-center gap-2">
                            <PhotoIcon />
                            Фото
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                        <div className="text-textColor">Кол-во файлов</div>
                        <div>12</div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="text-textColor">Дата добавления</div>
                    <div>23.01.2023</div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="text-textColor">Теги</div>
                    <div className="flex items-center gap-2">
                        <div>
                            <Tag color='text-green' title='Лес' /> {' '}
                            <Tag color='text-orange' title='Кадры' />
                        </div>
                        <SquareCaretDownIcon />
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="text-textColor">Нейросети</div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                            <TrashIcon />
                            <SeatBeltIcon />
                            <SmartPhoneIcon />
                            <BoringIcon />
                            <TrashIcon />
                            <SeatBeltIcon />
                        </div>
                        <SquareCaretDownIcon />
                    </div>
                </div>
                <div className="flex justify-between items-center gap-2 flex-wrap">
                    <div className="flex justify-between items-center gap-2">
                        <div className="text-textColor">Количество</div>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-2">
                                <CartNetworkIcon />
                                <span className="text-blueWhale">12</span>
                            </div>
                            <CardButton>
                                <EyeIcon />
                            </CardButton>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-2 ">
                        <div className="text-textColor">Управление</div>
                        <CardButton>
                            <SettingIcon />
                        </CardButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
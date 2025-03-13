import React, { useState } from 'react';
import SearchInput from "../Search/SearchInput";
import Button from '../common/Button/Button';
import DateFilter from '../common/DateFilter/DateFilter';
import ButtonSmall from '../common/ButtonSmall/ButtonSmall';
import CustomSelect from '../common/CustomSelect/CustomSelect';
import PhotoIcon from '../icons/PhotoIcon'; // Иконки для опций
import VideoIcon from '../icons/VideoIcon'; // Иконки для опций
import AddFilePopup from '../AddFilePopup/AddFilePopup';
import ListIcon from '../icons/ListIcon';
import MenuIcon from '../icons/MenuIcon';
import FilterIcon from '../icons/FilterIcon';
import CloseIcon from '../icons/CloseIcon';

const FilterPanel = () => {
    const [selectedValue, setSelectedValue] = useState('allTags');
    const [fileTypes, setFileTypes] = useState({ photo: false, video: false });
    const [tags, setTags] = useState({ option1: false, option2: false });
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleFileTypeChange = (name, checked) => {
        setFileTypes((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    const handleTagsChange = (name, checked) => {
        setTags((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    const handleResetFileTypes = () => {
        setFileTypes({ photo: false, video: false });
    };

    const handleResetTags = () => {
        setTags({ option1: false, option2: false });
    };
    const handleAddFiles = (data) => {
        console.log('Добавленные файлы:', data);
    };
    const handleFilterOpen = () => {
        setIsFilterOpen(prev => !prev)
    }

    const tagsOptions = [
        { value: 'option1', label: 'Лес' },
        { value: 'option2', label: 'Кадры' },
        { value: 'option3', label: 'Пролеты' },
    ];
    const aiOptions = [
        { value: 'option1', label: 'Опция 1' },
        { value: 'option2', label: 'Опция 2' },
    ];

    const fileTypeOptions = [
        { value: 'photo', label: 'Фото', icon: PhotoIcon },
        { value: 'video', label: 'Видео', icon: VideoIcon },
    ];

    return (
        <div className='md:flex items-start gap-4 justify-between'>
            <div className={`md:flex flex-wrap items-center md:relative absolute md:bg-transparent bg-bluePup md:top-auto gap-4 
                md:left-auto md:rigth-auto md:p-0 md:pb-0
                top-0 left-0 rigth-0 p-4 pb-9
                ${isFilterOpen ? 'flex z-[3]' : 'hidden'}`}>
                <div className='md:hidden flex justify-between w-full'>
                    <div className='font-semibold'>Фильтры</div>
                    <button className='' onClick={handleFilterOpen}>
                        <CloseIcon />
                    </button>
                </div>
                <SearchInput placeholder={'Поиск медиа файлов по названию или ID'} />
                <CustomSelect
                    title="Все нейросети"
                    options={aiOptions}
                    selectedValues={tags}
                    onSelectChange={handleTagsChange}
                    onReset={handleResetTags}
                />
                <CustomSelect
                    title="Все теги"
                    options={tagsOptions}
                    selectedValues={tags}
                    onSelectChange={handleTagsChange}
                    onReset={handleResetTags}
                />
                <CustomSelect
                    title="Тип файлов"
                    options={fileTypeOptions}
                    selectedValues={fileTypes}
                    onSelectChange={handleFileTypeChange}
                    onReset={handleResetFileTypes}
                    size='small'
                />
                <DateFilter />
            </div>
            <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                    <ButtonSmall className="flex md:hidden">
                        <MenuIcon />
                    </ButtonSmall>
                    <ButtonSmall className="flex md:hidden" onClick={handleFilterOpen}>
                        <FilterIcon />
                    </ButtonSmall>
                </div>
                <div className='flex items-center gap-2'>
                    <ButtonSmall>
                        <ListIcon />
                    </ButtonSmall>

                    <Button variant='contained' onClick={() => setIsPopupOpen(true)}>
                        Добавить
                    </Button>
                </div>
            </div>
            <AddFilePopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                onNext={handleAddFiles}
            />
            <div className={`bg-black/30 inset-0 fixed  transition-opacity duration-200
                ${isFilterOpen ? 'z-[2] opacity-100' : 'z-[-1] opacity-0'}`} onClick={handleFilterOpen}></div>
        </div>
    );
}

export default FilterPanel;
import React, { useState } from 'react';
import Modal from 'react-modal';
import CustomCheckbox from '../common/CustomCheckbox/CustomCheckbox';
import PhotoFilmIcon from '../icons/PhotoFilmIcon';
import PhotoIcon from '../icons/PhotoIcon';
import VideoIcon from '../icons/VideoIcon';
import CloseIcon from '../icons/CloseIcon';
import Button from '../common/Button/Button'
import A from '../common/A';
import BasicInput from '../common/BasicInput/BasicInput';
import StepLine from '../common/StepLine/StepLine';
Modal.setAppElement('#root');

const AddFilePopup = ({ isOpen, onClose, onNext }) => {
    const [fileName, setFileName] = useState('');
    const [fileTypes, setFileTypes] = useState({ photo: false, video: false });
    const [files, setFiles] = useState([]);

    const handleFileTypeChange = (name, checked) => {
        setFileTypes((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    const handleFileUpload = (event) => {
        const uploadedFiles = Array.from(event.target.files);
        setFiles(uploadedFiles);
    };

    const handleFileDrop = (event) => {
        event.preventDefault();
        const droppedFiles = Array.from(event.dataTransfer.files);
        setFiles(droppedFiles);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleNext = () => {
        onNext({ fileName, fileTypes, files });
        onClose();
    };
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Добавить файлы"
            className="modal absolute top-1/2 left-1/2 right-auto bottom-auto -translate-x-1/2 -translate-y-1/2 bg-bluePup
                lg:max-w-[730px] md:max-w-[600px] max-w-[100%] w-[90%] rounded-lg "
            overlayClassName="modal-overlay"
        >
            <div className='flex justify-between items-center px-6 py-3 bg-blueLightPup rounded-lg'>
                <h2 className="text-base/[140%] flex items-center gap-2 font-semibold">
                    <PhotoFilmIcon />
                    Добавление медиа файлов
                </h2>
                <button onClick={onClose}>
                    <CloseIcon />
                </button>
            </div>
            <div className='md:p-6 p-4'>
                <div className='mb-6'>
                    <div className='flex items-center gap-6 font-semibold text-base/[140%] mb-6'>
                        <span className='flex justify-center items-center w-[22px] h-[22px] text-center rounded-full bg-primary'>
                            1
                        </span>
                        <span>Файлы</span>
                    </div>
                    <div className='grid grid-cols-2 gap-5 mb-6'>
                        <StepLine active/>
                        <StepLine/>
                    </div>
                    <div className='text-textColor'>
                        Перед загрузкой файлов ознакомьтесь с <A className='link' href='/'>Требованиями</A> к фото и видео
                    </div>
                </div>
                <div className='grid gap-6 mb-6'>
                    <BasicInput
                        classNameRow="grid md:grid-cols-[142px_1fr] gap-2"
                        label={'Название файлов'}
                        placeholder={'Введите название для этих файлов'}
                        type='text'
                        value={fileName}
                        onChange={(e) => setFileName(e.target.value)}
                    />
                    <div className="items-center grid md:grid-cols-[142px_1fr] gap-2">
                        <div>Тип файлов</div>
                        <div className='grid grid-cols-2 w-full gap-2'>
                            <CustomCheckbox
                                name="photo"
                                checked={fileTypes.photo}
                                handleCheckboxChange={(e) => handleFileTypeChange('photo', e.target.checked)}
                            >
                                <PhotoIcon />
                                Фото
                            </CustomCheckbox>
                            <CustomCheckbox
                                name="video"
                                checked={fileTypes.video}
                                handleCheckboxChange={(e) => handleFileTypeChange('video', e.target.checked)}
                            >
                                <VideoIcon />
                                Видео
                            </CustomCheckbox>
                        </div>
                    </div>
                </div>
                <div
                    className="file-zone p-6 text-center cursor-pointer mb-4  overflow-y-auto [@media(max-height:950px)]:h-[240px] h-[520px] border-[1px] border-dashed border-primary"
                    onDrop={handleFileDrop}
                    onDragOver={handleDragOver}
                    onClick={() => document.getElementById('file-upload').click()}
                >
                    {/* border-[1px] border-dashed border-primary */}
                    <div className='flex items-center justify-center flex-col text-center gap-4 h-full'>
                        <PhotoFilmIcon className={'md:w-[125px] md:h-[100px] w-[100px] h-[75px]'} classNamePath={'fill-primary'} />
                        <div>
                            <div className='text-primary font-bold mb-1'>Файлы</div>
                            <div className='text-textColor'>
                                <span className='md:block hidden'>или перетащите их в эту область</span>
                                <span className='md:hidden block'>Нажмите что бы загрузить</span>
                            </div>
                        </div>
                    </div>
                    <input
                        id="file-upload"
                        type="file"
                        multiple
                        className="hidden"
                        onChange={handleFileUpload}
                    />
                </div>
                <div className="md:flex justify-between gap-2 grid grid-cols-2">
                    <Button onClick={onClose} variant="outlined">Отменить</Button>
                    <Button onClick={handleNext} variant="contained">Далее</Button>
                </div>
            </div>
        </Modal>
    );
}

export default AddFilePopup;

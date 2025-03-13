import React from 'react';
import PhotoFilmIcon from '../../icons/PhotoFilmIcon';

const FileUploadZone = ({
    onDrop,
    onDragOver,
    onClick,
    title,
    descriptionDesktop,
    descriptionMobile,
    accept,
    multiple,
}) => {
    //border-[1px] border-dashed border-primary
    return (
        <div
            className="file-zone p-6 text-center cursor-pointer mb-4 overflow-y-auto [@media(max-height:950px)]:h-[240px] h-[520px]"
            onDrop={onDrop}
            onDragOver={onDragOver}
            onClick={onClick}
        >
            <div className='flex items-center justify-center flex-col text-center gap-4 h-full'>
                <PhotoFilmIcon className={'md:w-[125px] md:h-[100px] w-[100px] h-[75px]'} classNamePath='fill-primary' />
                <div>
                    <div className='text-primary font-bold mb-1'>{title}</div>
                    <div className='text-textColor'>
                        <span className='md:block hidden'>{descriptionDesktop}</span>
                        <span className='md:hidden block'>{descriptionMobile}</span>
                    </div>
                </div>
            </div>
            <input
                id="file-upload"
                type="file"
                multiple={multiple}
                className="hidden"
                onChange={(e) => onClick(e)}
                accept={accept}
            />
        </div>
    );
};

export default FileUploadZone;
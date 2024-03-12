import React from 'react';
import { cn } from '@/lib/cn/cn';
import Image from 'next/image';
import UpDownIcon from '@/assets/img/up-down.svg';
import { ReactSortable } from 'react-sortablejs';
import { ConferenceTagType } from '@/utils/interfaces';

interface ComponentTypes {
  activeItem: ConferenceTagType;
  setActiveItem: React.Dispatch<React.SetStateAction<ConferenceTagType>>;
  conferenceTags: ConferenceTagType[];
  setConferenceTags: React.Dispatch<React.SetStateAction<ConferenceTagType[]>>;
}

const sortableOptions = {
  animation: 150,
  fallbackOnBody: true,
  swapThreshold: 0.65,
  ghostClass: 'ghost',
  group: 'shared',
  forceFallback: true,
  // handle: '.dragBtn',
  // dragClass: 'dragging',
};

const DraggableSidebar = ({ activeItem, setActiveItem, conferenceTags, setConferenceTags }: ComponentTypes) => {
  return (
    <ReactSortable
      tag={'ul'}
      className='sidebar-parent'
      list={conferenceTags}
      setList={setConferenceTags}
      {...sortableOptions}
    >
      {conferenceTags.map((tag: ConferenceTagType, i: number) => (
        <li
          key={tag.id}
          onClick={() => setActiveItem(tag)}
          className={cn(
            'sidebar-child',
            activeItem === tag ? 'border-theme-yellow bg-theme-yellow shadow-lg' : 'bg-[#ffffff]'
          )}
        >
          <div className='rounded-lg bg-white p-2 md:p-3 xl:px-4 xl:py-[17px]'>
            <div className='dragBtn relative h-5 w-[22px] xl:h-[22px] xl:w-[25px]'>
              <Image src={UpDownIcon} fill alt='sort icon' />
            </div>
          </div>
          <span className={cn('font-bold', activeItem === tag ? 'text-white' : 'text-black')}>{tag?.name}</span>
        </li>
      ))}
    </ReactSortable>
  );
};

export default DraggableSidebar;

import React, { Key } from 'react';
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

const DraggableSidebar = ({ activeItem, setActiveItem, conferenceTags, setConferenceTags }: ComponentTypes) => {
  return (
    <ReactSortable
      animation={200}
      delay={2}
      tag={'ul'}
      className='space-y-6 md:space-y-5 lg:space-y-7 xl:space-y-8'
      list={conferenceTags}
      setList={setConferenceTags}
    >
      {conferenceTags?.map((tag: ConferenceTagType, i: Key) => (
        <li
          onClick={() => setActiveItem(tag)}
          key={tag?.id}
          className={cn(
            'text-heading-3 cursor-pointer rounded-lg border border-[#d9d9d980] flex items-center gap-10 md:gap-4 lg:gap-9 xl:gap-11 p-2 duration-500',
            activeItem === tag ? 'bg-theme-yellow border-theme-yellow shadow-lg' : 'bg-[#feffff]'
          )}
        >
          <div className='bg-white p-2 md:p-3 xl:px-4 xl:py-[17px] rounded-lg'>
            <div className='relative w-[22px] h-5 xl:w-[25px] xl:h-[22px]'>
              <Image src={UpDownIcon} fill alt='sort icon' />
            </div>
          </div>
          <span className={cn('font-bold  duration-500', activeItem === tag ? 'text-white' : 'text-black')}>
            {tag?.name}
          </span>
        </li>
      ))}
    </ReactSortable>
  );
};

export default DraggableSidebar;

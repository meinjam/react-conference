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
      className='space-y-8'
      list={conferenceTags}
      setList={setConferenceTags}
    >
      {conferenceTags?.map((tag: ConferenceTagType, i: Key) => (
        <li
          onClick={() => setActiveItem(tag)}
          key={tag?.id}
          className={cn(
            'cursor-pointer rounded-lg border border-[#d9d9d980] flex items-center gap-11 p-2 duration-500',
            activeItem === tag ? 'bg-theme-yellow border-theme-yellow shadow-lg' : 'bg-[#feffff]'
          )}
        >
          <div className='bg-white px-4 py-[17px] rounded-lg'>
            <Image src={UpDownIcon} height={22} alt='sort icon' />
          </div>
          <span className={cn('font-bold text-xl duration-500', activeItem === tag ? 'text-white' : 'text-black')}>
            {tag?.name}
          </span>
        </li>
      ))}
    </ReactSortable>
  );
};

export default DraggableSidebar;

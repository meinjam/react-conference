'use client';

import React, { useState } from 'react';
import { ConferenceTagType, SingleConferenceDataType } from '@/utils/interfaces';
import ConferenceRowWeb from '@/components/conference/ConferenceRowWeb.Component';
import ConferenceRowMobile from '@/components/conference/ConferenceRowMobile.Component';

const ConferenceRow = ({ data }: { data: SingleConferenceDataType }) => {
  const [conferenceTags, setConferenceTags] = useState<ConferenceTagType[]>([
    { id: 1, name: 'Organizer' },
    { id: 2, name: 'Speakers' },
    { id: 3, name: 'Schedule' },
    { id: 4, name: 'Sponsors' },
  ]);
  const [activeItem, setActiveItem] = useState<ConferenceTagType>(conferenceTags[0]);

  // console.log(data);

  return (
    <>
      <div className='hidden md:block'>
        <ConferenceRowWeb
          conferenceTags={conferenceTags}
          setConferenceTags={setConferenceTags}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          data={data}
          key='DraggableSidebarKey324324'
        />
      </div>

      <div className='md:hidden'>
        <ConferenceRowMobile
          conferenceTags={conferenceTags}
          setConferenceTags={setConferenceTags}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          data={data}
          key='DraggableSidebarKey324324'
        />
      </div>
    </>
  );
};

export default ConferenceRow;

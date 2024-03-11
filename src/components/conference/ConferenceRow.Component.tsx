'use client';

import React, { useState } from 'react';
import {
  OrganizerComponent,
  ScheduleComponent,
  SpeakersComponent,
  SponsorsComponent,
} from '@/components/conference/ConferenceDetails.Component';
import DraggableSidebar from '@/components/conference/DraggableSidebar.Component';
import { ConferenceTagType, SingleConferenceDataType } from '@/utils/interfaces';

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
    <div className='grid grid-rows-1 md:grid-cols-12'>
      {/* Draggable Sidebar */}
      <div className='md:col-span-4 max-w-full md:max-w-[90%]'>
        <DraggableSidebar
          conferenceTags={conferenceTags}
          setConferenceTags={setConferenceTags}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          key='DraggableSidebarKey324324'
        />
      </div>

      {/* Content Items */}
      <div className='md:col-span-8 p-5 md:p-7 lg:p-11 xl:p-[52px] bg-theme-bianca rounded-xl'>
        {activeItem?.name === 'Organizer' && (
          <OrganizerComponent key='OrganizerComponent324' data={data?.conference?.organizers} />
        )}
        {activeItem?.name === 'Speakers' && (
          <SpeakersComponent key='SpeakersComponent43' data={data?.conference?.speakers} />
        )}
        {activeItem?.name === 'Schedule' && (
          <ScheduleComponent key='ScheduleComponent898' data={data?.conference?.schedules} />
        )}
        {activeItem?.name === 'Sponsors' && (
          <SponsorsComponent key='SponsorsComponent321' data={data?.conference?.sponsors} />
        )}
      </div>
    </div>
  );
};

export default ConferenceRow;

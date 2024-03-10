'use client';

import React, { useState } from 'react';
import {
  OrganizerComponent,
  ScheduleComponent,
  SpeakersComponent,
  SponsorsComponent,
} from '@/components/conference/ConferenceDetails.Component';
import DraggableSidebar from '@/components/conference/DraggableSidebar.Component';

export type ConferenceTagType = {
  id: number;
  name: string;
};

const ConferenceRow = ({ data }: { data: any }) => {
  const [conferenceTags, setConferenceTags] = useState<ConferenceTagType[]>([
    { id: 1, name: 'Organizer' },
    { id: 2, name: 'Speakers' },
    { id: 3, name: 'Schedule' },
    { id: 4, name: 'Sponsors' },
  ]);
  const [activeItem, setActiveItem] = useState<ConferenceTagType>(conferenceTags[0]);

  // console.log(data);

  return (
    <div className='grid grid-cols-12'>
      {/* Draggable Sidebar */}
      <div className='col-span-4 max-w-[90%]'>
        <DraggableSidebar
          conferenceTags={conferenceTags}
          setConferenceTags={setConferenceTags}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      </div>

      {/* Content Items */}
      <div className='col-span-8 p-[52px] bg-theme-bianca rounded-xl'>
        {activeItem?.name === 'Organizer' && <OrganizerComponent data={data?.conference?.organizers} />}
        {activeItem?.name === 'Speakers' && <SpeakersComponent data={data?.conference?.speakers} />}
        {activeItem?.name === 'Schedule' && <ScheduleComponent data={data?.conference?.schedules} />}
        {activeItem?.name === 'Sponsors' && <SponsorsComponent data={data?.conference?.sponsors} />}
      </div>
    </div>
  );
};

export default ConferenceRow;

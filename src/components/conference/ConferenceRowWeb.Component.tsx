import React from 'react';
import {
  OrganizerComponent,
  ScheduleComponent,
  SpeakersComponent,
  SponsorsComponent,
} from '@/components/conference/ConferenceDetails.Component';
import DraggableSidebar from '@/components/conference/DraggableSidebar.Component';
import { ConferenceTagType, SingleConferenceDataType } from '@/utils/interfaces';

interface ComponentTypes {
  activeItem: ConferenceTagType;
  setActiveItem: React.Dispatch<React.SetStateAction<ConferenceTagType>>;
  conferenceTags: ConferenceTagType[];
  setConferenceTags: React.Dispatch<React.SetStateAction<ConferenceTagType[]>>;
  data: SingleConferenceDataType;
}

const ConferenceRowWeb = ({ activeItem, setActiveItem, conferenceTags, setConferenceTags, data }: ComponentTypes) => {
  return (
    <div className='grid grid-rows-1 md:grid-cols-12'>
      {/* Draggable Sidebar */}
      <div className='max-w-full md:col-span-4 md:max-w-[90%]'>
        <DraggableSidebar
          conferenceTags={conferenceTags}
          setConferenceTags={setConferenceTags}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          key='DraggableSidebarKey324324'
        />
      </div>

      {/* Content Items */}
      <div className='rounded-xl bg-theme-bianca p-5 md:col-span-8 md:p-7 lg:p-11 xl:p-[52px]'>
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

export default ConferenceRowWeb;

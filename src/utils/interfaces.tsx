export type ConferenceTagType = {
  id: number;
  name: string;
};

export interface ImageType {
  __typename: string;
  url: string;
}

export interface OrganizeType {
  __typename: string;
  name: string;
  about: string;
  image: ImageType;
}

export interface SocialsType {
  __typename: string;
  dribble: string | null;
  github: string | null;
  linkedin: string | null;
  twitter: string | null;
}

export interface SpeakerType {
  __typename: string;
  name: string;
  about: string;
  image: ImageType;
  social: SocialsType;
}

export type SessionType = {
  title: string;
  __typename: string;
};

export type IntervalType = {
  __typename: string;
  begin: string;
  end: string;
  sessions: SessionType[];
};

export interface ScheduleType {
  __typename: string;
  day: string;
  description: string;
  intervals: IntervalType[];
}

export interface SingleCardType {
  heading: string;
  description: string;
  image: string;
  socials?: {
    dribble: string | null;
    github: string | null;
    linkedin: string | null;
    twitter: string | null;
  };
}

export interface SponsorType {
  name: string;
  about: string;
  image: ImageType;
  __typename: string;
}

export interface MainConferenceDataType {
  __typename: string;
  id: string;
  name: string;
  startDate: string;
  slogan: string;
}

export interface SingleConferenceDataType {
  conference: {
    __typename: string;
    name: string;
    slogan: string;
    organizers: OrganizeType[];
    schedules: ScheduleType[];
    speakers: SpeakerType[];
    sponsors: SponsorType[];
  };
}

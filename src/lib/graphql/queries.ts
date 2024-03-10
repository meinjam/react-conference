import { gql } from '@apollo/client';

export const getAllConferences = gql`
  query ReviewQuery {
    conferences {
      id
      name
      # year,
      startDate
      # endDate,
      slogan
      # websiteUrl
    }
  }
`;

export const getSingleConference = gql`
  query SingleConferenceQuery($id: ID!) {
    conference(id: $id) {
      name
      slogan

      organizers {
        name
        about
        image {
          url
        }
      }

      speakers {
        name
        about
        image {
          url
        }
        social {
          twitter
          linkedin
          dribble
          github
        }
      }

      schedules {
        day
        description
        intervals {
          begin
          end
          sessions {
            title
          }
        }
      }

      sponsors {
        name
        about
        image {
          url
        }
      }
    }
  }
`;

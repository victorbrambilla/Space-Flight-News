import { Meta, Story } from '@storybook/react/types-6-0';
import { CardNews, IProps } from "./CardNews";
import { Box } from '@mui/material';

export default {
  title: 'CardNews',
  component: CardNews,
  args: {
    news: {
      "id": 17570,
      "title": "Boeing expanding SLS Core Stage production to KSC to build Artemis inventory",
      "url": "https://www.nasaspaceflight.com/2022/12/boeing-expanding-cs-prod/",
      "imageUrl": "https://www.nasaspaceflight.com/wp-content/uploads/2022/12/FjaF7rjWIAsjiP8-1170x780.jpg",
      "newsSite": "NASASpaceflight",
      "summary": "Boeing, the prime contractor for NASA’s Space Launch System (SLS) Core Stage, is adding two new work locations at the agency’s Kennedy Space Center (KSC) in Florida as the company looks to support increases in the production rate of the launch vehicle. The completed engine section structure for the third Core Stage is being transported by barge from NASA’s Michoud Assembly Facility (MAF) in New Orleans to KSC, where Boeing will now outfit the most complicated element of the SLS inside the Space Station Processing Facility (SSPF).",
      "publishedAt": "2022-12-10T16:54:14.000Z",
      "updatedAt": "2022-12-10T17:03:49.423Z",
      "featured": false,
      "launches": [],
      "events": []
    },
    index:1
  },
} as Meta;

export const Template: Story<IProps> = (args) =>

<Box
sx={{
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '50px',
  height: '100%',
  marginTop: '100px',
  padding: '0 20px',
  '@media (max-width:800px)': {
    padding: '0 ',
  },
}}
><CardNews {...args} /></Box>
;

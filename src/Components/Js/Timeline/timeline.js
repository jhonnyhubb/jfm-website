import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
//animation
import './timeline.css';
//icons
import { DiJavascript } from 'react-icons/di';

export default function CustomizedTimeline({action}) {
  return (
    <div className={action ? 'activeShowLeft' : 'hide'}>
      <Timeline position="alternate" >
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            dez 2021
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'warning.main' }} />
            <TimelineDot color="warning">
            <DiJavascript size={40} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              How it all started...
            </Typography>
            <Typography>
              At this time, I started to have some interest in coding. In Dez 2021, I joined the DIO._ community, started learning JavaScript and created my first page web.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
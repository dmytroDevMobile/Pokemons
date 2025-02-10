'use dom'
import React from 'react';
import {Paper} from '@mui/material';

interface PaperViewProps {
  text: string;
}

const PaperView = ({text}: PaperViewProps) => (
  <Paper elevation={2}>
    <text>{text}</text>
  </Paper>
);

export default PaperView;

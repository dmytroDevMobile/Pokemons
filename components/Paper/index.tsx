'use dom'
import React from 'react';
import {Paper} from '@mui/material';
import { Text } from 'react-native';

interface PaperViewProps {
  text: string;
}

const PaperView = ({text}: PaperViewProps) => (
  <Paper elevation={2}>
    <Text>{text}</Text>
  </Paper>
);

export default PaperView;

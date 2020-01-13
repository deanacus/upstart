import React from 'react';
import { Badge } from '@deanacus/upstart';


export const Status = ({complete, review, draft, progress, planned}) => {
  if (planned) {
    return <Badge variant="error">Planned</Badge>
  }
  if (progress) {
    return <Badge variant="secondary">In Progress</Badge>
  }
  if (review) {
    return <Badge variant="primary">In Review</Badge>
  }
  if (complete) {
    return <Badge variant="success">Complete</Badge>
  }

  return null;
}

export default Status;

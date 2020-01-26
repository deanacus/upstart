import React from 'react';
import PropTypes from 'prop-types';
import {
  Table, TableHeadCell, TableHead,
} from '@deanacus/upstart';

import { Prop } from './Prop';

export const PropsTable = ({ component: { __docgenInfo: { props } } }) => {
  const propsKeys = props && Object.keys(props);
  return (
    <Table>
      <TableHead>
        <TableHeadCell width="15%" padding="px-1"><small>Prop name</small></TableHeadCell>
        <TableHeadCell width="15%" padding="px-1"><small>Type</small></TableHeadCell>
        <TableHeadCell width="15%" padding="px-1"><small>Default</small></TableHeadCell>
        <TableHeadCell width="55%" padding="px-1"><small>Description</small></TableHeadCell>
      </TableHead>
      <tbody>
        {
          propsKeys && propsKeys.map((prop) => (
            <Prop
              key={prop}
              description={props[prop].description}
              type={props[prop].type}
              defaultValue={props[prop].defaultValue}
              name={prop}
            />
          ))
        }
      </tbody>
    </Table>
  );
};

PropsTable.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PropsTable;

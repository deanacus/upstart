import React from 'react';
import {Table, TableHeadCell, TableCell, TableHead, TableRow } from '@deanacus/upstart';

const Row = ({name, description, type, defaultValue}) => {
  return (
    <TableRow>
      <TableCell padding="px-1">
        <code><small>{name}</small></code>
      </TableCell>
      <TableCell padding="px-1">
        <code><small>{type.name}</small></code>
      </TableCell>
      <TableCell padding="px-1">
        <code><small>{defaultValue ? defaultValue.value : 'Required'}</small></code>
      </TableCell>
      <TableCell padding="px-1">
        <small>{description}</small>
      </TableCell>
    </TableRow>
  )
};

export const PropsTable = ({component}) => {
  const componentProps = component.__docgenInfo.props;
  const propsKeys = componentProps && Object.keys(componentProps);

  return(
    <Table>
      <TableHead>
        <TableHeadCell padding="px-1"><small>Prop name</small></TableHeadCell>
        <TableHeadCell padding="px-1"><small>Type</small></TableHeadCell>
        <TableHeadCell padding="px-1"><small>Default</small></TableHeadCell>
        <TableHeadCell padding="px-1"><small>Description</small></TableHeadCell>
      </TableHead>
      <tbody>
        {
          propsKeys && propsKeys.map( prop => <Row key={prop} {...componentProps[prop]} name={prop} />)
        }
      </tbody>
    </Table>
  )
}
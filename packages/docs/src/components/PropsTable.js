import React from 'react';
import {Table, TableHeadCell, TableCell, TableHead, TableRow } from '@deanacus/upstart';

const getValues = (type) => {
  if ( type.name === 'enum' ) {
    return type.value.map(val => val.value).join(', ')
  }

  if (type.name === 'union') {
    return type.value.map(val => {
      if (!val.value) {
        return val.name
      }
      return `${val.name} ${val.value.name}`;
    }).join(', ');
  }

  return null;
}

const Row = ({name, description, type, defaultValue}) => {
  const title = getValues(type);
  return (
    <TableRow>
      <TableCell padding="px-1">
        <code><small>{name}</small></code>
      </TableCell>
      <TableCell padding="px-1">
        <code><small title={title}>{type.name}</small></code>
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
        <TableHeadCell width="15%" padding="px-1"><small>Prop name</small></TableHeadCell>
        <TableHeadCell width="15%" padding="px-1"><small>Type</small></TableHeadCell>
        <TableHeadCell width="15%" padding="px-1"><small>Default</small></TableHeadCell>
        <TableHeadCell width="55%" padding="px-1"><small>Description</small></TableHeadCell>
      </TableHead>
      <tbody>
        {
          propsKeys && propsKeys.map( prop => <Row key={prop} {...componentProps[prop]} name={prop} />)
        }
      </tbody>
    </Table>
  )
}
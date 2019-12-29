import React from 'react';
import {Table, TH, TD, THead, TR} from '@deanacus/upstart';

const capitalise = (str) => {
  return str.charAt(0).toUpperCase() + str.substr(1)
};

const Row = ({name, description, type, defaultValue}) => {
  return (
    <TR>
      <TD padding="px-1">
        <code><small>{name}</small></code>
      </TD>
      <TD padding="px-1">
        <code><small>{type.name}</small></code>
      </TD>
      <TD padding="px-1">
        <code><small>{defaultValue ? defaultValue.value : 'Required'}</small></code>
      </TD>
      <TD padding="px-1">
        <small>{description}</small>
      </TD>
    </TR>
  )
};

export const PropsTable = ({component}) => {
  const componentProps = component.__docgenInfo.props;
  const propsKeys = componentProps && Object.keys(componentProps);

  return(
    <Table>
      <THead>
        <TH padding="px-1"><small>Prop name</small></TH>
        <TH padding="px-1"><small>Type</small></TH>
        <TH padding="px-1"><small>Default</small></TH>
        <TH padding="px-1"><small>Description</small></TH>
      </THead>
      <tbody>
        {
          propsKeys && propsKeys.map( prop => <Row key={prop} {...componentProps[prop]} name={prop} />)
        }
      </tbody>
    </Table>
  )
}
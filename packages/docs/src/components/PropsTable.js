import React, { Fragment } from 'react';
import {Table, TH, TD, THead, TR} from '@deanacus/upstart';

const Enum = ({values}) => (
  <Fragment>
    Enum:
    <ul>
      {values.map(value => <li key={value.name}>{value.value}</li>)}
    </ul>
  </Fragment>
)

const Union = ({values}) => {
  console.log(values);
  return (
    <Fragment>
      One of:
        (still coding)
    </Fragment>
  )
}

const getType = ({name, value}) => {
  switch (name) {
    case 'enum':
      return <Enum values={value} />
    case 'union':
      return <Union values={value} />
    default:
      return <>{name}</>
  }
}

const Row = ({name, description, required, type, defaultValue}) => {
  console.log(name, description, required, type, defaultValue)
  return (
<TR>
  <TD>{name}</TD>
  <TD>
      {getType(type)}
  </TD>
  <TD>{required ? 'true' : 'false'}</TD>
  <TD>{defaultValue ? defaultValue.value : ''}</TD>
  <TD>{description}</TD>
</TR>
)
  };

export const PropsTable = ({component}) => {
  const componentProps = component.__docgenInfo.props;
  const propsKeys = componentProps && Object.keys(componentProps);
  return(
    <Table>
      <THead>
        <TH>Prop</TH>
        <TH>Type</TH>
        <TH>Required</TH>
        <TH>DefaultValue</TH>
        <TH>Description</TH>
      </THead>
      <tbody>
        {
          propsKeys && propsKeys.map( prop => <Row key={prop} {...componentProps[prop]} name={prop} />)
        }
      </tbody>
    </Table>
  )
}
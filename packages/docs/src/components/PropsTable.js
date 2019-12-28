import React from 'react';
import {Table, TH, TD, THead, TR} from '@deanacus/upstart';

const capitalise = (str) => {
  return str.charAt(0).toUpperCase() + str.substr(1)
};

const Enum = ({values}) => (
  <>
    Enum: <br />
    {values.map(value => <><small><code>{value.value}</code></small>, </>)}
  </>
)

const Union = ({values}) => {
  console.log(values);
  return (
    <>
      One of:
        (still coding)
    </>
  )
}

const getType = ({name, value}) => {
  switch (name) {
    case 'enum':
      return <Enum values={value} />
    case 'union':
      return <Union values={value} />
    default:
      return <>{capitalise(name)}</>
  }
}

const Row = ({name, description, required, type, defaultValue}) => {
  return (
    <TR>
      <TD padding="px-1">
        <p>{name}{required ? '*' : '' }</p>
      </TD>
      <TD padding="px-1">
          {getType(type)}
          {defaultValue ? <><br /><small>Default: <code>{defaultValue.value}</code></small></> : ''}
      </TD>
      <TD padding="px-1">{description}</TD>
    </TR>
  )
};

export const PropsTable = ({component}) => {
  const componentProps = component.__docgenInfo.props;
  const propsKeys = componentProps && Object.keys(componentProps);

  return(
    <Table>
      <THead>
        <TH padding="px-1">Prop</TH>
        <TH padding="px-1">Type</TH>
        <TH padding="px-1">Description</TH>
      </THead>
      <tbody>
        {
          propsKeys && propsKeys.map( prop => <Row key={prop} {...componentProps[prop]} name={prop} />)
        }
      </tbody>
    </Table>
  )
}
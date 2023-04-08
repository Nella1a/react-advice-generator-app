import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  return <main>{props.children}</main>;
}

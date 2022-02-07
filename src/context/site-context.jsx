import React, { useEffect, useState } from 'react';
import positions from '@/constants/positions';

import props from './site-context.proptypes';

export const SiteContext = React.createContext();
SiteContext.displayName = 'SiteContext';

SiteProvider.propTypes = props.propTypes;
SiteProvider.defaultProps = props.defaultProps;

export default function SiteProvider ({ teams, players, children }) {
  return (
    <SiteContext.Provider value={{ teams, players, positions }}>{children}</SiteContext.Provider>
  );
}

import { useState } from 'react';
import merge from 'lodash.merge';
import SettingsContext from '../contexts/settings';

export default function GlobalProvider({ children }) {
  const [settings, setSettings] = useState({ rawDocs: false });
  return (
    <SettingsContext.Provider
      value={{
        settings,
        setSettings,
        patchSettings: ( obj ) => {
          const merged = merge( {}, settings, obj );
          setSettings( merged );
        }
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

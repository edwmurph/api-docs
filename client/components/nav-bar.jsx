import { useContext } from 'react';
import { Menubar } from 'primereact/menubar';
import { Link, useNavigate, createSearchParams } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import useApi from '../hooks/use-api';
import SettingsContext from '../contexts/settings';

function ButtonLink({ to, label, className }) {
  return (
    <Link className={className} to={to}>
      <Button label={label} link/>
    </Link>
  );
}

export default function NavBar() {
  const { settings, patchSettings } = useContext( SettingsContext );
  const navigate = useNavigate();

  const { data } = useApi({
    route: '/api/definitions',
    defaultData: []
  });

  const definitionOptions = Object.entries( data ).map( ([name, children]) => {
    return {
      label: name,
      items: children.map( ( child ) => ({
        label: child.name,
        command: () => {
          navigate( `/definition?${ createSearchParams({ path: child.path }).toString() }` );
        }
      }) )
    };
  });

  console.log( definitionOptions );

  const items = [
    {
      template: () => <ButtonLink to='/' label='Home' className='mr-2'/>
    },
    {
      label: 'Definitions',
      icon: 'pi pi-folder',
      items: definitionOptions
    },
    {
      label: 'Settings',
      icon: 'pi pi-cog',
      items: [
        {
          template: () => (
            <div className='px-2 flex justify-content-center'>
              <Checkbox
                inputId='raw-checked'
                onChange={( e ) => patchSettings({ rawDocs: e.checked })}
                checked={settings.rawDocs}
              />
              <label
                htmlFor='raw-checked'
                className='white-space-nowrap ml-2'
              >
                Show Raw Documentation?
              </label>
            </div>
          )
        }
      ]
    }
  ];

  return (
    <Menubar model={items}/>
  );
}

import { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { Link, useNavigate, createSearchParams } from 'react-router-dom';
import { Button } from 'primereact/button';
import { CascadeSelect } from 'primereact/cascadeselect';

function ButtonLink({ to, label, className }) {
  return (
    <Link className={className} to={to}>
      <Button label={label} link/>
    </Link>
  );
}

function DefinitionDropdown() {
  const [selected, setSelected] = useState();
  const navigate = useNavigate();

  const options = [
    {
      name: 'team1',
      children: [
        {
          name: 'webhook-example.yaml',
          path: 'team1/webhook-example.yaml'
        }
      ]
    },
    {
      name: 'uber',
      children: [
        {
          name: 'api.json',
          path: 'uber/api.json'
        }
      ]
    },
    {
      name: 'asyncapi',
      children: [
        {
          name: 'account-service.json',
          path: 'asyncapi/account-service.json'
        },
        {
          name: 'streetlights.yaml',
          path: 'asyncapi/streetlights.yaml'
        }
      ]
    }
  ];

  return (
    <CascadeSelect
      value={selected}
      options={options}
      onChange={( e ) => {
        setSelected( e.value );
        navigate( `/definition?${ createSearchParams({ path: e.value }).toString() }` );
      }}
      optionLabel='name'
      optionValue='path'
      optionGroupLabel='name'
      optionGroupChildren={['children']}
      className='w-20rem'
      placeholder='Select a Definition'
    />
  );
}

export default function NavBar() {
  /*
  const items = [
    {
      label: 'Swagger',
      template: () => <ButtonLink to='/swagger' label='Swagger' className='mr-2'/>
    },
    {
      label: 'AsyncAPI',
      template: () => <ButtonLink to='/async-api' label='AsyncAPI' className='mr-2'/>
    },
    {
      label: 'Markdown',
      template: () => <ButtonLink to='/markdown' label='Markdown' className='mr-2'/>
    }
  ];
  */

  return (
    <Menubar
      start={<ButtonLink to='/' label='Home' className='mr-2'/>}
      end={<DefinitionDropdown/>}
    />
  );
}

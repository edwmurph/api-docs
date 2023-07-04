import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

function ButtonLink({ to, label, className }) {
  return (
    <Link className={className} to={to}>
      <Button label={label} link/>
    </Link>
  );
}

export default function NavBar() {
  const items = [
    {
      id: 'Swagger',
      label: 'Swagger',
      template: () => <ButtonLink to='/swagger' label='Swagger' className='mr-2'/>
    },
    {
      id: 'Redoc',
      label: 'Redoc',
      template: () => <ButtonLink to='/redoc' label='Redoc' className='mr-2'/>
    },
    {
      id: 'asyncapi',
      label: 'AsyncAPI',
      template: () => <ButtonLink to='/async-api' label='AsyncAPI' className='mr-2'/>
    }
  ];

  return (
    <Menubar
      model={items}
      start={<ButtonLink to='/' label='Home' className='mr-2'/>}
      end={<InputText placeholder='Search' type='text' className='w-full'/>}
    />
  );
}

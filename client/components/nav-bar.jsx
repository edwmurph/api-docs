import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

const items = [
  {
    id: 'Swagger',
    label: 'Swagger',
    url: '/swagger'
  },
  {
    id: 'Redoc',
    label: 'Redic',
    url: '/redoc'
  },
  {
    id: 'asyncapi',
    label: 'AsyncAPI',
    url: '/async-api'
  }
];

export default function NavBar() {
  return (
    <Menubar
      model={items}
      start={
        <i className='pi pi-file text-4xl'></i>
      }
      end={
        <InputText placeholder='Search' type='text' className='w-full'/>
      }
    />
  );
}

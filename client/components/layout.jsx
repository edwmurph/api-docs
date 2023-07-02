export default function Layout({ getComponent }) {
  const BaseLayout = getComponent( 'BaseLayout', true );

  return (
    <div>
      {/* eslint-disable-next-line max-len */}
      <div className='d-flex justify-content-between align-items-center h-3 border border-primary px-2'>
        <i className='bi bi-file-code'></i>
        <b>demo</b>
      </div>
      <BaseLayout/>
    </div>
  );
}

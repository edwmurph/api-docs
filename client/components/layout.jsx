export default function Layout({ getComponent }) {
  const BaseLayout = getComponent( 'BaseLayout', true );

  return (
    <div>
      <div className='text-center mt-3'>
        <h3>Custom layout demo</h3>
      </div>
      <BaseLayout/>
    </div>
  );
}

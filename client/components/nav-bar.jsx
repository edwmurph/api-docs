// eslint-disable-next-line max-len
const classes = 'd-flex border border-primary justify-content-between align-items-center px-3 h-3';

export default function NavBar() {
  return (
    <div className={classes}>
      <i className='bi bi-journal-code font-size-2'/>
      <div>Search...</div>
    </div>
  );
}

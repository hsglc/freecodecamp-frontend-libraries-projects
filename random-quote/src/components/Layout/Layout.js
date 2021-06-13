import classes from './Layout.module.css'

function Layout({children}) {
  return (
    <div className={classes.layout}>
      <header className={classes.header}>Random Quote Generator</header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;

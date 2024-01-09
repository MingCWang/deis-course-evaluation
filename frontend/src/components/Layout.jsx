import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './NavBar/NavBar.jsx';
import Footer from './Footer.jsx';
import styles from './Layout.module.css';

export default function Layout() {
    const location = useLocation();

    let mainstyle = styles.main;

    if (location.pathname === '/login') {
        mainstyle = styles.loginMain;
    }

    return (
        <>
            <NavBar />
            <main className={mainstyle}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

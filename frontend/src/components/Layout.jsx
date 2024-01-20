import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './NavBar/NavBar.jsx';
import Footer from './Footer.jsx';
import styles from './Layout.module.css';
import ScrollToTop from './ScrollToTop.jsx';

export default function Layout() {
    const location = useLocation();

    let mainstyle = styles.main;
	let loading = false;

    if (location.pathname === '/login') {
        mainstyle = styles.loginMain;
    }else if(location.pathname === '/loading'){
		loading = true;
	}

    return (
        <>
            {!loading && <NavBar />}
			<ScrollToTop />
            <main className={mainstyle}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

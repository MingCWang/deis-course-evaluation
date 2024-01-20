import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from './NavBar/NavBar.jsx';
import Footer from './Footer.jsx';
import styles from './Layout.module.css';
import ScrollToTop from './ScrollToTop.jsx';

export default function Layout() {
    const location = useLocation();
	const [loading, setLoading] = useState(true);

    let mainstyle = styles.main;

	if (location.pathname === '/login') {
		mainstyle = styles.loginMain;
	}

	useEffect(() => {
		if(location.pathname.startsWith('/loading')){
			setLoading(true);
		}else{
			setLoading(false);
		}
	}
	, [location]);


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

/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import UserProvider from './context/UserContext.jsx';
// Pages import
import ErrorPage from './error-page.jsx';
import Layout from './components/Layout.jsx';
// import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/home/home.jsx';
import Course from './pages/course/course.jsx';
import Review from './pages/review/review.jsx';
import Search from './pages/search/search.jsx';
import SavedCourse from './pages/saved-courses/saved-courses.jsx';
// import MyReviews from './pages/my-reviews/my-reviews.jsx';
import Loading from './pages/oauth-loading/oauth-loading.jsx';
import PrivacyPolicy from './pages/privacy-policy/privacy-policy.jsx';
import TermsConditions from './pages/terms-conditions/terms-conditions.jsx';
import About from './pages/about/about.jsx';
import Contact from './pages/contact/contact.jsx';
import SiteRegulations from './pages/site-regulations/site-regulations.jsx';
import Login from './pages/login/login.jsx';

const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
            {
                path: '/course/:id',
                element: <Course />,
            },
            {
                path: 'review/:id',
                element: <Review />,
            },
            {
                path: 'search',
                element: <Search />,
            },
            {
                path: 'loading',
                element: <Loading />,
            },
            {
                path: 'privacy-policy',
                element: <PrivacyPolicy />,
            },
            {
                path: 'terms-conditions',
                element: <TermsConditions />,
            },
            {
                path: 'site-regulations',
                element: <SiteRegulations />,
            },
            // {
            //     path: 'saved-courses',
            //     element: (
            //         <ProtectedRoute>
            //             <SavedCourse />
            //         </ProtectedRoute>
            //     ),
            // },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'saved-courses',
                element: <SavedCourse />,
            },
            // {
            //     path: 'my-reviews',
            //     element: (
            //         <ProtectedRoute>
            //             <MyReviews />
            //         </ProtectedRoute>
            //     ),
            // },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <UserProvider>
    	<RouterProvider router={router} />,
    </UserProvider>,
    // </React.StrictMode>,
);

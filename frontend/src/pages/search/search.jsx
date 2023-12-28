/* eslint-disable react/prop-types */
import { useState, useRef, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './search.module.css';
import CourseCard from '../../components/CourseReviewCard/CourseCard.jsx';
import UseCourseSearch from '../../services/UseCourseSearch.jsx';
import Loading from '../loading/loading';

function Error() {
    return (
        <div className={styles.errorContainer}>
            <p className={styles.error}>Error fetching course data</p>
        </div>
    );
}

function Content({ data, loading, lastCourseRef }) {
    if (data && data.length > 0) {
        return (
            <>
                {data.map((course, index) => {
                    if (data.length === index + 1) {
                        return (
                            <CourseCard
                                ref={lastCourseRef}
                                key={course._id}
                                course={course}
                            />
                        );
                    }
                    return <CourseCard key={course._id} course={course} />;
                })}
                <div>{loading && <Loading />}</div>
            </>
        );
    }
    if (loading) {
        return <Loading page />;
    }
    if (data.length === 0) {
        return <div className={styles.NotFoundContainer}>No Courses Found</div>;
    }
}

export default function Search() {
    // These state could be moved to a custom hook for fetching data

    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState(1);
    const observer = useRef();

    const { data, error, loading, hasmore } = UseCourseSearch(
        searchParams.get('course'),
        page,
    );

    // This callback keep tracks of the last element in the list of courses, and when it is reached, it will fetch more courses
    const lastCourseRef = useCallback(
        (node) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();
            console.log(`page: ${page}`);
            console.log(`hasmore: ${hasmore}`);
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasmore) {
                    setPage((prevPage) => prevPage + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [loading, hasmore],
    );

    if (error) return <Error />;

    return (
        <Content data={data} loading={loading} lastCourseRef={lastCourseRef} />
    );
}

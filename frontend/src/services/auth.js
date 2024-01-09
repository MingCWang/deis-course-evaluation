const process = import.meta.env;

/**
 * this function will get the JWT from the backend and store it in local storage
 */
export default async function setJWT() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
        // Parse authorization code from the URL
        fetch(`${process.VITE_BASE_URL}auth/oauth/google`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `Unable to retrieve JWT from server status: ${response.status}`,
                    );
                } else {
                    return response.json();
                }
            })
            .then((data) => {
                window.location.href = window.location.pathname;
                const { name, id, email, token, likedCourses} = data.userJSON;
                const userInfo = {
                    name,
                    id,
                    email,
					likedCourses
                };
                // then store in localStorage to persist data accross page refresh
                localStorage.setItem('userInfo', JSON.stringify(userInfo));
                localStorage.setItem('authenticated', true);
                localStorage.setItem('jwt', token);
				localStorage.setItem('likedCourses', JSON.stringify(likedCourses));
            })
            .catch(() => false);
    }
}

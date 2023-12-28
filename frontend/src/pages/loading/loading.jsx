import styles from './loading.module.css';

export default function Loading({page}) {
    
	let container;
	if (page) {
		container = styles.containerPage;
	} else {
		container = styles.container;
	}
	return (
		<div className={container}>
			<svg viewBox="25 25 50 50">
				<circle className={styles.circle} r="20" cy="50" cx="50" />
			</svg>
		</div>

    );
}

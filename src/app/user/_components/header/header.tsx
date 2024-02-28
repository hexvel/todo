import GlobalLoader from '../loader';

import Profile from './profile';

const Header = () => {
	return (
		<header>
			<GlobalLoader />
			<Profile />
		</header>
	);
};

export default Header;

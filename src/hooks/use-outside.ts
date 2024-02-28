import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

type TypeOut = {
	ref: any;
	isShow: boolean;
	setIsShow: Dispatch<SetStateAction<boolean>>;
};

const useOutside = (initialIsVisible: boolean): TypeOut => {
	const [isShow, setIsShow] = useState(initialIsVisible);
	const ref = React.useRef<HTMLElement>(null);

	const handleClickOutside = (event: any) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsShow(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	});

	return { ref, isShow, setIsShow };
};

export default useOutside;

import { useState, useCallback, useEffect } from 'react';

/**
 * isMatches is undefined before hook effect
 * @param width to make max-width media query. Default is 767
 * @returns {undefined | boolean} Is media query matches. Undefined if there is no window reference yet
 */
export const useMediaQuery = (width = 767): undefined | boolean => {
	const [isMatches, setIsMatches] = useState<undefined | boolean>(false);
	const onChange = useCallback(
		() =>
			setIsMatches(window.matchMedia(`(max-width: ${width}px)`).matches),
		[width],
	);

	useEffect(() => {
		onChange();
		window.addEventListener('resize', onChange);
		return () => window.removeEventListener('resize', onChange);
	}, [onChange]);

	return isMatches;
};

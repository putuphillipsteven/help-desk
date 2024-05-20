export const checkLink = (href: string, pathname: string) => {
	if (href === `/dashboard` && pathname === href) {
		return `pathname === href`;
	} else if (href !== `/dashboard` && pathname.includes(href)) {
		return `pathname.includes(href)`;
	}
};

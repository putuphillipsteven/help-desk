export const checkLink = (href: string, pathname: string) => {
	if (href === `/dashboard` && pathname === href) {
		return `pathname === href`;
	} else if (href !== `/dashboard` && pathname.includes(href)) {
		return `pathname.includes(href)`;
	}
};

export const checkLinkAgents = (href: string, pathname: string): boolean => {
	// Regular expressions to match exact paths
	const agentRegex = new RegExp(`^/dashboard/agents/agent$`);
	const teamRegex = new RegExp(`^/dashboard/agents/team$`);

	// Check if the pathname matches the specific patterns
	const isAgentPath = agentRegex.test(pathname);
	const isTeamPath = teamRegex.test(pathname);

	// Return true if the href matches the type detected in the pathname
	if (href === 'agent' && isAgentPath) {
		return true;
	} else if (href === 'team' && isTeamPath) {
		return true;
	}

	// Return false if no match is found
	return false;
};

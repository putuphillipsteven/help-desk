export default function MainAgentActivity() {
	return (
		<div className='w-full h-full flex flex-col shadow-lg p-2 rounded-md'>
			<div className='header-agent-activity h-fit w-full'>
				<p>Agent Activity</p>
			</div>
			<div className='filter-agent-activity h-fit w-full'>
				<p>Filter</p>
			</div>
			<div className='body-agent-activity flex-1 w-full'>
				<p>Body</p>
			</div>
		</div>
	);
}

import Image from 'next/image';

export default function Trusted() {
	return (
		<div className='home-section pt-[180px] pb-8'>
			<div className='px-16 py-24 bg-light-gray-dimata1 w-full rounded-box  centering-flex-col gap-y-10'>
				<p className='font-bold'>Trusted by 10K+ businesses</p>
				<div className=' w-[90%]  flex flex-wrap items-center justify-center gap-x-16 gap-y-4'>
					<Image
						src={'company-logo/ProSaas.svg'}
						width={110}
						height={0}
						alt='ProSaas Company Logo'
					/>
					<Image
						src={'company-logo/No1City.svg'}
						width={110}
						height={0}
						alt='No1City Company Logo'
					/>
					<Image src={'company-logo/Mata.svg'} width={110} height={0} alt='Mata Company Logo' />
					<Image src={'company-logo/Brand.svg'} width={110} height={0} alt='Brand Company Logo' />
					<Image
						src={'company-logo/TechHouse.svg'}
						width={110}
						height={0}
						alt='TechHouse Company Logo'
					/>
					<Image src={'company-logo/BitMax.svg'} width={110} height={0} alt='BitMax Company Logo' />
					<Image src={'company-logo/Target.svg'} width={110} height={0} alt='Target Company Logo' />
					<Image
						src={'company-logo/Classic.svg'}
						width={110}
						height={0}
						alt='Classic Company Logo'
					/>
					<Image
						src={'company-logo/BuildUp.svg'}
						width={110}
						height={0}
						alt='BuildUp Company Logo'
					/>
				</div>
			</div>
		</div>
	);
}

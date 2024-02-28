import { GanttChartSquare } from 'lucide-react';
import Link from 'next/link';

import { COLORS } from '@/constants/color.constants';

import LogoutButton from './logout-button';
import MenuItem from './menu-item';
import { MENU } from '@/data/menu.data';

const Sidebar = () => {
	return (
		<aside className='border-r border-r-border h-full bg-sidebar flex flex-col justify-between'>
			<div>
				<Link
					href='/'
					className='flex items-center gap-2.5 p-layout border-b-border'
				>
					<GanttChartSquare
						color={COLORS.primary}
						size={38}
					/>
					<span className='text-2xl font-bold relative'>
						HEXVEL
						<span className='absolute -top-1 -right-6 text-xs opacity-40 rotate-[18deg] font-normal'>
							BETA
						</span>
					</span>
				</Link>
				<div className='p-3 relative'>
					<LogoutButton />
					{MENU.map(item => (
						<MenuItem
							item={item}
							key={item.link}
						/>
					))}
				</div>
			</div>
			<footer className='text-xs opacity-40 font-normal text-center p-layout'>
				2024 &copy; С любовью от{' '}
				<a
					href='https://t.me/it_hexvel'
					className='hover:text-primary text-brand-300 transition-colors'
					target='_blank'
					rel='noreferrer'
				>
					HEXVEL
				</a>
				. <br />
				Все права защищены.
			</footer>
		</aside>
	);
};

export default Sidebar;

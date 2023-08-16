import EventsIcon from './icons/EventsIcon.svelte';
import GuidesIcon from './icons/GuidesIcon.svelte';
import MessagesIcon from './icons/MessagesIcon.svelte';
import PicturesIcon from './icons/PicturesIcon.svelte';
import DocumentsIcon from './icons/DocumentsIcon.svelte';
import StatisticsIcon from './icons/StatisticsIcon.svelte';

export const data = [
	{
		section: 'Documents',
		icon: DocumentsIcon,
		content: [
			{
				title: 'Taxes',
				link: '/new'
			},
			{
				title: 'Travel',
				link: '/new/documents/travel'
			},
			{
				title: 'Insurance',
				link: '/new/documents/insurance'
			}
		]
	},
	{
		section: 'Messages',
		icon: MessagesIcon,
		content: [
			{
				title: 'Unbox',
				link: '/new/messages/unbox'
			},
			{
				title: 'Unread',
				link: '/new/messages/unread'
			},
			{
				title: 'Archived',
				link: '/new/messages/archived'
			}
		]
	},
	{
		section: 'Pictures',
		icon: PicturesIcon,
		content: [
			{
				title: 'Vacations',
				link: '/new/pictures/vacations'
			},
			{
				title: 'Anniversary',
				link: '/new/pictures/anniversary'
			},
			{
				title: 'University',
				link: '/new/pictures/university'
			}
		]
	},
	{
		section: 'Statistics',
		icon: StatisticsIcon,
		content: [
			{
				title: 'Finances',
				link: '/new/statistics/finances'
			},
			{
				title: 'Call Stats',
				link: '/new/statistics/call-stats'
			},
			{
				title: 'Trip Logs',
				link: '/new/statistics/trip-logs'
			}
		]
	},
	{
		section: 'Events',
		icon: EventsIcon,
		content: [
			{
				title: 'Weddings',
				link: '/new/events/weddings'
			},
			{
				title: 'Networking',
				link: '/new/events/networking'
			}
		]
	},
	{
		section: 'Guides',
		icon: GuidesIcon,
		content: [
			{
				title: 'Documentation',
				link: '/new/guides/documentation'
			}
		]
	}
];

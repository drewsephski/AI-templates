import {
	FacebookIcon,
	GithubIcon,
	Grid2X2Plus,
	InstagramIcon,
	LinkedinIcon,
	TwitterIcon,
	YoutubeIcon,
} from 'lucide-react';

export function MinimalFooter() {
	const year = new Date().getFullYear();

	const company = [
		{
			title: 'About Us',
			href: '/#about',
		},
		{
			title: 'Careers',
			href: '/#careers',
		},
		{
			title: 'Brand Assets',
			href: '/#brand',
		},
		{
			title: 'Privacy Policy',
			href: '/privacy',
		},
		{
			title: 'Terms of Service',
			href: '/terms',
		},
	];

	const resources = [
		{
			title: 'Help Center',
			href: '/docs#getting-started',
		},
		{
			title: 'Contact Support',
			href: '/contact',
		},
		{
			title: 'Community',
			href: '/docs#community',
		},
		{
			title: 'Security',
			href: '/docs#security',
		},
	];

	const socialLinks = [
		{
			icon: <GithubIcon className="size-4" />,
			link: 'https://github.com/drewsephski',
			ariaLabel: 'GitHub profile',
		},
		{
			icon: <TwitterIcon className="size-4" />,
			link: 'https://x.com/',
			ariaLabel: 'Twitter profile',
		},
		{
			icon: <LinkedinIcon className="size-4" />,
			link: 'https://linkedin.com/in/drewsepeczi',
			ariaLabel: 'LinkedIn profile',
		},
	];
	return (
		<footer className="relative bg-gradient-to-t from-background via-background to-accent/5">
			<div className="mx-auto max-w-6xl px-6">
				<div className="bg-border absolute inset-x-0 h-px w-full" />
				<div className="grid max-w-6xl grid-cols-6 gap-8 p-6 md:p-8">
					<div className="col-span-6 flex flex-col gap-6 md:col-span-4">
						<div className="flex flex-col items-start gap-4">
							<a href="/" className="flex items-center gap-2 group">
								<Grid2X2Plus className="size-8 text-primary group-hover:scale-110 transition-transform duration-200" />
								<span className="text-xl font-bold font-sans bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
									AI Templates
								</span>
							</a>
							<p className="text-muted-foreground max-w-md text-sm leading-relaxed font-sans">
								AI-powered templates marketplace for modern web applications. Discover, download, and deploy
								production-ready templates with cutting-edge AI integration.
							</p>
						</div>
						<div className="flex gap-3">
							{socialLinks.map((item, i) => (
								<a
									key={i}
									className="hover:bg-accent hover:text-primary rounded-lg border border-border p-2 transition-all duration-200 hover:scale-105"
									target="_blank"
									href={item.link}
									rel="noopener noreferrer"
									aria-label={item.ariaLabel}
								>
									{item.icon}
								</a>
							))}
						</div>
					</div>
					<div className="col-span-6 w-full md:col-span-1">
						<span className="text-foreground font-semibold mb-3 text-xs font-sans uppercase tracking-wider">
							Resources
						</span>
						<div className="flex flex-col gap-2">
							{resources.map(({ href, title }, i) => (
								<a
									key={i}
									className={`w-max py-1.5 text-sm duration-200 hover:text-primary hover:translate-x-1 transition-all font-sans`}
									href={href}
								>
									{title}
								</a>
							))}
						</div>
					</div>
					<div className="col-span-6 w-full md:col-span-1">
						<span className="text-foreground font-semibold mb-3 text-xs font-sans uppercase tracking-wider">
							Company
						</span>
						<div className="flex flex-col gap-2">
							{company.map(({ href, title }, i) => (
								<a
									key={i}
									className={`w-max py-1.5 text-sm duration-200 hover:text-primary hover:translate-x-1 transition-all font-sans`}
									href={href}
								>
									{title}
								</a>
							))}
						</div>
					</div>
				</div>
				<div className="bg-border absolute inset-x-0 h-px w-full" />
				<div className="flex max-w-6xl flex-col justify-between gap-4 pt-4 pb-8 md:flex-row md:items-center">
					<p className="text-muted-foreground text-sm font-sans">
						Made with ❤️ by <a href="https://github.com/drewsepeczi" className="text-primary hover:underline font-medium">@drewsepeczi</a>
					</p>
					<p className="text-muted-foreground text-sm font-sans">
						© {year} AI Templates. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}

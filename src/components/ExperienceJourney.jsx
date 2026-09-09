function ExperienceJourney() {
	const journey = [
		{
			year: "2025",
			title: "Started Frontend Development",
			text:
				"Started my frontend development journey with HTML, CSS and JavaScript, " +
				"then gradually moved into React and responsive web development.",
		},
		{
			year: "2025",
			title: "Virtual Internships",
			internships: [
				{
					name: "Web Development Internship",
					company: "ApexPlanet Software Pvt. Ltd.",
					duration: "1.5 Months",
				},
				{
					name: "ReactJS Developer Internship",
					company: "CodSoft",
					duration: "1 Month",
				},
				{
					name: "RISE Web Development Internship",
					company: "Tamizhan Skills",
					duration: "1 Month",
				},
			],
		},
		{
			year: "2025 – 2026",
			title: "Built Many Projects",
			text:
				"Put my learning into practice by building multiple frontend projects, " +
				"from smaller HTML, CSS and JavaScript projects to larger React applications.",
		},
		{
			year: "2026",
			title: "One Year of Growth",
			text: "One year into my frontend development journey, I am continuing to learn, build and improve through hands-on development.",
		},
	];

	return (
		<section
			id="journey"
			className="dark:bg-zinc-950/95 bg-stone-100/80 border-b border-stone-300 dark:border-zinc-800"
		>
			<div className="mx-auto py-20 lg:py-24 max-w-5xl sm:px-8 px-5">
				<div className="max-w-3xl text-center mx-auto">
					<p
						className={`mb-3 dark:text-amber-400 font-extrabold uppercase text-base tracking-widest text-indigo-600 sm:text-lg`}
					>
						Experience & Journey
					</p>

					<h2 className="dark:text-zinc-50 text-3xl text-slate-900 tracking-tight font-bold sm:text-4xl">
						My frontend journey so far
					</h2>

					<p className="leading-7 mt-5 dark:text-zinc-400 text-slate-700">
						From starting frontend development in 2025 to one year of learning,
						internships and hands-on projects.
					</p>
				</div>

				<div className="max-w-3xl mx-auto mt-14 relative">
					<div className="sm:left-3 w-px absolute bg-stone-300 bottom-2 dark:bg-zinc-700 left-2.5 top-2.5" />

					<div className="space-y-10">
						{journey.map((item) => (
							<div
								key={`${item.year}-${item.title}`}
								className="relative pl-10 sm:pl-14"
							>
								<span
									className={`justify-center top-1.5 left-0 border-stone-100 flex rounded-full bg-indigo-600 dark:border-zinc-950 h-5
                  items-center border-4 dark:bg-amber-400 absolute w-5`}
								/>

								<p className="uppercase dark:text-amber-400 text-indigo-600 text-sm tracking-widest font-bold">
									{item.year}
								</p>
								<h3 className="mt-1 dark:text-zinc-50 font-semibold sm:text-2xl text-slate-900 text-xl">
									{item.title}
								</h3>

								{item.internships ? (
									<div className="mt-4 space-y-4">
										{item.internships.map((internship) => (
											<div key={internship.name}>
												<p className="text-slate-900 font-semibold dark:text-zinc-100">
													{internship.name}
												</p>
												<p className="text-slate-700 dark:text-zinc-400">
													{internship.company}
												</p>
												<p className="text-slate-600 dark:text-zinc-500 text-sm">
													{internship.duration}
												</p>
											</div>
										))}
									</div>
								) : (
									<p className="leading-7 mt-2 text-slate-700 max-w-2xl dark:text-zinc-400">
										{item.text}
									</p>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default ExperienceJourney;

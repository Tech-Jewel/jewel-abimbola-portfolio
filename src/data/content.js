/* ---- Edit content here ---- */
export const CONTACT = {
	email: "jewel4techh@gmail.com",
	whatsapp: "https://wa.me/2349077819614",
	linkedin: "https://www.linkedin.com/in/jewel-abimbola-8653bb270",
	behance: "https://www.behance.net/jewel-abimbola",
};
// whatsapp: use a full link such as "https://wa.me/234XXXXXXXXXX"
export const STAGES = [
	[
		"Empathize",
		"I begin with the people using the product, the context they’re in, and the needs they’re trying to meet.",
	],
	[
		"Define",
		"I make sense of what I’ve learned and shape the real problem worth solving, before jumping into design choices.",
	],
	[
		"Ideate",
		"I explore directions, structures, and opportunities to find the most useful path forward.",
	],
	[
		"Prototype",
		"Promising ideas become tangible, so they can be discussed, refined, and explored in context.",
	],
	[
		"Test",
		"I look at how an experience works in practice, learn from it, and improve the next version.",
	],
];
export const PHOTO = "/images/jewel.png"; // import a photo from src/assets or use a /path in public/
export const NAV = ["Work", "Approach", "About", "Contact"];

export const PROJECTS = [
	/* Fill in role / year / tools, add cover + images (and a Behance link) when ready. Empty fields are simply hidden. */
	// Monexa

	{
		id: "monexa",
		cls: "p1",
		n: "01",
		name: "Monexa",
		cat: "FINTECH",
		desc: "Everyday money management, made simpler.",
		role: "UI/UX Designer",
		year: "2025",
		tools: "Figma",
		cover: "/images/flux-cover.png",
		images: [],
		behance: "",
		overview: [
			"Monexa is an all-in-one personal finance app designed to make managing money simpler, more convenient and more secure. From sending and receiving money to paying bills, purchasing airtime and data, and scheduling payments ahead of time, Monexa brings essential financial activities into one place.",
			"I designed the mobile experience with a focus on simplifying everyday financial tasks, helping users stay in control of their money while making financial management feel more seamless and accessible.",
		],
		details: [
			{
				title: "The challenge",
				text: "Managing everyday finances can involve switching between different apps to transfer money, pay bills and handle other routine transactions. Remembering payment deadlines and completing recurring financial tasks on time can also become stressful. I wanted to create a more unified experience that helps users manage these activities with less friction and greater peace of mind.",
			},
			{
				title: "The approach",
				text: [
					"I designed a clean, approachable interface that brings essential financial services together in one place. The onboarding experience introduces Monexa's core benefits through three screens focused on convenient money management, simplified transactions and security, with clear calls to action guiding users towards creating an account or logging in.",
					"Beyond everyday transactions, scheduled payments allow users to plan payments in advance instead of having to complete every transaction manually when it is due. I used a consistent visual system, purple accents and clear interface elements to make the experience feel cohesive, intuitive and reassuring.",
				],
			},
		],
		conclusion: {
			title: "The outcome",
			text: "A user-focused fintech app concept that brings everyday payments and financial management into one streamlined experience. By combining essential money services with scheduled payments, Monexa is designed to help users save time, stay organized and feel more in control of their finances.",
		},
	},

	// Strack
	{
		id: "strack",
		cls: "p2",
		n: "02",
		name: "Strack",
		cat: "Accessible app",
		desc: "An accessibility-conscious step-tracking app concept.",
		role: "",
		year: "",
		tools: "",
		cover: "/images/strack-cover.png",
		images: ["/images/strack design.png"],
		behance: "www.behance.net",
		overview: [
			"Strack is a walking-tracker concept built on one idea: small daily steps add up. It turns a personal step goal into something you can share, compare and celebrate with the people around you.",
			"I designed the full flow, from onboarding and goal setting to the daily dashboard, leaderboard, community feed and friend discovery.",
		],
		details: [
			{
				title: "The challenge",
				text: "Most step counters show numbers and nothing else, so people lose interest within a few weeks. I wanted a daily goal that felt encouraging, not like a chore.",
			},
			{
				title: "The approach",
				text: [
					"A single progress ring puts today's goal at the centre of the home screen, with steps to go, distance and calories close by.",
					"The leaderboard, activity feed and friends list add a social layer, so progress is something you can share and be cheered on for.",
				],
			},
			{
				title: "The outcome",
				text: "A calm, consistent green interface where the daily goal is always the focus, and a flow that gets someone from install to their first walk in a few taps.",
			},
		],
	},
	// Bebely
	{
		id: "bebely",
		cls: "p3",
		n: "03",
		name: "Bebely",
		cat: "E-commerce",
		desc: "Everything little ones need, all in one place.",
		role: "UX Designer",
		year: "2025",
		tools: "Figma",
		cover: "images/Bebely-cover.png",
		images: ["/images/bebely design.png", "/images/bebely-signup-desktop.png"],
		behance: "www.behance.net",
		overview: [
			"Bebely is an e-commerce platform that brings baby essentials together in one convenient place. From clothing and toys to feeding products, skincare and baby food, it helps parents find the things their little ones need without the hassle of shopping across multiple stores.",
			"I designed the shopping experience from account creation and product discovery to product details and checkout, focusing on making each step clear, convenient and reassuring for parents.",
		],
		details: [
			{
				title: "The challenge",
				text: "Finding the right products for a baby can mean navigating different stores, comparing options and searching for reliable product information. I wanted to make the process easier by creating a single shopping experience where parents could discover and purchase everyday baby essentials with less effort.",
			},
			{
				title: "The approach",
				text: [
					"I created a clear category-based homepage that helps parents explore nursery, feeding, skincare, apparel and toys, supported by search, product recommendations and promotional offers to make product discovery easier.",
					"Product detail pages bring together images, prices, ratings, reviews and useful product information. I also designed a straightforward sign-up flow and checkout experience with multiple payment options to help parents move from browsing to purchasing with confidence.",
				],
			},
		],
		conclusion: {
			title: "The outcome",
			text: "A warm, easy-to-navigate shopping experience that brings baby essentials together in one place. With clear product information, organized categories and a simple checkout flow, Bebely makes shopping for little ones feel more convenient and less overwhelming.",
		},
	},
	// Dudu Arts Gallery
	{
		id: "dudu",
		cls: "p4",
		n: "04",
		name: "Dudu Arts Gallery",
		cat: "Art & exhibition",
		desc: "A digital space where contemporary African art takes centre stage.",
		role: "UI/UX Designer",
		year: "",
		tools: "Figma",
		cover: "/images/dudu-cover.png",
		images: [],
		behance: "",
		overview: [
			"Dudu Arts Gallery is a digital home for contemporary African art, bringing artworks, exhibitions and artists together in one immersive experience. The goal was to create a space where visitors could explore the richness of African creativity and connect with art beyond the physical gallery.",
			"I designed the landing page and gallery page, shaping how visitors discover featured artworks, explore collections, learn about artists and browse art through a visually engaging experience.",
		],
		details: [
			{
				title: "The challenge",
				text: "An online art gallery should feel as expressive as the work it showcases. I wanted to create a digital experience that celebrates the diversity of contemporary African art while making it easy for visitors to discover artworks, navigate collections and explore the gallery.",
			},
			{
				title: "The approach",
				text: [
					"I used a dark, elegant visual direction with warm gold accents to create a distinctive gallery identity while allowing the colourful artworks to stand out. The landing page introduces the gallery through a bold hero section, featured artworks, exhibition highlights and artist profiles.",
					"The dedicated gallery page organizes artworks into a visual grid with category filters, helping visitors browse different pieces more intuitively. Consistent navigation connects the pages and makes moving between the gallery's content feel seamless.",
				],
			},
		],
		conclusion: {
			title: "The outcome",
			text: "A visually rich digital gallery that puts contemporary African art at the forefront. The combination of immersive imagery, clear navigation and organized artwork discovery creates a more engaging way for visitors to explore art, exhibitions and the artists behind them.",
		},
	},

	// Abode
	{
		id: "abode",
		cls: "p5",
		n: "05",
		name: "Abode",
		cat: "HOME SERVICES",
		desc: "Connecting homeowners with trusted artisans.",
		role: "UI/UX Designer",
		year: "2026",
		tools: "Figma",
		cover: "/images/abode-cover.png",
		images: [],
		behance: "",

		overview: {
			title: "Finding the right hands for every home.",
			text: "Abode is a home services marketplace designed to make it easier for homeowners to discover skilled artisans, agree on jobs, and manage payments with confidence. It brings trust and transparency into the process, from finding a professional to confirming that a job is complete.",
		},

		details: [
			{
				title: "The problem",
				text: "Finding reliable artisans can be difficult. Homeowners may struggle to verify skills, communicate job expectations, and feel confident paying for work before it is completed. Artisans also need a reliable way to showcase their skills and connect with people who need their services.",
			},
			{
				title: "The approach",
				text: "I designed Abode around the needs of both homeowners and artisans. Homeowners can explore available professionals, review their profiles, and find people suited to their jobs. Artisans can create profiles, select their skill, complete identity verification, and browse relevant job opportunities.",
			},
			{
				title: "Building trust into payments",
				text: "Abode introduces an escrow-based payment flow to help protect both parties. Payment is held until the homeowner confirms that the work has been completed, followed by a 24-hour delay before release. This approach is designed to provide an additional layer of confidence throughout the transaction.",
			},
			{
				title: "Verification and dispute resolution",
				text: "Artisans submit their identity details for administrative review before approval. An admin dashboard supports verification decisions and dispute management, helping the platform maintain accountability and address issues when a job does not go as expected.",
			},
			{
				title: "Designing for clarity",
				text: "The interface uses a deep teal visual identity to communicate reliability and professionalism. I focused on clear navigation, straightforward onboarding, useful job-feed states, and actionable feedback so that homeowners and artisans can understand what to do at every stage.",
			},
		],

		conclusion: {
			title: "A more confident way to get things done.",
			text: "Abode explores how thoughtful product design can make home services more accessible, transparent, and dependable. By bringing discovery, verification, job management, and secure payments into one experience, the platform aims to create a better process for both homeowners and artisans.",
		},
	},
];

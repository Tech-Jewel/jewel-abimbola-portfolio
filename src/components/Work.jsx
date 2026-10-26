import React, { useState, useEffect, useRef } from "react";
import { reduce } from "../lib/motion";
const h = React.createElement;
import { PROJECTS } from "../data/content";
import { Phone } from "./Phone";
import Tilt from "./Tilt";
import Info from "./Info";

const MOCK = {
	fluxx: () =>
		h(
			React.Fragment,
			null,
			h(Phone, { lines: 4, cards: 2 }),
			h(Phone, { lines: 3, check: 1 }),
		),
	strack: () => h(Phone, { lines: 3, check: 1 }),
	bebely: () =>
		h(
			"div",
			{ className: "br", "aria-hidden": "true" },
			h("div", { className: "tb" }, h("i"), h("i"), h("i")),
			h(
				"div",
				{ className: "bd" },
				h(
					"div",
					null,
					h("div", { className: "ln t" }),
					h("div", { className: "ln", style: { marginTop: 10 } }),
					h("div", { className: "ln s", style: { marginTop: 8 } }),
				),
				h("div", { className: "cd" }),
				h("div", { className: "cd o" }),
				h("div", { className: "cd", style: { background: "var(--olive)" } }),
			),
		),
	abode: () =>
		h(
			"div",
			{ className: "ph", "aria-hidden": "true" },
			h(
				"svg",
				{
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: 1.6,
					strokeLinecap: "round",
					strokeLinejoin: "round",
				},
				h("rect", { x: 3, y: 4, width: 18, height: 16, rx: 2 }),
				h("circle", { cx: 9, cy: 10, r: 1.8 }),
				h("path", { d: "m21 16-5-5-8 9" }),
			),
			h("span", { className: "mono" }, "Image placeholder"),
		),
	safemind: () =>
		h(
			React.Fragment,
			null,
			h(Phone, { lines: 4, cards: 2 }),
			h(Phone, { lines: 3, check: 1 }),
		),
};
// Case-study body: image → text → image → text → image → … → conclusion.
function PanelBody({ P }) {
	const imgs =
		P.images && P.images.length ? P.images : P.cover ? [P.cover] : [];
	const img = (m, i) =>
		h("img", {
			key: "i" + i,
			className: "gi",
			src: m.src || m,
			alt: m.alt || P.name + " screen " + (i + 1),
			loading: "lazy",
		});
	const paras = (a) =>
		(Array.isArray(a) ? a : [a])
			.filter(Boolean)
			.map((t, i) => h("p", { key: i, className: "pp" }, t));
	const block = (b, k) =>
		h(
			"div",
			{ key: k, className: "ps" },
			b.title ? h("h3", { className: "mono" }, b.title) : null,
			paras(b.text),
		);
	const hasVideo = P.embed || P.fullVideo || P.video;
	const blocks = [
		...(P.overview && P.overview.length
			? [{ title: "Overview", text: P.overview }]
			: []),
		...(P.details || []),
	];
	const flow = [];
	for (let i = 0; i < Math.max(imgs.length, blocks.length); i++) {
		if (imgs[i]) flow.push(img(imgs[i], i));
		if (blocks[i]) flow.push(block(blocks[i], "b" + i));
	}
	const c = P.conclusion;
	return h(
		React.Fragment,
		null,
		hasVideo
			? P.embed
				? h("iframe", {
						className: "gv",
						src: P.embed,
						title: P.name + " demo video",
						loading: "lazy",
						allow:
							"accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture",
						allowFullScreen: true,
					})
				: h("video", {
						className: "gv",
						src: P.fullVideo || P.video,
						poster: P.poster,
						controls: true,
						playsInline: true,
						preload: "none",
					})
			: null,
		!imgs.length && !hasVideo
			? h(
					"div",
					null,
					h("div", { className: "mk " + P.cls }, (MOCK[P.id] || MOCK.abode)()),
					h(
						"p",
						{ className: "mono nt" },
						P.note || "Case-study screens and write-up coming soon.",
					),
				)
			: null,
		flow,
		c
			? block(
					typeof c === "string" || Array.isArray(c)
						? { title: "Conclusion", text: c }
						: c,
					"end",
				)
			: null,
	);
}

// Shows an error inside the panel instead of blanking the whole page.
class Safe extends React.Component {
	constructor(p) {
		super(p);
		this.state = { e: null };
	}
	static getDerivedStateFromError(e) {
		return { e };
	}
	render() {
		return this.state.e
			? h(
					"pre",
					{
						style: {
							padding: 20,
							whiteSpace: "pre-wrap",
							color: "#b00",
							font: "14px/1.5 monospace",
						},
					},
					"Panel error: " + String(this.state.e),
				)
			: this.props.children;
	}
}

export default function Work() {
	const tr = useRef(null),
		cu = useRef(null),
		pr = useRef(null),
		cb = useRef(null),
		back = useRef(null),
		d = useRef({ on: false, x: 0, l: 0, moved: false });
	const [p, setP] = useState(0),
		[c, setC] = useState(0),
		[open, setOpen] = useState(null),
		last = useRef(0);
	const N = PROJECTS.length,
		NAMES = PROJECTS.map((p) => p.name);
	if (open != null) last.current = open;
	const P = PROJECTS[last.current];
	useEffect(() => {
		const e = tr.current;
		const f = () => {
			const m = e.scrollWidth - e.clientWidth;
			setP(m > 0 ? e.scrollLeft / m : 0);
			const mid = e.scrollLeft + e.clientWidth * 0.4;
			let best = 0,
				bd = 1e9;
			[...e.children].forEach((k, i) => {
				const dd = (k.offsetLeft + k.offsetWidth / 2 - mid) / e.clientWidth;
				k.style.setProperty(
					"--d",
					Math.max(-1.5, Math.min(1.5, dd)).toFixed(3),
				);
				k.style.setProperty(
					"--a",
					Math.max(0, 1 - Math.abs(dd) * 0.9).toFixed(3),
				);
				if (Math.abs(dd) < bd) {
					bd = Math.abs(dd);
					best = i;
				}
			});
			setC(best);
		};
		f();
		e.addEventListener("scroll", f, { passive: true });
		addEventListener("resize", f);
		return () => {
			e.removeEventListener("scroll", f);
			removeEventListener("resize", f);
		};
	}, []);
	const close = () => {
		pr.current &&
			pr.current.querySelectorAll("video").forEach((v) => v.pause());
		setOpen(null);
	};
	useEffect(() => {
		if (open == null) return;
		back.current = document.activeElement;
		document.body.style.overflow = "hidden";
		setTimeout(() => cb.current && cb.current.focus(), 50);
		const k = (e) => {
			if (e.key === "Escape") close();
			if (e.key === "Tab") {
				const q = [...pr.current.querySelectorAll("a,button")];
				if (!q.length) return;
				const a = q[0],
					z = q[q.length - 1];
				if (e.shiftKey && document.activeElement === a) {
					e.preventDefault();
					z.focus();
				} else if (!e.shiftKey && document.activeElement === z) {
					e.preventDefault();
					a.focus();
				}
			}
		};
		document.addEventListener("keydown", k);
		return () => {
			document.removeEventListener("keydown", k);
			document.body.style.overflow = "";
			back.current && back.current.focus && back.current.focus();
		};
	}, [open]);
	const go = (k) =>
		tr.current.scrollBy({
			left: k * tr.current.clientWidth * 0.6,
			behavior: reduce ? "auto" : "smooth",
		});
	const dn = (e) => {
		if (e.pointerType !== "mouse") return;
		d.current = {
			on: true,
			x: e.clientX,
			l: tr.current.scrollLeft,
			moved: false,
		};
		tr.current.classList.add("drag");
		cu.current.classList.add("dn");
	};
	const mv = (e) => {
		if (e.pointerType !== "mouse") return;
		const q = cu.current;
		q.style.transform = `translate(${e.clientX - 39}px,${e.clientY - 39}px)`;
		q.classList.add("on");
		const t =
			!d.current.on && e.target.closest && e.target.closest(".pc")
				? "View"
				: "Drag";
		if (q.textContent !== t) q.textContent = t;
		if (d.current.on) {
			if (Math.abs(e.clientX - d.current.x) > 6) d.current.moved = true;
			tr.current.scrollLeft = d.current.l - (e.clientX - d.current.x);
		}
	};
	const up = () => {
		d.current.on = false;
		tr.current.classList.remove("drag");
		cu.current.classList.remove("dn");
	};
	const lv = () => {
		up();
		cu.current.classList.remove("on");
	};
	const G = (n) => h("b", { className: "gn", "aria-hidden": "true" }, n);
	const card = (x, i) =>
		h(
			"article",
			{
				key: x.id,
				className: "p pc " + x.cls,
				onClick: () => {
					if (!d.current.moved) setOpen(i);
				},
			},
			G(x.n),
			h(Info, {
				n: x.n,
				name: x.name,
				cat: x.cat,
				desc: x.desc,
				onOpen: () => setOpen(i),
			}),
			x.cover
				? h("img", { className: "cov", src: x.cover, alt: x.name + " cover" })
				: h(Tilt, null, (MOCK[x.id] || MOCK.abode)()),
		);
	const step = (k) =>
		setOpen((last.current + k + PROJECTS.length) % PROJECTS.length);
	return h(
		"section",
		{
			id: "work",
			style: {
				paddingTop: "clamp(24px,4vw,56px)",
				paddingBottom: "clamp(56px,7vw,100px)",
			},
		},
		h("div", { className: "cur mono", "aria-hidden": "true", ref: cu }, "Drag"),
		h(
			"div",
			{ className: "wrap" },
			h(
				"div",
				{ className: "sh" },
				h("span", { className: "mono lab" }, "Selected work"),
				h("h2", null, "Problems worth understanding first."),
				h(
					"p",
					null,
					"Concepts about money, movement, belonging and safety, shaped around the people who would use them.",
				),
			),
			h(
				"p",
				{ className: "mono hint" },
				"Drag, swipe or use the arrows · open a project to read its case study",
			),
		),
		h(
			"div",
			{
				className: "track",
				ref: tr,
				tabIndex: 0,
				role: "region",
				"aria-label": "Selected projects, scroll horizontally",
				onPointerDown: dn,
				onPointerMove: mv,
				onPointerUp: up,
				onPointerLeave: lv,
				onPointerCancel: up,
			},
			PROJECTS.map((x, i) => card(x, i)),
		),
		h(
			"div",
			{ className: "wrap" },
			h(
				"div",
				{ className: "ctl" },
				h("span", { className: "now", key: c }, NAMES[c]),
				h(
					"div",
					{ className: "pg", "aria-hidden": "true" },
					h("i", { style: { "--p": Math.max(0.08, (c + 1) / N) } }),
				),
				h("span", { className: "mono" }, "0" + (c + 1) + " / 0" + N),
				h(
					"button",
					{
						className: "arw",
						"aria-label": "Previous projects",
						disabled: p < 0.01,
						onClick: () => go(-1),
					},
					"←",
				),
				h(
					"button",
					{
						className: "arw",
						"aria-label": "Next projects",
						disabled: p > 0.99,
						onClick: () => go(1),
					},
					"→",
				),
			),
		),
		h(
			"div",
			{
				className: "ov" + (open != null ? " on" : ""),
				"aria-hidden": open == null,
				onClick: (e) => {
					if (e.target === e.currentTarget) close();
				},
			},
			h(
				"div",
				{
					className: "pn",
					role: "dialog",
					"aria-modal": "true",
					"aria-labelledby": "pt",
					ref: pr,
				},
				h(
					"div",
					{ className: "ph0" },
					h("span", { className: "mono" }, P.cat),
					h(
						"button",
						{
							className: "arw",
							ref: cb,
							"aria-label": "Close case study",
							onClick: close,
						},
						"✕",
					),
				),
				h("h2", { id: "pt" }, P.name),
				h("p", { className: "lead" }, P.desc),
				[
					["Role", P.role],
					["Year", P.year],
					["Tools", P.tools],
				].some((x) => x[1])
					? h(
							"dl",
							{ className: "meta" },
							[
								["Role", P.role],
								["Year", P.year],
								["Tools", P.tools],
							]
								.filter((x) => x[1])
								.map((x) =>
									h(
										"div",
										{ key: x[0] },
										h("dt", { className: "mono" }, x[0]),
										h("dd", null, x[1]),
									),
								),
						)
					: null,
				h(Safe, { key: P.id }, h(PanelBody, { P })),
				P.behance
					? h(
							"a",
							{
								className: "btn pri",
								href: P.behance,
								target: "_blank",
								rel: "noopener noreferrer",
							},
							"Read the full case study on Behance",
							h("span", { className: "ar", "aria-hidden": "true" }, "↗"),
						)
					: null,
				h(
					"div",
					{ className: "pnav" },
					h(
						"button",
						{ className: "mono", onClick: () => step(-1) },
						"← Previous",
					),
					h("button", { className: "mono", onClick: () => step(1) }, "Next →"),
				),
			),
		),
	);
}

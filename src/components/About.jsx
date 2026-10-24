import React, { useState, useEffect, useRef } from "react";
const h = React.createElement;
import { PHOTO } from "../data/content";
import Reveal from "./Reveal";
import Edge from "./Edge";

export default function About() {
	return h(
		"section",
		{ id: "about" },
		h(Edge, { v: "swoop", color: "bg" }),
		h(
			"div",
			{ className: "wrap ab" },
			h(
				Reveal,
				{ className: "mono-art" },
				h(
					"svg",
					{
						viewBox: "0 0 400 400",
						...(PHOTO
							? { role: "img", "aria-label": "Portrait of Jewel Abimbola" }
							: { "aria-hidden": "true" }),
					},
					h("path", {
						d: "M200 30c80-10 160 50 160 140s-50 190-150 190S30 290 40 190 120 40 200 30Z",
						fill: "#D9A441",
					}),
					PHOTO
						? h(
								"g",
								null,
								h(
									"clipPath",
									{ id: "bl" },
									h("path", {
										d: "M200 30c80-10 160 50 160 140s-50 190-150 190S30 290 40 190 120 40 200 30Z",
									}),
								),
								h("image", {
									href: PHOTO,
									width: 400,
									height: 400,
									preserveAspectRatio: "xMidYMid slice",
									clipPath: "url(#bl)",
								}),
							)
						: null,
					h("circle", { cx: 320, cy: 90, r: 40, fill: "#8A927A" }),
					h("circle", { cx: 70, cy: 320, r: 16, fill: "#C65D2E" }),
				),
				PHOTO ? null : h("span", null, "JA"),
			),
			h(
				Reveal,
				{ className: "tx" },
				h(
					"span",
					{ className: "mono", style: { color: "var(--tangerine)" } },
					"About",
				),
				h("h2", null, "Curious about people, and the systems around them."),
				h(
					"p",
					null,
					"I’m Jewel, a Computer Science student at the University of Lagos with a deep interest in product design, UX research, and interaction design.",
				),
				h(
					"p",
					null,
					"I care about how information is organised, how people move through a product, and how choices are framed in everyday moments. I like asking questions first, so the design has something real to stand on.",
				),
				h(
					"div",
					{ className: "tg mono" },
					["Curiosity", "Empathy", "Research", "Systems thinking"].map((t) =>
						h("span", { key: t }, t),
					),
				),
			),
		),
	);
}

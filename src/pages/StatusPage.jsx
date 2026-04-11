import { useState } from "react";
import CodeBlock from "../components/CodeBlock";
import {
	getProfileStatus,
	locationSnippet,
	occupationSnippet,
} from "../lib/profileStatus";

export default function StatusPage() {
	const [showCode, setShowCode] = useState(false);
	const today = new Date();
	const { location, occupation } = getProfileStatus(today);

	const locationOutput = `${location}`;
	const occupationOutput = `${occupation}`;

	return (
		<section className="viewer">
			<div className="status-header">
				<h2>status</h2>
				<button
					type="button"
					className="status-toggle"
					onClick={() => setShowCode((value) => !value)}
				>
					{showCode ? ">> run" : "</> see code"}
				</button>
			</div>

			<h3>location</h3>
			{showCode ? (
				<CodeBlock language="javascript">{locationSnippet}</CodeBlock>
			) : (
				<p>
					<code>{locationOutput}</code>
				</p>
			)}

			<h3>occupation</h3>
			{showCode ? (
				<CodeBlock language="javascript">{occupationSnippet}</CodeBlock>
			) : (
				<p>
					<code>{occupationOutput}</code>
				</p>
			)}
		</section>
	);
}
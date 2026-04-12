import { useState } from "react"
import CodeBlock from "../components/CodeBlock"
import {
  getProfileStatus,
  locationSnippet,
  occupationSnippet,
} from "../lib/profileStatus"

export default function StatusPage() {
  const [showCode, setShowCode] = useState(false)
  const today = new Date()
  const { location, occupation } = getProfileStatus(today)

  const locationOutput = `${location}`
  const occupationOutput = `${occupation}`

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
        <CodeBlock language="javascript">
          {showCode ? occupationSnippet : occupationOutput}
        </CodeBlock>
      ) : (
        <p>
          <code>{occupationOutput}</code>
        </p>
      )}

      <div>
        <h3>currently into</h3>
        <ul>
            <li>building a personal website (this!)</li>
            <li>trying to replicate my friend's texting using local LLMs</li>
            <li>learning Japanese</li>
            <li>Pathfinder: Wrath of the Righteous</li>
            <li>my character Grog in a DND 5e campaign, who is a half-orc with high intellect and very low wisdom</li>
            <li>arknights</li>
            <li>trying to find a place in SF</li>
        </ul>
      </div>
    </section>
  )
}

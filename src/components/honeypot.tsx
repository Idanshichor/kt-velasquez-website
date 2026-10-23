// Hidden trap field for bots. People never see or reach it; form-filling bots fill every input they find.
// "botcheck" is also the field Web3Forms checks, so the fallback path is covered too.
export function Honeypot() {
  return (
    <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
      <label>
        Leave this empty
        <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" defaultValue="" />
      </label>
    </div>
  );
}

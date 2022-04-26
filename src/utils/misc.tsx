/**
 *
 * @description This function will take a text value and
 * the text value to highlight.
 *
 * @param text
 * @param highlight
 * @returns a span, where the requested parts are highlighted with <b> </b> tags.
 */
export function getHighlightedText(text: string, highlight: string) {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return (
    <span>
      {parts.map((part, i) => (
        <span
          key={i}
          style={
            part.toLowerCase() === highlight.toLowerCase()
              ? { fontWeight: 'bold' }
              : {}
          }
        >
          {part}
        </span>
      ))}
    </span>
  );
}

export const highlightSyntax = (text: string[]) => {
  const lines = text;
  console.log(lines);

  return lines.map((line, index) => {
    const keyValuePattern = /^([\w-]+)\s*:\s*(.+);?$/;

    if (line.trim().endsWith("{") || line.trim().endsWith("}")) {
      return (
        <span
          className="text-left border-none  text-bold text-yellow-200 whitespace-pre-wrap break-words"
          key={index}
          style={{
            outline: "none",
          }}
        >
          {line}
        </span>
      );
    }

    const match = keyValuePattern.exec(line.trim());

    if (match) {
      const [, key, value] = match;

      return (
        <div key={index}>
          <span
            className="text-left text-blue-400  border-none  whitespace-pre-wrap break-words"
            style={{
              outline: "none",
            }}
          >
            {key}
          </span>

          <span className="text-left text-white"> : </span>
          <span className="text-left text-green-500">{value}</span>
        </div>
      );
    }

    return (
      <span
        className="text-left"
        key={index}
        style={{
          fontFamily: "monospace",
        }}
      >
        {line}
      </span>
    );
  });
};

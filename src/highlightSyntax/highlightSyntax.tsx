import { AdminContentType } from "../Pages/Admin/displayFile/DisplayFile";
export const highlightSyntax = (
  text: string[],
  adminContent: AdminContentType | undefined
) => {
  const lines = text;

  return lines.map((line, index) => {
    let additionalsFromAdmin: string = "";
    if (adminContent && adminContent[index] != null) {
      additionalsFromAdmin = adminContent[index].replace(line, "");
      console.log(additionalsFromAdmin);
    }

    const keyValuePattern = /^([\w-]+)\s*:\s*(.+);?$/;

    if (line.trim().endsWith("{") || line.trim().endsWith("}")) {
      return (
        <span>
          <span
            className="text-left border-none  text-bold text-yellow-200 whitespace-pre-wrap break-words"
            key={index}
            style={{
              outline: "none",
            }}
          >
            {line}
          </span>
          {adminContent && adminContent[index] != null ? (
            <span className="text-left border-none ml-8 text-bold text-red-600 whitespace-pre-wrap break-words">
              ADMIN: {additionalsFromAdmin}
            </span>
          ) : null}
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
          {adminContent && adminContent[index] != null ? (
            <span className="text-left border-none ml-8 text-bold text-red-600 whitespace-pre-wrap break-words">
              ADMIN: {additionalsFromAdmin}
            </span>
          ) : null}
        </div>
      );
    }

    return (
      <span
        className="text-left border-none text-base text-bold whitespace-pre-wrap break-words"
        key={index}
        style={{
          fontFamily: "monospace",
        }}
      >
        {line}
        {adminContent && adminContent[index] != null ? (
          <span className="text-left border-none ml-8 text-bold text-red-600 whitespace-pre-wrap break-words">
            ADMIN: {additionalsFromAdmin}
          </span>
        ) : null}
      </span>
    );
  });
};

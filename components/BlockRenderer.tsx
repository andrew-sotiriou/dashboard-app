import { Block } from '../types/dashboard';

type Props = {
  block: Block;
};

export function BlockRenderer({ block }: Props) {
  switch (block.type) {
    case 'text':
      return <div>{block.content}</div>;

    case 'table':
      return (
        <table>
          <tbody>
            {block.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );

    case 'chart':
      return <pre>{JSON.stringify(block.data, null, 2)}</pre>;

    case 'image':
      return <img src={block.url} />;
  }

  // 🧠 Exhaustiveness check (critical line)
  const _exhaustiveCheck: never = block;
  return null;
}

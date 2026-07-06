import type { TableBlock as TableBlockType } from '../../types/dashboard';

type Props = {
  block: TableBlockType;
};

export function TableBlock({ block }: Props) {
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
}

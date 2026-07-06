import { Block } from '../types/dashboard';
import { TextBlock } from './blocks/textBlock';
import { TableBlock } from './blocks/tableBlock';
import { ChartBlock } from './blocks/chartBlock';
import { ImageBlock } from './blocks/imageBlock';

type Props = {
  block: Block;
};

export function BlockRenderer({ block }: Props) {
  switch (block.type) {
    case 'text':
      return <TextBlock block={block} />;

    case 'table':
      return <TableBlock block={block} />;

    case 'chart':
      return <ChartBlock block={block} />;

    case 'image':
      return <ImageBlock block={block} />;
  }

  // 🧠 Exhaustiveness check (critical line)
  const _exhaustiveCheck: never = block;
  return null;
}

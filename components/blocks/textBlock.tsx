import type { TextBlock as TextBlockType } from '../../types/dashboard';

type Props = {
  block: TextBlockType;
};

export function TextBlock({ block }: Props) {
  return <div>{block.content}</div>;
}

import type { ChartBlock as ChartBlockType } from '../../types/dashboard';

type Props = {
  block: ChartBlockType;
};

export function ChartBlock({ block }: Props) {
  return <pre>{JSON.stringify(block.data, null, 2)}</pre>;
}

// Base shared structure for all blocks
type BaseBlock = {
  id: string;
};

// TEXT BLOCK
export type TextBlock = BaseBlock & {
  type: 'text';
  content: string;
};

// TABLE BLOCK
export type TableBlock = BaseBlock & {
  type: 'table';
  rows: string[][];
};

// CHART BLOCK
export type ChartBlock = BaseBlock & {
  type: 'chart';
  data: number[];
};

// UNION OF ALL BLOCKS
export type Block = TextBlock | TableBlock | ChartBlock;

// DASHBOARD MODEL
export type Dashboard = {
  id: string;
  title: string;
  blocks: Block[];
};

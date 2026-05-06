import type { Dashboard } from '../types/dashboard';

const dashboard: Dashboard = {
  id: '1',
  title: 'My Dashboard',
  blocks: [
    {
      id: 'b1',
      type: 'text',
      content: 'Hello world',
    },
    {
      id: 'b2',
      type: 'table',
      rows: [
        ['A', 'B'],
        ['C', 'D'],
      ],
    },
    {
      id: 'b3',
      type: 'chart',
      data: [10, 20, 30],
    },
  ],
};

console.log(dashboard);

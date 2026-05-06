import type { Dashboard } from '../types/dashboard';

export const mockDashboard: Dashboard = {
  id: 'dash_1',
  title: 'My First Dashboard',
  blocks: [
    {
      id: 'b1',
      type: 'text',
      content: 'Welcome to your dashboard',
    },
    {
      id: 'b2',
      type: 'table',
      rows: [
        ['Name', 'Score'],
        ['Alice', '90'],
        ['Bob', '85'],
      ],
    },
    {
      id: 'b3',
      type: 'chart',
      data: [10, 20, 15, 30],
    },
  ],
};

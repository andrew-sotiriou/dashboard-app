import { BlockRenderer } from '../../components/BlockRenderer';
import { mockDashboard } from '../../lib/mockData';

export default function Home() {
  const { title, blocks } = mockDashboard;
  return (
    <div>
      <h1>{title}</h1>
      {blocks.map((block) => (
        <BlockRenderer key={block.id} block={block} />
      ))}
    </div>
  );
}

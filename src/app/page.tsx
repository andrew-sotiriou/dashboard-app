import { BlockRenderer } from '../../components/BlockRenderer';
import { mockDashboard } from '../../lib/mockData';

export default function Home() {
  return (
    <div>
      <h1>{mockDashboard.title}</h1>
      {mockDashboard.blocks.map((block) => (
        <BlockRenderer key={block.id} block={block} />
      ))}
    </div>
  );
}

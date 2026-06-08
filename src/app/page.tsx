import { BlockRenderer } from '../../components/BlockRenderer';
import { Dashboard } from '../../types/dashboard';
// import { Block } from '../../types/dashboard';

const mockDashboard: Dashboard = {
  id: '1',
  title: 'My Dashboard',
  blocks: [
    {
      id: 'b1',
      type: 'text',
      content: 'Hello world from a text block!',
    },
    {
      id: 'b2',
      type: 'table',
      rows: [
        ['Name', 'Age'],
        ['Alice', '25'],
        ['Bob', '30'],
      ],
    },
    {
      id: 'b3',
      type: 'chart',
      data: [10, 20, 30],
    },
  ],
};

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

// import Image from 'next/image';
// import styles from './page.module.css';

// export default function Home() {
//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className={styles.intro}>
//           <h1>To get started, edit the page.tsx file.</h1>
//           <p>
//             Looking for a starting point or more instructions? Head over to{' '}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Templates
//             </a>{' '}
//             or the{' '}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Learning
//             </a>{' '}
//             center.
//           </p>
//         </div>
//       </main>
//     </div>
//   );
// }

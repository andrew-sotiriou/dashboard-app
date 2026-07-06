import type { ImageBlock as ImageBlockType } from '../../types/dashboard';
import Image from 'next/image';

type Props = {
  block: ImageBlockType;
};

export function ImageBlock({ block }: Props) {
  return (
    <Image
      src={block.url}
      alt=""
      width={400}
      height={300}
      loading="eager"
      priority
    />
  );
}

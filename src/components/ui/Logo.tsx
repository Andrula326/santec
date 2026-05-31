import Image from 'next/image';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/santec.logo.black.webp"
        alt="Santec Group"
        width={160}
        height={48}
        className="h-12 w-auto"
        priority
      />
    </div>
  );
}

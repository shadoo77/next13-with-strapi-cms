import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About page',
  description: 'About description'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

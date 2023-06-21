import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance page',
  description: 'Maintenance description'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

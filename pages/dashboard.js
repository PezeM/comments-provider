import { useAuth } from '@/lib/auth';
import { EmptyDashboardState } from '@/components/EmptyDashboardState';
import { SiteTableSkeleton } from '@/components/Skeletons/SiteTableSkeleton';
import { DashboardContainer } from '@/components/DashboardContainer';
import { fetcher } from '@/utils/fetcher';
import useSWR from 'swr';

export default function Dashboard() {
  const auth = useAuth();
  const { data } = useSWR('/api/sites', fetcher);

  console.log('data', data);

  if (!data) {
    return (
      <DashboardContainer>
        <SiteTableSkeleton />
      </DashboardContainer>
    );
  }

  return (
    <DashboardContainer>
      <EmptyDashboardState />
    </DashboardContainer>
  );
}

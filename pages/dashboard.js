import { useAuth } from '@/lib/auth';
import { EmptyDashboardState } from '@/components/EmptyDashboardState';
import { SiteTableSkeleton } from '@/components/Skeletons/SiteTableSkeleton';
import { DashboardContainer } from '@/components/DashboardContainer';

export default function Dashboard() {
  const auth = useAuth();

  if (!auth.user) {
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

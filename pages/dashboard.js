import { useAuth } from '@/lib/auth';
import { EmptyDashboardState } from '@/components/EmptyDashboardState';
import { SiteTableSkeleton } from '@/components/Skeletons/SiteTableSkeleton';
import { DashboardContainer } from '@/components/DashboardContainer';
import { fetcher } from '@/utils/fetcher';
import useSWR from 'swr';
import { SiteTable } from '@/components/SiteTable';
import { SiteTableHeader } from '@/components/SiteTableHeader';
import { UpgradeRoleDashboardState } from '@/components/UpgradeRoleDashboardState';

export default function Dashboard() {
  const { user } = useAuth();
  const { data } = useSWR(user ? ['/api/sites', user.token] : null, fetcher);
  const isPaidAccount = user?.stripeRole;

  if (!data) {
    return (
      <DashboardContainer>
        <SiteTableHeader />
        <SiteTableSkeleton />
      </DashboardContainer>
    );
  }

  if (data.sites.length) {
    return (
      <DashboardContainer>
        <SiteTableHeader />
        <SiteTable sites={data.sites} />
      </DashboardContainer>
    );
  }

  console.log(user.stripeRole);

  return (
    <DashboardContainer>
      <SiteTableHeader isPaidAccount={isPaidAccount} />
      {isPaidAccount ? <EmptyDashboardState /> : <UpgradeRoleDashboardState />}
    </DashboardContainer>
  );
}

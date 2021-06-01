import { useAuth } from '@/lib/auth';
import { SiteTableSkeleton } from '@/components/Skeletons/SiteTableSkeleton';
import { DashboardContainer } from '@/components/DashboardContainer';
import { fetcher } from '@/utils/fetcher';
import useSWR from 'swr';
import { FeedbackTable } from '@/components/Feedback/FeedbackTable';
import { FeedbackTableHeader } from '@/components/Feedback/FeedbackTableHeader';
import { FeedbackEmptyState } from '@/components/Feedback/FeedbackEmptyState';
import { Page } from '@/components/Page';

function MyFeedback() {
  const { user } = useAuth();
  const { data } = useSWR(user ? ['/api/feedback', user.token] : null, fetcher);

  if (!data) {
    return (
      <DashboardContainer>
        <FeedbackTableHeader />
        <SiteTableSkeleton />
      </DashboardContainer>
    );
  }

  return (
    <DashboardContainer>
      <FeedbackTableHeader />
      {data.feedback.length ? <FeedbackTable feedbacks={data.feedback} /> : <FeedbackEmptyState />}
    </DashboardContainer>
  );
}

export default function MyFeedbackPage() {
  return (
    <Page name={'My Feedback'} path={'/feedback'}>
      <MyFeedback />
    </Page>
  );
}

import {useAuth} from '@/lib/auth';
import {EmptyDashboardState} from "@/components/EmptyDashboardState";

export default function Dashboard() {
    const auth = useAuth();

    if (!auth.user) {
        return 'Loading';
    }

    return <EmptyDashboardState />
}

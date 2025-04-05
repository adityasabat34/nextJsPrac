import UserAnalytics from "path/to/UserAnalytics";
import RevenueMetrics from "path/to/RevenueMetrics";
import Notification from "path/to/Notification";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <UserAnalytics />
      <RevenueMetrics />
      <Notification />
    </div>
  );
}

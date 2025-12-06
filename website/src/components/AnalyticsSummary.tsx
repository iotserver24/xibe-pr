import { useState, useEffect } from 'react';
import { Users, FileText, TrendingUp, Clock, Activity } from 'lucide-react';

interface AnalyticsSummaryData {
  global: {
    totalUsers: number;
    totalReviews: number;
    recentReviews: number;
  };
  webhooks: {
    successRate: number;
  };
  bot: {
    status: string;
    uptime: number;
  };
}

const AnalyticsSummary = () => {
  const [analytics, setAnalytics] = useState<AnalyticsSummaryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await fetch('/api/analytics/dashboard');
        const data = await response.json();
        
        if (data.success) {
          setAnalytics(data.data);
        } else {
          setError(data.error || 'Failed to fetch analytics');
        }
      } catch (err) {
        setError('Failed to connect to analytics API');
        console.error('Analytics fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
    const interval = setInterval(fetchAnalytics, 60000); // Refresh every minute

    return () => clearInterval(interval);
  }, []);

  const formatUptime = (seconds: number) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    
    if (days > 0) return `${days}d ${hours}h`;
    if (hours > 0) return `${hours}h`;
    return 'Active';
  };

  if (loading) {
    return (
      <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-500"></div>
          <span className="ml-2 text-gray-300">Loading analytics...</span>
        </div>
      </div>
    );
  }

  if (error || !analytics) {
    return (
      <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
        <div className="text-center">
          <Activity className="w-8 h-8 text-gray-500 mx-auto mb-2" />
          <p className="text-gray-400">Analytics temporarily unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Live Analytics</h3>
        <div className={`flex items-center space-x-2 ${analytics.bot.status === 'running' ? 'text-green-400' : 'text-red-400'}`}>
          <div className={`w-2 h-2 rounded-full ${analytics.bot.status === 'running' ? 'bg-green-400' : 'bg-red-400'}`}></div>
          <span className="text-sm">{analytics.bot.status}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Users */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Users className="w-5 h-5 text-blue-400" />
          </div>
          <div className="text-2xl font-bold text-white">{analytics.global.totalUsers}</div>
          <div className="text-xs text-gray-400">Total Users</div>
        </div>

        {/* Total Reviews */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <FileText className="w-5 h-5 text-green-400" />
          </div>
          <div className="text-2xl font-bold text-white">{analytics.global.totalReviews}</div>
          <div className="text-xs text-gray-400">Reviews</div>
        </div>

        {/* Success Rate */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <TrendingUp className="w-5 h-5 text-purple-400" />
          </div>
          <div className="text-2xl font-bold text-white">{analytics.webhooks.successRate}%</div>
          <div className="text-xs text-gray-400">Success Rate</div>
        </div>

        {/* Uptime */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Clock className="w-5 h-5 text-orange-400" />
          </div>
          <div className="text-2xl font-bold text-white">{formatUptime(analytics.bot.uptime)}</div>
          <div className="text-xs text-gray-400">Uptime</div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-700">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Recent Activity</span>
          <span className="text-white font-medium">{analytics.global.recentReviews} reviews today</span>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSummary;

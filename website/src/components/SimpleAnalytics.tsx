import { useState, useEffect } from 'react';
import { FileText, Activity, Users, TrendingUp } from 'lucide-react';
import { api } from '../lib/api';

interface SimpleAnalyticsData {
  totalReviews: number;
  totalUsers: number;
  successRate: number;
  botStatus: string;
  lastUpdated: string;
}

const SimpleAnalytics = () => {
  const [analytics, setAnalytics] = useState<SimpleAnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const data = await api.getPublicAnalytics();
        setAnalytics(data);
      } catch (err) {
        setError('Failed to fetch analytics');
        console.error('Analytics fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
    const interval = setInterval(fetchAnalytics, 30000); // Refresh every 30 seconds

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-500"></div>
          <span className="ml-2 text-gray-300">Loading...</span>
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
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-white mb-2">Live Statistics</h3>
        <p className="text-gray-400 text-sm">Real-time metrics from our AI code review system</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Reviews */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-3">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
              <FileText className="w-6 h-6 text-green-400" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white mb-1">{analytics.totalReviews.toLocaleString()}</div>
          <div className="text-sm text-gray-400">Reviews Completed</div>
        </div>

        {/* Total Users */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-3">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white mb-1">{analytics.totalUsers.toLocaleString()}</div>
          <div className="text-sm text-gray-400">Active Users</div>
        </div>

        {/* Success Rate */}
        <div className="text-center sm:col-span-2 lg:col-span-1">
          <div className="flex items-center justify-center mb-3">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-400" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white mb-1">{analytics.successRate}%</div>
          <div className="text-sm text-gray-400">Success Rate</div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-700">
        <div className="text-center">
          <p className="text-xs text-gray-500">
            Data updates every 30 seconds • Powered by AI
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimpleAnalytics;

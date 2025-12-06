import { useState, useEffect } from 'react';
import { Users, FileText, Clock, TrendingUp, Activity, Lock, Unlock, X } from 'lucide-react';

interface AnalyticsData {
  global: {
    totalUsers: number;
    totalReviews: number;
    recentReviews: number;
  };
  webhooks: {
    total: number;
    completed: number;
    error: number;
    ignored: number;
    processing: number;
    successRate: number;
  };
  recentActivity: Array<{
    id: string;
    timestamp: string;
    repository: string;
    pullRequest: number;
    user: string;
    model: string;
    processingTime: number;
  }>;
  bot: {
    status: string;
    uptime: number;
    models: {
      analysis: string;
      comment: string;
    };
  };
}

const Analytics = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [adminKeyInput, setAdminKeyInput] = useState('');

  const checkAdmin = () => {
    const key = localStorage.getItem('xibe_admin_key');
    setIsAdmin(!!key);
    return key;
  };

  const handleLogin = () => {
    if (adminKeyInput.trim()) {
      localStorage.setItem('xibe_admin_key', adminKeyInput.trim());
      setIsAdmin(true);
      setShowLogin(false);
      window.location.reload(); // Reload to fetch fresh data with new key
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('xibe_admin_key');
    setIsAdmin(false);
    window.location.reload();
  };

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const adminKey = localStorage.getItem('xibe_admin_key');
        const headers: Record<string, string> = adminKey ? { 'x-admin-key': adminKey } : {};

        const response = await fetch('/api/analytics/dashboard', { headers });
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

    checkAdmin();
    fetchAnalytics();
    const interval = setInterval(fetchAnalytics, 2000); // Refresh every 2 seconds for live updates

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading analytics...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Activity className="w-6 h-6 text-red-500" />
          </div>
          <p className="text-red-300 mb-4">Error loading analytics</p>
          <p className="text-gray-400 text-sm">{error}</p>
        </div>
      </div>
    );
  }

  if (!analytics) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-gray-300">No analytics data available</p>
      </div>
    );
  }

  const formatUptime = (seconds: number) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    if (days > 0) return `${days}d ${hours}h ${minutes}m`;
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  };

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8 relative">
      {/* Admin Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 w-96 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">Admin Access</h3>
              <button onClick={() => setShowLogin(false)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-400 mb-4 text-sm">Enter the Admin Key to view detailed logs and repository information.</p>
            <input
              type="password"
              value={adminKeyInput}
              onChange={(e) => setAdminKeyInput(e.target.value)}
              placeholder="Enter Admin Key"
              className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded mb-4 focus:outline-none focus:border-blue-500"
              onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            />
            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Access Dashboard
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 relative">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            Analytics Dashboard
            <span className="relative flex h-3 w-3 items-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </h1>
          <p className="text-gray-300">
            Real-time insights into your multi-agent AI code review system
          </p>

          <div className="absolute top-0 right-0">
            {isAdmin ? (
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-sm text-red-400 hover:text-red-300 bg-red-400/10 px-3 py-1.5 rounded-full transition-colors"
              >
                <Unlock className="w-4 h-4" />
                <span>Admin Mode</span>
              </button>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white bg-gray-800 px-3 py-1.5 rounded-full border border-gray-700 transition-colors"
              >
                <Lock className="w-4 h-4" />
                <span>Public View</span>
              </button>
            )}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Users */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Users</p>
                <p className="text-2xl font-bold text-white">{analytics.global.totalUsers}</p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          {/* Total Reviews */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Reviews</p>
                <p className="text-2xl font-bold text-white">{analytics.global.totalReviews}</p>
              </div>
              <FileText className="w-8 h-8 text-green-500" />
            </div>
          </div>

          {/* Success Rate */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Success Rate</p>
                <p className="text-2xl font-bold text-white">{analytics.webhooks.successRate}%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-500" />
            </div>
          </div>

          {/* Bot Uptime */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Bot Uptime</p>
                <p className="text-2xl font-bold text-white">{formatUptime(analytics.bot.uptime)}</p>
              </div>
              <Clock className="w-8 h-8 text-orange-500" />
            </div>
          </div>
        </div>

        {/* Bot Status and Models */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Bot Status */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Bot Status</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Status</span>
                <span className={`px-2 py-1 rounded text-sm font-medium ${analytics.bot.status === 'running'
                  ? 'bg-green-500/20 text-green-400'
                  : 'bg-red-500/20 text-red-400'
                  }`}>
                  {analytics.bot.status}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Analysis Model</span>
                <span className="text-white font-mono text-sm">{analytics.bot.models.analysis}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Comment Model</span>
                <span className="text-white font-mono text-sm">{analytics.bot.models.comment}</span>
              </div>
            </div>
          </div>

          {/* Webhook Stats */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Webhook Statistics</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Total Webhooks</span>
                <span className="text-white">{analytics.webhooks.total}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Completed</span>
                <span className="text-green-400">{analytics.webhooks.completed}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Errors</span>
                <span className="text-red-400">{analytics.webhooks.error}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Ignored</span>
                <span className="text-gray-400">{analytics.webhooks.ignored}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        {isAdmin && (
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
            {analytics.recentActivity.length > 0 ? (
              <div className="space-y-3">
                {analytics.recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-medium">{activity.repository}</span>
                        <span className="text-gray-400">PR #{activity.pullRequest}</span>
                      </div>
                      <div className="text-sm text-gray-400 mt-1">
                        by {activity.user} • {formatTimestamp(activity.timestamp)}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">{activity.model}</div>
                      <div className="text-xs text-gray-500">{activity.processingTime}ms</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-center py-8">No recent activity</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Analytics;

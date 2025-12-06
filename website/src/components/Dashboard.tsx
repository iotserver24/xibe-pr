import { useState, useEffect } from 'react';
import { RefreshCw, Activity, AlertCircle, CheckCircle, Clock, Users, TrendingUp, Server, Brain } from 'lucide-react';
import { useBotUptime } from '../hooks/useBotUptime';
import { api } from '../lib/api';
import type { WebhookStats, WebhookLog } from '../types';
import { formatTimestamp, formatNumber, getStatusColor, getStatusBadgeColor } from '../utils/format';

const Dashboard = () => {
  const { uptime, loading: statusLoading, error: statusError, refetch } = useBotUptime();
  const [stats, setStats] = useState<WebhookStats | null>(null);
  const [analytics, setAnalytics] = useState<{ totalUsers: number; totalReviews: number; recentReviews: number } | null>(null);
  const [reviewStats, setReviewStats] = useState<{ totalReviews: number; totalUsers: number; successRate: number } | null>(null);
  const [logs, setLogs] = useState<WebhookLog[]>([]);
  const [logsLoading, setLogsLoading] = useState(true);
  const [statsError, setStatsError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLogsLoading(true);
      setStatsError(null);

      const logsData = await api.getWebhookLogs(20);
      setLogs(logsData);
      
      // Fetch analytics data for total review counts
      const analyticsData = await api.getAnalytics();
      setAnalytics(analyticsData);
      
      // Fetch review stats (persistent data)
      const reviewStatsData = await api.getReviewStats();
      setReviewStats(reviewStatsData);
      
      // Use uptime data for stats if available, otherwise fetch separately
      if (uptime?.webhooks) {
        setStats({
          total: uptime.webhooks.total,
          completed: uptime.webhooks.completed,
          error: uptime.webhooks.error,
          ignored: uptime.webhooks.ignored,
          processing: uptime.webhooks.processing
        });
      } else {
        const statsData = await api.getWebhookStats();
        setStats(statsData);
      }
    } catch (err) {
      setStatsError(err instanceof Error ? err.message : 'Failed to fetch data');
    } finally {
      setLogsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    // Refresh every 30 seconds
    const interval = setInterval(fetchData, 30000);

    return () => clearInterval(interval);
  }, [uptime]);

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'running':
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'processing':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Activity className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-100">Dashboard</h1>
            <p className="text-gray-400">Real-time bot status and analytics</p>
          </div>
          <button
            onClick={() => {
              refetch();
              fetchData();
            }}
            className="btn btn-primary flex items-center space-x-2"
            disabled={statusLoading}
          >
            <RefreshCw className={`w-4 h-4 ${statusLoading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {/* Bot Status */}
          <div className="dark-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Bot Status</p>
                <p className={`text-2xl font-bold ${getStatusColor(uptime?.bot.status || 'stopped')}`}>
                  {statusLoading ? 'Loading...' : uptime?.bot.status || 'Unknown'}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                {getStatusIcon(uptime?.bot.status || 'stopped')}
                <div className={`status-dot ${uptime?.bot.status === 'running' ? 'running' : 'error'}`}></div>
              </div>
            </div>
            {uptime?.bot.uptime && (
              <p className="text-sm text-gray-500 mt-2">
                Uptime: {uptime.bot.uptime.formatted}
              </p>
            )}
          </div>

          {/* Total Reviews */}
          <div className="dark-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Total Reviews</p>
                <p className="text-2xl font-bold text-gray-100">
                  {logsLoading ? '...' : formatNumber(analytics?.totalReviews || 0)}
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-primary-400" />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              All time reviews processed
            </p>
          </div>

          {/* Total Users */}
          <div className="dark-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Total Users</p>
                <p className="text-2xl font-bold text-blue-400">
                  {logsLoading ? '...' : formatNumber(reviewStats?.totalUsers || 0)}
                </p>
              </div>
              <Users className="w-8 h-8 text-blue-400" />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Unique users who mentioned the bot
            </p>
          </div>

          {/* Success Rate */}
          <div className="dark-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Success Rate</p>
                <p className="text-2xl font-bold text-green-400">
                  {logsLoading ? '...' : reviewStats?.successRate || 0}%
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {formatNumber(reviewStats?.totalReviews || 0)} successful reviews
            </p>
          </div>

          {/* Error Rate */}
          <div className="dark-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Error Rate</p>
                <p className="text-2xl font-bold text-red-400">
                  {logsLoading ? '...' : stats?.total ? Math.round((stats.error / stats.total) * 100) : 0}%
                </p>
              </div>
              <AlertCircle className="w-8 h-8 text-red-400" />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {formatNumber(stats?.error || 0)} errors
            </p>
          </div>

          {/* Total Users */}
          <div className="dark-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Total Users</p>
                <p className="text-2xl font-bold text-blue-400">
                  {logsLoading ? '...' : formatNumber(analytics?.totalUsers || 0)}
                </p>
              </div>
              <Users className="w-8 h-8 text-blue-400" />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Active bot users
            </p>
          </div>
        </div>

        {/* Bot Configuration */}
        {uptime && (
          <div className="dark-card mb-8">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">Bot Configuration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center space-x-3">
                <Server className="w-5 h-5 text-primary-400" />
                <div>
                  <p className="text-sm font-medium text-gray-100">Auth Mode</p>
                  <p className="text-sm text-gray-400">{uptime.bot.configuration.authMode}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-primary-400" />
                <div>
                  <p className="text-sm font-medium text-gray-100">Bot Username</p>
                  <p className="text-sm text-gray-400">@{uptime.bot.configuration.botUsername}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Activity className="w-5 h-5 text-primary-400" />
                <div>
                  <p className="text-sm font-medium text-gray-100">AI API</p>
                  <p className="text-sm text-gray-400">{uptime.bot.configuration.aiApi}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Brain className="w-5 h-5 text-primary-400" />
                <div>
                  <p className="text-sm font-medium text-gray-100">Model</p>
                  <p className="text-sm text-gray-400">{uptime.bot.configuration.model}</p>
                </div>
              </div>
            </div>
            
            {/* Additional System Info */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <h3 className="text-lg font-semibold text-gray-100 mb-4">System Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center space-x-3">
                  <Server className="w-5 h-5 text-primary-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-100">Memory Usage</p>
                    <p className="text-sm text-gray-400">{uptime.bot.memory.rss}MB RSS</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Activity className="w-5 h-5 text-primary-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-100">Node Version</p>
                    <p className="text-sm text-gray-400">{uptime.bot.nodeVersion}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Server className="w-5 h-5 text-primary-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-100">Platform</p>
                    <p className="text-sm text-gray-400">{uptime.bot.platform} {uptime.bot.arch}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-100">Last Activity</p>
                    <p className="text-sm text-gray-400">
                      {uptime.bot.lastActivity ? formatTimestamp(uptime.bot.lastActivity) : 'No recent activity'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Webhook Stats */}
          <div className="dark-card">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">Webhook Statistics</h2>
            {logsLoading ? (
              <div className="animate-pulse space-y-3">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="h-4 bg-gray-700 rounded"></div>
                ))}
              </div>
            ) : stats ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-400">Completed</span>
                  <span className={`text-sm font-bold ${getStatusColor('completed')}`}>
                    {formatNumber(stats.completed)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-400">Processing</span>
                  <span className={`text-sm font-bold ${getStatusColor('processing')}`}>
                    {formatNumber(stats.processing)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-400">Errors</span>
                  <span className={`text-sm font-bold ${getStatusColor('error')}`}>
                    {formatNumber(stats.error)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-400">Ignored</span>
                  <span className={`text-sm font-bold ${getStatusColor('ignored')}`}>
                    {formatNumber(stats.ignored)}
                  </span>
                </div>
              </div>
            ) : (
              <p className="text-gray-500">No data available</p>
            )}
          </div>

          {/* Recent Logs */}
          <div className="dark-card">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">Recent Activity</h2>
            {logsLoading ? (
              <div className="animate-pulse space-y-3">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="h-12 bg-gray-700 rounded"></div>
                ))}
              </div>
            ) : logs.length > 0 ? (
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {logs.map((log) => (
                  <div key={log.id} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(log.status)}
                      <div>
                        <p className="text-sm font-medium text-gray-100">
                          {log.repository}
                        </p>
                        <p className="text-xs text-gray-500">
                          {formatTimestamp(log.timestamp)}
                        </p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadgeColor(log.status)}`}>
                      {log.status}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No recent activity</p>
            )}
          </div>
        </div>

        {/* Error Display */}
        {(statusError || statsError) && (
          <div className="mt-8 p-4 bg-red-900/20 border border-red-800 rounded-lg">
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-red-400" />
              <p className="text-red-300 font-medium">Error</p>
            </div>
            <p className="text-red-400 mt-1">{statusError || statsError}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

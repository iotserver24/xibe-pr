import type { BotStatus, BotUptime, WebhookStats, WebhookLog } from '../types';

const API_BASE = (import.meta as any).env?.VITE_API_BASE || 'https://review.xibe.app';

export const api = {
  async getBotStatus(): Promise<BotStatus> {
    const adminKey = localStorage.getItem('xibe_admin_key');
    const headers: Record<string, string> = adminKey ? { 'x-admin-key': adminKey } : {};

    const response = await fetch(`${API_BASE}/api/status`, { headers });
    if (!response.ok) throw new Error('Failed to fetch bot status');
    return response.json();
  },

  async getBotUptime(): Promise<BotUptime> {
    const response = await fetch(`${API_BASE}/api/status/uptime`);
    if (!response.ok) throw new Error('Failed to fetch bot uptime status');
    return response.json();
  },

  async getWebhookStats(): Promise<WebhookStats> {
    const adminKey = localStorage.getItem('xibe_admin_key');
    const headers: Record<string, string> = adminKey ? { 'x-admin-key': adminKey } : {};

    const response = await fetch(`${API_BASE}/api/webhooks?limit=1`, { headers });
    if (!response.ok) throw new Error('Failed to fetch webhook stats');
    const data = await response.json();
    return {
      total: data.total || 0,
      completed: data.logs?.filter((log: WebhookLog) => log.status === 'completed').length || 0,
      error: data.logs?.filter((log: WebhookLog) => log.status === 'error').length || 0,
      ignored: data.logs?.filter((log: WebhookLog) => log.status === 'ignored').length || 0,
      processing: data.logs?.filter((log: WebhookLog) => log.status === 'processing').length || 0,
    };
  },

  async getWebhookLogs(limit: number = 50, status?: string): Promise<WebhookLog[]> {
    const params = new URLSearchParams({ limit: limit.toString() });
    if (status) params.append('status', status);

    const adminKey = localStorage.getItem('xibe_admin_key');
    const headers: Record<string, string> = adminKey ? { 'x-admin-key': adminKey } : {};

    const response = await fetch(`${API_BASE}/api/webhooks?${params}`, { headers });
    if (!response.ok) throw new Error('Failed to fetch webhook logs');
    const data = await response.json();
    return data.logs || [];
  },

  async getHealth(): Promise<{ status: string; timestamp: string }> {
    const response = await fetch(`${API_BASE}/health`);
    if (!response.ok) throw new Error('Bot is not responding');
    return response.json();
  },

  async getAnalytics(): Promise<{ totalUsers: number; totalReviews: number; recentReviews: number }> {
    const adminKey = localStorage.getItem('xibe_admin_key');
    const headers: Record<string, string> = adminKey ? { 'x-admin-key': adminKey } : {};

    // Check if we are trying to access dashboard (secured) or just summary
    const response = await fetch(`${API_BASE}/api/analytics/dashboard`, { headers });

    if (response.ok) {
      const data = await response.json();
      // Map secured dashboard data format to what consumers expect
      return {
        totalUsers: data.data.global.totalUsers,
        totalReviews: data.data.global.totalReviews,
        recentReviews: data.data.recentActivity.length
      };
    } else {
      // Fallback to public analytics if unauthorized
      const publicResponse = await fetch(`${API_BASE}/analytics`);
      if (!publicResponse.ok) throw new Error('Failed to fetch analytics');
      const data = await publicResponse.json();
      return {
        totalUsers: data.data.totalUsers,
        totalReviews: data.data.totalReviews,
        recentReviews: 0 // Cannot get recent reviews without admin access
      };
    }
  },

  async getReviewStats(): Promise<{ totalReviews: number; totalUsers: number; successRate: number }> {
    const response = await fetch(`${API_BASE}/api/analytics`);
    if (!response.ok) throw new Error('Failed to fetch review stats');
    const data = await response.json();
    const analytics = data.data;

    // Get webhook stats for success rate calculation
    const webhookResponse = await fetch(`${API_BASE}/api/webhooks?limit=1`);
    const webhookData = webhookResponse.ok ? await webhookResponse.json() : { total: 0, logs: [] };
    const totalWebhooks = webhookData.total || 0;
    const completedWebhooks = webhookData.logs?.filter((log: WebhookLog) => log.status === 'completed').length || 0;

    return {
      totalReviews: analytics.totalReviews || 0,
      totalUsers: analytics.totalUsers || 0,
      successRate: totalWebhooks > 0 ? Math.round((completedWebhooks / totalWebhooks) * 100) : 0
    };
  },

  async getDashboard(): Promise<any> {
    const adminKey = localStorage.getItem('xibe_admin_key');
    const headers: Record<string, string> = adminKey ? { 'x-admin-key': adminKey } : {};

    const response = await fetch(`${API_BASE}/api/analytics/dashboard`, { headers });
    if (!response.ok) {
      if (response.status === 401) throw new Error('Unauthorized');
      throw new Error('Failed to fetch dashboard data');
    }
    return response.json();
  },

  async getPublicAnalytics(): Promise<{ totalUsers: number; totalReviews: number; successRate: number; botStatus: string; lastUpdated: string }> {
    const response = await fetch(`${API_BASE}/analytics`);
    if (!response.ok) throw new Error('Failed to fetch public analytics');
    const data = await response.json();
    return data.data;
  }
};

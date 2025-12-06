import { useState, useEffect } from 'react';
import type { BotUptime } from '../types';
import { api } from '../lib/api';

export function useBotUptime() {
  const [uptime, setUptime] = useState<BotUptime | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUptime = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await api.getBotUptime();
        setUptime(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch bot uptime');
      } finally {
        setLoading(false);
      }
    };

    fetchUptime();

    // Refresh every 30 seconds
    const interval = setInterval(fetchUptime, 30000);

    return () => clearInterval(interval);
  }, []);

  return { uptime, loading, error, refetch: () => api.getBotUptime().then(setUptime) };
}

export interface BotStatus {
  status: 'running' | 'stopped' | 'error';
  uptime: number;
  timestamp: string;
  authMode: string;
  githubAppId?: string;
  botUsername: string;
  aiApi: string;
  model: string;
}

export interface BotUptime {
  bot: {
    status: string;
    uptime: {
      seconds: number;
      formatted: string;
      started: string;
      lastUpdated: string;
    };
    memory: {
      rss: number;
      heapTotal: number;
      heapUsed: number;
      external: number;
    };
    configuration: {
      authMode: string;
      githubAppId: string;
      botUsername: string;
      aiApi: string;
      model: string;
      port: string;
    };
    lastActivity: string | null;
    nodeVersion: string;
    platform: string;
    arch: string;
  };
  webhooks: {
    total: number;
    completed: number;
    error: number;
    ignored: number;
    processing: number;
    successRate: number;
  };
  system: {
    timestamp: string;
    timezone: string;
    pid: number;
    cwd: string;
  };
}

export interface WebhookStats {
  total: number;
  completed: number;
  error: number;
  ignored: number;
  processing: number;
}

export interface WebhookLog {
  id: string;
  timestamp: string;
  event: string;
  installationId?: string;
  repository: string;
  user: string;
  comment: string;
  isPR: boolean;
  prNumber?: number;
  status: 'processing' | 'completed' | 'error' | 'ignored';
  processingTime?: number;
  error?: string;
  actions: string[];
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  details: string[];
}

export interface SetupStep {
  title: string;
  description: string;
  code?: string;
  command?: string;
}

export interface ReviewExample {
  title: string;
  description: string;
  code: string;
  review: string;
}

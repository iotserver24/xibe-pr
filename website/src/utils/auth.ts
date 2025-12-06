export interface LoginData {
  isAuthenticated: boolean;
  loginTime: string;
  code?: string | null;
  state?: string | null;
  installationId?: string | null;
  isInstallation?: boolean;
}

export const authUtils = {
  // Save login data to localStorage
  saveLogin: (loginData: LoginData): void => {
    localStorage.setItem('xibe-review-auth', JSON.stringify(loginData));
  },

  // Get login data from localStorage
  getLogin: (): LoginData | null => {
    try {
      const stored = localStorage.getItem('xibe-review-auth');
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error('Error parsing stored auth data:', error);
      return null;
    }
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    const loginData = authUtils.getLogin();
    return loginData?.isAuthenticated === true;
  },

  // Clear login data
  clearLogin: (): void => {
    localStorage.removeItem('xibe-review-auth');
  },

  // Check if login is still valid (optional: add expiration logic)
  isLoginValid: (): boolean => {
    const loginData = authUtils.getLogin();
    if (!loginData?.isAuthenticated) return false;
    
    // Optional: Add expiration check (e.g., 24 hours)
    const loginTime = new Date(loginData.loginTime);
    const now = new Date();
    const hoursDiff = (now.getTime() - loginTime.getTime()) / (1000 * 60 * 60);
    
    // Return true if login is less than 24 hours old
    return hoursDiff < 24;
  }
};

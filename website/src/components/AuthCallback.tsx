import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle, Loader2, Github, ExternalLink, ArrowRight } from 'lucide-react';
import { authUtils, LoginData } from '../utils/auth';

const AuthCallback = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Processing authentication...');

  useEffect(() => {
    // Simulate auth callback processing
    const processAuthCallback = async () => {
      try {
        // Get URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const state = urlParams.get('state');
        const error = urlParams.get('error');

        if (error) {
          setStatus('error');
          setMessage(`Authentication failed: ${error}`);
          return;
        }

        if (!code) {
          setStatus('error');
          setMessage('No authorization code received');
          return;
        }

        // Simulate API call to exchange code for token
        // In a real implementation, you would make an API call here
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Check if this is a fresh installation
        const isInstallation = urlParams.get('setup_action') === 'install';
        const installationId = urlParams.get('installation_id');

        // Save login state to localStorage for future use
        const loginData: LoginData = {
          isAuthenticated: true,
          loginTime: new Date().toISOString(),
          code: code,
          state: state,
          installationId: installationId,
          isInstallation: isInstallation
        };
        authUtils.saveLogin(loginData);

        setStatus('success');
        setMessage(isInstallation ? 'GitHub App installed successfully!' : 'Authentication successful!');

      } catch (err) {
        setStatus('error');
        setMessage('Authentication failed. Please try again.');
      }
    };

    processAuthCallback();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 max-w-2xl w-full mx-4">
        <div className="text-center">
          {status === 'loading' && (
            <>
              <Loader2 className="w-12 h-12 text-blue-400 animate-spin mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-white mb-2">Authenticating...</h2>
            </>
          )}
          
          {status === 'success' && (
            <>
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-white mb-2">
                {authUtils.getLogin()?.isInstallation ? 'GitHub App Installed!' : 'Welcome to Xibe Review!'}
              </h2>
            </>
          )}
          
          {status === 'error' && (
            <>
              <XCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-white mb-2">Authentication Failed</h2>
            </>
          )}
          
          <p className="text-gray-300 mb-6">{message}</p>
          
          {status === 'success' && (
            <div className="space-y-6">
              <div className="bg-gray-700/50 rounded-lg p-6 text-left">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <ArrowRight className="w-5 h-5 text-blue-400 mr-2" />
                  {authUtils.getLogin()?.isInstallation ? 'You\'re All Set!' : 'Next Steps'}
                </h3>
                <div className="space-y-4">
                  {!authUtils.getLogin()?.isInstallation && (
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-white">1</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">Install the GitHub App</p>
                        <p className="text-gray-400 text-sm">Add the Xibe Review app to your repositories</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-white">{authUtils.getLogin()?.isInstallation ? '1' : '2'}</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Create a Pull Request</p>
                      <p className="text-gray-400 text-sm">Open a PR in any repository where the app is installed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-white">{authUtils.getLogin()?.isInstallation ? '2' : '3'}</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Mention the Bot</p>
                      <p className="text-gray-400 text-sm">Comment <code className="bg-gray-600 px-2 py-1 rounded text-xs">@xibe-review</code> or <code className="bg-gray-600 px-2 py-1 rounded text-xs">xibe</code> to trigger a review</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {!authUtils.getLogin()?.isInstallation && (
                  <a
                    href="https://github.com/apps/xibe-review/installations/new"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                  >
                    <Github className="w-4 h-4" />
                    <span>Install GitHub App</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                
                <button
                  onClick={() => navigate('/')}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                >
                  {authUtils.getLogin()?.isInstallation ? 'Start Using Xibe Review' : 'Return to Home'}
                </button>
              </div>
            </div>
          )}
          
          {status === 'error' && (
            <div className="space-y-4">
              <button
                onClick={() => navigate('/')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
              >
                Return Home
              </button>
              
              <button
                onClick={() => window.location.reload()}
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors font-medium ml-3"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthCallback;

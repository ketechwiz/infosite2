import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "691fdd6ea30ae7cf143145bf", 
  requiresAuth: true // Ensure authentication is required for all operations
});

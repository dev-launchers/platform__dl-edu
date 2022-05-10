const PROD = {
    envType: "PROD",
    API_URL: "https://api.devlaunchers.com",
    GOOGLE_AUTH_URL: "https://api.devlaunchers.com/auth/google",
    DISCORD_AUTH_URL:
      "https://discord.com/api/oauth2/authorize?client_id=709889509864636496&redirect_uri=https%3A%2F%2Fapi.devlaunchers.com%2Fusers%2Fauth%2Fdiscord%2Fcallback&response_type=code&scope=identify"
  };
  
  const STAGING = {
    envType: "STAGING",
    API_URL: "https://api-staging.devlaunchers.com",
    GOOGLE_AUTH_URL: "https://api-staging.devlaunchers.com/auth/google",
    DISCORD_AUTH_URL:
      "https://discord.com/api/oauth2/authorize?client_id=815294711983112194&redirect_uri=https%3A%2F%2Fapi-staging.devlaunchers.com%2Fusers%2Fauth%2Fdiscord%2Fcallback&response_type=code&scope=identify"
  };

  /**
   * @TODO - Need to ask Kris why this doesn't exist in platform__webstie
   */
  const LOCAL = {
    envType: "LOCAL",
    API_URL: "http://localhost:1337",
    GOOGLE_AUTH_URL: "http://localhost:1337/auth/google",
  };
  
  export const env = () => {
    if (typeof window !== "undefined") {
      const currentUrl = window.location.href;
      if (currentUrl.indexOf("staging") != -1) 
        { return STAGING; }
      if (currentUrl.indexOf("localhost") != -1)
        {return LOCAL;}
    }
    return PROD;
  };
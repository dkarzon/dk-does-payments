interface PinchTokenResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
}

interface PinchPayer {
  id: string;
  firstName: string;
  lastName: string;
  companyName?: string;
  email: string;
}

interface PinchPaymentLink {
  id: string;
  merchantId: string;
  amount: number;
  url: string;
  payer: PinchPayer;
  description: string;
  currency: string;
  returnUrl: string;
  allowedPaymentMethods: string[];
}

interface CreatePayerParams {
  firstName: string;
  lastName: string;
  email: string;
  companyName?: string;
}

interface CreatePaymentLinkParams {
  amount: number;
  payerId: string;
  description: string;
  returnUrl: string;
  allowedPaymentMethods: string[];
  metadata?: string;
}

class PinchPaymentsClient {
  private appId: string;
  private secretKey: string;
  private baseUrl: string;
  private accessToken: string | null = null;
  private tokenExpiry: number = 0;
  private credentialsValid: boolean;

  constructor() {
    this.appId = process.env.PINCH_APP_ID || "";
    this.secretKey = process.env.PINCH_SECRET_KEY || "";

    // Use test API for development (test mode)
    this.baseUrl = "https://api.getpinch.com.au/test";

    this.credentialsValid = Boolean(this.appId && this.secretKey);

    if (!this.credentialsValid) {
      console.error(
        "CRITICAL: Pinch Payments credentials not configured. Set PINCH_APP_ID and PINCH_SECRET_KEY environment variables.",
      );
    }
  }

  isConfigured(): boolean {
    return this.credentialsValid;
  }

  validateCredentials(): void {
    if (!this.credentialsValid) {
      throw new Error(
        "Payment service is not configured. Please contact support.",
      );
    }
  }

  private async getAccessToken(): Promise<string> {
    // Return cached token if still valid (with 60 second buffer)
    if (this.accessToken && Date.now() < this.tokenExpiry - 60000) {
      return this.accessToken;
    }

    const authString = Buffer.from(
      `${this.appId}:${this.secretKey}`,
    ).toString("base64");

    const response = await fetch("https://auth.getpinch.com.au/connect/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${authString}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        scope: "api1",
      }).toString(),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed to get Pinch access token: ${response.status} ${errorText}`,
      );
    }

    const data = (await response.json()) as PinchTokenResponse;
    this.accessToken = data.access_token;
    this.tokenExpiry = Date.now() + data.expires_in * 1000;

    return this.accessToken;
  }

  private async makeRequest<T>(
    method: string,
    endpoint: string,
    body?: object,
  ): Promise<T> {
    const token = await this.getAccessToken();

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "pinch-version": "2020.1",
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Pinch API error: ${response.status} ${errorText}`);
    }

    return (await response.json()) as T;
  }

  async createPayer(params: CreatePayerParams): Promise<PinchPayer> {
    this.validateCredentials();
    return this.makeRequest<PinchPayer>("POST", "/payers", {
      firstName: params.firstName,
      lastName: params.lastName,
      email: params.email,
      companyName: params.companyName || undefined,
    });
  }

  async createPaymentLink(
    params: CreatePaymentLinkParams,
  ): Promise<PinchPaymentLink> {
    this.validateCredentials();
    return this.makeRequest<PinchPaymentLink>("POST", "/payment-links", {
      amount: params.amount,
      payerId: params.payerId,
      description: params.description,
      returnUrl: params.returnUrl,
      allowedPaymentMethods: params.allowedPaymentMethods,
      metadata: params.metadata || undefined,
      currency: "AUD",
    });
  }
}

export const pinchClient = new PinchPaymentsClient();

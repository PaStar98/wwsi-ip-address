import IpDetailsApiResponse from './IpDetailsApiResponse';

class IpDetailsApi {
  private readonly baseUrl = 'http://ip-api.com/json';

  public async getIpDetails(ip: string): Promise<IpDetailsApiResponse> {
    const response = await fetch(`${this.baseUrl}/${ip}`);
    const data = await response.json();
    return data;
  }
}

export default IpDetailsApi;

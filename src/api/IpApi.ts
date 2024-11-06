class IpApi {
  private readonly baseUrl = 'https://api.ipify.org';

  public async getIp(): Promise<string> {
    const response = await fetch(`${this.baseUrl}?format=json`);
    const data = await response.json();
    return data.ip;
  }
}

export default IpApi;

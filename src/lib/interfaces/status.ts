export type botStatus = {
  ready: boolean;
  connected: boolean;
  latency: number;
  initial_connect?: number | null;
  last_disconnect?: number | null;
  last_resume?: number | null;
};

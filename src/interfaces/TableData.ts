export interface TableData {
  id: string;
  name: string;
  type: string;
  level: string;
  status: string;
  created_by: { id: string; name: string };
  updated_at: string;
  created_at: string;
}

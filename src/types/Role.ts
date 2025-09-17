export type Role = {
  role_id: number;
  module_id: number;
  permission_id: number;
  name: string;
  description: string;
  module: string;
  can_view: boolean;
  can_edit: boolean;
  can_add: boolean;
  can_delete: boolean;
};

export interface DropOffFormData {
  email: string;
  name: string;
  phone: string;
  streetAddress: string;
  apartment?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  separateWash?: boolean;
  handDried?: boolean;
  additionalInfo: boolean;
}

export interface ActionResponse {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof DropOffFormData]?: string[];
  };
}

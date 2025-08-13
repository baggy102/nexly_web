import axios from 'axios';

export interface Company {
  _id: string;
  name: string;
  status: string;
  email_domain: string;
}

export interface PaginatedResult<T> {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  data: T[];
}

export const getCompanies = async (page: number = 1, limit: number = 6) => {
  const res = await axios.get<PaginatedResult<Company>>(
    `http://localhost:3000/companies?page=${page}&limit=${limit}`
  );
  return res.data;
};

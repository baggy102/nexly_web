import React, { useEffect, useState } from 'react';
import { getCompanies } from '../api/companyApi';
import type { Company } from '../api/companyApi';
import CompanyCard from '../components/CompanyCard';
import Pagination from '../components/Pagination';
import Header from '../components/Header';

const Main: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 6;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCompanies(page, limit);
      setCompanies(data.data);
      setTotalPages(data.totalPages);
    };
    fetchData();
  }, [page]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {companies.map(company => (
            <CompanyCard key={company._id} company={company} />
          ))}
        </div>
        <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
      </main>
    </div>
  );
};

export default Main;

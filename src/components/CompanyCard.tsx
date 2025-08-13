import React from 'react';
import type { Company } from '../api/companyApi';

interface Props {
  company: Company;
}

const CompanyCard: React.FC<Props> = ({ company }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition">
      <h2 className="text-xl font-bold mb-2">{company.name}</h2>
      <p className="text-sm text-gray-500 mb-1">Email Domain: {company.email_domain}</p>
      <p className={`text-sm font-semibold ${company.status === 'approved' ? 'text-green-600' : 'text-yellow-500'}`}>
        Status: {company.status}
      </p>
    </div>
  );
};

export default CompanyCard;

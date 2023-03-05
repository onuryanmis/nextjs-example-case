import DetailPageContainer from '@/containers/Detail';
import React from 'react';
import { getEmployee } from '@/services/employee';
import { notFound } from 'next/dist/client/components/not-found';

type DetailPagePropsType = {
  params: { id: string; };
}

const DetailPage: ({ params }: DetailPagePropsType) => Promise<JSX.Element> = async ({ params }) => {
  const employee = await getEmployee(params.id);

  if (!employee) {
    notFound();
  }

  return (
    <DetailPageContainer employee={employee} />
  );
};

export default DetailPage;
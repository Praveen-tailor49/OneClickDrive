import ListTable from '@/components/ListTable'
import React from 'react'

const page = ({ data }) => {
  return  <ListTable dataList={data} />
}

export default page;

export async function getServerSideProps() {
  try {
    const res = await fetch('http://localhost:3000/api?get');
    if (res.status != 200) throw new Error('Failed to fetch');
    const data = await res.json();

    return { props: { data } };
  } catch (error) {
    return { props: { data: [] } };
  }
}
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({params}: any) => {
  const res = await fetch("/api/hello/" + params?.id);

  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
};

const Liked: React.FC = ({ data }: any) => {
  return <div></div>;
};

export default Liked;

import { GetServerSideProps } from "next";
import Link from "next/link";

// export const getServerSideProps: GetServerSideProps = async () => {
// 	const res = await fetch("/api/hello/", {method: 'GET'});
// 	const data = await res.json();

// 	return {
// 		props: {
// 			users: data,
// 		},
// 	};
// };

const index: React.FC = ({ users }: any) => {
	return (
		<div>
			<h1>USERS</h1>
			
		</div>
	);
};

export default index;

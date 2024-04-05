import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex rounded-lg overflow-hidden bg-zinc-900'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;

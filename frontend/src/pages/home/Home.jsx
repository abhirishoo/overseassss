import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex rounded-lg w-full overflow-hidden bg-zinc-900'>
			<div className="w-1/4">

			<Sidebar />
			</div>
			<div className="w-3/4">

			<MessageContainer />
			</div>
		</div>
	);
};
export default Home;
